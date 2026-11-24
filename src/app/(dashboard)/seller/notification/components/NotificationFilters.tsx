"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";

interface FilterOption {
  value: string;
  label: string;
}

const NotificationFilters: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("last-10-days");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filterOptions: FilterOption[] = [
    { value: "last-7-days", label: "Last 7 days" },
    { value: "last-10-days", label: "Last 10 days" },
    { value: "last-30-days", label: "Last 30 days" },
    { value: "all-time", label: "All time" },
  ];

  const selectedOption = filterOptions.find(
    (option) => option.value === selectedFilter
  );

  const handleMarkAllAsRead = () => {
    // Handle mark all as read logic
    console.log("Mark all as read");
  };

  return (
    <div className="">
      <div className="flex items-center  justify-end gap-10">
        {/* Filter Dropdown */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-700">Filter:</span>

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 rounded-lg hover:border-gray-400 transition-colors bg-white"
            >
              <span className="text-gray-700">{selectedOption?.label}</span>
              <Icon
                icon="mdi:chevron-down"
                className={`w-4 h-4 text-gray-500 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <div className="py-1">
                  {filterOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSelectedFilter(option.value);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        selectedFilter === option.value
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mark All as Read Button */}
        <button
          onClick={handleMarkAllAsRead}
          className="px-4 py-2 text-sm font-medium text-orange-600 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors border border-orange-200"
        >
          Mark all as Read
        </button>
      </div>
    </div>
  );
};

export default NotificationFilters;
