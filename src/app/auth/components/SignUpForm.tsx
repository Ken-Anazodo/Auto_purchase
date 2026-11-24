/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Icon } from "@iconify/react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

import { EmailInput, PasswordInput } from "@/components/InputForm";
import ActionButton from "@/components/ActionButton";
import {
  signUpSchema,
  type SignUpFormData,
  getPasswordStrength,
} from "@/lib/validations/auth";
import { useAuthSignUpMutation } from "@/services/features/userApi";

export default function SignUpForm() {
  const router = useRouter();
  const [authSignUp, { isLoading }] = useAuthSignUpMutation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    setError,
    clearErrors,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      userType: "BUYER",
      acceptTerms: false,
    },
  });

  // Watch password for strength indicator
  const watchedPassword = watch("password");
  const watchedConfirmPassword = watch("confirmPassword");
  const passwordStrength = getPasswordStrength(watchedPassword || "");

  // Handle form submission
  const onSubmit = async (data: SignUpFormData) => {
    try {
      const response = await authSignUp({
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        userType: data.userType,
      }).unwrap();

      // Success - response received
      console.log("Sign up successful:", response);

      // Store token in cookies if provided
      if (response?.data?.token) {
        Cookies.set("autobuy_session_client", response.data.token, {
          expires: 1, // 1 day
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
        });
      }

      toast.success("Account created successfully!");

      // Redirect to OTP verification
      router.push(
        `/auth/verify-otp?email=${encodeURIComponent(data.email)}&type=signup`
      );
    } catch (error: unknown) {
      console.error("Sign up error:", error);

      // Handle API errors from backend
      let errorMessage = "Something went wrong. Please try again.";

      if (error && typeof error === "object" && "data" in error) {
        const apiError = error.data as any;
        if (apiError?.message) {
          errorMessage = apiError.message;

          // Check if it's an email-related error and set field error
          if (
            apiError.error === "ENTRY_EXISTS" ||
            apiError.message.toLowerCase().includes("already exists") ||
            apiError.message.toLowerCase().includes("email")
          ) {
            setError("email", {
              type: "manual",
              message: apiError.message,
            });
            return; // Don't show toast if we're showing field error
          }
        }
      } else if (error && typeof error === "object" && "message" in error) {
        errorMessage = (error as Error).message;
      }

      toast.error(errorMessage);
    }
  };

  // Handle Google sign up
  const handleGoogleSignUp = async () => {
    try {
      toast.loading("Redirecting to Google...");
      // Handle Google OAuth
      console.log("Google sign up");
    } catch (error) {
      console.error("Google signup error:", error);
      toast.error("Google sign up failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Email Field */}
      <div className="space-y-2">
        <label className="text-sm text-autobuy-neutral-2" htmlFor="email">
          Email Address
        </label>
        <EmailInput
          id="email"
          placeholder="Myemail@gmail.com"
          error={errors.email?.message}
          {...register("email")}
          onValueChange={() => {
            if (errors.email) {
              clearErrors("email");
            }
          }}
        />
      </div>

      {/* Password Field */}
      <div className="space-y-2">
        <label className="text-sm text-autobuy-neutral-2" htmlFor="password">
          Password
        </label>
        <PasswordInput
          id="password"
          placeholder="Enter password"
          error={errors.password?.message}
          {...register("password")}
          onValueChange={() => {
            if (errors.password) {
              clearErrors("password");
            }
          }}
        />

        {/* Password Strength Indicator */}
        {watchedPassword && (
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
                    if (passwordStrength.score <= 1) return "bg-autobuy-red-1";
                    if (passwordStrength.score <= 2) return "bg-autobuy-red-2";
                    if (passwordStrength.score <= 3)
                      return "bg-autobuy-yellow-1";
                    if (passwordStrength.score <= 4) return "bg-autobuy-blue-2";
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
      </div>

      {/* Confirm Password Field */}
      <div className="space-y-2">
        <label
          className="text-sm text-autobuy-neutral-2"
          htmlFor="confirmPassword"
        >
          Confirm Password
        </label>
        <PasswordInput
          id="confirmPassword"
          placeholder="Enter password"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
          onValueChange={() => {
            if (errors.confirmPassword) {
              clearErrors("confirmPassword");
            }
          }}
        />

        {/* Password Match Indicator */}
        {watchedConfirmPassword && watchedPassword && (
          <div className="flex items-center space-x-2">
            {watchedPassword === watchedConfirmPassword ? (
              <>
                <Icon
                  icon="heroicons:check-circle"
                  className="w-4 h-4 text-autobuy-green-1"
                />
                <span className="text-xs text-autobuy-green-1">
                  Passwords match
                </span>
              </>
            ) : (
              <>
                <Icon
                  icon="heroicons:x-circle"
                  className="w-4 h-4 text-autobuy-red-1"
                />
                <span className="text-xs text-autobuy-red-1">
                  {` Passwords don't match`}
                </span>
              </>
            )}
          </div>
        )}
      </div>

      {/* Terms and Conditions Checkbox */}
      <div className="space-y-2">
        <label className="flex items-center  space-x-3 cursor-pointer">
          <input
            type="checkbox"
            className=" w-4 h-4 text-autobuy-blue-2 bg-white border-autobuy-neutral-4 rounded focus:ring-autobuy-blue-3 focus:ring-2"
            {...register("acceptTerms")}
          />
          <span className="text-xs text-autobuy-neutral-2">
            By signing up I agree to the{" "}
            <Link className="text-autobuy-blue-2 hover:underline" href="/terms">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              className="text-autobuy-blue-2 hover:underline"
              href="/privacy"
            >
              Privacy Policy
            </Link>
          </span>
        </label>
        {errors.acceptTerms && (
          <p className="text-xs text-autobuy-red-1">
            {errors.acceptTerms.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="space-y-4">
        <ActionButton
          type="submit"
          isLoading={isLoading}
          loadingText="Creating Account..."
          disabled={!isValid || isLoading}
          className="bg-autobuy-blue-2 hover:bg-autobuy-blue-1 rounded-[12px] border-none w-full text-base text-white"
          size="xl"
        >
          Create Account
        </ActionButton>

        {/* Divider */}
        <div className="flex items-center justify-between gap-4">
          <span className="w-full h-[1px] bg-autobuy-orange-1"></span>
          <span className="text-nowrap text-autobuy-neutral-2 text-xs">
            Or continue with
          </span>
          <span className="w-full h-[1px] bg-autobuy-orange-1"></span>
        </div>

        {/* Google Sign Up Button */}
        <ActionButton
          type="button"
          onClick={handleGoogleSignUp}
          className="border-autobuy-blue-2 hover:bg-autobuy-blue-6 border bg-white rounded-[12px] w-full text-base text-autobuy-neutral-2 hover:text-autobuy-blue-1 hover:shadow-lg"
          size="xl"
        >
          <span className="flex items-center justify-center gap-3">
            <Icon icon="flat-color-icons:google" width="1.2em" height="1.2em" />
            Google
          </span>
        </ActionButton>
      </div>

      {/* Sign In Link */}
      <div className="text-center">
        <span className="text-sm text-autobuy-neutral-2">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-autobuy-blue-2 hover:underline font-medium"
          >
            Sign In
          </Link>
        </span>
      </div>
    </form>
  );
}
