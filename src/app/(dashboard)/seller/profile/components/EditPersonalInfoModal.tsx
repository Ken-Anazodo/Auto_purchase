"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";

interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  state: string;
  city: string;
  address: string;
}

interface EditPersonalInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (personalInfo: PersonalInfo) => void;
  initialData: PersonalInfo;
}

const EditPersonalInfoModal: React.FC<EditPersonalInfoModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialData,
}) => {
  const [formData, setFormData] = useState<PersonalInfo>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<PersonalInfo>>({});

  const nigerianStates = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<PersonalInfo> = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (formData.phoneNumber.length < 10) {
      newErrors.phoneNumber = "Phone number must be at least 10 digits";
    }
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      onSave(formData);
      setIsLoading(false);
    }, 2000);
  };

  const handleInputChange = (field: keyof PersonalInfo, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // Update form data when initialData changes
  React.useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative bg-orange-500 px-6 py-8 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <Icon icon="mdi:close" className="w-6 h-6" />
          </button>

          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon icon="mdi:account-edit" className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-2">
              Edit Personal Information
            </h2>
            <p className="text-white/80 text-sm">
              Update your personal details below
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <form className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Icon icon="mdi:account" className="inline w-4 h-4 mr-2" />
                  First Name
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  placeholder="Enter your first name"
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-0 ${
                    errors.firstName
                      ? "border-red-300 focus:border-red-500 bg-red-50"
                      : "border-gray-200 focus:border-orange-500 bg-gray-50 focus:bg-white"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <Icon icon="mdi:alert-circle" className="w-3 h-3 mr-1" />
                    {errors.firstName}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Icon icon="mdi:account" className="inline w-4 h-4 mr-2" />
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  placeholder="Enter your last name"
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-0 ${
                    errors.lastName
                      ? "border-red-300 focus:border-red-500 bg-red-50"
                      : "border-gray-200 focus:border-orange-500 bg-gray-50 focus:bg-white"
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <Icon icon="mdi:alert-circle" className="w-3 h-3 mr-1" />
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Icon icon="mdi:email" className="inline w-4 h-4 mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-0 ${
                    errors.email
                      ? "border-red-300 focus:border-red-500 bg-red-50"
                      : "border-gray-200 focus:border-orange-500 bg-gray-50 focus:bg-white"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <Icon icon="mdi:alert-circle" className="w-3 h-3 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Icon icon="mdi:phone" className="inline w-4 h-4 mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    handleInputChange("phoneNumber", value);
                  }}
                  placeholder="Enter your phone number"
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-0 ${
                    errors.phoneNumber
                      ? "border-red-300 focus:border-red-500 bg-red-50"
                      : "border-gray-200 focus:border-orange-500 bg-gray-50 focus:bg-white"
                  }`}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <Icon icon="mdi:alert-circle" className="w-3 h-3 mr-1" />
                    {errors.phoneNumber}
                  </p>
                )}
              </div>
            </div>

            {/* Location Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* State */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Icon icon="mdi:map-marker" className="inline w-4 h-4 mr-2" />
                  State
                </label>
                <div className="relative">
                  <select
                    value={formData.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-0 ${
                      errors.state
                        ? "border-red-300 focus:border-red-500 bg-red-50"
                        : "border-gray-200 focus:border-orange-500 bg-gray-50 focus:bg-white"
                    }`}
                  >
                    <option value="">Choose your state</option>
                    {nigerianStates.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                  <Icon
                    icon="mdi:chevron-down"
                    className="absolute right-3 top-3.5 w-5 h-5 text-gray-400"
                  />
                </div>
                {errors.state && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <Icon icon="mdi:alert-circle" className="w-3 h-3 mr-1" />
                    {errors.state}
                  </p>
                )}
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Icon icon="mdi:city" className="inline w-4 h-4 mr-2" />
                  City
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  placeholder="Enter your city"
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-0 ${
                    errors.city
                      ? "border-red-300 focus:border-red-500 bg-red-50"
                      : "border-gray-200 focus:border-orange-500 bg-gray-50 focus:bg-white"
                  }`}
                />
                {errors.city && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <Icon icon="mdi:alert-circle" className="w-3 h-3 mr-1" />
                    {errors.city}
                  </p>
                )}
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Icon icon="mdi:home" className="inline w-4 h-4 mr-2" />
                Address
              </label>
              <textarea
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                placeholder="Enter your full address"
                rows={3}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-0 resize-none ${
                  errors.address
                    ? "border-red-300 focus:border-red-500 bg-red-50"
                    : "border-gray-200 focus:border-orange-500 bg-gray-50 focus:bg-white"
                }`}
              />
              {errors.address && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <Icon icon="mdi:alert-circle" className="w-3 h-3 mr-1" />
                  {errors.address}
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center"
              >
                <Icon icon="mdi:close" className="mr-2 w-5 h-5" />
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                className={`flex-1 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                  isLoading
                    ? "bg-gray-400"
                    : "bg-orange-500 hover:bg-orange-600"
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
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPersonalInfoModal;
