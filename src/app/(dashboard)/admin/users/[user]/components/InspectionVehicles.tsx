"use client";

import React from "react";
import { Icon } from "@iconify/react";

interface InspectionVehiclesProps {
  onBack: () => void;
  onAddVehicle: () => void;
}

const InspectionVehicles: React.FC<InspectionVehiclesProps> = ({ onBack, onAddVehicle }) => {
  const vehicles = [
    {
      id: "12345678",
      vehicle: "Toyota Camry",
      year: "2020",
      vin: "12345678910",
      views: 225,
      actualCost: "₦40,000,000",
      salesCost: "₦45,000,000",
      soldBy: "—",
      status: "Live",
      action: "View",
    },
    {
      id: "12345678",
      vehicle: "Toyota Camry",
      year: "2020",
      vin: "12345678910",
      views: 225,
      actualCost: "₦40,000,000",
      salesCost: "₦45,000,000",
      soldBy: "Autobuy",
      status: "Live",
      action: "View",
    },
    {
      id: "12345678",
      vehicle: "Toyota Camry",
      year: "2020",
      vin: "12345678910",
      views: 225,
      actualCost: "₦40,000,000",
      salesCost: "₦45,000,000",
      soldBy: "Sold by Seller",
      status: "Live",
      action: "View",
    },
    {
      id: "12345678",
      vehicle: "Toyota Camry",
      year: "2020",
      vin: "12345678910",
      views: 225,
      actualCost: "₦40,000,000",
      salesCost: "₦45,000,000",
      soldBy: "Autobuy",
      status: "Live",
      action: "View",
    },
  ];

  return (
    <div>
      {/* Header with Back Button */}
      <div className="flex items-center gap-2 mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
        >
          <Icon icon="mdi:arrow-left" className="w-5 h-5" />
          Inspections & Vehicle Listings (Mr Akeem John)
        </button>
      </div>

      {/* Title and Action */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-base font-medium text-gray-800">Vehicles under this inspection</h3>
        <button 
          onClick={onAddVehicle}
          className="bg-autobuy-blue-2 hover:bg-autobuy-blue-1 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center gap-2"
        >
          <Icon icon="mdi:plus" className="w-5 h-5" />
          Add a vehicle
        </button>
      </div>

      {/* Table */}
      <div className="bg-autobuy-blue-6 bg-opacity-30 rounded-2xl border border-autobuy-neutral-6 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="bg-autobuy-blue-6 bg-opacity-50 text-left">
                <th className="py-4 px-6 text-sm font-medium text-gray-600">Listing ID</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600">Vehicle</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600">Year</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600">VIN</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600">Views</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600">Actual Cost</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600">Sales Cost</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600">Sold By</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600">Status</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-autobuy-neutral-6 bg-white">
              {vehicles.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="py-5 px-6 text-sm font-medium text-gray-600">{item.id}</td>
                  <td className="py-5 px-6 text-sm font-medium text-gray-600">{item.vehicle}</td>
                  <td className="py-5 px-6 text-sm font-medium text-gray-600">{item.year}</td>
                  <td className="py-5 px-6 text-sm font-medium text-gray-600">{item.vin}</td>
                  <td className="py-5 px-6 text-sm font-medium text-gray-600">
                    <div className="flex items-center gap-1.5">
                        <Icon icon="solar:eye-bold" className="w-4 h-4 text-autobuy-blue-2" />
                        {item.views}
                    </div>
                  </td>
                  <td className="py-5 px-6 text-sm font-bold text-gray-600">{item.actualCost}</td>
                  <td className="py-5 px-6 text-sm font-bold text-gray-600">{item.salesCost}</td>
                  <td className="py-5 px-6 text-sm font-medium">
                      {item.soldBy === "Sold by Seller" ? (
                          <span className="bg-autobuy-orange-5 text-autobuy-orange-1 px-2 py-1 rounded text-xs font-medium">
                              {item.soldBy}
                          </span>
                      ) : (
                          <span className="text-gray-600">{item.soldBy}</span>
                      )}
                  </td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium text-autobuy-green-1">
                        {item.status}
                      </span>
                      <Icon icon="mdi:chevron-down" className="w-4 h-4 text-gray-400" />
                    </div>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <button className="text-sm font-medium text-autobuy-blue-2 hover:text-autobuy-blue-1 italic">
                        {item.action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InspectionVehicles;
