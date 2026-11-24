import React from "react";
import { Icon } from "@iconify/react";

interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  ninCac: string;
  state: string;
  city: string;
  address: string;
}

interface PersonalInformationCardProps {
  personalInfo: PersonalInfo;
  onEdit: () => void;
}

const PersonalInformationCard: React.FC<PersonalInformationCardProps> = ({
  personalInfo,
  onEdit,
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      {/* Card Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Personal Information
        </h3>
        <button
          onClick={onEdit}
          className="flex items-center space-x-2 bg-orange-50 border border-orange-500 text-orange-500 hover:bg-orange-100 px-3 py-1.5 rounded-[20px] transition-colors font-medium text-sm"
        >
          <Icon icon="lucide:user-pen" className="w-3 h-3" />
          <span>Edit</span>
        </button>
      </div>

      {/* Personal Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1">
            First Name:
          </label>
          <p className="text-gray-900 font-medium">{personalInfo.firstName}</p>
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1">
            Last Name:
          </label>
          <p className="text-gray-900 font-medium">{personalInfo.lastName}</p>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1">
            Email:
          </label>
          <p className="text-gray-900 font-medium">{personalInfo.email}</p>
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1">
            Phone Number:
          </label>
          <p className="text-gray-900 font-medium">
            {personalInfo.phoneNumber}
          </p>
        </div>

        {/* NIN / CAC */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1">
            NIN / CAC:
          </label>
          <p className="text-gray-900 font-medium">{personalInfo.ninCac}</p>
        </div>

        {/* State */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1">
            State:
          </label>
          <p className="text-gray-900 font-medium">{personalInfo.state}</p>
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1">
            City:
          </label>
          <p className="text-gray-900 font-medium">{personalInfo.city}</p>
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1">
            Address:
          </label>
          <p className="text-gray-900 font-medium">{personalInfo.address}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformationCard;
