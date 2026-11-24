"use client";

import React from "react";
import BackButton from "@/components/BackButton";
import Link from "next/link";

const TransactionDetailsPage = () => {
  return (
    <div className="">
      {/* Header */}
      <div className="mb-8">
        <BackButton text="Sales & payments" />
        <h1 className="text-lg font-medium text-autobuy-neutral-1 mt-6">
          Transaction Details
        </h1>
      </div>

      <div className="space-y-6">
        {/* Payment Information */}
        <div className="bg-white rounded-2xl border border-autobuy-neutral-6 p-8">
          <h2 className="text-base font-bold text-autobuy-primary2.5 mb-8">
            Payment Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-8">
            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">Transaction Id:</label>
              <p className="text-sm font-medium text-autobuy-neutral-1">TRX12345</p>
            </div>
            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">Vehicle:</label>
              <p className="text-sm font-medium text-autobuy-neutral-1">Toyota Corolla 2016</p>
            </div>
            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">Date:</label>
              <p className="text-sm font-medium text-autobuy-neutral-1">11 Nov, 2025</p>
            </div>

            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">Actual Cost:</label>
              <p className="text-sm font-medium text-autobuy-neutral-1">₦40,000,000</p>
            </div>
            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">Sales Cost:</label>
              <p className="text-sm font-medium text-autobuy-neutral-1">₦45,000,000</p>
            </div>
            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">Payment Status:</label>
              <p className="text-sm font-medium text-autobuy-green-1">Successful</p>
            </div>

            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">Seller Name:</label>
              <p className="text-sm font-medium text-autobuy-neutral-1">Mr Akeem John</p>
            </div>
            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">Email:</label>
              <p className="text-sm font-medium text-autobuy-neutral-1">Myemail@gmail.com</p>
            </div>
            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">Phone:</label>
              <p className="text-sm font-medium text-autobuy-neutral-1">0812345678910</p>
            </div>

            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">Buyer Name:</label>
              <p className="text-sm font-medium text-autobuy-neutral-1">Mr Akeem John</p>
            </div>
            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">Buyer Phone:</label>
              <p className="text-sm font-medium text-autobuy-neutral-1">0123456789</p>
            </div>
          </div>
        </div>

        {/* Vehicle Details */}
        <div className="bg-white rounded-2xl border border-autobuy-neutral-6 p-8">
          <h2 className="text-base font-bold text-autobuy-primary2.5 mb-8">
            Vehicle Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-8 mb-8">
            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">Vehicle Name:</label>
              <p className="text-sm font-bold text-autobuy-neutral-1">Toyota Camry 2018</p>
            </div>
            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">Listing Id</label>
              <p className="text-sm font-bold text-autobuy-neutral-1">144587965</p>
            </div>
            <div className="hidden md:block"></div> {/* Spacer to match grid layout if needed, or just let it flow */}

            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">VIN:</label>
              <p className="text-sm font-medium text-autobuy-neutral-1">012345678910</p>
            </div>
            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">Condition:</label>
              <p className="text-sm font-medium text-autobuy-neutral-1">Good</p>
            </div>
            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">Delivery Status:</label>
              <p className="text-sm font-medium text-autobuy-green-1">Delivered</p>
            </div>
          </div>

          <div className="flex justify-center">
            <Link 
              href="#" 
              className="text-sm text-autobuy-primary2.5 font-medium hover:underline italic"
            >
              [See Full Vehicle Information]
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetailsPage;
