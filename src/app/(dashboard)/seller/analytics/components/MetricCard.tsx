"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: string;
  iconColor: string;
  iconBgColor: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
}

export function MetricCard({
  title,
  value,
  subtitle,
  icon,
  iconColor,
  iconBgColor,
  change,
  changeType = "neutral",
}: MetricCardProps) {
  const getChangeColor = () => {
    switch (changeType) {
      case "positive":
        return "text-green-600";
      case "negative":
        return "text-red-600";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="bg-white rounded-[15px]  py-2 px-4 border border-gray-100 shadow-white shadow-md hover:shadow-sm transition-shadow relative">
      <div className="flex items-start justify-between mb-2">
        <div
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center",
            iconBgColor
          )}
        >
          <Icon icon={icon} className={cn("w-5 h-5", iconColor)} />
        </div>
        {change && (
          <div
            className={cn(
              "text-[8px] text-[#34B233] bg-[#E5FBE4] px-2 py-1 rounded-full font-medium flex items-center gap-1 absolute right-1 bottom-1",
              getChangeColor()
            )}
          >
            <Icon
              icon={
                changeType === "positive"
                  ? "mdi:trending-up"
                  : "mdi:trending-down"
              }
              className="w-4 h-4"
            />
            {change}
          </div>
        )}
      </div>

      <div className="space-y-1">
        <h3 className="text-sm font-medium text-autobuy-neutral-2">{title}</h3>
        <p className="text-lg text-autobuy-neutral-1 font-semibold">{value}</p>
        <p className="text-[9px] text-autobuy-neutral-2">{subtitle}</p>
      </div>
    </div>
  );
}
