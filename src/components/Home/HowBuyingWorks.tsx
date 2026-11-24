/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Browse Verified Cars",
    description:
      "Explore a wide selection of inspected and trusted vehicles. Filter by make, model, price, or location to find your perfect match.",
  },
  {
    id: 2,
    title: "Inspect Virtually or Physically",
    description:
      "Explore every details with our 360 degree virtual tour and detailed conditioned reports or choose to be there physically. We've got you!",
  },
  {
    id: 3,
    title: "Make Secure Payment",
    description:
      "Pay safely through our secure payment system or at Autobuy lot during pick-up. Choose delivery to your door step or scheduled pick-up",
  },
  {
    id: 4,
    title: "Drive & Enjoy",
    description:
      "Activate insurance, financing, and handle paperwork through our platform. Hit the road with comprehensive after-sales support.",
  },
];

const HowBuyingWorks = () => {
  return (
    <section className="py-16 px-6 spacing bg-[#FAFAFA] relative overflow-hidden">
      <div className=" mx-auto container">
        {/* Header */}
        <div className="text-center mb-16 font-helvetica">
          <h2 className="text-3xl md:text-3xl font-medium  text-autobuy-neutral-1 mb-3 animate-fade-in">
            How Buying Works With Us
          </h2>
          <p className="text-base  text-[#4D4C4C] mx-auto animate-slide-up">
            Buying a car has never been easier. Follow these simple 4-step
            journey to car ownership
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex items-start space-x-4 group animate-step-in bg-white p-3 rounded-[12px] shadow-sm hover:shadow-lg transition-shadow duration-300"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 bg-[#EDF4FF] rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
                    <CheckCircle className="w-5 h-5 text-autobuy-primary2.5 animate-pulse" />
                  </div>
                </div>
                <div className="flex-1 font-helvetica ">
                  <h3 className="text-lg font-medium text-autobuy-neutral-1 mb-2">
                    {step.title}
                  </h3>
                  <p className=" text-autobuy-neutral-2 leading-relaxed text-sm ">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA Button */}
            <div className="pt-8">
              <Link href="/sell-your-car">
                <button className="group text-autobuy-primary2.5 font-medium text-base transition-all duration-300  hover:scale-105 flex items-center space-x-2 ">
                  <span>Browse Cars</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side - Car Image with Design */}
          <div className="relative animate-car-float">
            <div className="absolute inset-0 ">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full text-blue-200 opacity-60"
                fill="currentColor"
              >
                <path d="M100 200 Q200 100 300 200 Q200 300 100 200" />
              </svg>
            </div>

            {/* Car Image */}
            <div className=" translate-x-[7rem] z-10 transform flex items-center justify-center ">
              <img
                src="./bgs/buyingWorksBg.png"
                alt="White luxury car"
                className="w-full max-w-lg h-auto object-contain drop-shadow-2xl hover:scale-150 transition-transform duration-500 scale-125 "
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/600x300/f0f0f0/666666?text=Car+Image";
                }}
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-6 h-6 bg-orange-400 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 left-5 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes step-in {
          from {
            opacity: 0;
            transform: translateX(-50px);
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

        @keyframes car-float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-step-in {
          animation: step-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-in {
          animation: bounce-in 1s ease-out 1.2s forwards;
          opacity: 0;
        }

        .animate-car-float {
          animation: car-float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HowBuyingWorks;
