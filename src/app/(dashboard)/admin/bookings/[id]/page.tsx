"use client";

import React from "react";
import { useRouter, useParams } from "next/navigation";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import InspectionVehiclesTable from "./components/InspectionVehiclesTable";

const InspectionVehiclesPage = () => {
  const router = useRouter();
  const params = useParams();

  // Mocking name fetch based on ID if needed, or just using static for now as per design
  const inspectionName = "Mr Akeem John"; 

  return (
    <div className=" space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
            <button 
                onClick={() => router.back()}
                className="text-gray-500 hover:text-gray-700 transition-colors"
            >
                <Icon icon="mdi:arrow-left" className="w-6 h-6" />
            </button>
            <h1 className="text-[18px] md:text-2xl font-[500] text-[#4D4C4C]">
                Vehicle Listings under this Inspection ({inspectionName})
            </h1>
        </div>

        <div className="flex items-center gap-3">
             <Button className="bg-[#0A6DFF] hover:bg-blue-600 text-white h-10 px-5 rounded-lg font-medium">
                Book Inspection
             </Button>
             <Button 
                variant="outline" 
                className="border-[#0A6DFF] text-[#0A6DFF] hover:bg-blue-50 h-10 px-5 rounded-lg font-medium flex items-center gap-2"
                onClick={() => console.log("Add another vehicle")}
             >
                <Icon icon="mdi:plus" className="w-5 h-5" />
                Add another vehicle
             </Button>
        </div>
      </div>

      {/* Table */}
      <InspectionVehiclesTable onViewVehicle={(id) => console.log("View", id)} />

    </div>
  );
};

export default InspectionVehiclesPage;
