/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { success, z } from "zod";
import { Icon } from "@iconify/react";
import toast from "react-hot-toast";
import { useSearchParams } from "next/navigation";
import Cookies from "js-cookie";

import ActionButton from "@/components/ActionButton";
import { useRouter } from "next/navigation";
import {
  useResendOTPMutation,
  useVerifyOTPMutation,
} from "@/services/features/userApi";

// Constants
const OTP_LENGTH = 6;
const RESEND_TIMEOUT = 600;

// Validation schema
const otpSchema = z.object({
  otp: z
    .string()
    .length(OTP_LENGTH, `OTP must be exactly ${OTP_LENGTH} digits`),
});

type OTPFormData = z.infer<typeof otpSchema>;

// Types
interface VerifyOTPFormProps {
  email?: string;
  onSuccess?: () => void;
  onBack?: () => void;
}

interface OTPState {
  isLoading: boolean;
  isResending: boolean;
  hasError: boolean;
  errorMessage: string;
  resendTimeout: number;
  isComplete: boolean;
}

const VerifyOTPForm: React.FC<VerifyOTPFormProps> = ({
  email: propEmail,
  onSuccess,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [resendOTP, { isLoading: isResendingAPI }] = useResendOTPMutation();
  const [verifyOTP, { isLoading: isVerifyingAPI }] = useVerifyOTPMutation();

  // Get email from URL params, fallback to prop, then default
  const email = searchParams.get("email") || propEmail;

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [otp, setOtp] = useState<string[]>(new Array(OTP_LENGTH).fill(""));
  const [state, setState] = useState<OTPState>({
    isLoading: false,
    isResending: false,
    hasError: false,
    errorMessage: "",
    resendTimeout: RESEND_TIMEOUT,
    isComplete: false,
  });

  const { handleSubmit, setValue } = useForm<OTPFormData>({
    resolver: zodResolver(otpSchema),
    mode: "onChange",
  });

  // Auto-focus first input on mount
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  // Update form value when OTP array changes
  useEffect(() => {
    const otpString = otp.join("");
    setValue("otp", otpString);
    setState((prev) => ({
      ...prev,
      isComplete: otpString.length === OTP_LENGTH,
    }));
  }, [otp, setValue]);

  // Resend timeout countdown
  useEffect(() => {
    if (state.resendTimeout > 0) {
      const timer = setTimeout(() => {
        setState((prev) => ({
          ...prev,
          resendTimeout: prev.resendTimeout - 1,
        }));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [state.resendTimeout]);

  // Form submission
  const onSubmit = useCallback(
    async (data: OTPFormData) => {
      try {
        setState((prev) => ({ ...prev, isLoading: true, hasError: false }));

        // Check if this is forgot password flow
        const urlParams = new URLSearchParams(window.location.search);
        const type = urlParams.get("type");

        if (type === "forgot-password") {
          // For forgot password, don't hit the API, just route to password reset
          if (!email) {
            toast.error("Email is required");
            return;
          }
          toast.success("OTP verified! Redirecting to password reset...");
          router.push(
            `/auth/password-reset?email=${encodeURIComponent(
              email
            )}&otp=${encodeURIComponent(data.otp)}`
          );
          return;
        }

        // For other types, proceed with API verification
        if (!email) {
          toast.error("Email is required");
          return;
        }
        const response = await verifyOTP({
          email: email,
          otp: data.otp,
        }).unwrap();

        // Success
        console.log("OTP verification successful:", response);

        // Store token in cookies if provided
        if (response?.data?.token) {
          Cookies.set("autobuy_session_client", response.data.token, {
            expires: 1, // 1 day
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
          });
        }

        toast.success("Email verified successfully!");
        onSuccess?.();

        // Redirect to dashboard based on user type or default
        // const userType = urlParams.get("type");
        // const dashboardPath =
        //   userType === "seller" ? "/seller/dashboard" : "/buyer/dashboard";
        router.push("/auth/otp-success");
      } catch (error: unknown) {
        console.error("OTP verification error:", error);

        // Handle API errors from backend
        let errorMessage = "Verification failed. Please try again.";

        if (error && typeof error === "object" && "data" in error) {
          const apiError = error.data as any;
          if (apiError?.message) {
            errorMessage = apiError.message;
          }
        } else if (error instanceof Error && error.message) {
          errorMessage = error.message;
        }

        setState((prev) => ({
          ...prev,
          hasError: true,
          errorMessage: errorMessage,
        }));

        // Clear OTP on error
        setOtp(new Array(OTP_LENGTH).fill(""));
        inputRefs.current[0]?.focus();
      } finally {
        setState((prev) => ({ ...prev, isLoading: false }));
      }
    },
    [verifyOTP, email, onSuccess, router]
  );

  // Handle OTP input change
  const handleOtpChange = useCallback(
    (index: number, value: string) => {
      // Clear error when user starts typing
      if (state.hasError) {
        setState((prev) => ({ ...prev, hasError: false, errorMessage: "" }));
      }

      // Only allow numeric input
      if (!/^\d*$/.test(value)) return;

      const newOtp = [...otp];

      if (value.length <= 1) {
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus next input
        if (value && index < OTP_LENGTH - 1) {
          inputRefs.current[index + 1]?.focus();
        }
      } else if (value.length > 1) {
        // Handle paste of multiple digits
        const digits = value.slice(0, OTP_LENGTH - index).split("");
        for (let i = 0; i < digits.length && index + i < OTP_LENGTH; i++) {
          newOtp[index + i] = digits[i];
        }
        setOtp(newOtp);

        // Focus next empty input or last input
        const nextIndex = Math.min(index + digits.length, OTP_LENGTH - 1);
        inputRefs.current[nextIndex]?.focus();
      }
    },
    [otp, state.hasError]
  );

  // Handle backspace/delete
  const handleKeyDown = useCallback(
    (index: number, e: React.KeyboardEvent) => {
      if (e.key === "Backspace") {
        e.preventDefault();
        const newOtp = [...otp];

        if (newOtp[index]) {
          newOtp[index] = "";
          setOtp(newOtp);
        } else if (index > 0) {
          newOtp[index - 1] = "";
          setOtp(newOtp);
          inputRefs.current[index - 1]?.focus();
        }
      } else if (e.key === "ArrowLeft" && index > 0) {
        inputRefs.current[index - 1]?.focus();
      } else if (e.key === "ArrowRight" && index < OTP_LENGTH - 1) {
        inputRefs.current[index + 1]?.focus();
      } else if (e.key === "Enter" && state.isComplete) {
        handleSubmit(onSubmit)();
      }
    },
    [otp, state.isComplete, handleSubmit, onSubmit]
  );

  // Handle paste
  const handlePaste = useCallback((e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").replace(/\D/g, "");
    const digits = pastedData.slice(0, OTP_LENGTH).split("");

    const newOtp = new Array(OTP_LENGTH).fill("");
    for (let i = 0; i < digits.length; i++) {
      newOtp[i] = digits[i];
    }

    setOtp(newOtp);

    // Focus last filled input or last input
    const lastFilledIndex = Math.min(digits.length - 1, OTP_LENGTH - 1);
    inputRefs.current[lastFilledIndex]?.focus();
  }, []);

  // Resend OTP
  const handleResendOTP = useCallback(async () => {
    try {
      setState((prev) => ({ ...prev, isResending: true }));

      const currentOtpString = otp.join("");
      const response = await resendOTP({
        email: email,
        otp: currentOtpString,
      }).unwrap();

      console.log("Resend OTP successful:", response);
      toast.success("Verification code sent successfully!");
      setState((prev) => ({
        ...prev,
        resendTimeout: RESEND_TIMEOUT,
        hasError: false,
        errorMessage: "",
      }));

      // Clear and refocus
      setOtp(new Array(OTP_LENGTH).fill(""));
      inputRefs.current[0]?.focus();
    } catch (error: unknown) {
      console.error("Resend OTP error:", error);

      // Handle API errors from backend
      let errorMessage = "Failed to resend code. Please try again.";

      if (error && typeof error === "object" && "data" in error) {
        const apiError = error.data as any;
        if (apiError?.message) {
          errorMessage = apiError.message;
        }
      } else if (error instanceof Error && error.message) {
        errorMessage = error.message;
      }

      toast.error(errorMessage);
    } finally {
      setState((prev) => ({ ...prev, isResending: false }));
    }
  }, [resendOTP, email, otp]);

  // Handle back navigation
  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="space-y-8 shadow-md rounded-2xl p-10">
      {/* Header */}
      <header className="space-y-4">
        <button
          onClick={handleBack}
          className="flex items-center text-autobuy-neutral-3 hover:text-autobuy-blue-2 transition-colors group"
          aria-label="Go back"
        >
          <Icon
            icon="mdi:arrow-left"
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
          />
        </button>

        <div className="text-center space-y-3">
          <h1 className="text-autobuy-blue-2 text-2xl  font-medium">
            Verify Your Account
          </h1>
          <p className="text-autobuy-neutral-2 text-sm">
            We&apos;ve sent a verification code to{" "}
            <span className=" text-autobuy-neutral-1">{email}</span>,
            <br />
            enter it below to continue
          </p>
        </div>
      </header>

      {/* OTP Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <label className="block text-autobuy-neutral-2 text-sm font-normal">
            Enter OTP:
          </label>

          {/* OTP Input Grid */}
          <div className="flex justify-center space-x-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                pattern="\d*"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className={`w-14 h-14 text-center text-lg font-medium border-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-autobuy-blue-3 ${
                  state.hasError
                    ? "border-autobuy-red-1 bg-autobuy-red-3/20 text-autobuy-red-1"
                    : digit
                    ? "border-autobuy-blue-2 bg-autobuy-blue-6 text-autobuy-blue-1"
                    : "border-autobuy-neutral-4 bg-white text-autobuy-neutral-1 hover:border-autobuy-blue-3"
                }`}
                aria-label={`OTP digit ${index + 1}`}
                disabled={state.isLoading || isVerifyingAPI}
              />
            ))}
          </div>

          {/* Error Message */}
          {state.hasError && (
            <div className="text-center">
              <p className="text-autobuy-red-1 text-sm font-medium">
                {state.errorMessage}
              </p>
            </div>
          )}
        </div>

        {/* Resend Code */}
        <div className="text-right">
          {state.resendTimeout > 0 ? (
            <p className="text-autobuy-orange-1 text-sm font-light">
              <Icon icon="mdi:clock-outline" className="w-4 h-4 inline mr-1" />
              Code expires in {formatTime(state.resendTimeout)}
            </p>
          ) : (
            <button
              type="button"
              onClick={handleResendOTP}
              disabled={state.isResending || isResendingAPI}
              className="text-autobuy-orange-1 hover:text-autobuy-orange-2 text-sm font-light hover:underline disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {state.isResending || isResendingAPI ? (
                <>
                  <Icon
                    icon="mdi:loading"
                    className="w-4 h-4 inline mr-1 animate-spin"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Icon icon="mdi:refresh" className="w-4 h-4 inline mr-1" />
                  Resend code
                </>
              )}
            </button>
          )}
        </div>

        {/* Submit Button */}
        <ActionButton
          type="submit"
          isLoading={state.isLoading || isVerifyingAPI}
          loadingText="Verifying..."
          disabled={!state.isComplete || state.isLoading || isVerifyingAPI}
          className="bg-autobuy-blue-2 hover:bg-autobuy-blue-1 rounded-[12px] border-none w-full text-base text-white"
          size="xl"
        >
          Verify Email
        </ActionButton>
      </form>

      <div className="text-center text-xs text-autobuy-neutral-3 space-y-2">
        <p>Didn&apos;t receive the code? Check your spam folder.</p>
      </div>
    </div>
  );
};

export default VerifyOTPForm;
