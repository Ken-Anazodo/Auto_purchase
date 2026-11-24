"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { ProfilePicture } from "./ProfilePicture";
import { FormField } from "./FormField";
import { Button } from "@/components/ui/button";

export interface ProfileFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  ninCac: string;
  accountType: string;
  city: string;
  state: string;
  address: string;
  companyAddress?: string;
  profileImage?: File;
}

interface ProfileUpdateFormProps {
  initialData?: Partial<ProfileFormData>;
  onSubmit?: (data: ProfileFormData) => void;
  onImageChange?: (file: File) => void;
  profileImageUrl?: string;
  isLoading?: boolean;
}

export function ProfileUpdateForm({
  initialData = {},
  onSubmit,
  onImageChange,
  profileImageUrl,
  isLoading = false,
}: ProfileUpdateFormProps) {
  const [formData, setFormData] = useState<ProfileFormData>({
    firstName: initialData.firstName || "Mary",
    lastName: initialData.lastName || "Mary",
    email: initialData.email || "myemail@gmail.com",
    phone: initialData.phone || "012345678641",
    ninCac: initialData.ninCac || "12345678910",
    accountType: initialData.accountType || "Individual",
    city: initialData.city || "Lagos",
    state: initialData.state || "Lagos",
    address: initialData.address || "Lagos",
    companyAddress: initialData.companyAddress || "Lagos",
    ...initialData,
  });

  const handleFieldChange =
    (field: keyof ProfileFormData) => (value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    };

  const handleImageChange = (file: File) => {
    setFormData((prev) => ({ ...prev, profileImage: file }));
    onImageChange?.(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
    console.log(formData)
  };

  return (
    <div className="w-full bg-[#F5F9FF] p-4 md:p-10 rounded-3xl shadow-sm">
      <div className="mb-8">
        <h2 className="text-lg font-medium text-autobuy-neutral-1 mb-2">
          Personal Information
        </h2>
        <p className="text-sm text-gray-600">
          To ensure trust and security please provide the details below.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Profile Image and Account Info Section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          <div className="flex-shrink-0">
            <ProfilePicture
              imageUrl={profileImageUrl}
              onImageChange={handleImageChange}
              alt="Profile Picture"
            />
          </div>

          <div className="flex-1 space-y-6">
            {/* NIN/CAC Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                National Identification Number (NIN) / CAC
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.ninCac}
                  onChange={(e) => handleFieldChange("ninCac")(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-transparent"
                  placeholder="12345678910"
                />
                <Icon
                  icon="eos-icons:bubble-loading"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 animate-spin"
                />
              </div>
            </div>

            {/* Account Type Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select your preferred option
              </label>
              <select
                value={formData.accountType}
                onChange={(e) =>
                  handleFieldChange("accountType")(e.target.value)
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-transparent"
              >
                <option value="Individual">Individual</option>
                <option value="Business">Business</option>
              </select>
            </div>
          </div>
        </div>

        {/* Personal Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <FormField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleFieldChange("firstName")}
            required
          />

          <FormField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleFieldChange("lastName")}
            required
          />

          <FormField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleFieldChange("email")}
            required
          />

          <FormField
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleFieldChange("phone")}
            required
          />

          <FormField
            label="State"
            name="state"
            value={formData.state}
            onChange={handleFieldChange("state")}
            required
          />

          <FormField
            label="City"
            name="city"
            value={formData.city}
            onChange={handleFieldChange("city")}
            required
          />

          <FormField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleFieldChange("address")}
            required
          />

          <FormField
            label="Company Address (optional)"
            name="companyAddress"
            value={formData.companyAddress || ""}
            onChange={handleFieldChange("companyAddress")}
          />
        </div>

        <div className="flex justify-end mt-10">
          <Button
            type="submit"
            disabled={isLoading}
            className="px-10 py-3 min-w-56 bg-[#e56b4b] text-white rounded-xl text-lg shadow-sm hover:bg-[#e56b4b]/90 h-auto"
          >
            {isLoading ? "Saving..." : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
}
