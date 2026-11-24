import React, { useState } from "react";
import { ArrowRight, FileCheck, Video, FileText } from "lucide-react";
import ProductCard, { Vehicle } from "@/components/ProductCard";
import { Icon } from "@iconify/react";


const ANIMATION_DURATION = 300;
const GRADIENT_STYLE = "linear-gradient(180deg, #0A6DFF 40.87%, #064199 100%)";
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
  {
    id: 4,
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
  {
    id: 5,
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

// Navigation Button Component
const NavButton = ({
  direction,
  onClick,
  className = "",
  disabled = false,
}: {
  direction: "left" | "right";
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`rounded-full text-white flex items-center justify-center transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    style={{ background: GRADIENT_STYLE }}
  >
    <Icon icon={`gravity-ui:arrow-${direction}`} width="1.2em" height="1.2em" />
  </button>
);

const Recommended = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [compareList, setCompareList] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination settings
  const itemsPerPage = 3;
  const totalPages = Math.ceil(featuredVehicles.length / itemsPerPage);

  // Get current page items
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return featuredVehicles.slice(startIndex, endIndex);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Smooth scroll to top of section when page changes
    const element = document.getElementById("recommended-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
    <div id="recommended-section" className="container py-10">
      <header className="flex justify-between items-center mb-6">
        <div>
          <h4 className="text-lg font-medium text-autobuy-neutral-1">
            Recommended For You
          </h4>
          {/* <p className="text-sm text-gray-500 mt-1">
            Showing {(currentPage - 1) * itemsPerPage + 1}-
            {Math.min(currentPage * itemsPerPage, featuredVehicles.length)} of{" "}
            {featuredVehicles.length} vehicles
          </p> */}
        </div>

        <div className="flex gap-3 ">
          <NavButton
            direction="left"
            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
            className="size-8"
            disabled={currentPage === 1}
          />
          <NavButton
            direction="right"
            onClick={() =>
              currentPage < totalPages && handlePageChange(currentPage + 1)
            }
            className="size-8"
            disabled={currentPage === totalPages}
          />
        </div>
      </header>

      {/* Vehicle Grid */}
      <div className="w-full flex-shrink-0 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 min-h-[400px]">
          {getCurrentPageItems().map((vehicle, index) => (
            <ProductCard
              key={`${vehicle.id}-${currentPage}`}
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

export default Recommended;
