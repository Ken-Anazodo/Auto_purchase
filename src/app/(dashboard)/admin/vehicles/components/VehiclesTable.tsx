"use client";

import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

interface VehiclesTableProps {
  onViewVehicle: (id: string) => void;
}

const VehiclesTable: React.FC<VehiclesTableProps> = ({ onViewVehicle }) => {
  const [openStatusDropdown, setOpenStatusDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Mock Data
  const [vehicles, setVehicles] = useState([
    {
      id: "12345678",
      vehicle: "Toyota Camry",
      year: "2020",
      trim: "XLE",
      vin: "12345678910",
      views: 225,
      actualCost: "₦40,000,000",
      salesCost: "₦45,000,000",
      soldBy: "—", // or "Autobuy" or "Seller"
      status: "Live",
    },
    {
      id: "12345679",
      vehicle: "Toyota Camry",
      year: "2020",
      trim: "XLE",
      vin: "12345678910",
      views: 225,
      actualCost: "₦40,000,000",
      salesCost: "₦45,000,000",
      soldBy: "—",
      status: "Live",
    },
    {
      id: "12345680",
      vehicle: "Toyota Camry",
      year: "2020",
      trim: "XLE",
      vin: "12345678910",
      views: 225,
      actualCost: "₦40,000,000",
      salesCost: "₦45,000,000",
      soldBy: "Autobuy",
      status: "Sold",
    },
    {
      id: "12345681",
      vehicle: "Toyota Camry",
      year: "2020",
      trim: "XLE",
      vin: "12345678910",
      views: 225,
      actualCost: "₦40,000,000",
      salesCost: "₦45,000,000",
      soldBy: "Autobuy",
      status: "Sold",
    },
    {
      id: "12345682",
      vehicle: "Toyota Camry",
      year: "2020",
      trim: "XLE",
      vin: "12345678910",
      views: 225,
      actualCost: "₦40,000,000",
      salesCost: "₦45,000,000",
      soldBy: "Seller",
      status: "Live",
    },
    {
      id: "12345683",
      vehicle: "Toyota Camry",
      year: "2020",
      trim: "XLE",
      vin: "12345678910",
      views: 225,
      actualCost: "₦40,000,000",
      salesCost: "₦45,000,000",
      soldBy: "Seller",
      status: "Live",
    },
    {
      id: "12345684",
      vehicle: "Toyota Camry",
      year: "2020",
      trim: "XLE",
      vin: "12345678910",
      views: 225,
      actualCost: "₦40,000,000",
      salesCost: "₦45,000,000",
      soldBy: "Autobuy",
      status: "Sold",
    },
    {
      id: "12345685",
      vehicle: "Toyota Camry",
      year: "2020",
      trim: "XLE",
      vin: "12345678910",
      views: 225,
      actualCost: "₦40,000,000",
      salesCost: "₦45,000,000",
      soldBy: "Autobuy",
      status: "Sold",
    },
    {
      id: "12345686",
      vehicle: "Toyota Camry",
      year: "2020",
      trim: "XLE",
      vin: "12345678910",
      views: 225,
      actualCost: "₦40,000,000",
      salesCost: "₦45,000,000",
      soldBy: "Autobuy",
      status: "Sold",
    },
    {
      id: "12345687",
      vehicle: "Toyota Camry",
      year: "2020",
      trim: "XLE",
      vin: "12345678910",
      views: 225,
      actualCost: "₦40,000,000",
      salesCost: "₦45,000,000",
      soldBy: "Autobuy",
      status: "Sold",
    },
  ]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenStatusDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleStatusDropdown = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenStatusDropdown(openStatusDropdown === id ? null : id);
  };

  const handleStatusChange = (id: string, newStatus: string) => {
    setVehicles(prev => prev.map(v => v.id === id ? { ...v, status: newStatus } : v));
    setOpenStatusDropdown(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "text-[#34B233]";
      case "Sold": return "text-[#0A6DFF]"; // Using a blue shade
      case "Road to Sales": return "text-autobuy-yellow-1"; // Or similar yellow
      case "Hide": return "text-gray-500";
      default: return "text-gray-500";
    }
  };

  return (
    <div className="bg-autobuy-blue-6 bg-opacity-30 rounded-2xl border border-autobuy-neutral-6 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1200px]">
          <thead>
            <tr className="bg-autobuy-blue-6 bg-opacity-50 text-left border-b border-autobuy-neutral-6">
              <th className="py-4 px-6 text-[14px] font-[500] text-[#4D4C4C] uppercase tracking-wider">Listing ID</th>
              <th className="py-4 px-6 text-[14px] font-[500] text-[#4D4C4C] uppercase tracking-wider">Vehicle</th>
              <th className="py-4 px-6 text-[14px] font-[500] text-[#4D4C4C] uppercase tracking-wider">Year</th>
              <th className="py-4 px-6 text-[14px] font-[500] text-[#4D4C4C] uppercase tracking-wider">Trim</th>
              <th className="py-4 px-6 text-[14px] font-[500] text-[#4D4C4C] uppercase tracking-wider">VIN</th>
              <th className="py-4 px-6 text-[14px] font-[500] text-[#4D4C4C] uppercase tracking-wider">Views</th>
              <th className="py-4 px-6 text-[14px] font-[500] text-[#4D4C4C] uppercase tracking-wider">Actual Cost</th>
              <th className="py-4 px-6 text-[14px] font-[500] text-[#4D4C4C] uppercase tracking-wider">Sales Cost</th>
              <th className="py-4 px-6 text-[14px] font-[500] text-[#4D4C4C] uppercase tracking-wider">Sold By</th>
              <th className="py-4 px-6 text-[14px] font-[500] text-[#4D4C4C] uppercase tracking-wider">Status</th>
              <th className="py-4 px-6 text-[14px] font-[500] text-[#4D4C4C] uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-autobuy-neutral-6 bg-white">
            {vehicles.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-5 px-6 text-[14px] font-[500] text-[#6B6B6B] whitespace-nowrap">{item.id}</td>
                <td className="py-5 px-6 text-[14px] font-[500] text-[#6B6B6B] whitespace-nowrap">{item.vehicle}</td>
                <td className="py-5 px-6 text-[14px] font-[500] text-[#6B6B6B] whitespace-nowrap">{item.year}</td>
                <td className="py-5 px-6 text-[14px] font-[500] text-[#6B6B6B] whitespace-nowrap">{item.trim}</td>
                <td className="py-5 px-6 text-[14px] font-[500] text-[#6B6B6B] whitespace-nowrap">{item.vin}</td>
                <td className="py-5 px-6 text-[14px] font-[500] text-[#6B6B6B] whitespace-nowrap">
                   <div className="flex items-center gap-1.5">
                       <Icon icon="mdi:eye" className="w-4 h-4 text-autobuy-blue-2" />
                       {item.views}
                   </div>
                </td>
                <td className="py-5 px-6 text-[14px] font-[500] text-[#6B6B6B] whitespace-nowrap">{item.actualCost}</td>
                <td className="py-5 px-6 text-[14px] font-[500] text-[#6B6B6B] whitespace-nowrap">{item.salesCost}</td>
                <td className="py-5 px-6 text-[14px] font-[500] text-[#6B6B6B] whitespace-nowrap">
                    {item.soldBy === "Seller" ? (
                        <span className="bg-[#FEF2EC] text-[#EF693E] px-3 py-1 rounded-full bg-opacity-50">
                            Seller
                        </span>
                    ) : (
                        item.soldBy
                    )}
                </td>
                <td className="py-5 px-6 whitespace-nowrap relative">
                  <div 
                    className="flex items-center gap-1 cursor-pointer w-fit"
                    onClick={(e) => toggleStatusDropdown(item.id, e)}
                  >
                    <span className={`text-[14px] font-[500] ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                    <Icon icon="mdi:chevron-down" className="w-3 h-3 text-gray-400" />
                  </div>

                  {/* Status Dropdown */}
                  {openStatusDropdown === item.id && (
                       <div 
                            ref={dropdownRef}
                            className="absolute top-10 left-0 z-50 w-32 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden text-center p-2 space-y-1"
                       >
                            <button 
                                onClick={() => handleStatusChange(item.id, "Hide")}
                                className="w-full py-1.5 px-3 rounded-md text-xs font-medium text-gray-700 hover:bg-gray-50 bg-gray-50/50"
                            >
                                Hide
                            </button>
                            <button 
                                onClick={() => handleStatusChange(item.id, "Sold")}
                                className="w-full py-1.5 px-3 rounded-md text-xs font-medium text-autobuy-blue-2 hover:bg-blue-50"
                            >
                                Sold
                            </button>
                            <button 
                                onClick={() => handleStatusChange(item.id, "Live")}
                                className="w-full py-1.5 px-3 rounded-md text-xs font-medium text-autobuy-green-1 hover:bg-green-50"
                            >
                                Live
                            </button>
                            <button 
                                onClick={() => handleStatusChange(item.id, "Road to Sales")}
                                className="w-full py-1.5 px-3 rounded-md text-xs font-medium text-autobuy-yellow-1 hover:bg-yellow-50"
                            >
                                Road to Sales
                            </button>
                       </div>
                  )}
                </td>
                <td className="py-5 px-6 text-right whitespace-nowrap">
                  <div className="flex items-center justify-end gap-3">
                    <button 
                        onClick={() => onViewVehicle(item.id)}
                        className="text-[14px] font-[500] text-[#0A6DFF] hover:text-autobuy-blue-1 italic"
                    >
                      View
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Icon icon="mdi:dots-vertical" className="w-4 h-4" />
                    </button>
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

export default VehiclesTable;
