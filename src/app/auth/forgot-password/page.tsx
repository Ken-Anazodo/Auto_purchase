"use client";

import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import toast from "react-hot-toast";

import { EmailInput } from "@/components/InputForm";
import ActionButton from "@/components/ActionButton";
import EmptyLayout from "../components/EmptyLayout";
import { useForgotPasswordMutation } from "@/services/features/userApi";

// Constants
const SUCCESS_MESSAGES = {
  CODE_SENT: "Verification code sent successfully! Check your email.",
} as const;

const ERROR_MESSAGES = {
  EMAIL_NOT_FOUND: "No account found with this email address.",
  NETWORK_ERROR:
    "Failed to send code. Please check your connection and try again.",
  GENERAL_ERROR: "Something went wrong. Please try again.",
} as const;

// Validation schema
const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

// Types
interface FormState {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
}

const ForgotPasswordPage = () => {
  const router = useRouter();
  const [forgotPassword, { isLoading: mutationLoading, isSuccess }] =
    useForgotPasswordMutation();
  const [formState, setFormState] = useState<FormState>({
    isLoading: false,
    isSuccess: false,
    error: null,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    clearErrors,
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  // Form submission handler
  const onSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        setFormState({ isLoading: true, isSuccess: false, error: null });

        await forgotPassword({
          email: data.email,
        }).unwrap();

        // Success state
        setFormState({ isLoading: false, isSuccess: true, error: null });
        toast.success(SUCCESS_MESSAGES.CODE_SENT);

        // Redirect to verification page after short delay
        setTimeout(() => {
          router.push(
            `/auth/verify-otp?email=${encodeURIComponent(
              data.email
            )}&type=forgot-password`
          );
        }, 1500);
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : ERROR_MESSAGES.GENERAL_ERROR;
        setFormState({
          isLoading: false,
          isSuccess: false,
          error: errorMessage,
        });
        toast.error(errorMessage);
      }
    },
    [forgotPassword, router]
  );

  // Navigation handlers
  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  const handleSignInRedirect = useCallback(() => {
    router.push("/auth/login");
  }, [router]);

  // Field change handler
  const handleEmailChange = useCallback(() => {
    if (errors.email || formState.error) {
      clearErrors("email");
      setFormState((prev) => ({ ...prev, error: null }));
    }
  }, [errors.email, formState.error, clearErrors]);

  return (
    <EmptyLayout>
      <main className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-[500px] space-y-8">
        {/* Header */}
        <header className="space-y-4">
          <button
            onClick={handleBack}
            className="flex items-center text-autobuy-neutral-3 hover:text-autobuy-blue-2 transition-colors group"
            aria-label="Go back"
            disabled={formState.isLoading}
          >
            <Icon
              icon="mdi:arrow-left"
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
            />
          </button>

          <div className="text-center space-y-3">
            <h1 className="text-autobuy-blue-2 text-2xl font-medium">
              Forgot your password?
            </h1>
            <p className="text-autobuy-neutral-2 text-sm leading-relaxed">
              No worries! Enter your email and we&apos;ll send you a code
              <br />
              to reset your password.
            </p>
          </div>
        </header>

        {/* Success State */}
        {(formState.isSuccess || isSuccess) && (
          <div className="bg-autobuy-green-6 border border-autobuy-green-4 rounded-[12px] p-4 space-y-3">
            <div className="flex items-center space-x-2">
              <Icon
                icon="mdi:check-circle"
                className="text-autobuy-green-1 w-5 h-5"
              />
              <h3 className="text-autobuy-green-1 font-medium text-sm">
                Code Sent Successfully!
              </h3>
            </div>
            <p className="text-autobuy-green-1 text-sm leading-relaxed">
              We&apos;ve sent a verification code to{" "}
              <strong>{getValues("email")}</strong>. You&apos;ll be redirected
              shortly to enter the code.
            </p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
          <fieldset className="space-y-2">
            <label
              className="text-sm text-autobuy-neutral-2 font-medium"
              htmlFor="forgot-password-email"
            >
              Email Address
            </label>
            <EmailInput
              id="forgot-password-email"
              placeholder="Enter your email address"
              error={errors.email?.message || formState.error || undefined}
              disabled={
                formState.isLoading ||
                mutationLoading ||
                formState.isSuccess ||
                isSuccess
              }
              aria-describedby={errors.email ? "email-error" : undefined}
              aria-invalid={!!errors.email || !!formState.error}
              {...register("email")}
              onValueChange={handleEmailChange}
            />
          </fieldset>

          {/* Submit Button */}
          <ActionButton
            type="submit"
            isLoading={formState.isLoading || mutationLoading}
            loadingText="Sending code..."
            disabled={
              !isValid ||
              formState.isLoading ||
              mutationLoading ||
              formState.isSuccess ||
              isSuccess
            }
            className="bg-autobuy-blue-2 hover:bg-autobuy-blue-1 rounded-[12px] border-none w-full text-base text-white"
            size="xl"
          >
            {formState.isSuccess || isSuccess
              ? "Code Sent!"
              : "Send Verification Code"}
          </ActionButton>
        </form>

        {/* Footer */}
        <footer className="text-center space-y-4">
          <div className="text-sm text-autobuy-neutral-2">
            Remembered your password?{" "}
            <button
              onClick={handleSignInRedirect}
              disabled={formState.isLoading || mutationLoading}
              className="text-autobuy-blue-2 hover:text-autobuy-blue-1 hover:underline font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Sign In
            </button>
          </div>
        </footer>

        {/* Loading Overlay */}
        {(formState.isLoading || mutationLoading) && (
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-2xl flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-3">
              <Icon
                icon="mdi:loading"
                className="w-6 h-6 animate-spin text-autobuy-blue-2"
              />
              <span className="text-autobuy-neutral-2">
                Sending verification code...
              </span>
            </div>
          </div>
        )}
      </main>
    </EmptyLayout>
  );
};

export default ForgotPasswordPage;
