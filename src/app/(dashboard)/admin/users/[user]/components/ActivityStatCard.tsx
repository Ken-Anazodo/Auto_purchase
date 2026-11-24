"use client";

import React from "react";
import { Icon } from "@iconify/react";

interface ActivityStatCardProps {
  icon: string;
  iconColor: string;
  iconBgColor: string;
  title: string;
  value: string | number;
  description: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
}

const ActivityStatCard: React.FC<ActivityStatCardProps> = ({
  icon,
  iconColor,
  iconBgColor,
  title,
  value,
  description,
  trend,
}) => {
  return (
    <div className="bg-white border border-autobuy-neutral-6 rounded-2xl p-5 flex flex-col justify-between h-full">
      <div className="flex items-start justify-between mb-2">
        <div className={`${iconBgColor} ${iconColor} p-2 rounded-xl`}>
          <Icon icon={icon} className="w-5 h-5" />
        </div>
      </div>
      
      <div>
        <span className="text-sm font-medium text-gray-500 block mb-1">{title}</span>
        <div className="flex items-end gap-2 mb-1">
            <span className="text-2xl font-bold text-gray-900">{value}</span>
            {trend && (
                <div className={`text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5 mb-1 ${
                    trend.isPositive ? "bg-autobuy-green-4 text-autobuy-green-1" : "bg-autobuy-red-3 text-autobuy-red-1"
                }`}>
                    <Icon icon={trend.isPositive ? "mdi:arrow-up" : "mdi:arrow-down"} className="w-3 h-3" />
                    {trend.value}
                </div>
            )}
        </div>
        <p className="text-[11px] text-gray-400 leading-tight">
            {description}
        </p>
      </div>
    </div>
  );
};

export default ActivityStatCard;
