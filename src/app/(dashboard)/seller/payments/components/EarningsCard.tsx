import React from "react";
import { Icon } from "@iconify/react";

interface EarningsCardProps {
  title: string;
  amount: string;
  subtitle: string;
  icon: string;
  iconColor: string;
  subtitleColor?: string;
  changeIndicator?: {
    value: string;
    trend: "up" | "down";
  };
}

const EarningsCard: React.FC<EarningsCardProps> = ({
  title,
  amount,
  subtitle,
  icon,
  iconColor,
  subtitleColor = "text-blue-600",
  changeIndicator,
}) => {
  return (
    <div className="bg-white rounded-[16px] border border-gray-200 px-6 py-2 flex items-center justify-center">
        <div className="flex-1 min-w-0 space-y-2 my-auto">
          <article className="flex items-center gap-3">
            {" "}
            <div className="flex-shrink-0 bg-[#FEF2EC] p-2 rounded-full">
              <Icon icon={icon} className={`w-5 h-5 ${iconColor}`} />
            </div>
            <h3 className="text-sm font-medium text-gray-900 ">{title}</h3>
          </article>
          <p className="text-2xl font-bold text-gray-900 mb-1">{amount}</p>
          <div className="flex items-center space-x-2 relative">
            <p className={`text-sm ${subtitleColor}`}>{subtitle}</p>
            {changeIndicator && (
              <span
                className={`text-[8px] font-medium flex items-center absolute right-0 bottom-0  rounded-full py-1  px-2 ${
                  changeIndicator.trend === "up"
                    ? "bg-[#E5FBE4] text-[#34B233]"
                    : "bg-red-600 text-white"
                }`}
              >
                <Icon
                  icon={
                    changeIndicator.trend === "up"
                      ? "mdi:arrow-up"
                      : "mdi:arrow-down"
                  }
                  className="w-3 h-3 mr-1"
                />
                {changeIndicator.value}
              </span>
            )}
          </div>
        </div>
    </div>
  );
};

export default EarningsCard;
