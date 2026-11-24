import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

interface ActiveOrderRowProps {
  id: string;
  carName: string;
  price: string;
  date: string;
  status: "In-Transit" | "Processing" | "Delivered";
}

const ActiveOrderRow: React.FC<ActiveOrderRowProps> = ({
  id,
  carName,
  price,
  date,
  status,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "In-Transit":
        return "bg-[linear-gradient(217.57deg,#FAFCFF_-138.48%,#BDD7FF_-47.17%,#0067FF_17.55%,#064199_74.19%)] text-white";
      case "Processing":
        return "bg-[linear-gradient(137.36deg,#F59E0B_16.23%,#E7A028_89.88%,#EBAC40_145.89%)] text-white";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <div className="bg-[#FAFAFA] rounded-2xl border-[0.3px] border-autobuy-neutral-4 p-3 sm:p-4 flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center mb-4">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 rounded-xl overflow-hidden border border-autobuy-neutral-4 shrink-0">
        <Image
          src={
            "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"
          }
          width={100}
          height={100}
          alt={carName}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-base sm:text-lg font-normal text-autobuy-neutral-1 truncate">
          {carName}
        </h3>
        <p className="text-base sm:text-lg font-semibold text-autobuy-primary-2.5">
          {price}
        </p>
        <p className="text-xs sm:text-sm text-autobuy-neutral-1 mt-1">{id}</p>
      </div>

      <div className="flex justify-between items-center w-full sm:w-auto sm:text-right sm:flex-col sm:items-end shrink-0">
        <span
          className={`inline-block px-2 py-1 sm:px-4 sm:py-1.5 rounded-[8px] sm:rounded-[12px] text-xs sm:text-sm font-medium mb-0 sm:mb-1 ${getStatusColor(status)}`}
        >
          {status}
        </span>
        <p className="text-sm sm:text-base text-autobuy-neutral-1">{date}</p>
      </div>
    </div>
  );
};

export default ActiveOrderRow;
