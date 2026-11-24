"use client";

import React from "react";
import Link from "next/link";

const RecentActivities = () => {
  const activities = [
    {
      id: 1,
      title: "Vehicle Status Updated",
      description:
        "Seller updated vehicle - Toyota Camry (vin:123456789101112) to sold",
      time: "~2 hours ago",
      type: "orange",
    },
    {
      id: 2,
      title: "Inspection Scheduled",
      description:
        "Inspection booked for Mr Akeem John- Seller on 25th Nov, 2025, 10:45 PM",
      time: "~2 hours ago",
      type: "blue",
    },
    {
      id: 3,
      title: "Inspection Scheduled",
      description:
        "Inspection booked for Mr Akeem John- Seller on 25th Nov, 2025, 10:45 PM",
      time: "~2 hours ago",
      type: "blue",
    },
    {
      id: 4,
      title: "Vehicle Listed",
      description:
        "A new vehicle (Toyota Camry 2018) has been listed successfully",
      time: "~2 hours ago",
      type: "orange",
    },
    {
      id: 5,
      title: "Vehicle Listed",
      description:
        "A new vehicle (Toyota Camry 2018) has been listed successfully",
      time: "~2 hours ago",
      type: "orange",
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 mt-8">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-[18px] font-[500] text-[#1A1A1A]">
          Recent Activities
        </h2>
        <p className="text-[12px] font-[500] text-[#6B6B6B] mt-1">
          Track the latest actions performed across the platform.
        </p>
      </div>

      {/* Activities List */}
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start justify-between p-4 bg-autobuy-neutral-6/30 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex gap-4">
              {/* Status Dot */}
              <div className="mt-1.5 flex-shrink-0">
                <div
                  className={`w-3 h-3 rounded-full ${
                    activity.type === "orange"
                      ? "bg-autobuy-orange-1"
                      : "bg-autobuy-primary2.5"
                  }`}
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-[16px] font-[500] text-[#4D4C4C]">
                  {activity.title}
                </h3>
                <p className="text-[12px] font-[400] text-[#4D4C4C] mt-1">
                  {activity.description}
                </p>
              </div>
            </div>

            {/* Time */}
            <span className="text-[12px] text-[#6B6B6B] italic font-[400] whitespace-nowrap ml-4 mt-1">
              {activity.time}
            </span>
          </div>
        ))}
      </div>

      {/* Footer Link */}
      <div className="mt-6 flex justify-end">
        <Link
          href="#"
          className="text-[#0A6DFF] text-[12px] font-[400] hover:underline"
        >
          View All Activities
        </Link>
      </div>
    </div>
  );
};

export default RecentActivities;
