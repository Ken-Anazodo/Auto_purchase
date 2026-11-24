import React from "react";

interface FormData {
  companyName: string;
  industry: string;
  companyAddress: string;
  contactPersonName: string;
  contactPersonRole: string;
  emailAddress: string;
  phoneNumber: string;
  quantity: string;
  requirements: string;
}

interface BulkPurchaseFormProps {
  formData: FormData;
  onInputChange: (field: string, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  className?: string;
}

const BulkPurchaseForm: React.FC<BulkPurchaseFormProps> = ({
  formData,
  onInputChange,
  onSubmit,
  className = "",
}) => {
  return (
    <form onSubmit={onSubmit} className={`space-y-6 ${className}`}>
      {/* Company Name */}
      <div>
        <label className="block text-sm text-autobuy-neutral-2 mb-2">
          Company Name
        </label>
        <input
          type="text"
          placeholder="Enter company name"
          value={formData.companyName}
          onChange={(e) => onInputChange("companyName", e.target.value)}
          className="w-full px-4 py-3 border border-autobuy-neutral-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Industry / Sector */}
      <div>
        <label className="block text-sm text-autobuy-neutral-2 mb-2">
          Industry / Sector
        </label>
        <input
          type="text"
          placeholder="InputHT"
          value={formData.industry}
          onChange={(e) => onInputChange("industry", e.target.value)}
          className="w-full px-4 py-3 border border-autobuy-neutral-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Company Address */}
      <div>
        <label className="block text-sm text-autobuy-neutral-2 mb-2">
          Company Address
        </label>
        <input
          type="text"
          placeholder="my company address is..."
          value={formData.companyAddress}
          onChange={(e) => onInputChange("companyAddress", e.target.value)}
          className="w-full px-4 py-3 border border-autobuy-neutral-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Contact Person Name & Role */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-autobuy-neutral-2 mb-2">
            Contact Person Name
          </label>
          <input
            type="text"
            placeholder="Martins Ken"
            value={formData.contactPersonName}
            onChange={(e) => onInputChange("contactPersonName", e.target.value)}
            className="w-full px-4 py-3 border border-autobuy-neutral-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm text-autobuy-neutral-2 mb-2">
            Contact Person Role
          </label>
          <input
            type="text"
            placeholder="Sales Manager"
            value={formData.contactPersonRole}
            onChange={(e) => onInputChange("contactPersonRole", e.target.value)}
            className="w-full px-4 py-3 border border-autobuy-neutral-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-autobuy-neutral-2 mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Myemail@gmail.com"
            value={formData.emailAddress}
            onChange={(e) => onInputChange("emailAddress", e.target.value)}
            className="w-full px-4 py-3 border border-autobuy-neutral-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm text-autobuy-neutral-2 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="01234567890"
            value={formData.phoneNumber}
            onChange={(e) => onInputChange("phoneNumber", e.target.value)}
            className="w-full px-4 py-3 border border-autobuy-neutral-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Quantity */}
      <div>
        <label className="block text-sm text-autobuy-neutral-2 mb-2">
          Quantity
        </label>
        <input
          type="text"
          placeholder="6-100"
          value={formData.quantity}
          onChange={(e) => onInputChange("quantity", e.target.value)}
          className="w-full px-4 py-3 border border-autobuy-neutral-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Requirements */}
      <div>
        <label className="block text-sm text-autobuy-neutral-2 mb-2">
          Let us know your requirements
        </label>
        <textarea
          placeholder="Textarea..."
          rows={4}
          value={formData.requirements}
          onChange={(e) => onInputChange("requirements", e.target.value)}
          className="w-full px-4 py-3 border border-autobuy-neutral-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-8 py-3 bg-autobuy-primary2.5 text-white font-semibold rounded-[12px] hover:bg-blue-700 transition-colors text-base"
        >
          Request Quote
        </button>
      </div>

      {/* Note */}
      <div className="flex items-center gap-2 text-sm text-autobuy-neutral-2">
        <div className="w-1.5 h-1.5 bg-autobuy-neutral-1 rounded-full flex-shrink-0"></div>
        <p>
          Custom quotes are recommended for large orders and fleet purchases
        </p>
      </div>
    </form>
  );
};

export default BulkPurchaseForm;
export type { FormData };
