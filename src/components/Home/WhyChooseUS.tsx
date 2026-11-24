"use client";
import React from "react";
import { FileCheck, Video, FileText, Shield, Car, Globe } from "lucide-react";
import { Icon } from "@iconify/react";

const features = [
  {
    id: 1,
    icon: `iconamoon:file-check-thin`,
    title: "150+ Points Certified Inspection",
    description:
      "Every car listed goes through a comprehensive 150+ point physical and mechanical check. No guesswork. Just verified condition you can trust.",
  },
  {
    id: 2,
    icon: `fluent:video-32-light`,
    title: "Virtual/Video Reality Tour",
    description:
      "Inspect every details from your screen with our 360 degree virtual tours. See close up of the interior, exterior, and engine bay as if you were there.",
  },
  {
    id: 3,
    icon: `bi:file-text`,
    title: "Verified History & Documentation",
    description:
      "We run full background checks, including mileage, service records, ownership, and accident history, so you know exactly what you're buying.",
  },
  {
    id: 4,
    icon: `arcticons:consorsbank-secureplus`,
    title: "Secure Payment Ecosystem",
    description:
      "Your money is protected from start to finish. We use secure verified payment gateways. Your funds are held securely until delivery confirmation.",
  },
  {
    id: 5,
    icon: `streamline-ultimate:car-3`,
    title: "Complete After Sales Services",
    description:
      "We ensure your ownership journey is seamless with car insurance, loan financing and vehicle paperwork renewal, all managed through our integrated platform.",
  },
  {
    id: 6,
    icon: `ph:globe-thin`,
    title: "Nationwide Network & Convenience",
    description:
      "Find cars anywhere in Nigeria. Our wide network of sellers, inspectors, and partners makes buying and selling easy from any location.",
  },
];

const WhyChooseUS = () => {
  return (
    <section className="py-16 px-6 spacing">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 animate-fade-in">
            <span
              style={{
                background:
                  "linear-gradient(42.88deg, #8F2E1C 5.37%, #E6583D 56.63%, #D64D33 86.99%)",
              }}
              className=" text-white px-3 py-2 rounded-full text-xs font-medium font-helvetica"
            >
              Why Choose Us
            </span>
          </div>

          <h2 className="text-xl md:text-3xl  font-medium font-helvetica text-[#333333] mb-6 animate-slide-up">
            Buy With Absolute Confidence
          </h2>

          <p className="text-base font-helvetica  text-autobuy-neutral-2 max-w-5xl mx-auto leading-relaxed animate-slide-up-delayed">
            {` Autobuy isn't just another car marketplace. We're reinventing trust
            in Nigeria's automotive industry through technology, transparency,
            and a commitment to your peace of mind.`}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-feature-card shadow-md shadow-[#0066CC1A]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-10 p-4 mx-auto  size-fit rounded-full border border-autobuy-primary2.5">
                <div className=" size-16 bg-[#EDF4FF] rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300 group-hover:scale-110 transform">
                  <div className=" text-autobuy-primary2.5 group-hover:text-blue-700 transition-colors duration-300">
                    <Icon
                      icon={`${feature.icon}`}
                      width="1.2em"
                      height="1.2em"
                      className="size-10"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center space-y-4">
                <h3 className="text-lg md:text-xl font-helvetica font-medium text-autobuy-neutral-1 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className=" text-autobuy-neutral-2 leading-relaxed text-base font-helvetica">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-autobuy-primary2.5 transition-colors duration-300"></div>
            </div>
          ))}
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

        @keyframes feature-card {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-slide-up-delayed {
          animation: slide-up 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-feature-card {
          animation: feature-card 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUS;
