"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    title: "Seamless Purchase",
    content:
      "Autobuy made buying my car so simple! Inspection and delivery were seamless. Autobuy made buying my car so simple! Inspection and delivery were seamless. Autobuy made buying my car so simple! Inspection and delivery were seamless.",
    author: "Emmanuel Kenneth",
    location: "Lagos, Nigeria",
    avatar: "/api/placeholder/50/50",
  },
  {
    id: 2,
    title: "Trusted Service",
    content:
      "The inspection process was thorough and transparent. I felt confident throughout the entire buying journey. The team was professional and made everything hassle-free.",
    author: "Adebayo Johnson",
    location: "Abuja, Nigeria",
    avatar: "/api/placeholder/50/50",
  },
  {
    id: 3,
    title: "Excellent Experience",
    content:
      "Selling my car through Autobuy was the best decision. The pricing was fair and the process was quick. I would definitely recommend them to anyone.",
    author: "Funmi Okafor",
    location: "Port Harcourt, Nigeria",
    avatar: "/api/placeholder/50/50",
  },
];

const Testimonial = ({
  TestimonialAttributes,
}: {
  TestimonialAttributes: React.ReactNode;
}) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
      setIsAnimating(false);
    }, 300);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Auto slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-16 px-6 spacing">
      <div className=" mx-auto container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Header Content */}
          {TestimonialAttributes}

          {/* Right Side - Testimonial Content */}

          <div className="flex items-center justify-between gap-4">
            <button
              onClick={prevTestimonial}
              disabled={isAnimating}
              style={{
                background:
                  "linear-gradient(180deg, #0A6DFF 46.15%, #064199 100%)",
              }}
              className="w-12 h-12 hidden  rounded-full bg-blue-600 hover:bg-blue-700 text-white md:flex items-center justify-center transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="space-y-6 relative overflow-hidden shadow-md p-8 rounded-[16px] min-h-[350px] md:max-w-[80%]">
              <div
                key={current.id}
                className={`transition-all duration-500 ease-in-out transform ${
                  isAnimating
                    ? "opacity-0 translate-x-4"
                    : "opacity-100 translate-x-0"
                }`}
              >
                <h3 className="text-2xl md:text-xl text-center font-semibold text-[#333333] animate-fade-in mb-5 ">
                  {current.title}
                </h3>

                <p className="text-[#4D4C4C] text-center text-base leading-loose italic animate-slide-up">
                  {current.content}
                </p>

                <div className="flex items-center justify-center gap-4 animate-slide-up-delayed pt-5">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-110">
                    <img
                      src={current.avatar}
                      alt={current.author}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <div className="w-full h-full bg-orange-500 text-white flex items-center justify-center text-lg font-semibold hidden">
                      {current.author
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-base text-[#1A1A1A]">
                      {current.author}
                    </h4>
                    <p className="text-xs text-[#4D4C4C]">{current.location}</p>
                  </div>
                </div>
              </div>

              {/* Progress Indicators */}
              <div className="flex gap-2 justify-center lg:justify-start">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true);
                        setTimeout(() => {
                          setCurrentTestimonial(index);
                          setIsAnimating(false);
                        }, 300);
                      }
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-blue-600 w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={nextTestimonial}
              disabled={isAnimating}
              style={{
                background:
                  "linear-gradient(180deg, #0A6DFF 46.15%, #064199 100%)",
              }}
              className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white hidden md:flex items-center justify-center transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
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
      `}</style>
    </section>
  );
};

export default Testimonial;
