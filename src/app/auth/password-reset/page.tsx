"use client";

import React, { useState, useCallback, Suspense } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import { Icon } from "@iconify/react";
import toast from "react-hot-toast";

import { PasswordInput } from "@/components/InputForm";
import { Input } from "@/components/ui/input";
import ActionButton from "@/components/ActionButton";
import EmptyLayout from "../components/EmptyLayout";
import { getPasswordStrength } from "@/lib/validations/auth";
import { useResetPasswordMutation } from "@/services/features/userApi";

// Constants
const SUCCESS_MESSAGES = {
  PASSWORD_RESET:
    "Password reset successfully! You can now sign in with your new password.",
} as const;

const ERROR_MESSAGES = {
  INVALID_TOKEN: "Invalid or expired reset link. Please request a new one.",
  NETWORK_ERROR:
    "Failed to reset password. Please check your connection and try again.",
  GENERAL_ERROR: "Something went wrong. Please try again.",
} as const;

// Validation schema
const passwordResetSchema = z
  .object({
    otp: z
      .string()
      .min(1, "OTP is required")
      .min(6, "OTP must be 6 digits")
      .max(6, "OTP must be 6 digits")
      .regex(/^[0-9]+$/, "OTP must contain only numbers"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(128, "Password must be less than 128 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character"
      ),

    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type PasswordResetFormData = z.infer<typeof passwordResetSchema>;

const PasswordResetContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [resetPassword, { isLoading: mutationLoading, isSuccess }] =
    useResetPasswordMutation();

  const email = searchParams.get("email");
  const otpFromUrl = searchParams.get("otp");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
    clearErrors,
  } = useForm<PasswordResetFormData>({
    resolver: zodResolver(passwordResetSchema),
    mode: "onChange",
    defaultValues: {
      otp: otpFromUrl || "",
      password: "",
      confirmPassword: "",
    },
  });

  // Set OTP value when component mounts
  React.useEffect(() => {
    if (otpFromUrl) {
      setValue("otp", otpFromUrl, { shouldValidate: true });
    }
  }, [otpFromUrl, setValue]);

  // Form submission handler
  const onSubmit = useCallback(
    async (data: PasswordResetFormData) => {
      if (!email) {
        toast.error(ERROR_MESSAGES.INVALID_TOKEN);
        return;
      }

      try {
        await resetPassword({
          email,
          otp: data.otp,
          newPassword: data.password,
          confirmPassword: data.confirmPassword,
        }).unwrap();

        toast.success(SUCCESS_MESSAGES.PASSWORD_RESET);

        // Redirect to success page after short delay
        setTimeout(() => {
          router.push("/auth/reset-success?message=password-reset-success");
        }, 1500);
      } catch (error: unknown) {
        let errorMessage: string = ERROR_MESSAGES.GENERAL_ERROR;

        if (error && typeof error === "object") {
          if (
            "data" in error &&
            error.data &&
            typeof error.data === "object" &&
            "message" in error.data
          ) {
            errorMessage = String(error.data.message);
          } else if ("message" in error) {
            errorMessage = String(error.message);
          }
        }

        toast.error(errorMessage);
      }
    },
    [resetPassword, router, email]
  );

  // Navigation handlers
  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  // Password strength will be calculated based on input changes
  const [passwordValue, setPasswordValue] = useState("");
  const passwordStrength = getPasswordStrength(passwordValue);

  // Field change handlers
  const handleOtpChange = useCallback(() => {
    if (errors.otp) {
      clearErrors("otp");
    }
  }, [errors.otp, clearErrors]);

  const handlePasswordChange = useCallback(
    (value?: string) => {
      if (value !== undefined) {
        setPasswordValue(value);
      }
      if (errors.password) {
        clearErrors("password");
      }
    },
    [errors.password, clearErrors]
  );

  const handleConfirmPasswordChange = useCallback(() => {
    if (errors.confirmPassword) {
      clearErrors("confirmPassword");
    }
  }, [errors.confirmPassword, clearErrors]);

  // Check for invalid token on mount
  React.useEffect(() => {
    if (!email || !otpFromUrl) {
      toast.error(ERROR_MESSAGES.INVALID_TOKEN);
      setTimeout(() => {
        router.push("/auth/forgot-password");
      }, 2000);
    }
  }, [email, otpFromUrl, router]);

  if (!email || !otpFromUrl) {
    return (
      <EmptyLayout>
        <main className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-[500px] text-center">
          <div className="space-y-4">
            <Icon
              icon="mdi:alert-circle"
              className="w-16 h-16 text-autobuy-red-1 mx-auto"
            />
            <h1 className="text-autobuy-red-1 text-xl font-medium">
              Invalid Reset Link
            </h1>
            <p className="text-autobuy-neutral-2">
              This password reset link is invalid or has expired. You&apos;ll be
              redirected to request a new one.
            </p>
          </div>
        </main>
      </EmptyLayout>
    );
  }

  return (
    <EmptyLayout>
      <main className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-[500px] space-y-8">
        {/* Header */}
        <header className="space-y-4">
          <button
            onClick={handleBack}
            className="flex items-center text-autobuy-neutral-3 hover:text-autobuy-blue-2 transition-colors group"
            aria-label="Go back"
            disabled={mutationLoading}
          >
            <Icon
              icon="mdi:arrow-left"
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
            />
          </button>

          <div className="text-center space-y-3">
            <h1 className="text-autobuy-blue-2 text-2xl font-medium">
              Create a new password
            </h1>
            <p className="text-autobuy-neutral-2 text-base leading-relaxed">
              Make sure it&apos;s at least 8 characters long and strong
              <br />
              enough to secure your account.
            </p>
          </div>
        </header>

        {/* Success State */}
        {isSuccess && (
          <div className="bg-autobuy-green-6 border border-autobuy-green-4 rounded-[12px] p-4 space-y-3">
            <div className="flex items-center space-x-2">
              <Icon
                icon="mdi:check-circle"
                className="text-autobuy-green-1 w-5 h-5"
              />
              <h3 className="text-autobuy-green-1 font-medium text-sm">
                Password Reset Successfully!
              </h3>
            </div>
            <p className="text-autobuy-green-1 text-sm leading-relaxed">
              Your password has been updated. You&apos;ll be redirected to the
              login page shortly.
            </p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Hidden OTP field - pre-populated from URL */}
          <input type="hidden" {...register("otp")} />

          {/* Password Field */}
          <fieldset className="space-y-2">
            <label
              className="text-sm text-autobuy-neutral-2 font-medium"
              htmlFor="new-password"
            >
              Password
            </label>
            <PasswordInput
              id="new-password"
              placeholder="Enter password"
              error={errors.password?.message}
              disabled={mutationLoading || isSuccess}
              aria-describedby={errors.password ? "password-error" : undefined}
              aria-invalid={!!errors.password}
              {...register("password")}
              onValueChange={handlePasswordChange}
            />
          </fieldset>

          {/* Password Strength Indicator */}
          {passwordValue && (
            <div className="space-y-3">
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-autobuy-neutral-3">
                    Password strength:
                  </span>
                  <span
                    className={`font-medium ${
                      passwordStrength.score <= 2
                        ? "text-autobuy-red-1"
                        : passwordStrength.score <= 3
                        ? "text-autobuy-yellow-1"
                        : passwordStrength.score <= 4
                        ? "text-autobuy-blue-2"
                        : "text-autobuy-green-1"
                    }`}
                  >
                    {passwordStrength.label}
                  </span>
                </div>
                <div className="flex space-x-1 h-2">
                  {[1, 2, 3, 4, 5, 6].map((index) => {
                    const isActive = index <= passwordStrength.score;
                    const getBarColor = () => {
                      if (!isActive) return "bg-autobuy-neutral-5";
                      if (passwordStrength.score <= 1)
                        return "bg-autobuy-red-1";
                      if (passwordStrength.score <= 2)
                        return "bg-autobuy-red-2";
                      if (passwordStrength.score <= 3)
                        return "bg-autobuy-yellow-1";
                      if (passwordStrength.score <= 4)
                        return "bg-autobuy-blue-2";
                      if (passwordStrength.score <= 5)
                        return "bg-autobuy-green-2";
                      return "bg-autobuy-green-1";
                    };

                    return (
                      <div
                        key={index}
                        className={`flex-1 rounded-full transition-all duration-300 ${getBarColor()} ${
                          isActive
                            ? "opacity-100 scale-y-100"
                            : "opacity-30 scale-y-75"
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="bg-autobuy-blue-6 border border-autobuy-blue-4 rounded-lg p-3">
                <p className="text-xs text-autobuy-neutral-2 leading-relaxed">
                  <span className="font-medium text-autobuy-blue-2">
                    Password requirements:
                  </span>
                  <br />
                  • At least 8 characters long
                  <br />
                  • Include uppercase and lowercase letters
                  <br />
                  • Include at least one number
                  <br />• Include at least one special character
                </p>
              </div>
            </div>
          )}

          {/* Confirm Password Field */}
          <fieldset className="space-y-2">
            <label
              className="text-sm text-autobuy-neutral-2 font-medium"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <PasswordInput
              id="confirm-password"
              placeholder="Enter password"
              error={errors.confirmPassword?.message}
              disabled={mutationLoading || isSuccess}
              aria-describedby={
                errors.confirmPassword ? "confirm-password-error" : undefined
              }
              aria-invalid={!!errors.confirmPassword}
              {...register("confirmPassword")}
              onValueChange={handleConfirmPasswordChange}
            />
          </fieldset>

          {/* Submit Button */}
          <ActionButton
            type="submit"
            isLoading={mutationLoading}
            loadingText="Resetting password..."
            disabled={!isValid || mutationLoading || isSuccess}
            className="bg-autobuy-blue-2 hover:bg-autobuy-blue-1 rounded-[12px] border-none w-full text-base text-white"
            size="xl"
          >
            {isSuccess ? "Password Reset!" : "Reset Password"}
          </ActionButton>
        </form>

        {/* Security Notice */}
        <div className="bg-autobuy-blue-6 border border-autobuy-blue-4 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Icon
              icon="mdi:shield-check"
              className="w-5 h-5 text-autobuy-blue-2 mt-0.5 flex-shrink-0"
            />
            <div className="text-xs text-autobuy-neutral-2 leading-relaxed">
              <span className="font-medium text-autobuy-blue-2">
                Security Note:
              </span>
              <br />
              After resetting your password, you&apos;ll be signed out of all
              devices for security. You&apos;ll need to sign in again with your
              new password.
            </div>
          </div>
        </div>

        {/* Loading Overlay */}
        {mutationLoading && (
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-2xl flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-3">
              <Icon
                icon="mdi:loading"
                className="w-6 h-6 animate-spin text-autobuy-blue-2"
              />
              <span className="text-autobuy-neutral-2">
                Resetting your password...
              </span>
            </div>
          </div>
        )}
      </main>
    </EmptyLayout>
  );
};

const PasswordResetPage = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <PasswordResetContent />
    </Suspense>
  );
};

export default PasswordResetPage;
