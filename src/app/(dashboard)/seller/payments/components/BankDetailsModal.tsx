"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";

interface BankDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (bankDetails: BankDetails) => void;
  existingDetails?: BankDetails | null;
}

interface BankDetails {
  bankName: string;
  accountName: string;
  accountNumber: string;
  bankCode?: string;
  routingNumber?: string;
  swiftCode?: string;
}

const BankDetailsModal: React.FC<BankDetailsModalProps> = ({
  isOpen,
  onClose,
  onSave,
  existingDetails,
}) => {
  const [formData, setFormData] = useState<BankDetails>({
    bankName: existingDetails?.bankName || "",
    accountName: existingDetails?.accountName || "",
    accountNumber: existingDetails?.accountNumber || "",
    bankCode: existingDetails?.bankCode || "",
    routingNumber: existingDetails?.routingNumber || "",
    swiftCode: existingDetails?.swiftCode || "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<BankDetails>>({});

  const nigerianBanks = [
    "Access Bank",
    "First Bank",
    "GTBank",
    "UBA",
    "Zenith Bank",
    "Fidelity Bank",
    "FCMB",
    "Sterling Bank",
    "Union Bank",
    "Wema Bank",
    "Polaris Bank",
    "Stanbic IBTC",
    "Keystone Bank",
    "Unity Bank",
  ];

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<BankDetails> = {};

    if (step === 1) {
      if (!formData.bankName.trim())
        newErrors.bankName = "Bank name is required";
      if (!formData.accountName.trim())
        newErrors.accountName = "Account name is required";
    }

    if (step === 2) {
      if (!formData.accountNumber.trim()) {
        newErrors.accountNumber = "Account number is required";
      } else if (formData.accountNumber.length !== 10) {
        newErrors.accountNumber = "Account number must be 10 digits";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
    setErrors({});
  };

  const handleSubmit = async () => {
    if (!validateStep(2)) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      onSave(formData);
      setIsLoading(false);
      onClose();
      setCurrentStep(1);
      setFormData({
        bankName: "",
        accountName: "",
        accountNumber: "",
        bankCode: "",
        routingNumber: "",
        swiftCode: "",
      });
    }, 2000);
  };

  const handleInputChange = (field: keyof BankDetails, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="relative bg-autobuy-orange-1 px-6 py-8 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <Icon icon="mdi:close" className="w-6 h-6" />
          </button>

          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon icon="mdi:bank" className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-2">
              {existingDetails ? "Update Bank Details" : "Add Bank Details"}
            </h2>
            <p className="text-white/80 text-sm">
              {currentStep === 1
                ? "Let's start with your bank information"
                : "Now enter your account details"}
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mt-6 space-x-4">
            <div
              className={`w-3 h-3 rounded-full transition-colors ${
                currentStep >= 1 ? "bg-white" : "bg-white/30"
              }`}
            />
            <div
              className={`w-3 h-3 rounded-full transition-colors ${
                currentStep >= 2 ? "bg-white" : "bg-white/30"
              }`}
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {currentStep === 1 && (
            <div className="space-y-6 animate-fade-in">
              {/* Bank Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  <Icon icon="mdi:bank" className="inline w-4 h-4 mr-2" />
                  Select Your Bank
                </label>
                <div className="relative">
                  <select
                    value={formData.bankName}
                    onChange={(e) =>
                      handleInputChange("bankName", e.target.value)
                    }
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-0 ${
                      errors.bankName
                        ? "border-red-300 focus:border-red-500 bg-red-50"
                        : "border-gray-200 focus:border-orange-500 bg-gray-50 focus:bg-white"
                    }`}
                  >
                    <option value="">Choose your bank</option>
                    {nigerianBanks.map((bank) => (
                      <option key={bank} value={bank}>
                        {bank}
                      </option>
                    ))}
                  </select>
                 
                </div>
                {errors.bankName && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <Icon icon="mdi:alert-circle" className="w-3 h-3 mr-1" />
                    {errors.bankName}
                  </p>
                )}
              </div>

              {/* Account Holder Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  <Icon icon="mdi:account" className="inline w-4 h-4 mr-2" />
                  Account Holder Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.accountName}
                    onChange={(e) =>
                      handleInputChange("accountName", e.target.value)
                    }
                    placeholder="Enter full name as on bank account"
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-0 ${
                      errors.accountName
                        ? "border-red-300 focus:border-red-500 bg-red-50"
                        : "border-gray-200 focus:border-orange-500 bg-gray-50 focus:bg-white"
                    }`}
                  />
                  <Icon
                    icon="mdi:account-circle"
                    className="absolute right-3 top-3.5 w-5 h-5 text-gray-400"
                  />
                </div>
                {errors.accountName && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <Icon icon="mdi:alert-circle" className="w-3 h-3 mr-1" />
                    {errors.accountName}
                  </p>
                )}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="w-full bg-autobuy-orange-1 hover:bg-orange-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center"
              >
                Continue
                <Icon icon="mdi:arrow-right" className="ml-2 w-5 h-5" />
              </button>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6 animate-fade-in">
              {/* Account Number */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  <Icon
                    icon="mdi:credit-card"
                    className="inline w-4 h-4 mr-2"
                  />
                  Account Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.accountNumber}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      if (value.length <= 10) {
                        handleInputChange("accountNumber", value);
                      }
                    }}
                    placeholder="Enter 10-digit account number"
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-0 font-mono tracking-wider ${
                      errors.accountNumber
                        ? "border-red-300 focus:border-red-500 bg-red-50"
                        : "border-gray-200 focus:border-orange-500 bg-gray-50 focus:bg-white"
                    }`}
                  />
                  <div className="absolute right-3 top-3.5">
                    {formData.accountNumber.length === 10 ? (
                      <Icon
                        icon="mdi:check-circle"
                        className="w-5 h-5 text-green-500"
                      />
                    ) : (
                      <Icon
                        icon="mdi:credit-card-outline"
                        className="w-5 h-5 text-gray-400"
                      />
                    )}
                  </div>
                </div>
                {errors.accountNumber && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <Icon icon="mdi:alert-circle" className="w-3 h-3 mr-1" />
                    {errors.accountNumber}
                  </p>
                )}
              </div>

              {/* Bank Code (Optional) */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  <Icon icon="mdi:code-tags" className="inline w-4 h-4 mr-2" />
                  Bank Code{" "}
                  <span className="text-gray-400 text-xs">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.bankCode}
                  onChange={(e) =>
                    handleInputChange("bankCode", e.target.value)
                  }
                  placeholder="e.g. 044"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 bg-gray-50 focus:bg-white transition-all duration-200 focus:outline-none focus:ring-0"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={handlePrevious}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center"
                >
                  <Icon icon="mdi:arrow-left" className="mr-2 w-5 h-5" />
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className={`flex-1 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                    isLoading
                      ? "bg-gray-400"
                      : "bg-autobuy-orange-1 hover:bg-orange-600"
                  }`}
                >
                  {isLoading ? (
                    <>
                      <Icon
                        icon="mdi:loading"
                        className="animate-spin mr-2 w-5 h-5"
                      />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Icon icon="mdi:check" className="mr-2 w-5 h-5" />
                      Save Details
                    </>
                  )}
                </button>
              </div>

              {/* Security Note */}
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mt-4">
                <div className="flex items-start space-x-3">
                  <Icon
                    icon="mdi:shield-check"
                    className="w-5 h-5 text-autobuy-orange-1 mt-0.5"
                  />
                  <div>
                    <p className="text-orange-800 text-sm font-medium">
                      Secure & Encrypted
                    </p>
                    <p className="text-autobuy-orange-1 text-xs">
                      Your bank details are encrypted and stored securely.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default BankDetailsModal;
