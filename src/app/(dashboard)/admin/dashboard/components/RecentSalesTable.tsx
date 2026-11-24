"use client";

import React from "react";
import { Icon } from "@iconify/react";

const RecentSalesTable = () => {
  const transactions = [
    {
      id: "TRX-45678",
      vehicle: "Toyota Camry",
      buyer: "Mr Salam Bello",
      sales_cost: "₦45,000,000",
      date: "11 Nov, 2025",
      payment_status: "Successful",
      order_status: "Processing",
    },
    {
      id: "TRX-45678",
      vehicle: "Toyota Camry",
      buyer: "Mr Salam Bello",
      sales_cost: "₦45,000,000",
      date: "11 Nov, 2025",
      payment_status: "Successful",
      order_status: "In-Transit",
    },
    {
      id: "TRX-45678",
      vehicle: "Toyota Camry",
      buyer: "Mr Salam Bello",
      sales_cost: "₦45,000,000",
      date: "11 Nov, 2025",
      payment_status: "Successful",
      order_status: "Pick-up at Lot",
    },
    {
      id: "TRX-45678",
      vehicle: "Toyota Camry",
      buyer: "Mr Salam Bello",
      sales_cost: "₦45,000,000",
      date: "11 Nov, 2025",
      payment_status: "Successful",
      order_status: "Processing",
    },
    {
      id: "TRX-45678",
      vehicle: "Toyota Camry",
      buyer: "Mr Salam Bello",
      sales_cost: "₦45,000,000",
      date: "11 Nov, 2025",
      payment_status: "Successful",
      order_status: "Delivered",
    },
    {
      id: "TRX-45678",
      vehicle: "Toyota Camry",
      buyer: "Mr Salam Bello",
      sales_cost: "₦45,000,000",
      date: "11 Nov, 2025",
      payment_status: "Successful",
      order_status: "Delivered",
    },
  ];

  const getOrderStatusColor = (status: string) => {
    switch (status) {
      case "Processing":
        return "text-[#EFD80F]"; // Assuming a nice yellow from config
      case "In-Transit":
        return "text-[#F17F5A]";
      case "Pick-up at Lot":
        return "text-[#4D4C4C]"; // Or maybe blue? Using gray for now based on 'neutral' look in image potentially, or just dark text. Image shows black/gray.
      case "Delivered":
        return "text-[#34B233]";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 mt-8">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-[18px] font-[500] text-[#1A1A1A]">
          Recent Sales & Payment
        </h2>
        <p className="text-[12px] font-[500] text-[#6B6B6B] mt-1">
          Monitor all transactions and revenue activities.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-autobuy-blue-6 text-[#4D4C4C] text-[14px] font-[500]">
              <th className="px-6 py-4 rounded-l-lg">Transaction ID</th>
              <th className="px-6 py-4">Vehicle</th>
              <th className="px-6 py-4">Buyer</th>
              <th className="px-6 py-4">Sales Cost</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Payment Status</th>
              <th className="px-6 py-4">Order Status</th>
              <th className="px-6 py-4 rounded-r-lg">Actions</th>
            </tr>
          </thead>
          <tbody className="text-[14px] font-[400] text-[#6B6B6B]">
            {transactions.map((trx, index) => (
              <tr key={index} className="border-b border-gray-50 hover:bg-gray-50/50">
                <td className="px-6 py-4 font-medium text-gray-500">
                  {trx.id}
                </td>
                <td className="px-6 py-4">{trx.vehicle}</td>
                <td className="px-6 py-4">{trx.buyer}</td>
                <td className="px-6 py-4 font-medium text-gray-900">
                  {trx.sales_cost}
                </td>
                <td className="px-6 py-4 text-gray-500">{trx.date}</td>
                <td className="px-6 py-4">
                  <span className="text-[#34B233] font-medium">
                    {trx.payment_status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`font-medium ${getOrderStatusColor(
                      trx.order_status
                    )}`}
                  >
                    {trx.order_status}
                  </span>
                </td>
                <td className="px-6 py-4 flex items-center gap-3">
                  <button className="text-autobuy-primary2.5 font-medium hover:underline">
                    View
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Icon icon="mdi:dots-vertical" className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

       {/* Pagination */}
       <div className="flex justify-end items-center gap-2 mt-6">
        <button className="p-2 text-gray-400 hover:text-gray-600">
          <Icon icon="mdi:chevron-left" className="w-5 h-5" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-autobuy-primary2.5 text-white text-sm font-medium">
          1
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600 text-sm font-medium">
          2
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600 text-sm font-medium">
          3
        </button>
        <button className="p-2 text-gray-400 hover:text-gray-600">
          <Icon icon="mdi:chevron-right" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default RecentSalesTable;
