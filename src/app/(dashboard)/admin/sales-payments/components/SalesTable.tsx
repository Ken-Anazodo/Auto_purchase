"use client";

import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

const SalesTable = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
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

  const salesData = [
    {
      id: "TRX-45678",
      listingId: "12345678",
      vehicle: "Toyota Camry",
      year: "2020",
      vin: "1234567891011",
      quantity: 1,
      buyer: "Mr Salam Bello",
      seller: "Mr Adamu Bello",
      actualCost: 40000000,
      salesCost: 45000000,
      date: "11 Nov, 2025",
      paymentStatus: "Successful",
      deliveryStatus: "Processing",
    },
    {
      id: "TRX-45679",
      listingId: "12345678",
      vehicle: "Toyota Camry",
      year: "2020",
      vin: "1234567891011",
      quantity: 1,
      buyer: "Mr Salam Bello",
      seller: "Mr Adamu Bello",
      actualCost: 40000000,
      salesCost: 45000000,
      date: "11 Nov, 2025",
      paymentStatus: "Successful",
      deliveryStatus: "In-Transit",
    },
    {
      id: "TRX-45680",
      listingId: "12345678",
      vehicle: "Toyota Camry",
      year: "2020",
      vin: "1234567891011",
      quantity: 1,
      buyer: "Mr Salam Bello",
      seller: "Mr Adamu Bello",
      actualCost: 40000000,
      salesCost: 45000000,
      date: "11 Nov, 2025",
      paymentStatus: "Successful",
      deliveryStatus: "Pick-up at Lot",
    },
    {
      id: "TRX-45681",
      listingId: "12345678",
      vehicle: "Toyota Camry",
      year: "2020",
      vin: "1234567891011",
      quantity: 2,
      buyer: "Mr Salam Bello",
      seller: "Mr Adamu Bello",
      actualCost: 40000000,
      salesCost: 45000000,
      date: "11 Nov, 2025",
      paymentStatus: "Successful",
      deliveryStatus: "Delivered",
    },
    {
      id: "TRX-45682",
      listingId: "12345678",
      vehicle: "Toyota Camry",
      year: "2020",
      vin: "1234567891011",
      quantity: 1,
      buyer: "Mr Salam Bello",
      seller: "Mr Adamu Bello",
      actualCost: 40000000,
      salesCost: 45000000,
      date: "11 Nov, 2025",
      paymentStatus: "Successful",
      deliveryStatus: "Delivered",
    },
    {
      id: "TRX-45683",
      listingId: "12345678",
      vehicle: "Toyota Camry",
      year: "2020",
      vin: "1234567891011",
      quantity: 2,
      buyer: "Mr Salam Bello",
      seller: "Mr Adamu Bello",
      actualCost: 40000000,
      salesCost: 45000000,
      date: "11 Nov, 2025",
      paymentStatus: "Successful",
      deliveryStatus: "Delivered",
    },
    {
      id: "TRX-45684",
      listingId: "12345678",
      vehicle: "Toyota Camry",
      year: "2020",
      vin: "1234567891011",
      quantity: 1,
      buyer: "Mr Salam Bello",
      seller: "Mr Adamu Bello",
      actualCost: 40000000,
      salesCost: 45000000,
      date: "11 Nov, 2025",
      paymentStatus: "Successful",
      deliveryStatus: "Delivered",
    },
    {
      id: "TRX-45685",
      listingId: "12345678",
      vehicle: "Toyota Camry",
      year: "2020",
      vin: "1234567891011",
      quantity: 1,
      buyer: "Mr Salam Bello",
      seller: "Mr Adamu Bello",
      actualCost: 40000000,
      salesCost: 45000000,
      date: "11 Nov, 2025",
      paymentStatus: "Successful",
      deliveryStatus: "Delivered",
    },
    {
      id: "TRX-45686",
      listingId: "12345678",
      vehicle: "Toyota Camry",
      year: "2020",
      vin: "1234567891011",
      quantity: 3,
      buyer: "Mr Salam Bello",
      seller: "Mr Adamu Bello",
      actualCost: 40000000,
      salesCost: 45000000,
      date: "11 Nov, 2025",
      paymentStatus: "Successful",
      deliveryStatus: "Delivered",
    },
    {
      id: "TRX-45687",
      listingId: "12345678",
      vehicle: "Toyota Camry",
      year: "2020",
      vin: "1234567891011",
      quantity: 1,
      buyer: "Mr Salam Bello",
      seller: "Mr Adamu Bello",
      actualCost: 40000000,
      salesCost: 45000000,
      date: "11 Nov, 2025",
      paymentStatus: "Successful",
      deliveryStatus: "Delivered",
    },
     {
      id: "TRX-45688",
      listingId: "12345678",
      vehicle: "Toyota Camry",
      year: "2020",
      vin: "1234567891011",
      quantity: 1,
      buyer: "Mr Salam Bello",
      seller: "Mr Adamu Bello",
      actualCost: 40000000,
      salesCost: 45000000,
      date: "11 Nov, 2025",
      paymentStatus: "Successful",
      deliveryStatus: "Delivered",
    },
      {
      id: "TRX-45689",
      listingId: "12345678",
      vehicle: "Toyota Camry",
      year: "2020",
      vin: "1234567891011",
      quantity: 2,
      buyer: "Mr Salam Bello",
      seller: "Mr Adamu Bello",
      actualCost: 40000000,
      salesCost: 45000000,
      date: "11 Nov, 2025",
      paymentStatus: "Successful",
      deliveryStatus: "Delivered",
    },
      {
      id: "TRX-45690",
      listingId: "12345678",
      vehicle: "Toyota Camry",
      year: "2020",
      vin: "1234567891011",
      quantity: 1,
      buyer: "Mr Salam Bello",
      seller: "Mr Adamu Bello",
      actualCost: 40000000,
      salesCost: 45000000,
      date: "11 Nov, 2025",
      paymentStatus: "Successful",
      deliveryStatus: "Delivered",
    },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getDeliveryStatusColor = (status: string) => {
    switch (status) {
      case "Processing":
        return "text-autobuy-yellow-1";
      case "In-Transit":
        return "text-autobuy-orange-2";
      case "Delivered":
        return "text-autobuy-green-1";
      case "Pick-up at Lot":
        return "text-autobuy-neutral-1"; // Or a darker purple/black if defined, maintaining neutral-1 for now as per image look (blackish)
      default:
        return "text-autobuy-neutral-3";
    }
  };

  return (
    <div className="bg-autobuy-blue-6 bg-opacity-30 rounded-2xl border border-autobuy-neutral-6 overflow-hidden mt-6">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1500px] text-left border-collapse">
          <thead>
            <tr className="bg-autobuy-blue-6 bg-opacity-50 text-autobuy-neutral-2 text-xs font-medium border-b border-autobuy-neutral-6">
              <th className="px-5 py-4 whitespace-nowrap">Transaction ID</th>
              <th className="px-5 py-4 whitespace-nowrap">Listing ID</th>
              <th className="px-5 py-4 whitespace-nowrap">Vehicle</th>
              <th className="px-5 py-4 whitespace-nowrap">Year</th>
              <th className="px-5 py-4 whitespace-nowrap">VIN</th>
              <th className="px-5 py-4 whitespace-nowrap text-center">Quantity</th>
              <th className="px-5 py-4 whitespace-nowrap">Buyer</th>
              <th className="px-5 py-4 whitespace-nowrap">Seller</th>
              <th className="px-5 py-4 whitespace-nowrap">Actual Cost</th>
              <th className="px-5 py-4 whitespace-nowrap">Sales Cost</th>
              <th className="px-5 py-4 whitespace-nowrap">Date</th>
              <th className="px-5 py-4 whitespace-nowrap">Payment Status</th>
              <th className="px-5 py-4 whitespace-nowrap">Delivery Status</th>
              <th className="px-5 py-4 whitespace-nowrap text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-autobuy-neutral-6 text-xs text-autobuy-neutral-2">
            {salesData.map((item) => (
              <tr key={item.id} className="hover:bg-autobuy-blue-6/20 transition-colors">
                <td className="px-5 py-4 font-medium">{item.id}</td>
                <td className="px-5 py-4">{item.listingId}</td>
                <td className="px-5 py-4">{item.vehicle}</td>
                <td className="px-5 py-4">{item.year}</td>
                <td className="px-5 py-4">{item.vin}</td>
                <td className="px-5 py-4 text-center">{item.quantity}</td>
                <td className="px-5 py-4">{item.buyer}</td>
                <td className="px-5 py-4">{item.seller}</td>
                <td className="px-5 py-4">{formatCurrency(item.actualCost)}</td>
                <td className="px-5 py-4">{formatCurrency(item.salesCost)}</td>
                <td className="px-5 py-4">{item.date}</td>
                <td className="px-5 py-4 text-autobuy-green-1 font-medium">{item.paymentStatus}</td>
                <td className={`px-5 py-4 font-medium ${getDeliveryStatusColor(item.deliveryStatus)}`}>
                  {item.deliveryStatus}
                </td>
                <td className="px-5 py-4 text-center relative">
                  <div className="flex items-center justify-center gap-3">
                    <button className="text-autobuy-primary2.5 hover:text-blue-700 font-medium">
                      View
                    </button>
                    <button
                      onClick={(e) => toggleDropdown(item.id, e)}
                      className="text-autobuy-neutral-3 hover:text-autobuy-neutral-1 transition-colors"
                    >
                      <Icon icon="mdi:dots-vertical" className="w-4 h-4" />
                    </button>

                    {/* Dropdown Menu */}
                    {openDropdown === item.id && (
                      <div
                        ref={dropdownRef}
                        className="absolute right-8 top-8 z-50 w-32 bg-white rounded-lg shadow-lg border border-autobuy-neutral-6 overflow-hidden text-left"
                      >
                        <div className="py-1">
                          <button className="w-full px-4 py-2 text-xs text-autobuy-neutral-2 hover:bg-gray-50 text-left transition-colors">
                            Download Invoice
                          </button>
                          <button className="w-full px-4 py-2 text-xs text-autobuy-neutral-2 hover:bg-gray-50 text-left transition-colors">
                            View Details
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

export default SalesTable;
