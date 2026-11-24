import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Link from "next/link";
import { Vehicle } from "@/components/ProductCard";

interface GarageItemCardProps {
    vehicle: Vehicle;
}

const GarageItemCard: React.FC<GarageItemCardProps> = ({ vehicle }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
        <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col md:flex-row gap-6 mb-6">
            {/* Image Carousel - Reusing logic or simplified */}
            <div className="w-full md:w-72 h-48 relative rounded-xl overflow-hidden shrink-0 group">
                <img 
                    src={vehicle.images[currentImageIndex] || "https://via.placeholder.com/400x300"} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                />
                 {/* Navigation Arrows (Simplified for demo) */}
                 <button className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/50 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Icon icon="heroicons:chevron-left" className="text-gray-800 text-xs" />
                 </button>
                 <button className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/50 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Icon icon="heroicons:chevron-right" className="text-gray-800 text-xs" />
                 </button>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{vehicle.name}</h3>
                        <Icon icon="heroicons:check-circle" className="text-green-500 text-2xl" />
                    </div>
                    
                    <div className="text-2xl font-bold text-blue-600 mb-4">{vehicle.price}</div>

                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-500 mb-6">
                         <div className="flex items-center gap-1">
                             <Icon icon="mdi:speedometer" className="text-gray-400" />
                             {vehicle.specs.mileage}
                         </div>
                         <div className="flex items-center gap-1">
                             <Icon icon="mdi:cog" className="text-gray-400" />
                             {vehicle.specs.transmission}
                         </div>
                         <div className="flex items-center gap-1">
                             <Icon icon="mdi:gas-station" className="text-gray-400" />
                             {vehicle.specs.fuel}
                         </div>
                         <div className="flex items-center gap-1">
                             <Icon icon="mdi:palette" className="text-gray-400" />
                             Black
                         </div>
                         <div className="flex items-center gap-1">
                             <Icon icon="mdi:map-marker" className="text-gray-400" />
                             {vehicle.specs.location}
                         </div>
                    </div>
                    
                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                         <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-blue-50 text-blue-600 text-[10px] font-medium border border-blue-100">
                             <Icon icon="heroicons:document-text" />
                             150+ Point Inspection
                         </span>
                         <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-blue-50 text-blue-600 text-[10px] font-medium border border-blue-100">
                             <Icon icon="heroicons:video-camera" />
                             Video Tour
                         </span>
                         <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-blue-50 text-blue-600 text-[10px] font-medium border border-blue-100">
                             <Icon icon="heroicons:clipboard-document-list" />
                             Full History Report
                         </span>
                    </div>
                </div>

                <div className="flex justify-end">
                    <Link href={`/vehicle/${vehicle.id}`} className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700">
                        View Full Vehicle Details
                        <Icon icon="heroicons:chevron-double-right" className="text-xs" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GarageItemCard;
