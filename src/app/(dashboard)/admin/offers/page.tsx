"use client";

import React, { useState } from "react";
import OffersTable from "./components/OffersTable";
import Pagination from "@/components/Pagination";
import { Icon } from "@iconify/react";
import { Input } from "@/components/ui/input";

const OffersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; // Mock

  return (
    <div className=" space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <p className="text-sm text-gray-500">Monitor price negotiations between buyers and sellers. View offers, counter-offers, accepted amounts, and payment status.</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative w-full md:w-96">
          <Icon 
            icon="mdi:magnify" 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" 
          />
          <Input 
            placeholder="Search by buyer, seller, vehicle..." 
            className="pl-10 h-12 rounded-lg border-gray-200 bg-white"
          />
        </div>
        <button className="flex items-center gap-2 text-autobuy-blue-2 font-medium bg-white border border-transparent hover:border-gray-200 px-4 py-2 rounded-lg transition-colors">
            <Icon icon="mdi:filter-variant" className="w-5 h-5" />
            Filter
        </button>
      </div>

      {/* Table */}
      <OffersTable />

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

export default OffersPage;