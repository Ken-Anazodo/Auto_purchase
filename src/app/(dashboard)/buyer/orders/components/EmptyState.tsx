import { Icon } from "@iconify/react";
import React from "react";
import Link from "next/link";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6 relative">
             <Icon icon="heroicons:cube" className="text-blue-600 text-5xl" />
      </div>
      
      <h2 className="text-2xl font-medium text-autobuy-neutral-1 mb-2">You Have No Active Orders</h2>
      <p className="text-autobuy-neutral-2 mb-8">Start exploring cars that match your budget.</p>
      
      <Link href="/seller/listings" className="px-6 py-2 bg-blue-600 text-white rounded-[12px] font-medium italic hover:bg-blue-700 transition-colors">
        Browse Cars
      </Link>
    </div>
  );
};

export default EmptyState;
