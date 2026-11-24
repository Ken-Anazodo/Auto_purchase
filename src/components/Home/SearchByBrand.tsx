/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

interface CarBrand {
  id: number;
  name: string;
  logo: string;
  searchUrl: string;
}

// Constants
const ANIMATION_DURATION = 300;
const GRADIENT_STYLE = "linear-gradient(180deg, #0A6DFF 40.87%, #064199 100%)";
const BREAKPOINTS = {
  mobile: 640,
  tablet: 1024,
  desktop: 1280,
} as const;

const carBrands: CarBrand[] = [
  {
    id: 1,
    name: "Toyota",
    logo: "https://logos-world.net/wp-content/uploads/2020/05/Toyota-Logo.png",
    searchUrl: "/sell-your-cartoyota",
  },
  {
    id: 2,
    name: "Honda",
    logo: "https://logos-world.net/wp-content/uploads/2021/03/Honda-Logo.png",
    searchUrl: "/sell-your-carhonda",
  },
  {
    id: 3,
    name: "Mercedes",
    logo: "https://logos-world.net/wp-content/uploads/2020/05/Mercedes-Benz-Logo.png",
    searchUrl: "/sell-your-carmercedes",
  },
  {
    id: 4,
    name: "Kia",
    logo: "https://logos-world.net/wp-content/uploads/2021/04/Kia-Logo.png",
    searchUrl: "/sell-your-carkia",
  },
  {
    id: 5,
    name: "Acura",
    logo: "https://logos-world.net/wp-content/uploads/2020/05/Acura-Logo.png",
    searchUrl: "/sell-your-caracura",
  },
  {
    id: 6,
    name: "Hyundai",
    logo: "https://logos-world.net/wp-content/uploads/2021/03/Hyundai-Logo.png",
    searchUrl: "/sell-your-carhyundai",
  },
  {
    id: 7,
    name: "BMW",
    logo: "https://logos-world.net/wp-content/uploads/2020/05/BMW-Logo.png",
    searchUrl: "/sell-your-carbmw",
  },
  {
    id: 8,
    name: "Suzuki",
    logo: "https://logos-world.net/wp-content/uploads/2020/05/Suzuki-Logo.png",
    searchUrl: "/sell-your-carsuzuki",
  },
  {
    id: 9,
    name: "Nissan",
    logo: "https://logos-world.net/wp-content/uploads/2020/05/Nissan-Logo.png",
    searchUrl: "/sell-your-carnissan",
  },
  {
    id: 10,
    name: "Ford",
    logo: "https://logos-world.net/wp-content/uploads/2020/05/Ford-Logo.png",
    searchUrl: "/sell-your-carford",
  },
  {
    id: 11,
    name: "Volkswagen",
    logo: "https://logos-world.net/wp-content/uploads/2020/05/Volkswagen-Logo.png",
    searchUrl: "/sell-your-carvolkswagen",
  },
  {
    id: 12,
    name: "Lexus",
    logo: "https://logos-world.net/wp-content/uploads/2020/05/Lexus-Logo.png",
    searchUrl: "/sell-your-carlexus",
  },
];

// Custom hook for responsive dimensions
const useResponsiveDimensions = () => {
  const [itemWidth, setItemWidth] = useState(0);
  const [gap, setGap] = useState(24);

  const updateDimensions = useCallback(() => {
    const container = document.querySelector(
      ".brands-container"
    ) as HTMLElement;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    let itemsPerView: number;
    let newGap: number;

    if (containerWidth < BREAKPOINTS.mobile) {
      itemsPerView = 4;
      newGap = 16;
    } else if (containerWidth < BREAKPOINTS.tablet) {
      itemsPerView = 4.5;
      newGap = 20;
    } else if (containerWidth < BREAKPOINTS.desktop) {
      itemsPerView = 6;
      newGap = 24;
    } else {
      itemsPerView = 8;
      newGap = 24;
    }

    setGap(newGap);
    const totalGaps = (Math.floor(itemsPerView) - 1) * newGap;
    const availableWidth = containerWidth - totalGaps;
    setItemWidth(availableWidth / itemsPerView);
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]);

  return { itemWidth, gap };
};

// Navigation Button Component
const NavButton = ({
  direction,
  onClick,
  className = "",
  disabled = false,
}: {
  direction: "left" | "right";
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`rounded-full text-white flex items-center justify-center transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    style={{ background: GRADIENT_STYLE }}
  >
    <Icon icon={`gravity-ui:arrow-${direction}`} width="1.2em" height="1.2em" />
  </button>
);

// Brand Card Component
const BrandCard = ({ brand, width }: { brand: CarBrand; width: number }) => (
  <Link
    href={brand.searchUrl}
    className="group flex-shrink-0 flex flex-col items-center"
    style={{ width: `${width}px` }}
  >
    <div
      style={{
        background:
          "radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(240, 246, 255, 1) 100%)",
      }}
      className="aspect-square mb-2 md:mb-4 flex items-center justify-center w-full max-w-[100px] sm:max-w-[120px] md:max-w-[135px] rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-[0.3px] border-autobuy-primary2.5"
    >
      <img
        src={brand.logo}
        alt={`${brand.name} logo`}
        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform duration-300"
        onError={(e) => {
          e.currentTarget.src = `https://via.placeholder.com/48x48/e5e7eb/6b7280?text=${brand.name.charAt(
            0
          )}`;
        }}
      />
    </div>
    <h3 className="text-center text-xs sm:text-sm md:text-base font-medium text-autobuy-neutral-1 group-hover:text-autobuy-primary2.5 transition-colors duration-300">
      {brand.name}
    </h3>
  </Link>
);

const SearchByBrand = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { itemWidth, gap } = useResponsiveDimensions();

  // Memoize extended brands array
  const extendedBrands = useMemo(() => {
    return [...carBrands, ...carBrands, ...carBrands];
  }, []);

  // Infinite scroll reset logic
  useEffect(() => {
    if (currentIndex >= carBrands.length || currentIndex < 0) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => {
          if (prev >= carBrands.length) return prev - carBrands.length;
          if (prev < 0) return prev + carBrands.length;
          return prev;
        });
      }, ANIMATION_DURATION);

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  // Slide navigation functions
  const slideHandler = useCallback(
    (direction: "next" | "prev") => {
      if (isAnimating) return;

      setIsAnimating(true);
      setCurrentIndex((prev) => prev + (direction === "next" ? 1 : -1));

      setTimeout(() => setIsAnimating(false), ANIMATION_DURATION);
    },
    [isAnimating]
  );

  const nextSlide = useCallback(() => slideHandler("next"), [slideHandler]);
  const prevSlide = useCallback(() => slideHandler("prev"), [slideHandler]);

  // Calculate transform position
  const translateX = -(currentIndex * (itemWidth + gap));

  return (
    <section className="pt-8 px-6 spacing">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-">
          <div className="space-y-2">
            <h2 className="text-3xl  font-medium  text-autobuy-neutral-1 font-helvetica animate-fade-in">
              Search Cars By Brand
            </h2>
            <p className="text-base  text-autobuy-neutral-2 font-helvetica animate-slide-up">
              From SUVs to budget-friendly options, explore vehicles tailored to
              your needs.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex gap-3">
            <NavButton
              direction="left"
              onClick={prevSlide}
              className="size-8"
              disabled={isAnimating}
            />
            <NavButton
              direction="right"
              onClick={nextSlide}
              className="size-8"
              disabled={isAnimating}
            />
          </div>
        </div>

        {/* Brands Carousel */}
        <div className="relative overflow-hidden py-6 md:py-10 brands-container">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(${translateX}px)`,
              gap: `${gap}px`,
            }}
          >
            {extendedBrands.map((brand, index) => (
              <BrandCard
                key={`${brand.id}-${Math.floor(index / carBrands.length)}`}
                brand={brand}
                width={itemWidth}
              />
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center gap-4 ">
          <NavButton
            direction="left"
            onClick={prevSlide}
            className="size-8 active:scale-95"
            disabled={isAnimating}
          />
          <NavButton
            direction="right"
            onClick={nextSlide}
            className="size-8 active:scale-95"
            disabled={isAnimating}
          />
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

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default SearchByBrand;
