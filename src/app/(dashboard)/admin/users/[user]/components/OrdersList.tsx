"use client";

import React from "react";
import { Icon } from "@iconify/react";

interface OrdersListProps {
  onSelectOrder: (id: string) => void;
}

const OrdersList: React.FC<OrdersListProps> = ({ onSelectOrder }) => {
  const orders = [
    {
      id: "12345678",
      vehicle: "Toyota Camry 2020",
      paymentDate: "11 Nov, 2025",
      seller: "Mr Akeem John",
      amount: "₦40,000,000",
      quantity: 2,
      paymentStatus: "Paid",
      deliveryStatus: "processing",
      deliveryDate: "11 Nov, 2025",
      action: "View",
    },
    {
      id: "12345678",
      vehicle: "Toyota Camry 2020",
      paymentDate: "11 Nov, 2025",
      seller: "Mr Akeem John",
      amount: "₦40,000,000",
      quantity: 3,
      paymentStatus: "Paid",
      deliveryStatus: "Delivered",
      deliveryDate: "11 Nov, 2025",
      action: "View",
    },
    {
      id: "12345678",
      vehicle: "Toyota Camry 2020",
      paymentDate: "11 Nov, 2025",
      seller: "Mr Akeem John",
      amount: "₦40,000,000",
      quantity: 1,
      paymentStatus: "Paid",
      deliveryStatus: "In-Transit",
      deliveryDate: "11 Nov, 2025",
      action: "View",
    },
    {
      id: "12345678",
      vehicle: "Toyota Camry 2020",
      paymentDate: "11 Nov, 2025",
      seller: "Mr Akeem John",
      amount: "₦40,000,000",
      quantity: 2,
      paymentStatus: "—", // Placeholder for empty/unknown status if needed
      deliveryStatus: "Pick-up at Lot",
      deliveryDate: "11 Nov, 2025",
      action: "View",
    },
    {
      id: "12345678",
      vehicle: "Toyota Camry 2020",
      paymentDate: "11 Nov, 2025",
      seller: "Mr Akeem John",
      amount: "₦40,000,000",
      quantity: 1,
      paymentStatus: "Paid",
      deliveryStatus: "Delivered",
      deliveryDate: "11 Nov, 2025",
      action: "View",
    },
  ];

  const getDeliveryStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case "processing":
        return "text-autobuy-yellow-1"; // Assuming yellow for processing
      case "delivered":
        return "text-autobuy-green-1";
      case "in-transit":
        return "text-autobuy-orange-1"; // Assuming orange for In-Transit
      case "pick-up at lot":
        return "text-gray-500";
      default:
        return "text-gray-500";
    }
  };

  const getPaymentStatusStyle = (status: string) => {
    if (status === "Paid") {
      return "text-autobuy-green-1";
    }
    return "text-gray-500";
  };

  return (
    <div>
      {/* Header with Title */}
      <div className="mb-8">
        <h2 className="text-lg font-medium text-gray-700">
          Orders & Purchases (Mr Akeem John)
        </h2>
        <p className="text-sm text-gray-400 mt-1">Track all Customer purchases and delivery</p>
      </div>

      {/* Table */}
      <div className="bg-autobuy-blue-6 bg-opacity-30 rounded-2xl border border-autobuy-neutral-6 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="bg-autobuy-blue-6 bg-opacity-50 text-left">
                <th className="py-4 px-6 text-sm font-medium text-gray-600">Order ID</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600">Vehicle (MMY)</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600">Payment Date</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600">Seller</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600">Amount</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600">Quantity</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600">Payment Status</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600">Delivery Status</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600">Delivery Date</th>
                <th className="py-4 px-6 text-sm font-medium text-gray-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-autobuy-neutral-6 bg-white">
              {orders.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="py-5 px-6 text-sm font-medium text-gray-600">{item.id}</td>
                  <td className="py-5 px-6 text-sm font-medium text-gray-600">{item.vehicle}</td>
                  <td className="py-5 px-6 text-sm font-medium text-gray-600">{item.paymentDate}</td>
                  <td className="py-5 px-6 text-sm font-medium text-gray-600">{item.seller}</td>
                  <td className="py-5 px-6 text-sm font-bold text-gray-600">{item.amount}</td>
                  <td className="py-5 px-6 text-sm font-medium text-gray-600">{item.quantity}</td>
                  <td className="py-5 px-6">
                    <span className={`text-sm font-medium ${getPaymentStatusStyle(item.paymentStatus)}`}>
                        {item.paymentStatus}
                    </span>
                  </td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-1">
                        <span className={`text-sm font-medium ${getDeliveryStatusStyle(item.deliveryStatus)}`}>
                            {item.deliveryStatus}
                        </span>
                        {(item.deliveryStatus.toLowerCase() === "processing" || item.deliveryStatus.toLowerCase() === "in-transit") && (
                             <Icon icon="mdi:chevron-down" className="w-4 h-4 text-gray-400" />
                        )}
                    </div>
                  </td>
                  <td className="py-5 px-6 text-sm font-medium text-gray-600">{item.deliveryDate}</td>
                  <td className="py-5 px-6 text-right">
                    <div className="flex items-center justify-end gap-3">
                        <button 
                            onClick={() => onSelectOrder(item.id)}
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

export default OrdersList;
