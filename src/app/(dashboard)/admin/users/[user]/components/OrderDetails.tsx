"use client";

import React from "react";
import { Icon } from "@iconify/react";

interface OrderDetailsProps {
  onBack: () => void;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ onBack }) => {
  return (
    <div>
      {/* Header with Back Button */}
      <div className="flex items-center gap-2 mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
        >
          <Icon icon="mdi:arrow-left" className="w-5 h-5" />
          Order & Purchase (Mr Akeem John)
        </button>
      </div>

      <div className="mb-6">
          <h3 className="text-base text-gray-500">Order & Purchase details</h3>
      </div>
      
      <div className="space-y-6">
          {/* Order Summary Card */}
          <div className="bg-white border border-autobuy-neutral-6 rounded-2xl p-6 lg:p-8">
            <h4 className="text-lg font-medium text-autobuy-blue-2 mb-8">Order Summary</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-12">
                <div>
                    <span className="text-sm text-gray-400 block mb-1">Order Id:</span>
                    <span className="text-base font-bold text-gray-900">ORD12345</span>
                </div>
                {/* Empty placeholders to align grid if needed */}
                <div className="hidden lg:block"></div> 
                <div className="hidden lg:block"></div> 
                <div className="hidden lg:block"></div> 

                <div>
                    <span className="text-sm text-gray-400 block mb-1">Purchase Date:</span>
                    <span className="text-base font-bold text-gray-900">11 Nov, 2025</span>
                </div>
                <div>
                    <span className="text-sm text-gray-400 block mb-1">Payment Method:</span>
                    <span className="text-base font-bold text-gray-900">Online</span>
                </div>
                <div className="hidden lg:block"></div> 
                <div className="hidden lg:block"></div> 

                 <div>
                    <span className="text-sm text-gray-400 block mb-1">Vehicle Purchased:</span>
                    <span className="text-base font-bold text-gray-900">Toyota Camry 2020</span>
                </div>
                 <div className="hidden lg:block"></div>
                 <div className="hidden lg:block"></div>
                 <div className="hidden lg:block"></div>

                <div>
                    <span className="text-sm text-gray-400 block mb-1">Vin:</span>
                    <span className="text-base font-bold text-gray-900">123456789101112</span>
                </div>
                <div>
                    <span className="text-sm text-gray-400 block mb-1">Quantity:</span>
                    <span className="text-base font-bold text-gray-900">1</span>
                </div>
                <div>
                    <span className="text-sm text-gray-400 block mb-1">Seller Name:</span>
                    <span className="text-base font-bold text-gray-900">Mr Akeem Martins</span>
                </div>
                 <div className="hidden lg:block"></div>

                <div>
                    <span className="text-sm text-gray-400 block mb-1">Sales Price:</span>
                    <span className="text-base font-bold text-gray-900">₦45,000,000</span>
                </div>
                <div>
                    <span className="text-sm text-gray-400 block mb-1">Actual Cost:</span>
                    <span className="text-base font-bold text-gray-900">₦45,000,000</span>
                </div>
            </div>
          </div>

          {/* Payment and Delivery Breakdown Card */}
          <div className="bg-white border border-autobuy-neutral-6 rounded-2xl p-6 lg:p-8">
            <h4 className="text-lg font-medium text-autobuy-blue-2 mb-8">Payment and Delivery Breakdown</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-12">
                <div>
                    <span className="text-sm text-gray-400 block mb-1">Amount Paid:</span>
                    <span className="text-base font-bold text-autobuy-blue-2">₦45,000,000</span>
                </div>
                 <div className="hidden lg:block"></div>
                 <div className="hidden lg:block"></div>
                 <div className="hidden lg:block"></div>

                <div>
                    <span className="text-sm text-gray-400 block mb-1">Payment Status:</span>
                    <span className="text-base font-bold text-autobuy-green-1">Paid</span>
                </div>
                <div>
                    <span className="text-sm text-gray-400 block mb-1">Transaction Date:</span>
                    <span className="text-base font-bold text-gray-900">11 Nov, 2025, 10:42 AM</span>
                </div>
                 <div className="hidden lg:block"></div>
                 <div className="hidden lg:block"></div>

                 <div>
                    <span className="text-sm text-gray-400 block mb-1">Delivery Status:</span>
                    <span className="text-base font-bold text-autobuy-yellow-1">Processing</span>
                </div>
                 <div className="hidden lg:block"></div>
                 <div className="hidden lg:block"></div>
                 <div className="hidden lg:block"></div>

                <div>
                    <span className="text-sm text-gray-400 block mb-1">Courier:</span>
                    <span className="text-base font-bold text-gray-900">Auto-Delivery</span>
                </div>
                 <div>
                    <span className="text-sm text-gray-400 block mb-1">Delivery Date:</span>
                    <span className="text-base font-bold text-gray-900">11 Nov, 2025</span>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default OrderDetails;
