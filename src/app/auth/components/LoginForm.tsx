/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Icon } from "@iconify/react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

import { EmailInput, PasswordInput } from "@/components/InputForm";
import ActionButton from "@/components/ActionButton";
import { loginSchema, type LoginFormData } from "@/lib/validations/auth";
import { useAuthLoginMutation } from "@/services/features/userApi";

// Constants
const MESSAGES = {
  LOGIN_SUCCESS: "Login successful!",
  LOGIN_FAILED: "Login failed. Please check your credentials and try again.",
  GOOGLE_LOGIN_FAILED: "Google login failed",
} as const;

type LoginError = "email" | "password" | "verification" | "general";

const parseLoginError = (
  error: unknown
): { type: LoginError; message: string } => {
  // First check for backend API error structure
  if (error && typeof error === "object" && "data" in error) {
    const apiError = error.data as any;
    if (apiError?.message) {
      const message = apiError.message;

      // Determine error type based on backend error code or message
      if (
        apiError.error === "VERIFICATION_REQUIRED" ||
        message.toLowerCase().includes("verification") ||
        message.toLowerCase().includes("verify")
      ) {
        return { type: "verification", message };
      }
      if (
        apiError.error === "INVALID_EMAIL" ||
        message.toLowerCase().includes("email") ||
        message.toLowerCase().includes("not found")
      ) {
        return { type: "email", message };
      }
      if (
        apiError.error === "INVALID_PASSWORD" ||
        message.toLowerCase().includes("password") ||
        message.toLowerCase().includes("incorrect")
      ) {
        return { type: "password", message };
      }

      // Return the actual backend message for general errors
      return { type: "general", message };
    }
  }

  // Fallback to Error object message
  if (error instanceof Error && error.message) {
    const errorMessage = error.message;

    if (
      errorMessage.includes("verification") ||
      errorMessage.includes("verify")
    ) {
      return { type: "verification", message: errorMessage };
    }
    if (errorMessage.includes("email")) {
      return { type: "email", message: errorMessage };
    }
    if (errorMessage.includes("password")) {
      return { type: "password", message: errorMessage };
    }

    return { type: "general", message: errorMessage };
  }

  return { type: "general", message: MESSAGES.LOGIN_FAILED };
};

export default function LoginForm() {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [authLogin, { data: result }] = useAuthLoginMutation();
  const [state, setState] = useState({
    isLoading: false,
    verificationRequired: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    setError,
    clearErrors,
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const handleLogin = useCallback(
    async (credentials: LoginFormData) => {
      try {
        const response = await authLogin({
          email: credentials.email,
          password: credentials.password,
        }).unwrap();

        // Store token in cookies
        if (response?.data?.token) {
          Cookies.set("autobuy_session_client", response.data.token, {
            expires: 1,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
          });
        }

        toast.success(MESSAGES.LOGIN_SUCCESS);
        reset();

        // Redirect to appropriate dashboard
        const dashboardPath =
          response?.data?.userType === "BUYER"
            ? "/buyer/dashboard"
            : response?.data?.userType === "ADMIN"
              ? "/admin/dashboard"
              : "/seller/dashboard";
        router.push(dashboardPath);
      } catch (error: unknown) {
        // Check if it's a verification error and transform it
        if (error && typeof error === "object" && "data" in error) {
          const apiError = error.data as any;
          if (
            apiError?.error === "VERIFICATION_REQUIRED" ||
            (apiError?.message &&
              apiError.message.toLowerCase().includes("verification"))
          ) {
            throw new Error(
              apiError.message || "Account verification required"
            );
          }
        } else if (
          error instanceof Error &&
          error.message.includes("verification")
        ) {
          throw new Error(error.message);
        }

        // Pass through the original error to preserve backend message
        throw error;
      }
    },
    [authLogin, reset, router]
  );

  const handleError = useCallback(
    (error: unknown) => {
      const parsedError = parseLoginError(error);

      switch (parsedError.type) {
        case "verification":
          setState((prev) => ({ ...prev, verificationRequired: true }));
          break;
        case "email":
          setError("email", { type: "manual", message: parsedError.message });
          break;
        case "password":
          setError("password", {
            type: "manual",
            message: parsedError.message,
          });
          break;
        default:
          toast.error(parsedError.message);
          break;
      }
    },
    [setError]
  );

  const onSubmit = useCallback(
    async (data: LoginFormData) => {
      try {
        setState((prev) => ({
          ...prev,
          isLoading: true,
          verificationRequired: false,
        }));
        await handleLogin(data);
      } catch (error) {
        handleError(error);
      } finally {
        setState((prev) => ({ ...prev, isLoading: false }));
      }
    },
    [handleLogin, handleError]
  );

  const handleGoogleLogin = useCallback(async () => {
    try {
      toast.loading("Redirecting to Google...");
      // TODO: Implement Google OAuth
      console.log("Google OAuth not implemented");
    } catch {
      toast.error(MESSAGES.GOOGLE_LOGIN_FAILED);
    }
  }, []);

  const clearFieldError = (field: "email" | "password") => {
    if (errors[field]) clearErrors(field);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Email Field */}
        <fieldset className="space-y-2">
          <label
            className="text-sm text-autobuy-neutral-2 font-medium"
            htmlFor="email"
          >
            Email Address
          </label>
          <EmailInput
            id="email"
            placeholder="Enter your email"
            error={errors.email?.message}
            {...register("email")}
            onValueChange={() => clearFieldError("email")}
          />
        </fieldset>

        {/* Password Field */}
        <fieldset className="space-y-2">
          <div className="flex items-center justify-between">
            <label
              className="text-sm text-autobuy-neutral-2 font-medium"
              htmlFor="password"
            >
              Password
            </label>
          </div>
          <PasswordInput
            id="password"
            placeholder="Enter your password"
            error={errors.password?.message}
            {...register("password")}
            onValueChange={() => clearFieldError("password")}
          />

          <button
            type="button"
            onClick={() => router.push("/auth/forgot-password")}
            className="text-sm text-autobuy-blue-2 block ml-auto hover:text-autobuy-blue-1 hover:underline font-medium"
          >
            Forgot Password?
          </button>
        </fieldset>

        {/* Submit Button */}
        <div className="space-y-4">
          <ActionButton
            type="submit"
            isLoading={state.isLoading || isSubmitting}
            loadingText="Signing in..."
            disabled={!isValid || state.isLoading}
            className="bg-autobuy-blue-2 hover:bg-autobuy-blue-1 rounded-[12px] border-none w-full text-base text-white"
            size="xl"
          >
            Sign In
          </ActionButton>

          {state.verificationRequired && (
            <section
              className="bg-[#FEF9F5] border border-[#F9C4A1] rounded-[12px] p-4 space-y-1"
              role="alert"
              aria-live="polite"
            >
              <header className="flex items-center space-x-2">
                <Icon
                  icon="mdi:alert-outline"
                  className="text-[#EF693E] w-5 h-5"
                />
                <h3 className="text-[#EF693E] font-medium text-sm">
                  Account Verification Required
                </h3>
              </header>
              <p className="text-neutral-900 text-xs leading-relaxed">
                You need to verify your account before logging in. Please check
                your email for the verification link.
              </p>
            </section>
          )}

          {/* Divider */}
          <div className="flex items-center justify-between gap-4">
            <span className="w-full h-[1px] bg-autobuy-orange-1"></span>
            <span className="text-nowrap text-autobuy-neutral-3 text-xs">
              Or continue with
            </span>
            <span className="w-full h-[1px] bg-autobuy-orange-1"></span>
          </div>

          {/* Google Login Button */}
          <ActionButton
            type="button"
            onClick={handleGoogleLogin}
            className="border-autobuy-blue-2 hover:bg-autobuy-blue-6 border bg-white rounded-[12px] w-full text-base text-autobuy-neutral-2 hover:text-autobuy-blue-1 hover:shadow-lg"
            size="xl"
          >
            <span className="flex items-center justify-center gap-3">
              <Icon
                icon="flat-color-icons:google"
                width="1.2em"
                height="1.2em"
              />
              Continue with Google
            </span>
          </ActionButton>
        </div>

        {/* Sign Up Link */}
        <div className="text-center">
          <span className="text-sm text-autobuy-neutral-2">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/sign-up"
              className="text-autobuy-blue-2 hover:text-autobuy-blue-1 hover:underline font-medium"
            >
              Sign Up
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}
