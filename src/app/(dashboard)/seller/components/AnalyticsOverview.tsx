"use client";

import React from "react";
import { Icon } from "@iconify/react";
import PerformanceOverviewChart from "../analytics/components/PerformanceOverviewChart";

const CreateActions = () => {
  return (
    <div className="md:flex hidden items-center gap-4 flex-wrap ">
      {/* Book an Inspection */}
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-[12px] text-sm font-medium transition-all duration-200 flex items-center gap-2 min-w-fit">
        <Icon icon="mdi:calendar-check" className="w-4 h-4" />
        Book an Inspection
      </button>

      {/* Add a Vehicle */}
      <button className="bg-orange-100 hover:bg-orange-200 text-orange-600 px-6 py-3 rounded-[12px] text-sm font-medium transition-all duration-200 flex items-center gap-2 min-w-fit border border-orange-200">
        <Icon icon="mdi:plus" className="w-4 h-4" />
        Add a Vehicle
      </button>

      {/* View Analytics */}
      <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-[12px] text-sm font-medium transition-all duration-200 flex items-center gap-2 min-w-fit">
        <Icon icon="mdi:chart-line" className="w-4 h-4" />
        View Analytics
      </button>
    </div>
  );
};

const AnalyticsOverview = () => {
  return (
    <figure>
      <PerformanceOverviewChart
        hideClass="hidden"
        actionBtns={<CreateActions />}
      />
    </figure>
  );
};

export default AnalyticsOverview;
