"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import BackButton from "@/components/BackButton";

const NotificationPage = () => {
  const router = useRouter();

  const notificationGroups = [
    {
      date: "November 12, 2025",
      items: [
        {
          id: 1,
          title: "Notification Title",
          body: "Notification body and details",
          time: "2hrs ago",
          unread: true,
        },
        {
          id: 2,
          title: "Notification Title",
          body: "Notification body and details",
          time: "2hrs ago",
          unread: true,
        },
        {
          id: 3,
          title: "Notification Title",
          body: "Notification body and details",
          time: "2hrs ago",
          unread: false,
        },
      ],
    },
    {
      date: "November 12, 2025",
      items: [
        {
          id: 4,
          title: "Notification Title",
          body: "Notification body and details",
          time: "2hrs ago",
          unread: true,
        },
        {
          id: 5,
          title: "Notification Title",
          body: "Notification body and details",
          time: "2hrs ago",
          unread: true,
        },
        {
          id: 6,
          title: "Notification Title",
          body: "Notification body and details",
          time: "2hrs ago",
          unread: false,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pb-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <BackButton/>
        <h1 className="text-xl font-medium text-autobuy-neutral-1 mx-auto">
          Notifications & Updates
        </h1>

      </div>

       <div className="flex justify-end mb-6">
             <button className="px-3 py-1.5 text-sm font-normal text-autobuy-primary2.5 border-[0.5px] border-autobuy-primary2.5 rounded-[12px] hover:bg-blue-50 transition-colors">
                Mark all As Read
             </button>
       </div>

      {/* Notifications List */}
      <div className="space-y-8">
        {notificationGroups.map((group, groupIndex) => (
          <div key={groupIndex}>
            <h3 className="text-sm font-medium text-autobuy-neutral-1 mb-4 ml-1">
              {group.date}
            </h3>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              {group.items.map((item, itemIndex) => (
                <div
                  key={item.id}
                  className={`flex flex-col sm:flex-row gap-4 p-6 hover:bg-gray-50/50 transition-colors ${
                    itemIndex !== group.items.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }`}
                >
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                      <Icon icon="heroicons:bell" className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 pt-1">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div>
                        <h4 className="text-base font-medium text-autobuy-neutral-1 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-autobuy-neutral-2">{item.body}</p>
                      </div>

                      <div className="flex flex-col items-center gap-3 shrink-0">
                        {item.unread && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-600 border border-blue-100">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                            Unread
                          </span>
                        )}
                        <span className="text-[10px] text-autobuy-neutral-2 font-medium">
                          {item.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;
