"use client";

import React from "react";
import { Icon } from "@iconify/react";

interface InspectionsListProps {
  onSelectInspection: (id: number) => void;
  onAddVehicle: () => void;
}

const InspectionsList: React.FC<InspectionsListProps> = ({ onSelectInspection, onAddVehicle }) => {
  const inspections = [
    {
      id: 1,
      date: "11 Nov, 2025",
      time: "10:45 Am",
      cars: 2,
      address: "My address is",
      state: "Lagos, Nigeria",
      status: "Pending",
      action: "Add Vehicle",
    },
    {
      id: 2,
      date: "11 Nov, 2025",
      time: "1:00 PM",
      cars: 1,
      address: "My address is",
      state: "Lagos, Nigeria",
      status: "Completed",
      action: "View Vehicle",
    },
    {
      id: 3,
      date: "11 Nov, 2025",
      time: "1:00 PM",
      cars: 1,
      address: "My address is",
      state: "Lagos, Nigeria",
      status: "Completed",
      action: "View Vehicle",
    },
    {
      id: 4,
      date: "11 Nov, 2025",
      time: "1:00 PM",
      cars: 1,
      address: "My address is",
      state: "Lagos, Nigeria",
      status: "Completed",
      action: "View Vehicle",
    },
    {
      id: 5,
      date: "11 Nov, 2025",
      time: "1:00 PM",
      cars: 1,
      address: "My address is",
      state: "Lagos, Nigeria",
      status: "Completed",
      action: "View Vehicle",
    },
    {
      id: 6,
      date: "11 Nov, 2025",
      time: "1:00 PM",
      cars: 1,
      address: "My address is",
      state: "Lagos, Nigeria",
      status: "Completed",
      action: "View Vehicle",
    },
  ];

  const getStatusStyle = (status: string) => {
    if (status === "Pending") {
      return "text-autobuy-yellow-1"; // Or a specific pending color if distinct from generic yellow
    }
    if (status === "Completed") {
      return "text-autobuy-green-1";
    }
    return "text-gray-500";
  };

  return (
    <div>
      {/* Header with Title and Buttons */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h2 className="text-lg font-medium text-gray-700">
          Inspections & Vehicle Listings (Mr Akeem John, Auto-connect)
        </h2>
        <div className="flex items-center gap-3">
          <button className="bg-autobuy-blue-2 hover:bg-autobuy-blue-1 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-colors">
            Book Inspection
          </button>
          <button 
            onClick={onAddVehicle}
            className="flex items-center gap-2 border border-autobuy-blue-2 text-autobuy-blue-2 hover:bg-autobuy-blue-6 px-5 py-2.5 rounded-xl text-sm font-medium transition-colors"
          >
            <Icon icon="mdi:plus" className="w-5 h-5" />
            Add a vehicle
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-autobuy-blue-6 bg-opacity-30 rounded-2xl border border-autobuy-neutral-6 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-autobuy-blue-6 bg-opacity-50 text-left">
                <th className="py-4 px-6 text-sm font-medium text-gray-600">Inspection Date</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600">Inspection Time</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600">No. of Cars</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600">Address</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600">State/City</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600">Status</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-autobuy-neutral-6 bg-white">
              {inspections.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-5 px-6 text-sm font-medium text-gray-600">{item.date}</td>
                  <td className="py-5 px-6 text-sm font-medium text-gray-600">{item.time}</td>
                  <td className="py-5 px-6 text-sm font-medium text-gray-600">{item.cars}</td>
                  <td className="py-5 px-6 text-sm font-medium text-gray-600 text-autobuy-neutral-2">{item.address}</td>
                  <td className="py-5 px-6 text-sm font-medium text-gray-600 text-autobuy-neutral-2">{item.state}</td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-1">
                      <span className={`text-sm font-medium ${getStatusStyle(item.status)}`}>
                        {item.status}
                      </span>
                      <Icon icon="mdi:chevron-down" className="w-4 h-4 text-gray-400" />
                    </div>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <div className="flex items-center justify-end gap-3">
                        <button 
                            onClick={() => onSelectInspection(item.id)}
                            className="text-sm font-medium text-autobuy-blue-2 hover:text-autobuy-blue-1 italic"
                        >
                        {item.action}
                        </button>
                        <button className="text-gray-400 hover:text-gray-600">
                            <Icon icon="mdi:dots-vertical" className="w-5 h-5" />
                        </button>
                    </div>
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

export default InspectionsList;
