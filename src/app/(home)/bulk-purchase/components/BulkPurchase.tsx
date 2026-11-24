"use client";

import React, { useState } from "react";
import VehicleCard from "./VehicleCard";
import PurchaseOptions, { PurchaseOption } from "./PurchaseOptions";
import BulkPurchaseForm, { FormData } from "./BulkPurchaseForm";
import BulkPurchaseSuccessModal from "./BulkPurchaseSuccessModal";

interface Vehicle {
  name: string;
  year: string;
  price: number;
  image: string;
  mileage: string;
  transmission: string;
  fuel: string;
  color: string;
  location: string;
  availability: number;
}

interface BulkPurchaseProps {
  vehicle?: Vehicle;
  purchaseOptions?: PurchaseOption[];
  title?: string;
  subtitle?: string;
  onSubmit?: (data: {
    selectedOption: string;
    vehicle: Vehicle;
    formData: FormData;
  }) => void;
  className?: string;
}

const BulkPurchase: React.FC<BulkPurchaseProps> = ({
  vehicle = {
    name: "Toyota Camry",
    year: "2018",
    price: 45000000,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAb_nvWOWd_b9v01Jo_n8xPw30U7dJkdtezaEF7wbFQn8UfG46OrTKRgmP5N3aB3CJgKPzxKng5IKizjD2dRXK5Tgzfio12Isy1SDmxoISIrDU4sPw5PGScQNmLFJA6NFmlV9XibmE-Dae93fJo3g7lbW-nSd_5DyP-DZgFWbW6WhmNtDqWaivnn1DqQVftEWnX2fYkMboECTaFONAE95VnYkqtdOuXDcQ5iH-m8JnAL-0l-eHiOy-urzNiGLB4NdOBCMYK8YwBwjY",
    mileage: "45,000km",
    transmission: "Automatic",
    fuel: "Fuel",
    color: "Black",
    location: "Lagos, Nigeria",
    availability: 12,
  },
  purchaseOptions = [
    { value: "buy-now", label: "Buy multiple units now" },
    { value: "custom-quote", label: "Request a custom quote (5+ units)" },
  ],
  title = "Bulk purchase",
  subtitle = "Buy multiple units of this vehicle or request a custom quote for larger orders",
  onSubmit,
  className = "",
}) => {
  const [selectedOption, setSelectedOption] = useState("custom-quote");
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    industry: "",
    companyAddress: "",
    contactPersonName: "",
    contactPersonRole: "",
    emailAddress: "",
    phoneNumber: "",
    quantity: "",
    requirements: "",
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successType, setSuccessType] = useState<"bulk" | "quote">("quote");

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    // Determine type based on selection
    if (selectedOption === "buy-now") {
        setSuccessType("bulk");
    } else {
        setSuccessType("quote");
    }
    
    setShowSuccessModal(true);

    const submissionData = {
      selectedOption,
      vehicle,
      formData,
    };
    onSubmit?.(submissionData);
  };

  // Handler for "Buy Now" button click (if it exists outside the form)
  // Assuming PurchaseOptions might need a way to trigger this if it has a button? 
  // Or maybe there is a main action button in this component?
  // Looking at the previous code, PurchaseOptions just selects the option.
  // We need a way to trigger 'buy-now' submission if it's selected. 
  // The 'buy-now' flow usually implies a direct action.
  // HOWEVER, the design shows "How would you like to proceed?" radio buttons.
  // If "Buy multiple units now" is selected, we probably need a "Proceed" or "Buy Now" button 
  // that is distinct from the Form submit button if the form is hidden.
  // BUT, looking at the UI, the form is only for "Custom Quote".
  // If "Buy multiple units now" is selected, does a button appear?
  // Let's check PurchaseOptions.tsx if possible, but for now I will add a generic "Proceed" button
  // if "buy-now" is selected, OR allow PurchaseOptions to handle it?
  // Actually, existing code didn't have a button for "buy-now". 
  // I'll add a "Proceed to Checkout" button when "buy-now" is active.

  return (
    <div className={`container spacing max-w-4xl mx-auto ${className}`}>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-slate-900 mb-2">{title}</h1>
        <p className="text-autobuy-neutral-1">{subtitle}</p>
      </div>

      {/* Vehicle Card */}
      <VehicleCard vehicle={vehicle} className="mb-8" />

      {/* Purchase Options */}
      <PurchaseOptions
        options={purchaseOptions}
        selectedOption={selectedOption}
        onOptionChange={setSelectedOption}
      />

      {/* Action for Buy Now */}
      {selectedOption === "buy-now" && (
         <div className="mt-8 flex justify-end">
            <button
                onClick={() => handleSubmit()}
                className="px-8 py-3 bg-autobuy-primary2.5 text-white font-semibold rounded-[12px] hover:bg-blue-700 transition-colors text-base"
            >
                Proceed to Checkout
            </button>
         </div>
      )}

      {/* Form - Only show for custom quote */}
      {selectedOption === "custom-quote" && (
        <BulkPurchaseForm
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      )}

      <BulkPurchaseSuccessModal 
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        type={successType}
      />
    </div>
  );
};



export default BulkPurchase;
