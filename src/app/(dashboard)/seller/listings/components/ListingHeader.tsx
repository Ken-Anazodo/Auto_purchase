"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useRouter, useSearchParams } from "next/navigation";

const ListingHeader: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const viewParam = searchParams.get("view");
  const [viewMode, setViewMode] = useState<"grid" | "list">(
    viewParam === "list" || viewParam === "grid" ? viewParam : "grid"
  );



  const handleAddCar = () => {
    console.log("Add car clicked");
  };



  const handleViewModeChange = (mode: "grid" | "list") => {
    setViewMode(mode);
    


    const params = new URLSearchParams(searchParams);
    params.set("view", mode);
    router.push(`?${params.toString()}`, { scroll: false });
  };



  return (
    <div className="flex flex-col justify-between mb-6 space-y-8">
      <h1 className="text-base text-autobuy-neutral-1 font-normal">
        View and manage all your cars uploaded for sales
      </h1>

      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center bg-whit border border-gray-300 rounded-[12px] py-1 px-2 gap-x-3">
          {/* Grid View */}
          <button
            onClick={() => handleViewModeChange("grid")}
            className={`p-2 rounded-md transition-colors ${
              viewMode === "grid"
                ? "bg-[#EDF4FF] text-[#0A6DFF]"
                : "text-[#808080] bg-[#EBEBEB] hover:text-gray-800 hover:bg-gray-50"
            }`}
            aria-label="Grid view"
          >
            <Icon icon="mage:dashboard" className="w-7 h-7" />
          </button>

          {/* List View */}
          <button
            onClick={() => handleViewModeChange("list")}
            className={`p-2 rounded-md transition-colors ${
              viewMode === "list"
                        ? "bg-[#EDF4FF] text-[#0A6DFF]"
                : "text-[#808080] bg-[#EBEBEB] hover:text-gray-800 hover:bg-gray-50"
            }`}
            aria-label="List view"
          >
            <Icon icon="mynaui:table" className="w-7 h-7"  />
          </button>
        </div>

        <button
          onClick={handleAddCar}
          className="flex items-center gap-2 bg-autobuy-orange-1 hover:bg-orange-600 text-white font-semibold px-4 py-2.5 rounded-[12px] text-base transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          <Icon icon="mdi:plus" className="w-6 h-6" />
          Add Another Car
        </button>
      </div>
    </div>
  );
};

export default ListingHeader;
