"use client";

import React from "react";
import { Icon } from "@iconify/react";

interface EmptyInspectionsProps {
  onBookInspection?: () => void;
}

const EmptyInspections: React.FC<EmptyInspectionsProps> = ({
  onBookInspection,
}) => {
  const handleBookInspection = () => {
    if (onBookInspection) {
      onBookInspection();
    } else {
      console.log("Book inspection clicked");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 px-6">

      <div className="mb-4">
        <Icon icon="mdi:magnify" className="size-[130px] text-autobuy-orange-3" />
      </div>


      <h2 className="text-3xl font-medium  text-autobuy-neutral-2 mb-4 text-center">
        No Inspections Booked Yet
      </h2>


      <div className="text-center mb-8 max-w-md">
        <p className="text-autobuy-neutral-2 text-base ">
         {` You haven't booked any car inspections yet.`}
        </p>
        <p className="text-autobuy-neutral-2 text-base">
     {`     Schedule your first one to get started — it's quick and easy!`}
        </p>
      </div>


      <button
        onClick={handleBookInspection}
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 max-w-[400px] w-full"
      >
        Book Your First Inspection
      </button>
    </div>
  );
};

export default EmptyInspections;
