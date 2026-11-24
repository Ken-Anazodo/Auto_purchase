"use client";

import { Icon } from "@iconify/react";
import React from "react";

interface VehicleStatsProps {
  stats: {
    inspection: string;
    history: string;
    payment: string;
    mileage: string;
    transmission: string;
    bodyType: string;
    fuelType: string;
    engineType: string;
    condition: string;
  };
}

const VehicleStats: React.FC<VehicleStatsProps> = ({ stats }) => {
  const statItems = [
    { icon: "mdi-light:file", label: "Inspection", value: stats.inspection },
    { icon: "mage:file-2", label: "History", value: stats.history },
    { icon: "solar:card-broken", label: "Payment", value: stats.payment },
    { icon: "carbon:meter", label: "Mileage", value: stats.mileage },
    {
      icon: "lsicon:setting-outline",
      label: "Transmission",
      value: stats.transmission,
    },
    {
      icon: "streamline-ultimate:car-3",
      label: "Body Type",
      value: stats.bodyType,
    },
    { icon: "bi:fuel-pump", label: "Fuel Type", value: stats.fuelType },
    { icon: "hugeicons:engine", label: "Engine Type", value: stats.engineType },
    { icon: "gg:check-o", label: "Condition", value: stats.condition },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 md:gap-8 gap-3 mb-8">
      {statItems.map((item, index) => (
        <div
          key={index}
          className="p-2 md:p-3 bg-white rounded-xl border border-autobuy-neutral-6 shadow-sm flex items-center gap-2"
        >
          <span className="flex items-center justify-center size-8 md:size-9 bg-[#EDF4FF] border border-autobuy-blue-5 rounded-[12px]">
            <Icon
              icon={`${item.icon}`}
              width="1.2em"
              height="1.2em"
              className="md:w-5 w-4 text-autobuy-primary2.5"
            />
          </span>
          <figure>
            <div className="text-[10px] text-autobuy-neutral-2 font-normal">
              {item.label}
            </div>
            <div className=" text-[12px] md:text-[14px] text-autobuy-neutral-1 font-normal">
              {item.value}
            </div>
          </figure>
        </div>
      ))}
    </div>
  );
};

export default VehicleStats;
