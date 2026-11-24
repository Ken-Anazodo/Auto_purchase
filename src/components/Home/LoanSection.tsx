/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

const features = [
  "Quick Approval",
  "Flexible Payment",
  "Up to 70% Financing",
  "Trusted Lenders",
  "Available on foreign and new cars",
];

const LoanSection = () => {
  return (
    <section className="py-16 px-6 spacing bg-[#F5F9FF] ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-block animate-fade-in">
              <span
                style={{
                  background:
                    "linear-gradient(42.88deg, #8F2E1C 5.37%, #E6583D 56.63%, #D64D33 86.99%)",
                }}
                className=" text-white px-4 py-2 rounded-[12px] text-[12px] font-medium"
              >
                Loan Financing
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4 animate-slide-in-left">
              <h2 className="text-xl md:text-3xl font-medium text-[#333333] leading-tight ">
                Buy Your Dream Car With Flexible Financing
              </h2>
              <p className="text-base text-[#333333] leading-relaxed">
                Get approved fast with trusted financial partners. No long
                paperwork. No hidden fees. Just simple, transparent auto
                financing.
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
            <div className="pt-8">
              <Link href="/sell-your-car">
                <button className="group text-autobuy-primary2.5 font-medium text-base transition-all duration-300  hover:scale-105 flex items-center space-x-2 ">
                  <span>Get Financing</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative animate-image-float">
            <div className=" rounded-2xl overflow-hidden shadow-lg">
              <img
                src="./bgs/loanbg.svg"
                alt="Happy woman holding car keys"
                className="w-full h-auto object-cover transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/600x400/f0f0f0/666666?text=Happy+Customer+with+Car+Keys";
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes feature-slide {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        @keyframes image-float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes float-1 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-5px) rotate(1deg);
          }
          66% {
            transform: translateY(-3px) rotate(-1deg);
          }
        }

        @keyframes float-2 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-3px) rotate(-1deg);
          }
          66% {
            transform: translateY(-6px) rotate(1deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-feature-slide {
          animation: feature-slide 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-in {
          animation: bounce-in 1s ease-out 1s forwards;
          opacity: 0;
        }

        .animate-image-float {
          animation: image-float 4s ease-in-out infinite;
        }

        .animate-float-1 {
          animation: float-1 3s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 4s ease-in-out infinite 1s;
        }
      `}</style>
    </section>
  );
};

export default LoanSection;
