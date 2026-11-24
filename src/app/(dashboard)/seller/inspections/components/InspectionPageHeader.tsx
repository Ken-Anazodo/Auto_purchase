import React from "react";
import Link from "next/link";

interface InspectionPageHeaderProps {
  activeTab: "upcoming" | "history";
  onTabChange: (tab: string) => void;
}

const InspectionPageHeader: React.FC<InspectionPageHeaderProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="w-full bg-white border-b border-gray-200 ">
      {/* Header with tabs and button */}
      <div className="sm:flex items-center justify-between px-6 py-4 ">
        {/* Tabs Section */}
        <div className="flex items-center space-x-8 md:mb-0 mb-4">
          <button
            onClick={() => onTabChange("upcoming")}
            className={`pb-2 text-sm font-medium border-b-2 transition-colors duration-200 ${
              activeTab === "upcoming"
                ? "text-orange-500 border-orange-500"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            Upcoming Inspections
          </button>

          <button
            onClick={() => onTabChange("history")}
            className={`pb-2 text-sm font-medium border-b-2 transition-colors duration-200 ${
              activeTab === "history"
                ? "text-orange-500 border-orange-500"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            History
          </button>
        </div>

        {/* Book an Inspection Button */}
        <Link
          href="/seller/inspections/booking"
          className="bg-autobuy-orange-1 hover:bg-autobuy-orange-2 text-white px-6 py-2.5 rounded-lg font-medium transition-colors duration-200 shadow-sm"
        >
          Book an Inspection
        </Link>
      </div>
    </div>
  );
};

export default InspectionPageHeader;
