import { Icon } from "@iconify/react";
import React from "react";

const HistoryHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 className="md:text-3xl text-2xl font-semibold text-autobuy-neutral-1 mb-1">
          Vehicle History Report
        </h1>
        <div className="flex items-center gap-2 text-base ">
          <span className="text-autobuy-neutral-2">Verified by Autobuy</span>
          <Icon icon="la:check-circle" className="text-green-500 text-base" />
        </div>
      </div>
      <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#66A3FF] bg-[#EDF4FF] text-autobuy-primary2.5 text-base font-semibold hover:bg-blue-100 transition-colors">
        <span>Download Report</span>
        <Icon icon="heroicons:arrow-down-tray" />
      </button>
    </div>
  );
};

export default HistoryHeader;
