"use client";

import React from "react";
import { Icon } from "@iconify/react";

interface SaleDetailsProps {
  onBack: () => void;
}

const SaleDetails: React.FC<SaleDetailsProps> = ({ onBack }) => {
  return (
    <div>
      {/* Header with Back Button */}
      <div className="flex items-center gap-2 mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
        >
          <Icon icon="mdi:arrow-left" className="w-5 h-5" />
          Sales & Payment Overview (Mr Akeem John)
        </button>
      </div>

      <div className="mb-6">
          <h3 className="text-base text-gray-500">Sales & Payment details</h3>
      </div>
      
      <div className="space-y-6">
          {/* Sales Summary Card */}
          <div className="bg-white border border-autobuy-neutral-6 rounded-2xl p-6 lg:p-8">
            <h4 className="text-lg font-medium text-autobuy-blue-2 mb-8">Sales Summary</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-12">
                <div>
                    <span className="text-sm text-gray-400 block mb-1">Buyer:</span>
                    <span className="text-base font-bold text-gray-900">John Micheal</span>
                </div>
                <div>
                    <span className="text-sm text-gray-400 block mb-1">Email:</span>
                    <span className="text-base font-bold text-gray-900">Myemail@gmail.com</span>
                </div>
                <div>
                    <span className="text-sm text-gray-400 block mb-1">Order Date:</span>
                    <span className="text-base font-bold text-gray-900">11 Nov, 2025</span>
                </div>
                <div>
                    <span className="text-sm text-gray-400 block mb-1">Order Type:</span>
                    <span className="text-base font-bold text-gray-900">Online Purchase</span>
                </div>
                <div>
                    <span className="text-sm text-gray-400 block mb-1">Phone:</span>
                    <span className="text-base font-bold text-gray-900">012345678910</span>
                </div>
                {/* Empty placeholder to align grid if needed, or allow flow */}
                <div className="hidden lg:block"></div> 
                <div className="hidden lg:block"></div> 
                <div className="hidden lg:block"></div> 

                 <div>
                    <span className="text-sm text-gray-400 block mb-1">Vehicle Purchased:</span>
                    <span className="text-base font-bold text-gray-900">Toyota Camry 2020</span>
                </div>
                 {/* Empty placeholder to align grid */}
                 <div className="hidden lg:block"></div>
                 <div className="hidden lg:block"></div>
                 <div className="hidden lg:block"></div>

                <div>
                    <span className="text-sm text-gray-400 block mb-1">Vin:</span>
                    <span className="text-base font-bold text-gray-900">123456789101112</span>
                </div>
                <div>
                    <span className="text-sm text-gray-400 block mb-1">Condition:</span>
                    <span className="text-base font-bold text-gray-900">Good</span>
                </div>
                 
                {/* View Full Details Link */}
                <div className="col-span-1 md:col-span-2 lg:col-span-2 flex items-end justify-end w-full">
                     <button className="text-autobuy-blue-2 hover:text-autobuy-blue-1 italic text-sm font-medium">
                        [View Full Vehicle Details]
                     </button>
                </div>
            </div>
          </div>

          {/* Remittance and Payment Breakdown Card */}
          <div className="bg-white border border-autobuy-neutral-6 rounded-2xl p-6 lg:p-8">
            <h4 className="text-lg font-medium text-autobuy-blue-2 mb-8">Remittance and payment Breakdown</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-12">
                <div>
                    <span className="text-sm text-gray-400 block mb-1">Amount Sold:</span>
                    <span className="text-base font-bold text-autobuy-blue-2">₦45,000,000</span>
                </div>
                <div>
                    <span className="text-sm text-gray-400 block mb-1">Amount Remitted:</span>
                    <span className="text-base font-bold text-gray-900">₦40,000,000</span>
                </div>
                 <div className="hidden lg:block"></div>
                 <div className="hidden lg:block"></div>

                <div>
                    <span className="text-sm text-gray-400 block mb-1">Remittance Status:</span>
                    <span className="text-base font-bold text-autobuy-green-1">Successful</span>
                </div>
                <div>
                    <span className="text-sm text-gray-400 block mb-1">Payment Time:</span>
                    <span className="text-base font-bold text-gray-900">11 Nov, 2025, 10:42 AM</span>
                </div>
                 <div>
                    <span className="text-sm text-gray-400 block mb-1">Order Date:</span>
                    <span className="text-base font-bold text-gray-900">11 Nov, 2025 AM</span>
                </div>
                 <div className="hidden lg:block"></div>

                 <div>
                    <span className="text-sm text-gray-400 block mb-1">Seller Bank:</span>
                    <span className="text-base font-bold text-gray-900">First Bank</span>
                </div>
                 <div className="hidden lg:block"></div>
                 <div className="hidden lg:block"></div>
                 <div className="hidden lg:block"></div>

                <div>
                    <span className="text-sm text-gray-400 block mb-1">Account Name:</span>
                    <span className="text-base font-bold text-gray-900">John Micheal</span>
                </div>
                 <div>
                    <span className="text-sm text-gray-400 block mb-1">Account Number:</span>
                    <span className="text-base font-bold text-gray-900">101123456789</span>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default SaleDetails;
