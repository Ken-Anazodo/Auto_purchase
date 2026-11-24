"use client";

import React from "react";
import VehicleOverview, { VehicleData } from "./VehicleOverview";
import VehicleFeatures from "./VehicleFeatures";
import InspectionReport from "./InspectionReport";
import CarHistory from "./CarHistory";

interface ProductTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabs: string[];
}

const ProductTabs: React.FC<ProductTabsProps> = ({
  activeTab,
  setActiveTab,
  tabs,
}) => {
  const vehicleData: VehicleData = {
    year: "2018",
    transmission: "Automatic",
    condition: "Good",
    make: "Toyota",
    bodyType: "Sedan",
    vin: "21548566242***45",
    model: "Camry XLE",
    driveTrain: "FWD",
    fuelType: "Petrol",
    trim: "XLE",
    interiorColor: "Black",
    mileage: "45,000 km",
    exteriorColor: "Silver",
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Car History":
        return <CarHistory />;
      case "Vehicle Summary":
        return <VehicleOverview vehicleData={vehicleData} />;

      case "Car Features":
        return <VehicleFeatures />;
      case "Inspection Report":
        return <InspectionReport />;
      default:
        return (
          <div className="text-center py-8 text-slate-500">
            {activeTab} content coming soon...
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-[15px] px-8 mb-10 shadow-md overflow-hidden">
      <div className="flex border-b border-slate-100 gap-10 md:gap-20 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-0 py-4 text-base font-medium whitespace-nowrap ${
              activeTab === tab
                ? "tab-active text-blue-600 border-b-2 border-blue-600"
                : "text-slate-500 hover:text-slate-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="py-8">{renderTabContent()}</div>
    </div>
  );
};

export default ProductTabs;
