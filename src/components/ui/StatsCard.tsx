import React from "react";
import { Icon } from "@iconify/react";

interface StatsCardProps {
  title: string;
  value: string | number;
  description: string | React.ReactNode;
  icon: string;
  bgColor: string;
  iconBgColor?: string;
  textColor?: string;
  iconColor?: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  description,
  icon,
  bgColor,
  iconBgColor = "bg-white bg-opacity-20",
  textColor = "text-white",
  iconColor,
  trend,
}) => {
  return (
    <div
      data-aos="fade-in"
      className={`${bgColor} rounded-2xl p-6 relative overflow-hidden `}
    >
      {/* Icon */}
      <figure className="flex items-center gap-5 ">
        <div
          className={`${iconBgColor} w-10 h-10 rounded-full flex items-center justify-center `}
        >
          <Icon icon={icon} className={`w-5 h-5 ${iconColor || textColor}`} />
        </div>

        <h3 className={`${textColor} text-sm font-medium opacity-70`}>
          {title}
        </h3>
      </figure>

      {/* Content */}
      <div className="space-y-4 mt-4">
        <p className={`${textColor} text-[20px] font-[500]`}>{value}</p>
        <div className={`${textColor} text-xs`}>{description}</div>
      </div>

      {/* Trend Indicator */}
      {trend && (
        <div
          className={`absolute bottom-1 right-4 flex items-center space-x-1 bg-autobuy-green-4 px-2 py-1 rounded-lg`}
        >
          <Icon
            icon={trend.isPositive ? "mdi:trending-up" : "mdi:trending-down"}
            className={`w-4 h-4 ${
              trend.isPositive ? "text-green-600" : "text-red-600"
            }`}
          />
          <span
            className={`text-xs font-medium ${
              trend.isPositive ? "text-green-600" : "text-red-600"
            }`}
          >
            {trend.value}
          </span>
        </div>
      )}
    </div>
  );
};

export default StatsCard;
