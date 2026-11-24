"use client";

import BackButton from "@/components/BackButton";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import toast from "react-hot-toast";
import PaymentStatusModal from "./components/PaymentStatusModal";

const PaymentPage = () => {
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "verifying" | "success" | "pending" | "failed">("idle");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard`);
  };

  const handlePaymentClick = () => {
    setPaymentStatus("verifying");
    setIsModalOpen(true);

    // Simulation for demo purposes
    // In a real app, this would poll an endpoint or listen to a socket
    setTimeout(() => {
        // Randomly succeed or fail for demo, or just succeed
        // For now, let's succeed to match the happy path
        setPaymentStatus("pending");
        // setPaymentStatus("success");
    }, 3000);
  };

  const handleRetry = () => {
      setPaymentStatus("verifying");
      setTimeout(() => {
          setPaymentStatus("success");
      }, 3000);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-6 ">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <header className="container ">
            <BackButton />
          </header>
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-lg font-medium text-autobuy-neutral-1 mb-2">
              Complete Your payment
            </h1>
            <p className="text-gray-500 text-sm">
              Your deposit is securely held in escrow until the process is
              complete.
            </p>
          </div>

          {/* Order Summary Section */}
          <div className="flex flex-col md:flex-row gap-8 md:items-center justify-between mb-10 px-4 md:px-8 max-w-5xl mx-auto">
            {/* Vehicle Info */}
            <div className="flex items-center gap-5">
              <div className="w-24 h-20 bg-gray-100 rounded-xl overflow-hidden shrink-0">
                {/* Placeholder for vehicle image */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb_nvWOWd_b9v01Jo_n8xPw30U7dJkdtezaEF7wbFQn8UfG46OrTKRgmP5N3aB3CJgKPzxKng5IKizjD2dRXK5Tgzfio12Isy1SDmxoISIrDU4sPw5PGScQNmLFJA6NFmlV9XibmE-Dae93fJo3g7lbW-nSd_5DyP-DZgFWbW6WhmNtDqWaivnn1DqQVftEWnX2fYkMboECTaFONAE95VnYkqtdOuXDcQ5iH-m8JnAL-0l-eHiOy-urzNiGLB4NdOBCMYK8YwBwjY"
                  className="w-full h-full object-cover"
                  alt="Vehicle"
                />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">
                  2018 Toyota Camry XLE
                </h3>
                <p className="text-[#2563EB] font-bold text-xl">₦45,000,000</p>
              </div>
            </div>

            {/* Breakdown */}
            <div className="w-full md:w-auto min-w-[300px] space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-semibold text-gray-900">₦45,000,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Delivery Fee:</span>
                <span className="font-semibold text-gray-900">₦50,000</span>
              </div>
              <div className="flex justify-between text-sm pt-3 border-t border-gray-100">
                <span className="text-gray-600">Total:</span>
                <span className="font-bold text-[#2563EB]">₦45,050,000</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-blue-100 w-full mb-10"></div>

          {/* Bank Transfer Details */}
          <div className="text-center max-w-lg mx-auto">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              Transfer to Your Unique Escrow Account
            </h2>
            <p className="text-gray-500 text-xs mb-8">
              This account is unique to your order and protected, do not pay
              into any personal account
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-gray-500 text-xs mb-1">
                  Bank Name
                </label>
                <p className="text-[#2563EB] font-semibold text-lg">
                  Sterling Bank
                </p>
              </div>
              <div>
                <label className="block text-gray-500 text-xs mb-1">
                  Account Name
                </label>
                <p className="text-[#2563EB] font-semibold text-lg">
                  Sterling Bank Account Name
                </p>
              </div>

              {/* Account Number */}
              <div>
                <label className="block text-gray-500 text-xs mb-1">
                  Account Number
                </label>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-[#2563EB] font-bold text-2xl tracking-wider">
                    01245678910
                  </p>
                  <button
                    onClick={() => handleCopy("01245678910", "Account Number")}
                    className="text-[#2563EB] hover:bg-blue-50 p-1.5 rounded-full transition-colors"
                  >
                    <Icon
                      icon="heroicons:document-duplicate"
                      className="text-lg"
                    />
                  </button>
                </div>
              </div>

              {/* Amount */}
              <div>
                <label className="block text-gray-500 text-xs mb-1">
                  Amount
                </label>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-[#2563EB] font-bold text-2xl">
                    ₦45,050,000
                  </p>
                  <button
                    onClick={() => handleCopy("45050000", "Amount")}
                    className="text-[#2563EB] hover:bg-blue-50 p-1.5 rounded-full transition-colors"
                  >
                    <Icon
                      icon="heroicons:document-duplicate"
                      className="text-lg"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-12">
              <button 
                onClick={handlePaymentClick}
                className="w-full py-4 bg-[#2563EB] text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100"
              >
                I Have Made Payment
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <PaymentStatusModal 
        isOpen={isModalOpen}
        status={paymentStatus}
        onClose={() => setIsModalOpen(false)}
        onRetry={handleRetry}
        onChangeMethod={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default PaymentPage;
