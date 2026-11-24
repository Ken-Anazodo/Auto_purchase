"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import InputField from "./InputField";
import SelectField from "./SelectField";

interface NextInspectionFormData {
  address: string;
  numberOfCars: string;
}

interface NextInspectionFormProps {
  onSubmit?: (data: NextInspectionFormData) => void;
  onBack?: () => void;
}

const NextInspectionForm: React.FC<NextInspectionFormProps> = ({
  onSubmit,
  onBack,
}) => {
  const [formData, setFormData] = useState<NextInspectionFormData>({
    address: "123, Allen Avenue",
    numberOfCars: "2",
  });

  const carCountOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5+", label: "5+" },
  ];

  const updateFormData = (
    field: keyof NextInspectionFormData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Auto-submit when form is complete
    const updatedData = { ...formData, [field]: value };
    if (updatedData.address && updatedData.numberOfCars && onSubmit) {
      onSubmit(updatedData);
    }
  };

  return (
    <div className="">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="mr-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Icon icon="mdi:arrow-left" className="w-5 h-5 text-gray-600" />
        </button>
        <div>
          <h1 className="text-lg font-semibold text-gray-900">
            Book Your Next Vehicle Inspection
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Quickly schedule a car inspection with our certified technicians. No
            need to re-enter your personal details.
          </p>
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        {/* Address Field */}
        <InputField
          label="Address"
          value={formData.address}
          onChange={(value) => updateFormData("address", value)}
          placeholder="Enter inspection address"
        />

        {/* Number of Cars */}
        <SelectField
          label="No of Cars"
          value={formData.numberOfCars}
          onChange={(value) => updateFormData("numberOfCars", value)}
          options={carCountOptions}
          placeholder="Select number"
        />
      </div>
    </div>
  );
};

export default NextInspectionForm;
