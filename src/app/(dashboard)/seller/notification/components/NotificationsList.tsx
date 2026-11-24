"use client";

import React from "react";
import NotificationItem from "./NotificationItem";



export interface Notification {
  id: string;
  title: string;
  body: string;
  timestamp: string;
  isUnread: boolean;
  type: "info" | "warning" | "success" | "error";
}

interface NotificationGroup {
  date: string;
  notifications: Notification[];
}

const NotificationsList: React.FC = () => {
  const notificationGroups: NotificationGroup[] = [
    {
      date: "November 12, 2025",
      notifications: [
        {
          id: "1",
          title: "Notification Title",
          body: "Notification body and details",
          timestamp: "2hrs ago",
          isUnread: true,
          type: "info",
        },
        {
          id: "2",
          title: "Notification Title",
          body: "Notification body and details",
          timestamp: "2hrs ago",
          isUnread: true,
          type: "warning",
        },
        {
          id: "3",
          title: "Notification Title",
          body: "Notification body and details",
          timestamp: "2hrs ago",
          isUnread: false,
          type: "info",
        },
      ],
    },
    {
      date: "November 16, 2025",
      notifications: [
        {
          id: "4",
          title: "Notification Title",
          body: "Notification body and details",
          timestamp: "2hrs ago",
          isUnread: false,
          type: "success",
        },
        {
          id: "5",
          title: "Notification Title",
          body: "Notification body and details",
          timestamp: "2hrs ago",
          isUnread: false,
          type: "info",
        },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {notificationGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="space-y-4">
          {/* Date Header */}
          <div className="px-6">
            <h2 className="text-base font-semibold text-gray-900">
              {group.date}
            </h2>
          </div>

          {/* Notifications in this date group */}
          <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-100">
            {group.notifications.map((notification, index) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                isFirst={index === 0}
                isLast={index === group.notifications.length - 1}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationsList;
