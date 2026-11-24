import React, { useState } from "react";
import { ArrowRight, FileCheck, Video, FileText } from "lucide-react";
import ProductCard, { Vehicle } from "@/components/ProductCard";
import { Icon } from "@iconify/react";

const featuredVehicles: Vehicle[] = [
  {
    id: 1,
    name: "Toyota Camry 2025",
    price: "₦45,000,000",
    isNegotiable: true,
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    specs: {
      mileage: "45,000km",
      transmission: "Automatic",
      fuel: "Fuel",
      location: "Lagos, Nigeria",
    },
    services: [
      { icon: <FileCheck size={16} />, text: "150+ Point Inspection" },
      { icon: <Video size={16} />, text: "Video Tour" },
      { icon: <FileText size={16} />, text: "Full History Report" },
    ],
    isVerified: true,
  },
  {
    id: 2,
    name: "Toyota Camry 2025",
    price: "₦45,000,000",
    isNegotiable: true,
    images: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    specs: {
      mileage: "45,000km",
      transmission: "Automatic",
      fuel: "Fuel",
      location: "Lagos, Nigeria",
    },
    services: [
      { icon: <FileCheck size={16} />, text: "150+ Point Inspection" },
      { icon: <Video size={16} />, text: "Video Tour" },
      { icon: <FileText size={16} />, text: "Full History Report" },
    ],
    isVerified: true,
  },
  {
    id: 3,
    name: "Toyota Camry 2025",
    price: "₦45,000,000",
    isNegotiable: true,
    images: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    specs: {
      mileage: "45,000km",
      transmission: "Automatic",
      fuel: "Fuel",
      location: "Lagos, Nigeria",
    },
    services: [
      { icon: <FileCheck size={16} />, text: "150+ Point Inspection" },
      { icon: <Video size={16} />, text: "Video Tour" },
      { icon: <FileText size={16} />, text: "Full History Report" },
    ],
    isVerified: true,
  },
];
const RecentlyListed = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [compareList, setCompareList] = useState<number[]>([]);
 
  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const toggleCompare = (id: number) => {
    setCompareList((prev) =>
      prev.includes(id) ? prev.filter((comp) => comp !== id) : [...prev, id]
    );
  };

  return (
    <div className="container py-10 ">
      <h4 className="text-lg font-medium text-autobuy-neutral-1 ">
        Recently Viewed
      </h4>


        {/* Recently listed cars will be displayed here */}
        <div className="w-full flex-shrink-0 py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {featuredVehicles.map((vehicle, index) => (
              <ProductCard
                key={vehicle.id}
                vehicle={vehicle}
                isFavorited={favorites.includes(vehicle.id)}
                isCompared={compareList.includes(vehicle.id)}
                onToggleFavorite={toggleFavorite}
                onToggleCompare={toggleCompare}
                animationDelay={index * 0.1}
              />
            ))}
          </div>
        </div>

    </div>
  );
};

export default RecentlyListed;
