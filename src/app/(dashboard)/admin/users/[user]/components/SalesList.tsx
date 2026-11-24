"use client";

import React from "react";
import { Icon } from "@iconify/react";

interface SalesListProps {
  onSelectSale: (id: string) => void;
}

const SalesList: React.FC<SalesListProps> = ({ onSelectSale }) => {
  const sales = [
    {
      id: "12345678",
      vehicle: "Toyota Camry 2020",
      date: "11 Nov, 2025",
      amountSold: "₦45,000,000",
      amountRemitted: "₦40,000,000",
      remittanceStatus: "Pending",
      paymentStatus: "Pending",
      action: "View",
    },
    {
        id: "12345678",
        vehicle: "Toyota Camry 2020",
        date: "11 Nov, 2025",
        amountSold: "₦45,000,000",
        amountRemitted: "₦40,000,000",
        remittanceStatus: "Paid",
        paymentStatus: "Successful",
        action: "View",
      },
      {
        id: "12345678",
        vehicle: "Toyota Camry 2020",
        date: "11 Nov, 2025",
        amountSold: "₦45,000,000",
        amountRemitted: "₦40,000,000",
        remittanceStatus: "Paid",
        paymentStatus: "Successful",
        action: "View",
      },
      {
        id: "12345678",
        vehicle: "Toyota Camry 2020",
        date: "11 Nov, 2025",
        amountSold: "₦45,000,000",
        amountRemitted: "₦40,000,000",
        remittanceStatus: "Paid",
        paymentStatus: "Failed",
        action: "View",
      },
      {
        id: "12345678",
        vehicle: "Toyota Camry 2020",
        date: "11 Nov, 2025",
        amountSold: "₦45,000,000",
        amountRemitted: "₦40,000,000",
        remittanceStatus: "Paid",
        paymentStatus: "Successful",
        action: "View",
      },
  ];

  const getRemittanceStatusStyle = (status: string) => {
    if (status === "Pending") {
      return "text-autobuy-yellow-1";
    }
    if (status === "Paid") {
      return "text-autobuy-green-1";
    }
    return "text-gray-500";
  };

  const getPaymentStatusStyle = (status: string) => {
    if (status === "Pending") {
        return "text-autobuy-yellow-1";
    }
    if (status === "Successful") {
        return "text-autobuy-green-1";
    }
    if (status === "Failed") {
        return "text-autobuy-red-1";
    }
    return "text-gray-500";
  };


  return (
    <div>
      {/* Header with Title and Search */}
      <div className="flex flex-col gap-6 mb-8">
        <div>
            <h2 className="text-lg font-medium text-gray-700">
            Sales & Payment Overview (Mr Akeem John)
            </h2>
            <p className="text-sm text-gray-400 mt-1">Track all purchases, payment status, and remittance progress in one view</p>
        </div>
        
        {/* Search Bar */}
        <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Icon icon="mdi:magnify" className="h-5 w-5 text-gray-400" />
            </div>
            <input
                type="text"
                placeholder="Search vehicle..."
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-autobuy-blue-2 focus:border-autobuy-blue-2 sm:text-sm transition-colors"
            />
        </div>
      </div>

      {/* Table */}
      <div className="bg-autobuy-blue-6 bg-opacity-30 rounded-2xl border border-autobuy-neutral-6 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="bg-autobuy-blue-6 bg-opacity-50 text-left">
                <th className="py-4 px-6 text-sm font-medium text-gray-600">Listing ID</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600">Vehicle (MMY)</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600">Date</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600">Amount Sold</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600">Amount Remitted</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600">Remittance Status</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600">Payment Status</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-autobuy-neutral-6 bg-white">
              {sales.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="py-5 px-6 text-sm font-medium text-gray-600">{item.id}</td>
                  <td className="py-5 px-6 text-sm font-medium text-gray-600">{item.vehicle}</td>
                  <td className="py-5 px-6 text-sm font-medium text-gray-600">{item.date}</td>
                  <td className="py-5 px-6 text-sm font-bold text-gray-600">{item.amountSold}</td>
                  <td className="py-5 px-6 text-sm font-bold text-gray-600">{item.amountRemitted}</td>
                  <td className="py-5 px-6">
                      <span className={`text-sm font-medium ${getRemittanceStatusStyle(item.remittanceStatus)}`}>
                        {item.remittanceStatus}
                      </span>
                  </td>
                  <td className="py-5 px-6">
                      <span className={`text-sm font-medium ${getPaymentStatusStyle(item.paymentStatus)}`}>
                        {item.paymentStatus}
                      </span>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <div className="flex items-center justify-end gap-3">
                        <button 
                            onClick={() => onSelectSale(item.id)}
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

export default SalesList;
