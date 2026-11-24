"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const OfferDetailsPage = () => {
  return (
    <div className=" space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <Link 
            href="/admin/offers"
            className="inline-flex items-center text-gray-500 hover:text-gray-900 transition-colors"
        >
            <Icon icon="mdi:arrow-left" className="w-5 h-5 mr-1" />
        </Link>
        <div>
            <h1 className="text-xl font-bold text-gray-900">Offer Details</h1>
            <p className="text-sm text-gray-500">Track negotiation history and final agreed amount for this vehicle.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vehicle Information */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-base font-semibold text-gray-700 mb-6">Vehicle Information</h2>
            <div className="flex gap-4">
                <div className="w-24 h-24 bg-autobuy-blue-6/30 rounded-lg border border-autobuy-blue-2/20 shrink-0">
                    {/* Placeholder for Vehicle Image */}
                </div>
                <div className="space-y-1">
                    <h3 className="text-lg font-bold text-gray-900">2020 Toyota Camry SE</h3>
                    <p className="text-sm text-gray-500">Vin: fjyg214569871236</p>
                    <p className="text-sm text-gray-700 font-medium">Price: <span className="line-through text-gray-400 mr-2">₦45,000,000</span></p>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                        <span className="text-xs font-medium text-gray-600">Negotiable</span>
                        <span className="text-xs font-medium text-gray-600 flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-black" />
                            Active Listing
                        </span>
                    </div>
                </div>
            </div>
        </div>

        {/* Offer Summary */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-base font-semibold text-gray-700 mb-6">Offer Summary</h2>
            <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                    <span className="text-gray-500">Buyer:</span>
                    <span className="font-medium text-gray-900">John Kenneth</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500">Seller:</span>
                    <span className="font-medium text-gray-900">Martins John</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500">Buyer Offer:</span>
                    <span className="font-medium text-gray-900">₦45,000,000</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500">Latest Offer:</span>
                    <span className="font-medium text-gray-900">₦45,500,000</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500">Accepted Price:</span>
                    <span className="font-bold text-autobuy-green-1">₦45,600,000</span>
                </div>
                <div className="h-px bg-gray-100 my-2" />
                 <div className="flex justify-between items-center">
                    <span className="text-gray-500">Offer Status:</span>
                    <span className="px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-autobuy-green-1 border border-green-100">Accepted</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500">Payment Status:</span>
                    <span className="px-2 py-0.5 rounded text-xs font-medium bg-orange-50 text-autobuy-orange-2 border border-orange-100">Awaiting Payment</span>
                </div>
            </div>
        </div>
      </div>

      {/* Offer Conversation */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm">
          <h2 className="text-base font-semibold text-gray-700 mb-2">Offer Conversation</h2>
          <p className="text-sm text-gray-500 mb-8">All negotiation updates for this vehicle will appear here</p>

          <div className="max-w-3xl space-y-8 relative">
                {/* Timeline Line (Optional, sticking to bubbles for now as per image) */}
                
                {/* Item 1 - Buyer Offer */}
                <div className="flex justify-end">
                    <div className="bg-autobuy-blue-6/50 rounded-lg p-4 w-full md:max-w-md border border-autobuy-blue-2/10">
                         <div className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-autobuy-blue-2/20 text-autobuy-blue-2 mb-2">Buyer Offer</div>
                         <div className="text-lg font-bold text-gray-900 mb-1">₦43,000,000.00</div>
                         <div className="text-[10px] text-gray-500">Buyer • 12 April 2025, 11:05 AM</div>
                    </div>
                </div>

                {/* Item 2 - Seller Countered */}
                <div className="flex justify-start">
                    <div className="bg-white rounded-lg p-4 w-full md:max-w-md border border-gray-100">
                         <div className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-autobuy-orange-5 text-autobuy-orange-2 mb-2">Seller Countered</div>
                         <div className="text-lg font-bold text-gray-900 mb-1">₦43,500,000.00</div>
                         <div className="text-[10px] text-gray-500">Seller • 12 April 2025, 11:05 AM</div>
                    </div>
                </div>

                 {/* Item 3 - Buyer Offer 2 */}
                 <div className="flex justify-end">
                    <div className="bg-autobuy-blue-6/50 rounded-lg p-4 w-full md:max-w-md border border-autobuy-blue-2/10">
                         <div className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-autobuy-blue-2/20 text-autobuy-blue-2 mb-2">Buyer Offer 2</div>
                         <div className="text-lg font-bold text-gray-900 mb-1">₦43,000,000.00</div>
                         <div className="text-[10px] text-gray-500">Buyer • 12 April 2025, 11:05 AM</div>
                    </div>
                </div>

                 {/* Item 4 - Seller Accepted */}
                 <div className="flex justify-start">
                    <div className="bg-white rounded-lg p-4 w-full md:max-w-md border border-gray-100">
                         <div className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-green-50 text-autobuy-green-1 mb-2">Seller Accepted</div>
                         <div className="text-lg font-bold text-gray-900 mb-1">₦43,500,000.00</div>
                         <div className="text-[10px] text-gray-500">Seller • 12 April 2025, 11:05 AM</div>
                    </div>
                </div>

          </div>
          
          <div className="mt-12 text-center text-xs text-gray-500 space-y-1">
              <p className="font-medium">Read-Only View</p>
              <p>This negotiation is managed by buyer and seller.</p>
          </div>
      </div>
    </div>
  );
};

export default OfferDetailsPage;
