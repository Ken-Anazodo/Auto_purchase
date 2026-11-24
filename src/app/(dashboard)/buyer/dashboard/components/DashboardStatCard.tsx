import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

interface StatCardProps {
  label: string;
  count: number;
  linkText: string;
  href: string;
  icon: string;
  iconColor: string;
  iconBg: string;
}

const DashboardStatCard: React.FC<StatCardProps> = ({
  label,
  count,
  linkText,
  href,
  icon,
  iconColor,
  iconBg,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-4 flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${iconBg} ${iconColor}`}
        >
          <Icon icon={icon} className="text-xl" />
        </div>
        <div>
          <p className="text-base text-autobuy-neutral-2 font-normal">{label}</p>
          <h3 className="text-2xl font-medium text-autobuy-neutral-1 mt-1">{count}</h3>
          <Link
            href={href}
            className="text-[10px] italic font-medium text-autobuy-primary2.5 hover:text-autobuy-blue-1 flex items-center gap-1 mt-auto"
          >
            {linkText}
            <Icon
              icon="heroicons:chevron-double-right"
              className="text-[10px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardStatCard;
