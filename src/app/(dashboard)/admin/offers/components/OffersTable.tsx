"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const OffersTable = () => {
  const offers = [
    {
      id: "1",
      vehicle: "Toyota Camry 2018",
      buyerName: "Kelvin Kenneth",
      sellerName: "Emma Kenneth",
      listingPrice: "₦45,000,000",
      buyerOffer: "₦45,000,000",
      status: "Seller Countered",
    },
    {
      id: "2",
      vehicle: "Toyota Camry 2018",
      buyerName: "Kelvin Kenneth",
      sellerName: "Emma Kenneth",
      listingPrice: "₦45,000,000",
      buyerOffer: "₦45,000,000",
      status: "Accepted",
    },
    {
      id: "3",
      vehicle: "Toyota Camry 2018",
      buyerName: "Kelvin Kenneth",
      sellerName: "Emma Kenneth",
      listingPrice: "₦45,000,000",
      buyerOffer: "₦45,000,000",
      status: "Seller Countered",
    },
    {
      id: "4",
      vehicle: "Toyota Camry 2018",
      buyerName: "Kelvin Kenneth",
      sellerName: "Emma Kenneth",
      listingPrice: "₦45,000,000",
      buyerOffer: "₦45,000,000",
      status: "Pending",
    },
    {
      id: "5",
      vehicle: "Toyota Camry 2018",
      buyerName: "Kelvin Kenneth",
      sellerName: "Emma Kenneth",
      listingPrice: "₦45,000,000",
      buyerOffer: "₦45,000,000",
      status: "Accepted",
    },
    {
      id: "6",
      vehicle: "Toyota Camry 2018",
      buyerName: "Kelvin Kenneth",
      sellerName: "Emma Kenneth",
      listingPrice: "₦45,000,000",
      buyerOffer: "₦45,000,000",
      status: "Seller Countered",
    },
    {
      id: "7",
      vehicle: "Toyota Camry 2018",
      buyerName: "Kelvin Kenneth",
      sellerName: "Emma Kenneth",
      listingPrice: "₦45,000,000",
      buyerOffer: "₦45,000,000",
      status: "Declined",
    },
    {
      id: "8",
      vehicle: "Toyota Camry 2018",
      buyerName: "Kelvin Kenneth",
      sellerName: "Emma Kenneth",
      listingPrice: "₦45,000,000",
      buyerOffer: "₦45,000,000",
      status: "Accepted",
    },
    {
        id: "9",
        vehicle: "Toyota Camry 2018",
        buyerName: "Kelvin Kenneth",
        sellerName: "Emma Kenneth",
        listingPrice: "₦45,000,000",
        buyerOffer: "₦45,000,000",
        status: "Declined",
      },
      {
        id: "10",
        vehicle: "Toyota Camry 2018",
        buyerName: "Kelvin Kenneth",
        sellerName: "Emma Kenneth",
        listingPrice: "₦45,000,000",
        buyerOffer: "₦45,000,000",
        status: "Declined",
      },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Seller Countered": return "text-autobuy-orange-1";
      case "Accepted": return "text-autobuy-green-1";
      case "Pending": return "text-gray-500";
      case "Declined": return "text-autobuy-red-1";
      default: return "text-gray-500";
    }
  };

  return (
    <div className="bg-autobuy-blue-6 bg-opacity-30 rounded-2xl border border-autobuy-neutral-6 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px]">
          <thead>
            <tr className="bg-autobuy-blue-6 bg-opacity-50 text-left border-b border-autobuy-neutral-6">
              <th className="py-4 px-6 text-xs font-medium text-gray-600 uppercase tracking-wider">Vehicle</th>
              <th className="py-4 px-6 text-xs font-medium text-gray-600 uppercase tracking-wider">Buyer Name</th>
              <th className="py-4 px-6 text-xs font-medium text-gray-600 uppercase tracking-wider">Seller Name</th>
              <th className="py-4 px-6 text-xs font-medium text-gray-600 uppercase tracking-wider">Listing Price</th>
              <th className="py-4 px-6 text-xs font-medium text-gray-600 uppercase tracking-wider">Buyer Offer</th>
              <th className="py-4 px-6 text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
              <th className="py-4 px-6 text-xs font-medium text-gray-600 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-autobuy-neutral-6 bg-white">
            {offers.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-5 px-6 text-xs font-medium text-gray-600 whitespace-nowrap">{item.vehicle}</td>
                <td className="py-5 px-6 text-xs font-medium text-gray-600 whitespace-nowrap">{item.buyerName}</td>
                <td className="py-5 px-6 text-xs font-medium text-gray-600 whitespace-nowrap">{item.sellerName}</td>
                <td className="py-5 px-6 text-xs font-medium text-gray-600 whitespace-nowrap">{item.listingPrice}</td>
                <td className="py-5 px-6 text-xs font-medium text-gray-600 whitespace-nowrap">{item.buyerOffer}</td>
                <td className="py-5 px-6 whitespace-nowrap">
                   <span className={`text-xs font-medium ${getStatusColor(item.status)}`}>
                        {item.status}
                   </span>
                </td>
                <td className="py-5 px-6 text-right whitespace-nowrap">
                  <Link 
                    href={`/admin/offers/${item.id}`}
                    className="text-xs font-medium text-autobuy-blue-2 hover:text-autobuy-blue-1 italic"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OffersTable;
