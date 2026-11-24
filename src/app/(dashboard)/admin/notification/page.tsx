"use client";

import React, { useState } from "react";
import BackButton from "@/components/BackButton";
import { Icon } from "@iconify/react";
import NotificationsList from "./components/NotificationsList";

const NotificationsPage = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "System", "Users", "Payments", "Vehicles"];

  return (
    <div className="  mx-auto">
      {/* Header */}
      <div className="md:flex  space-y-2 items-center  justify-between mb-8 ">
        <BackButton text="Back to Home" /> {/* Using existing BackButton */}
        <h1 className="text-[20px] font-[500] text-[#1A1A1A] ">
          Notifications & Activities
        </h1>
        <div className="w-[100px]"></div> {/* Spacer for centering */}
      </div>

      {/* Tabs & Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-gray-100 pb-4">
        {/* Tabs */}
        <div className="flex items-center gap-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-[16px] font-[400] transition-colors border-b-2 ${
                activeTab === tab
                  ? "border-[#0A6DFF] text-[#0A6DFF]"
                  : "border-transparent text-[#6B6B6B] hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Filter:</span>
            <button className="flex items-center gap-1 border border-gray-200 rounded-lg px-3 py-1.5 bg-white hover:bg-gray-50">
              Last 10 days
              <Icon icon="mdi:chevron-down" className="w-4 h-4" />
            </button>
          </div>
          <button className="flex items-center gap-2 text-autobuy-orange-1 border border-autobuy-orange-1/30 bg-orange-50/50 px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-orange-50 transition-colors">
            <Icon icon="mdi:check-all" className="w-4 h-4" />
            Mark all as Read
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-8 max-w-[700px]">
        <Icon
          icon="mdi:magnify"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
        />
        <input
          type="text"
          placeholder="Search notifications..."
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-autobuy-blue-2/20 focus:border-autobuy-blue-2 transition-all placeholder:text-gray-400 text-sm"
        />
      </div>

      {/* List */}
      <NotificationsList />
    </div>
  );
};

export default NotificationsPage;