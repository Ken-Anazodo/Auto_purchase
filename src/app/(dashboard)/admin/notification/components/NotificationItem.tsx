"use client";

import React from "react";
import { Icon } from "@iconify/react";

interface NotificationItemProps {
  title: string;
  description: string;
  time: string;
  isUnread?: boolean;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  title,
  description,
  time,
  isUnread,
}) => {
  return (
    <div className="flex items-start justify-between p-4 bg-white border border-gray-100 hover:border-autobuy-blue-2/30 hover:shadow-sm transition-all rounded-2xl cursor-pointer group">
      <div className="flex gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-autobuy-blue-6/80 flex items-center justify-center text-autobuy-blue-2 group-hover:scale-105 transition-transform">
           {/* Using bell icon as placeholder, image generally shows a bell or similar */}
          <Icon icon="solar:bell-linear" className="w-6 h-6" />
        </div>

        {/* Content */}
        <div className="pt-0.5">
          <h3 className="text-[16px] font-[500] text-[#1A1A1A]">{title}</h3>
          <p className="text-[12px] font-[400] text-[#4D4C4C] mt-1 line-clamp-1">{description}</p>
        </div>
      </div>

      {/* Meta (Unread / Time) */}
      <div className="flex flex-col items-end justify-between h-full gap-2 pt-1">
        <div className="min-h-[20px]"> {/* Spacer to keep time at bottom if badge present? Actually badge is top right usually */}
            {isUnread && (
            <div className="flex items-center gap-1.5 px-3 py-1 bg-autobuy-blue-6 text-[#0A6DFF] rounded-full text-[10px] font-semibold border border-autobuy-blue-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A6DFF]"></span>
                Unread
            </div>
            )}
        </div>
        <span className="text-[10px] text-[#4D4C4C] font-[500]">{time}</span>
      </div>
    </div>
  );
};

export default NotificationItem;
