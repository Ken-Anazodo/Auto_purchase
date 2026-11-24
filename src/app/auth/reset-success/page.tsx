"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import ActionButton from "@/components/ActionButton";
import EmptyLayout from "../components/EmptyLayout";

const ResetSuccessPage = () => {
  const router = useRouter();
  const [isAnimated, setIsAnimated] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Trigger animations on mount
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsAnimated(true);
    }, 100);

    const timer2 = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Handle navigation
  const handleBackToLogin = () => {
    router.push("/auth/login");
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <EmptyLayout>
      <main className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-[500px] space-y-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-20 h-20 bg-autobuy-blue-2 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-autobuy-green-2 rounded-full blur-lg"></div>
        </div>

        {/* Back Button */}
        <div className="relative z-10">
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
        </div>

        {/* Success Content */}
        <div className="relative z-10 text-center space-y-8">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div
              className={`relative transition-all duration-700 ease-out ${
                isAnimated
                  ? "scale-100 opacity-100 rotate-0"
                  : "scale-50 opacity-0 rotate-180"
              }`}
            >
              {/* Outer Ring */}
              <div className="w-24 h-24 bg-autobuy-blue-2 rounded-full flex items-center justify-center relative">
                {/* Success Icon */}
                <Icon
                  icon="mdi:check"
                  className="w-12 h-12 text-white font-bold"
                />

                {/* Animated Ring */}
                <div
                  className={`absolute inset-0 border-4 border-autobuy-blue-2 rounded-full transition-all duration-1000 ease-out ${
                    isAnimated ? "scale-125 opacity-0" : "scale-100 opacity-100"
                  }`}
                ></div>
              </div>
            </div>
          </div>

          {/* Success Text */}
          <div
            className={`space-y-4 transition-all duration-500 delay-300 ease-out ${
              showContent
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-4"
            }`}
          >
            <h1 className="text-autobuy-neutral-1 text-3xl font-semibold">
              Successful!
            </h1>

            <p className="text-autobuy-neutral-2 text-base leading-relaxed px-4">
              Your password has been successfully updated. You
              <br />
              can now log in with your new password.
            </p>
          </div>

          {/* Action Button */}
          <div
            className={`transition-all duration-500 delay-500 ease-out ${
              showContent
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-4"
            }`}
          >
            <ActionButton
              onClick={handleBackToLogin}
              className="bg-autobuy-blue-2 hover:bg-autobuy-blue-1 rounded-[12px] border-none w-full text-base text-white transform hover:scale-105 transition-all duration-200"
              size="xl"
            >
              Back to Login
            </ActionButton>
          </div>

    
        </div>

        {/* Success Particles */}
        {isAnimated && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 opacity-60 animate-bounce`}
                style={{
                  left: `${15 + i * 10}%`,
                  top: `${25 + i * 5}%`,
                  backgroundColor: ["#3385ff", "#34b233", "#f2e572", "#66a3ff"][
                    i % 4
                  ],
                  borderRadius: "50%",
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${2 + i * 0.1}s`,
                }}
              />
            ))}
          </div>
        )}
      </main>
    </EmptyLayout>
  );
};

export default ResetSuccessPage;
