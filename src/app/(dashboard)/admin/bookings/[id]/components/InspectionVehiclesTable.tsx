"use client";

import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

interface InspectionVehiclesTableProps {
  onViewVehicle: (id: string) => void;
}

const InspectionVehiclesTable: React.FC<InspectionVehiclesTableProps> = ({ onViewVehicle }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const vehicles = [
    {
      id: "12345678",
      vehicle: "Toyota Camry 2020",
      date: "11 Nov, 2025",
      amountSold: "₦45,000,000",
      amountRemitted: "₦40,000,000",
      paymentStatus: "Pending",
      action: "View",
    },
    {
      id: "12345678",
      vehicle: "Toyota Camry 2020",
      date: "11 Nov, 2025",
      amountSold: "₦45,000,000",
      amountRemitted: "₦40,000,000",
      paymentStatus: "Successful",
      action: "View",
    },
    {
      id: "12345678",
      vehicle: "Toyota Camry 2020",
      date: "11 Nov, 2025",
      amountSold: "₦45,000,000",
      amountRemitted: "₦40,000,000",
      paymentStatus: "Successful",
      action: "View",
    },
    {
      id: "12345678",
      vehicle: "Toyota Camry 2020",
      date: "11 Nov, 2025",
      amountSold: "₦45,000,000",
      amountRemitted: "₦40,000,000",
      paymentStatus: "Failed",
      action: "View",
    },
    {
      id: "12345678",
      vehicle: "Toyota Camry 2020",
      date: "11 Nov, 2025",
      amountSold: "₦45,000,000",
      amountRemitted: "₦40,000,000",
      paymentStatus: "Successful",
      action: "View",
    },
  ];

  const getStatusStyle = (status: string) => {
    if (status === "Pending") return "text-[#EFD80F]";
    if (status === "Successful") return "text-[#34B233]";
    if (status === "Failed") return "text-[#F12323]";
    return "text-gray-500";
  };

  return (
    <div className="bg-autobuy-blue-6 bg-opacity-30 rounded-2xl border border-autobuy-neutral-6 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="bg-autobuy-blue-6 bg-opacity-50 text-left border-b border-autobuy-neutral-6">
              <th className="py-4 px-6 text-[14px] font-[500] text-[#4D4C4C]">Listing ID</th>
              <th className="py-4 px-6 text-[14px] font-[500] text-[#4D4C4C]">Vehicle (MMY)</th>
              <th className="py-4 px-6 text-[14px] font-[500] text-[#4D4C4C]">Date</th>
              <th className="py-4 px-6 text-[14px] font-[500] text-[#4D4C4C]">Amount Sold</th>
              <th className="py-4 px-6 text-[14px] font-[500] text-[#4D4C4C]">Amount Remitted</th>
              <th className="py-4 px-6 text-[14px] font-[500] text-[#4D4C4C]">Payment Status</th>
              <th className="py-4 px-6 text-[14px] font-[500] text-[#4D4C4C] text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-autobuy-neutral-6 bg-white">
            {vehicles.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="py-5 px-6 text-[14px] font-[500] text-[#6B6B6B]">{item.id}</td>
                <td className="py-5 px-6 text-[14px] font-[500] text-[#6B6B6B]">{item.vehicle}</td>
                <td className="py-5 px-6 text-[14px] font-[500] text-[#6B6B6B]">{item.date}</td>
                <td className="py-5 px-6 text-[12px] font-[500] text-[#6B6B6B]">{item.amountSold}</td>
                <td className="py-5 px-6 text-[12px] font-[500] text-[#6B6B6B]">{item.amountRemitted}</td>
                <td className="py-5 px-6">
                    <span className={`text-[14px] font-[400] ${getStatusStyle(item.paymentStatus)}`}>
                      {item.paymentStatus}
                    </span>
                </td>
                <td className="py-5 px-6 text-right relative">
                  <div className="flex items-center justify-end gap-3">
                    <button 
                        onClick={() => onViewVehicle(item.id)}
                        className="text-[14px] font-[500] text-[#0A6DFF] hover:text-autobuy-blue-1 italic"
                    >
                        {item.action}
                    </button>
                    <button 
                        onClick={(e) => toggleDropdown(item.id + index, e)} // Unique ID for dropdown
                        className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
                    >
                        <Icon icon="mdi:dots-vertical" className="w-5 h-5" />
                    </button>

                    {/* Dropdown Menu */}
                    {openDropdown === item.id + index && (
                        <div 
                            ref={dropdownRef}
                            className="absolute right-8 top-8 z-50 w-32 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden text-left animation-fade-in"
                        >
                            <div className="py-1">
                                <button 
                                    className="w-full px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 text-left transition-colors"
                                    onClick={() => console.log("View Details", item.id)}
                                >
                                    View Details
                                </button>
                                <button 
                                    className="w-full px-4 py-2 text-xs text-autobuy-red-1 hover:bg-red-50 text-left transition-colors font-medium"
                                    onClick={() => console.log("Remove", item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InspectionVehiclesTable;
