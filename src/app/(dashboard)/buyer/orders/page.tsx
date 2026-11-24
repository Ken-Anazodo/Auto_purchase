"use client";

import React, { useState } from "react";
import OrderCard from "./components/OrderCard";
import EmptyState from "./components/EmptyState";

const OrdersPage = () => {
  const [activeTab, setActiveTab] = useState<"active" | "completed" | "cancelled">("active");

  const orders = [
    {
      id: "10124578963214",
      carName: "Toyota Camry 2018",
      price: "₦45,000,000",
      status: "In-Transit" as const,
      fulfillment: "Home Delivery",
      payment: "Online",
    },
    {
      id: "10124578963214",
      carName: "Toyota Camry 2018",
      price: "₦45,000,000",
      status: "Processing" as const,
      fulfillment: "Pick-Up at Lot",
      payment: "Pay at Lot",
    },
  ];

  const renderContent = () => {
    if (activeTab === "active") {
        return (
            <div className="space-y-4">
                {orders.map((order, idx) => (
                    <OrderCard key={idx} {...order} />
                ))}
            </div>
        )
    }
    // Demo empty states for other tabs
    return <EmptyState />;
  };

  return (
    <div className="min-h-screen">
      <div className="mb-8">

        <h2 className="text-xl font-medium text-autobuy-neutral-1">
          My Orders
        </h2>
        <p className="text-sm text-autobuy-neutral-2">
          Track and manage all your car purchases in one place
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 border-b border-gray-200 mb-8">
        <button 
            onClick={() => setActiveTab("active")}
            className={`pb-3 text-sm font-medium transition-colors border-b-2 ${activeTab === "active" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}
        >
            Active Orders
        </button>
        <button 
            onClick={() => setActiveTab("completed")}
            className={`pb-3 text-sm font-medium transition-colors border-b-2 ${activeTab === "completed" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}
        >
            Completed Orders
        </button>
        <button 
            onClick={() => setActiveTab("cancelled")}
            className={`pb-3 text-sm font-medium transition-colors border-b-2 ${activeTab === "cancelled" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}
        >
            Cancelled Orders
        </button>
      </div>

      {renderContent()}

    </div>
  );
};

export default OrdersPage;
