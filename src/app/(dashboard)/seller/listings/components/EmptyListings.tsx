"use client";

import React from "react";
import { Icon } from "@iconify/react";

const EmptyListings: React.FC = () => {
  const handleBookInspection = () => {
    // Handle booking inspection logic
    console.log("Book inspection clicked");
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      {/* Car Icon */}
      <div className="mb-8">
        <Icon
          icon="mdi:car-outline"
          className="w-24 h-24 text-orange-400 mx-auto"
        />
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
      {`  You haven't listed any cars yet`}
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-base mb-8 max-w-md leading-relaxed">
        Start by uploading your first car to get it inspected and listed for
        sale. Tap this button to begin
      </p>

      {/* Call to Action Button */}
      <button
        onClick={handleBookInspection}
        className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-4 rounded-xl text-base transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 w-full max-w-sm"
      >
        Book Your First Inspection
      </button>
    </div>
  );
};

export default EmptyListings;
