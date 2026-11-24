import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

interface Car {
  id: number;
  name: string;
  price: string;
  image: string;
  tags: string[];
  specs: Array<{ label: string; value: string; icon: string }>;
  additionalFeatures: string[];
}

interface CarComparisonCardProps {
  car: Car;
}

const CarComparisonCard: React.FC<CarComparisonCardProps> = ({ car }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [car.image, car.image, car.image, car.image, car.image]; // Multiple images for demonstration

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="bg-white rounded-[12px] border border-gray-200 overflow-hidden shadow-sm max-w-sm space-y-4">
      {/* Car Image */}
      <div className="relative group">
        <img
          src={images[currentImageIndex]}
          alt={car.name}
          className="w-full h-48 object-cover"
        />

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Icon icon="mdi:chevron-left" className="w-5 h-5" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Icon icon="mdi:chevron-right" className="w-5 h-5" />
        </button>

        {/* Action Icons */}
        <div className="absolute top-3 right-3 space-y-2 space-x-2">
          <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-colors text-autobuy-primary2.5">
            <Icon icon="mdi:heart-outline" className="w-4 h-4" />
          </button>
          <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-colors text-autobuy-primary2.5">
            <Icon
              icon="streamline-ultimate:car-3"
              width="1.2em"
              height="1.2em"
            />
          </button>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentImageIndex
                  ? "bg-blue-500"
                  : "bg-white/50 border"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Car Details */}
      <div className="px-3 py-2">
        {/* Header with verification */}
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-normal text-[12px] text-autobuy-neutral-1">
            {car.name}
          </h3>
          <Icon icon="la:check-circle" className="w-5 h-5 text-green-500" />
        </div>

        {/* Price */}
        <div className="text-sm font-semibold text-autobuy-primary2.5 mb-1">
          {car.price}
        </div>

        {/* Loan Financing */}
        <p className="text-[8px] text-autobuy-neutral-2 mb-">
          Loan Financing Available
        </p>

        {/* tags */}
        <div className="flex  gap-2 py-2">
          <div className="flex items-center gap-1 bg-[#F5F9FF] text-autobuy-primary2.5 px-2 md:px-1 lg:px-2 py-1 rounded-[8px] text-[7px] font-medium border-[0.2px] border-[#66A3FF]">
            <Icon icon="mage:file-check" width="1.2em" height="1.2em" />
            <span>150+ Point Inspection</span>
          </div>

          <div className="flex items-center gap-1 bg-[#F5F9FF] text-autobuy-primary2.5 px-2 md:px-1 lg:px-2 py-1 rounded-[8px] text-[7px] font-medium border-[0.2px] border-[#66A3FF]">
            <Icon icon="fluent:video-32-light" width="1.2em" height="1.2em" />
            <span>Video Tour</span>
          </div>

          <div className="flex items-center gap-1 bg-[#F5F9FF] text-autobuy-primary2.5 px-2 md:px-1 lg:px-2 py-1 rounded-[8px] text-[7px] font-medium border-[0.2px] border-[#66A3FF]">
            <Icon
              icon="solar:document-text-linear"
              width="1.2em"
              height="1.2em"
            />
            <span>Full History Report</span>
          </div>
        </div>

        {/* Specifications */}
        <div className="space-y-2 mb-4">
          {car.specs.map((spec, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-sm py-3 border-b border-[#CCE0FF] rounded-lg"
            >
              <div className="flex items-center gap-2 text-gray-600">
                <Icon icon={spec.icon} className="w-4 h-4 text-gray-400" />
                <span className="text-autobuy-neutral-2 text-xs">
                  {spec.label}:
                </span>
              </div>
              <span className="font-medium text-autobuy-neutral-1 text-xs">
                {spec.value}
              </span>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-[#333333] mb-2">
            Additional Features
          </h4>
          <div className="space-y-1">
            {car.additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-autobuy-neutral-1"
              >
                <div
                  style={{
                    background:
                      "linear-gradient(181.51deg, #FAFCFF -9.57%, #BDD7FF 21.74%, #0067FF 90.61%, #064199 155.02%)",
                  }}
                  className="w-3 h-3 rounded-full"
                ></div>
                <span className="text-xs text-autobuy-neutral-1">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <button className="text-sm text-autobuy-neutral-1 hover:text-red-500 transition-colors flex items-center gap-1 font-medium italic font-helvetica">
            <span>Remove</span>
            <Icon icon="mdi:close" className="w-3 h-3" />
          </button>
          <button className="text-sm text-autobuy-primary2.5 hover:text-blue-700 flex items-center gap-1 font-medium italic font-helvetica">
            <span>View Full Vehicle Details</span>
            <Icon icon="mdi:arrow-right" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarComparisonCard;
