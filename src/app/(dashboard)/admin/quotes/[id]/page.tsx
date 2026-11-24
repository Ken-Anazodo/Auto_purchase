"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import BackButton from "@/components/BackButton";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const QuoteDetailsPage = () => {
  const [isIssued, setIsIssued] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    pricePerUnit: 45000000,
    deliveryFee: 0,
    discountPercent: 0,
    quoteNotes: "",
    validityDate: "",
  });

  const [calculations, setCalculations] = useState({
    subtotal: 0,
    total: 0,
    discountAmount: 0,
  });

  const quantity = 8; // Mocked quantity from design

  // Calculate totals whenever form data changes
  useEffect(() => {
    const price = Number(formData.pricePerUnit) || 0;
    const delivery = Number(formData.deliveryFee) || 0;
    const discount = Number(formData.discountPercent) || 0;

    const baseAmount = price * quantity;
    const discountValue = (baseAmount * discount) / 100;
    const subtotal = baseAmount + delivery - discountValue;

    setCalculations({
      subtotal,
      total: subtotal,
      discountAmount: discountValue,
    });
  }, [formData, quantity]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleIssueQuote = () => {
    setIsIssued(true);
    setShowSuccessModal(true);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="">
      {/* Header */}
      <div className="mb-8">
        <BackButton text="Quote List" />
        <div className="mt-6">
          <h1 className="text-xl font-bold text-autobuy-neutral-1">
            {isIssued ? "Quote Details" : "Create Quote"}
          </h1>
          <p className="text-sm text-autobuy-neutral-3 mt-1">
            {isIssued 
              ? "View details of the issued quote" 
              : "Review buyer request and complete pricing to issue an official quote"}
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Buyer Details */}
        <div className="bg-white rounded-2xl border border-autobuy-neutral-6 p-6">
          <h2 className="text-base font-bold text-autobuy-primary2.5 mb-6">Buyer Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-8">
            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">Company Name:</label>
              <p className="text-sm font-medium text-autobuy-neutral-1">Mycompanyname</p>
            </div>
            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">Industry / Sector</label>
              <p className="text-sm font-medium text-autobuy-neutral-1">Fintech</p>
            </div>
            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">Company Address:</label>
              <p className="text-sm font-medium text-autobuy-neutral-1">Mycompanyaddressis12345</p>
            </div>
            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">Contact Person:</label>
              <p className="text-sm font-medium text-autobuy-neutral-1">Mycompanyname</p>
            </div>
            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">Role:</label>
              <p className="text-sm font-medium text-autobuy-neutral-1">Fintech</p>
            </div>
            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">Email:</label>
              <p className="text-sm font-medium text-autobuy-neutral-1">Mycompany@email.com</p>
            </div>
            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">Phone:</label>
              <p className="text-sm font-medium text-autobuy-neutral-1">012345678910</p>
            </div>
          </div>
        </div>

        {/* Requested Vehicle */}
        <div className="bg-white rounded-2xl border border-autobuy-neutral-6 p-6">
          <h2 className="text-base font-bold text-autobuy-primary2.5 mb-6">Requested Vehicle</h2>
          <div className="flex flex-col md:flex-row gap-6 border-b border-autobuy-neutral-6 pb-6 mb-6">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-autobuy-neutral-1">Toyota Camry 2018</h3>
              <p className="text-sm text-autobuy-neutral-2 mt-1">Vin: Jtfldh25468962ldj</p>
            </div>
            <div className="w-full md:w-32 h-20 bg-autobuy-neutral-6 rounded-lg overflow-hidden relative">
               {/* Placeholder until real image is available */}
               <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                  Car Image
               </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">Quantity Requested:</label>
              <p className="text-sm font-medium text-autobuy-neutral-1">{quantity} Units</p>
            </div>
            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-1">Date Requested:</label>
              <p className="text-sm font-medium text-autobuy-neutral-1">12 Jan, 2026</p>
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs text-autobuy-neutral-3 mb-1">Requirements:</label>
              <p className="text-sm font-medium text-autobuy-neutral-1">Purchasing this to resale</p>
            </div>
          </div>
        </div>

        {/* Pricing Breakdown */}
        <div className="bg-white rounded-2xl border border-autobuy-neutral-6 p-6">
          <h2 className="text-base font-bold text-autobuy-primary2.5 mb-6">Pricing Breakdown</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-2">Price per unit</label>
              <input
                type="number"
                name="pricePerUnit"
                value={formData.pricePerUnit}
                onChange={handleInputChange}
                readOnly={isIssued}
                className={`w-full px-4 py-3 rounded-lg border text-sm text-autobuy-neutral-1 focus:outline-none focus:ring-1 focus:ring-autobuy-blue-2 transition-all ${
                  isIssued ? "bg-autobuy-neutral-6 border-transparent" : "border-autobuy-neutral-6 bg-white"
                }`}
                placeholder="Enter price per unit"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs text-autobuy-neutral-3 mb-2">Delivery Fee</label>
                 <input
                  type="number"
                  name="deliveryFee"
                  value={formData.deliveryFee || ""}
                  onChange={handleInputChange}
                  readOnly={isIssued}
                  className={`w-full px-4 py-3 rounded-lg border text-sm text-autobuy-neutral-1 focus:outline-none focus:ring-1 focus:ring-autobuy-blue-2 transition-all ${
                    isIssued ? "bg-autobuy-neutral-6 border-transparent" : "border-autobuy-neutral-6 bg-white"
                  }`}
                  placeholder="Enter delivery cost"
                />
              </div>
              <div>
                <label className="block text-xs text-autobuy-neutral-3 mb-2">Discount (%)</label>
                <input
                  type="number"
                  name="discountPercent"
                  value={formData.discountPercent || ""}
                  onChange={handleInputChange}
                  readOnly={isIssued}
                  className={`w-full px-4 py-3 rounded-lg border text-sm text-autobuy-neutral-1 focus:outline-none focus:ring-1 focus:ring-autobuy-blue-2 transition-all ${
                    isIssued ? "bg-autobuy-neutral-6 border-transparent" : "border-autobuy-neutral-6 bg-white"
                  }`}
                  placeholder="Enter discount amount"
                />
              </div>
            </div>
            
            <div className="pt-4 border-t border-autobuy-neutral-6 space-y-3">
              <div className="flexjustify-between items-center">
                 <div className="flex justify-between items-center text-sm">
                    <span className="text-autobuy-neutral-3">Subtotal:</span>
                    <span className="font-bold text-autobuy-neutral-1">{formatCurrency(calculations.subtotal)}</span>
                 </div>
              </div>
               <div className="flex justify-between items-center text-sm">
                  <span className="text-autobuy-neutral-3">Total Amount:</span>
                  <span className="font-bold text-autobuy-primary2.5 text-base">{formatCurrency(calculations.total)}</span>
               </div>
            </div>
          </div>
        </div>

        {/* Quote Terms & Validity */}
        <div className="bg-white rounded-2xl border border-autobuy-neutral-6 p-6">
          <h2 className="text-base font-bold text-autobuy-primary2.5 mb-6">Quote Terms & Validity</h2>
          <div className="space-y-6">
             <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-2">Quote Notes</label>
              <textarea
                name="quoteNotes"
                value={formData.quoteNotes}
                onChange={handleInputChange}
                readOnly={isIssued}
                rows={4}
                className={`w-full px-4 py-3 rounded-lg border text-sm text-autobuy-neutral-1 focus:outline-none focus:ring-1 focus:ring-autobuy-blue-2 transition-all resize-none ${
                  isIssued ? "bg-autobuy-neutral-6 border-transparent" : "border-autobuy-neutral-6 bg-white"
                }`}
                placeholder="Add terms, or additional information for the buyer..."
              />
            </div>
            <div>
              <label className="block text-xs text-autobuy-neutral-3 mb-2">Validity Period</label>
              <div className="relative">
                 <input
                  type="date"
                  name="validityDate"
                  value={formData.validityDate}
                  onChange={handleInputChange}
                  readOnly={isIssued}
                  className={`w-full px-4 py-3 rounded-lg border text-sm text-autobuy-neutral-1 focus:outline-none focus:ring-1 focus:ring-autobuy-blue-2 transition-all ${
                    isIssued ? "bg-autobuy-neutral-6 border-transparent" : "border-autobuy-neutral-6 bg-white"
                  }`}
                  placeholder="Select quote expiry date"
                />
              </div>
              <p className="text-[10px] text-autobuy-neutral-3 mt-2 flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-autobuy-neutral-3"></span>
                Quote will expire automatically after this date
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        {!isIssued && (
           <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 pt-4">
            <button 
              className="w-full md:w-auto px-8 py-3 rounded-lg bg-autobuy-neutral-6 text-autobuy-neutral-2 font-medium text-sm hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleIssueQuote}
              className="w-full md:w-auto px-8 py-3 rounded-lg bg-autobuy-primary2.5 text-white font-medium text-sm hover:bg-blue-600 transition-colors"
            >
              Issue Quote
            </button>
          </div>
        )}
      </div>

       {/* Success Modal */}
       <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md p-8 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-autobuy-primary2.5 mb-6">
            <Icon icon="mdi:check" className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-xl font-bold text-autobuy-neutral-2 mb-2">
             Quote issued Successfully
          </h2>
          <p className="text-sm text-autobuy-neutral-3 mb-6">
             The buyer has been notified and can now view or download the quote from their dashboard
          </p>
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default QuoteDetailsPage;