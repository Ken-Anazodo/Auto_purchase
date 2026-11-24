"use client";

import React from "react";
import { Icon } from "@iconify/react";

const ContactDetails: React.FC = () => {
  const handleCallNow = () => {
    window.open("tel:0123-456-7894", "_self");
  };

  const handleSendEmail = () => {
    window.open("mailto:Myemail@gmail.com?subject=Support Request", "_blank");
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-8 space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-blue-600 font-medium text-base mb-6">
          Other Support Option
        </h2>
      </div>

      {/* Phone Support Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <Icon icon="mdi:phone" className="w-5 h-5 text-gray-700" />
          <h3 className="text-gray-900 font-medium text-base">
            Phone Support:
          </h3>
        </div>

        <div className="space-y-2 mb-4">
          <p className="text-gray-700 text-sm">
            Call: 0123-456-7894, 1231-45698-478954
          </p>
          <p className="text-gray-600 text-sm">Mon-Sun, 8AM-8PM</p>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleCallNow}
            className="flex items-center gap-2 px-3 py-2 text-[#EF693E] border border-orange-500 rounded-[12px] hover:bg-orange-50 transition-colors text-sm font-medium"
          >
            Call Now
            <Icon icon="mdi:arrow-right" className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100"></div>

      {/* Email Support Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <Icon icon="mdi:email-outline" className="w-5 h-5 text-gray-700" />
          <h3 className="text-gray-900 font-medium text-base">
            Email Support:
          </h3>
        </div>

        <div className="space-y-2 mb-4">
          <p className="text-gray-700 text-sm">
            Call: Myemail@gmail.com myemail@gmail.com
          </p>
          <p className="text-gray-600 text-sm">Mon-Sun, 8AM-8PM</p>
          <div className="flex items-center gap-1 mt-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
            <span className="text-blue-500 text-xs font-medium">
              Response within 2 hours
            </span>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSendEmail}
            className="flex items-center gap-2 px-3 py-2 text-[#EF693E] border border-orange-500 rounded-[12px] hover:bg-orange-50 transition-colors text-sm font-medium"
          >
            Send Email
            <Icon icon="mdi:arrow-right" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
