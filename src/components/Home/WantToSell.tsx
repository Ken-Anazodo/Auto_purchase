"use client";
import React from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

const features = [
  "Free professional Photos",
  "150+ Point Certified Inspection",
  "Instant Price Estimate",
  "We Manage Buyers & Negotiations",
  "Fast Secure Payouts",
];

const WantToSell = () => {
  return (
    <section className="relative min-h-[600px] bg-cover bg-center bg-no-repeat overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"
        style={{
          backgroundImage: `url('./bgs/wantToSellBg.png')`,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container  mx-auto px-6 spacing py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4 font-helvetica">
              <h2 className="text-2xl md:text-3xl lg:text-3xl font-medium  text-white leading-tight">
                Want To Sell Your Car
              </h2>
              <p className="text-base md:text-base text-white leading-relaxed">
                Let us help you get the best price — without the stress.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 group animate-slide-in-up bg-white/95 backdrop-blur-sm px-4 py-3 rounded-[12px] flex-1 group-hover:bg-white hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 bg-[#FEF2EC] p-2 rounded-full group-hover:bg-orange-100 transition-colors duration-200">
                    <CheckCircle className="w-6 h-6 text-orange-500 group-hover:text-orange-400 transition-colors duration-200" />
                  </div>
                  <div className=" transition-all duration-200 ">
                    <span className="text-autobuy-neutral-1 text-lg font-normal">
                      {feature}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/sell-your-car">
                <button
                  style={{
                    boxShadow:
                      "1px 1px 12px 0px #E6583D inset, -1px -1px 12px 0px #E6583D inset, 0px 1px 8px 0px #0000001F",
                  }}
                  className="group bg-[#EF693E] hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-[12px] transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center space-x-2 "
                >
                  <span>Sell Your Car</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side - Image Space (handled by background) */}
          <div className="hidden lg:block">
            {/* This space is for the background image to show through */}
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-in {
          animation: bounce-in 1s ease-out 0.8s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default WantToSell;
