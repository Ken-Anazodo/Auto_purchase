import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

interface SellerProductCardProps {
  title?: string;
  price?: string;
  image?: string;
  status?: "live" | "pending" | "sold" | "inactive";
  views?: number;
  onEditStatus?: () => void;
  onViewDetails?: () => void;
}

const SellerProductCard: React.FC<SellerProductCardProps> = ({
  title = "Toyota Camry 2025",
  price = "₦45,000,000",
  image = "https://images.pexels.com/photos/93615/pexels-photo-93615.jpeg",
  status = "live",
  views = 213,
  onEditStatus,
  onViewDetails,
}) => {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case "live":
        return {
          color: "text-green-600",
          bgColor: "bg-green-100",
          dotColor: "bg-green-500",
          text: "Live",
        };
      case "pending":
        return {
          color: "text-yellow-600",
          bgColor: "bg-yellow-100",
          dotColor: "bg-yellow-500",
          text: "Pending",
        };
      case "sold":
        return {
          color: "text-blue-600",
          bgColor: "bg-blue-100",
          dotColor: "bg-blue-500",
          text: "Sold",
        };
      case "inactive":
        return {
          color: "text-gray-600",
          bgColor: "bg-gray-100",
          dotColor: "bg-gray-500",
          text: "Inactive",
        };
      default:
        return {
          color: "text-green-600",
          bgColor: "bg-green-100",
          dotColor: "bg-green-500",
          text: "Live",
        };
    }
  };

  const statusConfig = getStatusConfig(status);

  return (
    <div  className="bg-white rounded-2xl cursor-pointer overflow-hidden p-3 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 rounded-t-[16px]">

      <div className="relative w-full h-48 bg-gradient-to-br rounded-t-[16px] from-orange-200 via-orange-300 to-orange-400 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-200  hover:scale-105"
        />
  
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div> */}
      </div>

      {/* Content Container */}
      <div className="p-4 space-y-3">
        <h3 className="text-sm font-normal text-autobuy-neutral-1 leading-tight">
          {title}
        </h3>

        <p className="text-lg font-semibold text-autobuy-orange-1">{price}</p>

        <div className="flex flex-col  justify-between">
          <div className={`inline-flex items-center gap-2 py-1.5 rounded-full `}>
            <div className={` size-3 rounded-full ${statusConfig.dotColor}`}></div>
            <span className={`text-xs font-medium `}>
              {statusConfig.text}
            </span>
          </div>


          <div className="flex items-center gap-1.5 text-autobuy-neutral-2">
            <Icon icon="openmoji:eye" className="w-4 h-4" />
            <span className="text-xs font-medium">
              {views.toLocaleString()} views
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <button
            onClick={onEditStatus}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 text-sm font-medium transition-colors"
          >
            <span>Edit Status</span>
            <Icon icon="mdi:chevron-down" className="w-4 h-4" />
          </button>


          <button
            onClick={onViewDetails}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors italic"
          >
            [View Details]
          </button>
        </div>

      </div>
    </div>
  );
};

export default SellerProductCard;
