"use client";

import React from "react";
import { Icon } from "@iconify/react";

interface ProfileNotificationBannerProps {
  isVisible?: boolean;
  percentage?: number;
  title?: string;
  description?: string;
  onComplete?: () => void;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

const ProfileNotificationBanner: React.FC<ProfileNotificationBannerProps> = ({
  isVisible = true,
  percentage = 60,
  title = "Profile completion",
  description = "Please complete your profile",
  onComplete,
  position = "top-right",
}) => {
  if (!isVisible) return null;

  const positionClasses = {
    "top-right": "top-24 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
  };

  const circumference = 2 * Math.PI * 15.9155;
  const strokeDasharray = `${
    (percentage / 100) * circumference
  }, ${circumference}`;

  return (
    <div className={`fixed ${positionClasses[position]} z-0`}>
      <div className="bg-white rounded-[16px] shadow-lg border border-gray-200 p-4 max-w-sm w-full transform transition-all duration-300 hover:shadow-xl">
        <div className="flex items-center justify-between mb-">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <svg
                className="w-8 h-8 transform -rotate-90"
                viewBox="0 0 36 36"
              >
                <path
                  d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                  fill="none"
                  stroke="#E5FBE4"
                  strokeWidth="5"
                />
                <path
                  d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                  fill="none"
                  stroke="#34B233"
                  strokeWidth="5"
                  strokeDasharray={strokeDasharray}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[8px] font-medium text-gray-700">
                  {percentage}%
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-autobuy-neutral-1">{title}</h3>
            </div>
          </div>
        </div>

        <div
          className="flex items-center justify-between cursor-pointer group"
          onClick={onComplete}
        >
          <span className="text-xs text-[#0A6DFF] group-hover:text-blue-700 transition-colors">
            {description}
          </span>
          <Icon
            icon="mdi:chevron-right"
            className="w-5 h-5 text-blue-600 group-hover:text-blue-700 group-hover:translate-x-1 transition-all duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileNotificationBanner;
