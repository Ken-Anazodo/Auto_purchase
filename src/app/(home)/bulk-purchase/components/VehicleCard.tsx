import React from "react";
import { Icon } from "@iconify/react";

interface VehicleCardProps {
  vehicle: {
    name: string;
    year: string;
    price: number;
    image: string;
    mileage: string;
    transmission: string;
    fuel: string;
    color: string;
    location: string;
    availability: number;
  };
  className?: string;
}

const VehicleCard: React.FC<VehicleCardProps> = ({
  vehicle,
  className = "",
}) => {
  return (
    <figure
      className={`bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden relative flex flex-col md:flex-row p-4 gap-6 ${className}`}
    >
      {/* Verified Badge */}
      <div className="absolute top-5 right-5 text-[#22C55E]">
        <Icon icon="prime:check-circle" className="text-4xl" />
      </div>

      {/* Image Section */}
      <div className="relative w-full md:w-[280px] lg:w-[320px] aspect-[4/3] md:aspect-auto md:h-[220px] shrink-0 overflow-hidden rounded-2xl bg-gray-100">
        <img
          alt={`${vehicle.name} ${vehicle.year}`}
          className="w-full h-full object-cover"
          src={vehicle.image}
        />

      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col py-1">
        
        {/* Header */}
        <div>
          <h2 className="text-lg font-medium text-autobuy-neutral-1">
            {vehicle.name} {vehicle.year}
          </h2>

          <div className="flex items-baseline mt-1">
            <span className="text-autobuy-primary2.5 font-medium text-xl">
              ₦{vehicle.price.toLocaleString()}
            </span>
            <span className="text-autobuy-neutral-2 text-sm ml-2">(per unit)</span>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-5 text-autobuy-neutral-2 text-sm">
          <div className="flex items-center gap-1.5">
            <Icon icon="pajamas:tachometer" className="text-lg" />
            <span>{vehicle.mileage}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Icon icon="bi:gear-wide" className="text-lg" /> 
            <span>{vehicle.transmission}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Icon icon="bi:fuel-pump" className="text-lg" />
            <span>{vehicle.fuel}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Icon icon="solar:pallete-2-outline" className="text-lg" />
            <span>{vehicle.color}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Icon icon="ion:location-outline" className="text-lg" />
            <span>{vehicle.location}</span>
          </div>
        </div>

        {/* Services Pills */}
        <div className="flex flex-wrap gap-3 mt-6">
          <ServicePill icon="heroicons:document-check" text="150+ Point Inspection" />
          <ServicePill icon="heroicons:video-camera" text="Video Tour" />
          <ServicePill icon="heroicons:clipboard-document-list" text="Full History Report" />
        </div>

        {/* Footer */}
        <div className="mt-auto pt-4">
          <p className="text-autobuy-neutral-1 font-medium text-sm">
            Available units: {vehicle.availability}
          </p>
        </div>
      </div>
    </figure>
  );
};

const ServicePill = ({ icon, text }: { icon: string; text: string }) => (
  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#EFF6FF] text-[#3B82F6] text-xs font-medium border border-blue-100">
    <Icon icon={icon} className="text-sm" />
    <span>{text}</span>
  </div>
);

export default VehicleCard;
