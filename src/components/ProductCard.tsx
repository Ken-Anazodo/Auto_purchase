/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Icon } from "@iconify/react";
import { RootState } from "@/services/store/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export interface VehicleSpec {
  mileage: string;
  transmission: string;
  fuel: string;
  location: string;
}

export interface VehicleService {
  icon: React.ReactNode;
  text: string;
}

export interface Vehicle {
  id: number;
  name: string;
  price: string;
  isNegotiable: boolean;
  images: string[];
  specs: VehicleSpec;
  services: VehicleService[];
  isVerified: boolean;
}

interface ProductCardProps {
  vehicle: Vehicle;
  isFavorited?: boolean;
  isCompared?: boolean;
  onToggleFavorite?: (id: number) => void;
  onToggleCompare?: (id: number) => void;
  animationDelay?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  vehicle,
  isFavorited = false,
  isCompared = false,
  onToggleFavorite,
  onToggleCompare,
  animationDelay = 0,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // const dispatch = useDispatch();
  const { isBulk, selectedItems } = useSelector(
    (state: RootState) => state.bulkSelection,
  );

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling || isPaused || vehicle.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === vehicle.images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoScrolling, isPaused, vehicle.images.length]);

  const handleToggleFavorite = () => {
    onToggleFavorite?.(vehicle.id);
  };

  const handleToggleCompare = () => {
    onToggleCompare?.(vehicle.id);
  };

  const handleImageChange = (imageIndex: number) => {
    setCurrentImageIndex(imageIndex);
    setIsAutoScrolling(false);

    setTimeout(() => {
      setIsAutoScrolling(true);
    }, 5000);
  };

  const router = useRouter();
  const navigate = (id: number) => {
    router.push(`/${id}`);
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-card-appear cursor-pointer"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      {/* Image Container */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div     onClick={() => navigate(vehicle.id)} className="aspect-[4/3] rounded-t-2xl overflow-hidden">
          <img
            src={vehicle.images[currentImageIndex]}
            alt={`${vehicle.name} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.src =
                "https://via.placeholder.com/400x300/f0f0f0/666666?text=Car+Image";
            }}
          />
        </div>

        {/* Overlay Actions */}
        {isBulk ? (
          <button className="bg-white rounded-[12px] flex items-center justify-center absolute top-4 left-4 w-8 h-8 p-2">
            <input
              type="checkbox"
              checked={isCompared}
              onChange={handleToggleCompare}
              className=" text-blue-600 border-gray-300 size-full rounded focus:ring-blue-500"
            />
          </button>
        ) : (
          <div className="absolute top-4 right-4 flex gap-2">
            <button
              onClick={handleToggleFavorite}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                isFavorited
                  ? "bg-autobuy-primary2.5 text-white"
                  : "bg-white/90 backdrop-blur-sm text-gray-600 hover:bg-white"
              }`}
            >
              <Heart size={18} className={isFavorited ? "fill-current" : ""} />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-600 hover:bg-white transition-all duration-200">
              <Icon
                icon="streamline-ultimate:car-3"
                width="1.2em"
                height="1.2em"
              />
            </button>
          </div>
        )}

        {/* Carousel Dots - Functional */}
        {vehicle.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {vehicle.images.map((_, imageIndex) => (
              <button
                key={imageIndex}
                onClick={() => handleImageChange(imageIndex)}
                className={`h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                  currentImageIndex === imageIndex
                    ? "bg-blue-500 w-6"
                    : "bg-white/60 w-2 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Vehicle Name & Price */}
        <div className="border-b-[0.3px] border-[#EBEBEB] pb-2">
          <article className="space-y-2 flex justify-between items-center mb-2">
            <h3     onClick={() => navigate(vehicle.id)} className="text-sm font-normal text-autobuy-neutral-1">
              {vehicle.name}
            </h3>
            <Icon
              icon="prime:check-circle"
              color="#34B233"
              className="size-7"
              width="1.2em"
              height="1.2em"
            />
          </article>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-lg font-semibold text-autobuy-primary2.5">
              {vehicle.price}
            </span>
            {vehicle.isNegotiable && (
              <span className=" bg-autobuy-neutral-6 text-autobuy-neutral-2 px-3 border-[0.3px] border-[#C9C9C9] py-1 rounded-[999px] text-[8px] font-medium">
                Negotiable
              </span>
            )}
          </div>

          <figure className="flex justify-between items-center mt-3">
            {isBulk ? (
              <p className="inline-block text-[#3385FF] text-xs hover:underline font-medium">
                8 units available
              </p>
            ) : (
              <Link
                href="#"
                className="inline-block text-[#3385FF] text-xs hover:underline font-medium"
              >
                Loan Financing Available →
              </Link>
            )}

            <Link
              href="#"
              className="inline-block text-[#3385FF] text-xs hover:underline font-medium"
            >
              Bulk Purchase Available →
            </Link>
          </figure>
        </div>

        {/* Specifications */}
        <div className="flex justify-betwee gap-2 text-xs text-[#4D4C4C] py-2 font-normal">
          <div className="flex items-center gap-1 text-[8px] lg:text-[10px]">
            <Icon
              icon="mdi:speedometer-medium"
              className="text-autobuy-neutral-2"
              width="1.2em"
              height="1.2em"
            />
            <span>{vehicle.specs.mileage}</span>
          </div>
          <div className="flex items-center gap-1 text-[8px] lg:text-[10px]">
            <Icon
              icon="fluent:settings-28-regular"
              className="text-autobuy-neutral-2"
              width="1.2em"
              height="1.2em"
            />
            <span>{vehicle.specs.transmission}</span>
          </div>
          <div className="flex items-center gap-1 text-[8px] lg:text-[10px]">
            <Icon
              icon="mdi:gas-station"
              className="text-autobuy-neutral-2"
              width="1.2em"
              height="1.2em"
            />
            <span>{vehicle.specs.fuel}</span>
          </div>
          <div className="flex items-center gap-1 text-[8px] lg:text-[10px]">
            <Icon
              icon="mdi:map-marker"
              className="text-autobuy-neutral-2"
              width="1.2em"
              height="1.2em"
            />
            <span>{vehicle.specs.location}</span>
          </div>
        </div>

        {/* Services */}
        <div className="flex  gap-2 ">
          <div className="flex items-center gap-1 bg-[#F5F9FF] text-autobuy-primary2.5 px-2 md:px-1 lg:px-1.5  py-1 rounded-[8px] text-[8px] font-medium border-[0.2px] border-[#66A3FF]">
            <Icon icon="mage:file-check" width="1.2em" height="1.2em" />
            <span>150+ Point Inspection</span>
          </div>

          <div className="flex items-center gap-1 bg-[#F5F9FF] text-autobuy-primary2.5 px-2 md:px-1 lg:px-1.5  py-1 rounded-[8px] text-[8px] font-medium border-[0.2px] border-[#66A3FF]">
            <Icon icon="fluent:video-32-light" width="1.2em" height="1.2em" />
            <span>Video Tour</span>
          </div>

          <div className="flex items-center gap-1 bg-[#F5F9FF] text-autobuy-primary2.5 px-2 md:px-1 lg:px-1.5 py-1 rounded-[8px] text-[8px] font-medium border-[0.2px] border-[#66A3FF]">
            <Icon
              icon="solar:document-text-linear"
              width="1.2em"
              height="1.2em"
            />
            <span>Full History Report</span>
          </div>
        </div>

        {/* Actions */}
        {!isBulk && (
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <label className="flex items-center gap-2 text-base  text-autobuy-neutral-2 border-[0.3px] border-autobuy-neutral-3  rounded-[12px] px-3 py-1  cursor-pointer">
              <input
                type="checkbox"
                checked={isCompared}
                onChange={handleToggleCompare}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="font-medium">Compare</span>
            </label>

            <Link
              href={`/vehicle/${vehicle.id}`}
              className=" text-autobuy-primary2.5 italic text-base font-medium hover:underline hover:text-blue-700 transition-colors duration-200"
            >
              View Details
            </Link>
          </div>
        )}
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes card-appear {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-card-appear {
          animation: card-appear 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
