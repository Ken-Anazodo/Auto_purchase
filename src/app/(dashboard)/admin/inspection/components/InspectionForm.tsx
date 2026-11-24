"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Icon } from "@iconify/react";
import InputField from "./InputField";
import SelectField from "./SelectField";

interface InspectionFormData {
  sellerType: string;
  // Business Owner fields
  cacNumber?: string;
  companyAddress?: string;
  // Individual fields
  nin?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  state: string;
  city: string;
  numberOfCars: string;
}

interface InspectionFormProps {
  onSubmit?: (data: InspectionFormData) => void;
  onBack?: () => void;
  defaultValues?: Partial<InspectionFormData>;
}

const InspectionForm: React.FC<InspectionFormProps> = ({
  onSubmit,
  onBack,
  defaultValues,
}) => {
  const [formData, setFormData] = useState<InspectionFormData>({
    sellerType: defaultValues?.sellerType || "Individual",
    nin: defaultValues?.nin || "",
    firstName: defaultValues?.firstName || "",
    lastName: defaultValues?.lastName || "",
    email: defaultValues?.email || "",
    phone: defaultValues?.phone || "",
    address: defaultValues?.address || "",
    state: defaultValues?.state || "",
    city: defaultValues?.city || "",
    numberOfCars: defaultValues?.numberOfCars || "1",
    cacNumber: defaultValues?.cacNumber || "",
    companyAddress: defaultValues?.companyAddress || "",
  });

  useEffect(() => {
    if (defaultValues) {
      setFormData(prev => ({
        ...prev,
        ...defaultValues,
      }));
    }
  }, [defaultValues]);

  const sellerTypeOptions = [
    { value: "Business Owner", label: "Business Owner" },
    { value: "Individual", label: "Individual" },
  ];

  const stateOptions = [
    { value: "Lagos", label: "Lagos" },
    { value: "Abuja", label: "Abuja" },
    { value: "Rivers", label: "Rivers" },
    { value: "Oyo", label: "Oyo" },
    { value: "Kano", label: "Kano" },
  ];

  const cityOptions = [
    { value: "Ikeja", label: "Ikeja" },
    { value: "Victoria Island", label: "Victoria Island" },
    { value: "Lekki", label: "Lekki" },
    { value: "Surulere", label: "Surulere" },
    { value: "Mainland", label: "Mainland" },
  ];

  const carCountOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5+", label: "5+" },
  ];

  const updateFormData = (field: keyof InspectionFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSellerTypeChange = (value: string) => {
    setFormData((prev) => {
      const baseData = {
        sellerType: value,
        firstName: prev.firstName,
        lastName: prev.lastName,
        email: prev.email,
        phone: prev.phone,
        address: prev.address,
        state: prev.state,
        city: prev.city,
        numberOfCars: prev.numberOfCars,
      };

      if (value === "Business Owner") {
        return {
          ...baseData,
          cacNumber: "",
          companyAddress: "",
        };
      } else {
        return {
          ...baseData,
          nin: "",
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  // Check if form is complete and automatically call onSubmit
  const isFormComplete = useCallback(() => {
    const required = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "address",
      "state",
      "city",
      "numberOfCars",
    ];
    const hasRequiredFields = required.every(
      (field) => formData[field as keyof InspectionFormData]
    );

    if (formData.sellerType === "Business Owner") {
      return hasRequiredFields && formData.cacNumber && formData.companyAddress;
    } else {
      return hasRequiredFields && formData.nin;
    }
  }, [formData]);

  // Auto-submit when form is complete
  useEffect(() => {
    if (isFormComplete() && onSubmit) {
      onSubmit(formData);
    }
  }, [formData, onSubmit, isFormComplete]);

  return (
    <div className="">
      {/* Header */}
      <div className="md:flex items-center mb-6">
        <button
          onClick={onBack}
          className="mr-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Icon icon="mdi:arrow-left" className="w-5 h-5 text-gray-600" />
        </button>
        <div>
          <h1 className="text-lg font-semibold text-gray-900">
            Book Your Vehicle Inspection
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            To ensure trust and security as a first time seller, please provide
            the details below.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Seller Type Selection */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Select your preferred option
          </label>
          <SelectField
            label=""
            value={formData.sellerType}
            onChange={handleSellerTypeChange}
            options={sellerTypeOptions}
          />
        </div>

        {/* Form Fields Section */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-700">
            Enter the following details below:
          </h3>

          {/* Conditional First Row - CAC/Company for Business, NIN for Individual */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {formData.sellerType === "Business Owner" ? (
              <>
                <InputField
                  label="CAC Number"
                  value={formData.cacNumber || ""}
                  onChange={(value) => updateFormData("cacNumber", value)}
                  placeholder="Enter CAC number"
                  icon={
                    <Icon icon="mdi:loading" className="w-4 h-4 animate-spin" />
                  }
                />
                <InputField
                  label="Company Address"
                  value={formData.companyAddress || ""}
                  onChange={(value) => updateFormData("companyAddress", value)}
                  placeholder="Enter company address"
                />
              </>
            ) : (
              <InputField
                label="National Identification Number (NIN)"
                value={formData.nin || ""}
                onChange={(value) => updateFormData("nin", value)}
                placeholder="Enter NIN"
                icon={
                  <Icon icon="mdi:loading" className="w-4 h-4 animate-spin" />
                }
              />
            )}
          </div>

          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="First Name"
              value={formData.firstName}
              onChange={(value) => updateFormData("firstName", value)}
              placeholder="Enter first name"
            />
            <InputField
              label="Last Name"
              value={formData.lastName}
              onChange={(value) => updateFormData("lastName", value)}
              placeholder="Enter last name"
            />
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(value) => updateFormData("email", value)}
              placeholder="Enter email address"
            />
            <InputField
              label="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={(value) => updateFormData("phone", value)}
              placeholder="Enter phone number"
            />
          </div>

          {/* Address and State */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Address"
              value={formData.address}
              onChange={(value) => updateFormData("address", value)}
              placeholder="Enter your address"
            />
            <SelectField
              label="Select State"
              value={formData.state}
              onChange={(value) => updateFormData("state", value)}
              options={stateOptions}
              placeholder="Choose state"
            />
          </div>

          {/* City and Number of Cars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SelectField
              label="Select City"
              value={formData.city}
              onChange={(value) => updateFormData("city", value)}
              options={cityOptions}
              placeholder="Choose city"
            />
            <SelectField
              label="No of Cars"
              value={formData.numberOfCars}
              onChange={(value) => updateFormData("numberOfCars", value)}
              options={carCountOptions}
              placeholder="Select number"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default InspectionForm;
