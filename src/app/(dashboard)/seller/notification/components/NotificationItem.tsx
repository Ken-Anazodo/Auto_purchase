"use client";

import React from "react";
import { Icon } from "@iconify/react";
import type { Notification } from "./NotificationsList";

interface NotificationItemProps {
  notification: Notification;
  isFirst?: boolean;
  isLast?: boolean;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
  isFirst = false,
  isLast = false,
}) => {
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "success":
        return { icon: "mdi:check-circle-outline", color: "text-green-500" };
      case "warning":
        return { icon: "mdi:alert-outline", color: "text-yellow-500" };
      case "error":
        return { icon: "mdi:alert-circle-outline", color: "text-red-500" };
      default:
        return { icon: "mdi:bell-outline", color: "text-orange-500" };
    }
  };

  const iconConfig = getNotificationIcon(notification.type);

  const handleNotificationClick = () => {
    // Handle notification click logic
    console.log("Notification clicked:", notification.id);
  };

  return (
    <div
      className={`p-6 hover:bg-gray-50 transition-colors cursor-pointer ${
        isFirst ? "rounded-t-2xl" : ""
      } ${isLast ? "rounded-b-2xl" : ""}`}
      onClick={handleNotificationClick}
    >
      <div className="flex items-start gap-4">
        {/* Notification Icon */}
        <div className="flex-shrink-0 mt-1">
          <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center">
            <Icon
              icon={iconConfig.icon}
              className={`w-5 h-5 ${iconConfig.color}`}
            />
          </div>
        </div>

        {/* Notification Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3
                className={`text-sm font-medium ${
                  notification.isUnread ? "text-gray-900" : "text-gray-700"
                }`}
              >
                {notification.title}
              </h3>
              <p
                className={`text-sm mt-1 ${
                  notification.isUnread ? "text-gray-700" : "text-gray-500"
                }`}
              >
                {notification.body}
              </p>
            </div>

            {/* Timestamp and Unread Indicator */}
            <div className="flex items-center flex-col gap-3 ml-4">
              {notification.isUnread && (
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-xs text-red-500 font-medium">
                    Unread
                  </span>
                </div>
              )}
              <span className="text-xs text-gray-500 whitespace-nowrap">
                {notification.timestamp}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
