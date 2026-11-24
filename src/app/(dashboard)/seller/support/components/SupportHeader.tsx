"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

const SupportHeader: React.FC = () => {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push("/seller");
  };

  return (
    <div className=" ">
      <div className="flex items-center justify-between">
        <button
          onClick={handleBackToHome}
          className="flex items-center gap-2 text-autobuy-neutral-1 hover:text-gray-800 transition-colors group bg-white border border-autobuy-neutral-6 px-6 py-3 rounded-2xl"
        >
          <Icon
            icon="mdi:arrow-left"
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200"
          />
          <span className="text-sm  ">Back to Home</span>
        </button>

        <h1 className="text-xl font-semibold text-gray-900  mx-auto">
          Help & Support
        </h1>
      </div>
    </div>
  );
};

export default SupportHeader;
