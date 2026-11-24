"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import SalesTable from "./components/SalesTable";
import Pagination from "@/components/Pagination";

const SalesPaymentsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; // Mock total pages

  return (
    <div className="">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-bold text-autobuy-neutral-1">Sales & payments</h1>
        <p className="text-sm text-autobuy-neutral-3 mt-1">
          View all sales activities and payment transactions across the platform.
        </p>
      </div>

      {/* Controls Toolbar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        {/* Search */}
        <div className="relative w-full md:w-[320px]">
          <Icon
            icon="mdi:magnify"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-autobuy-neutral-4 w-5 h-5 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search by seller, listing id..."
            className="w-full pl-11 pr-4 py-2.5 rounded-lg border border-autobuy-neutral-6 focus:outline-none focus:ring-1 focus:ring-autobuy-blue-2 focus:border-autobuy-blue-2 text-sm text-autobuy-neutral-1 placeholder:text-autobuy-neutral-4 transition-all bg-white"
          />
        </div>

        {/* Filters & Actions */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-transparent hover:bg-gray-50 rounded-lg text-sm font-medium text-autobuy-primary2.5 transition-colors">
            <Icon icon="mdi:filter-variant" className="w-5 h-5" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-transparent hover:bg-gray-50 rounded-lg text-sm font-medium text-autobuy-primary2.5 transition-colors">
            <Icon icon="mdi:sort-variant" className="w-5 h-5" />
            Sort by
          </button>
        </div>
      </div>

      {/* Table */}
      <SalesTable />

      {/* Pagination */}
      <div className="flex justify-end pt-6">
         <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            size="sm"
            showPrevNext={true}
            maxVisiblePages={3}
         />
      </div>
    </div>
  );
};

export default SalesPaymentsPage;