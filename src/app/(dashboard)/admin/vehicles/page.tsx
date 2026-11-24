"use client";

import React, { useState } from "react";
import VehiclesTable from "./components/VehiclesTable";
import Pagination from "@/components/Pagination";
import { Icon } from "@iconify/react";
import { Input } from "@/components/ui/input";

const VehiclesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; // Mock total pages

  const handleViewVehicle = (id: string) => {
    console.log("View Vehicle", id);
    // Navigate to details page if needed
  };

  return (
    <div className=" space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-[18px] font-[500] text-[#1A1A1A]">All Vehicles</h1>
        <p className="text-[14px] font-[500] text-[#6B6B6B]">View and manage all vehicles listed on the platform</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative w-full md:w-96">
          <Icon 
            icon="mdi:magnify" 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" 
          />
          <Input 
            placeholder="Search vehicle by type, year..." 
            className="pl-10 h-12 rounded-lg border-gray-200 bg-white"
          />
        </div>
      </div>

      {/* Table */}
      <VehiclesTable 
        onViewVehicle={handleViewVehicle}
      />

      {/* Pagination */}
      <div className="flex justify-center pt-4">
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={setCurrentPage}
          size="sm"
        />
      </div>
    </div>
  );
};

export default VehiclesPage;