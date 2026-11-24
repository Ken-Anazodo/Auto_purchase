import { Icon } from "@iconify/react";
import React from "react";
import Link from "next/link";

const EmptyFavourites = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="w-24 h-24 bg-autobuy-blue-6 border border-autobuy-blue-4 rounded-full flex items-center justify-center mb-6 relative">
             <Icon icon="heroicons:heart" className="text-autobuy-primary2.5 text-5xl" />
      </div>
      
      <h2 className="text-xl font-medium text-autobuy-neutral-1 mb-2">No Favourites Yet!</h2>
      <p className="text-xs text-autobuy-neutral-2 mb-8 max-w-sm mx-auto">Tap the heart on any car to save it here and compare easily later.</p>
      
      <Link href="/seller/listings" className="px-6 py-2.5 bg-autobuy-primary2.5 text-white rounded-[12px] font-medium hover:bg-autobuy-primary2.5/80 transition-colors shadow-[1px 1px 8px 0px #061F4526 inset, -1px -1px 8px 0px #061F4526 inset, 0px 1px 6px 0px #00000014]">
        Browse Cars
      </Link>
    </div>
  );
};

export default EmptyFavourites;
