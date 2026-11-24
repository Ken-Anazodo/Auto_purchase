/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, FileCheck, Video, FileText } from "lucide-react";
import ProductCard, { Vehicle } from "@/components/ProductCard";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/services/store/store";
import { toggleBulkMode } from "@/services/features/slices/bulkSelectionSlice";
import BasicFilterModal from "./BasicFilterModal";
import AdvancedFilterModal from "./AdvancedFilterModal";
import AdvancedFilter from "./AdvancedFilter";
import VehicleFilters from "./VehicleFilters";

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
  {
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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

const ProductLayout = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [compareList, setCompareList] = useState<number[]>([]);
  const [isFilterModal1Open, setIsFilterModal1Open] = useState(false);
  const [isFilterModal2Open, setIsFilterModal2Open] = useState(false);

  // Redux state and dispatch
  const dispatch = useDispatch();
  const { isBulk, selectedItems } = useSelector(
    (state: RootState) => state.bulkSelection
  );

  const handleBulkToggle = () => {
    dispatch(toggleBulkMode());
  };

  const itemsPerPage = 3;

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
    <section className="">
      <div className="">
        <header className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-5">
            <div className="flex items-center md:gap-5 gap-3 lg:hidden ">
              <Icon
                icon="cil:filter"
                className="size-5 hover:scale-125 transition-all duration-300 cursor-pointer"
                onClick={() => setIsFilterModal1Open(true)}
              />
              <Icon
                icon="mage:filter"
                className="size-5 hover:scale-125 transition-all duration-300 cursor-pointer"
                onClick={() => setIsFilterModal2Open(true)}
              />
            </div>

            <p
              className={`md:text-lg text-xs font-medium text-autobuy-neutral-1 ${
                !isBulk ? "block" : "hidden"
              } `}
            >
              Showing 296,569 listing
            </p>

            <figure className={`${isBulk ? "block " : "hidden"} `}>
              <p className="md:text-lg text-xs font-medium text-autobuy-neutral-1">
                Bulk purchase mode
              </p>
              <p className="text-xs text-autobuy-neutral-2">
                Select multiple vehicle to buy together
              </p>
            </figure>
          </div>

          <p
            className={`${isBulk ? "md:block hidden ml-auto mr-5" : "hidden"}`} >{`[ ${selectedItems.length} vehicle selected ]`}</p>
          <button
            onClick={handleBulkToggle}
            className={`rounded-[12px] py-1.5 flex text-xs px-3 md:px-4 transition-all duration-200 ${
              isBulk
                ? "bg-white  text-autobuy-neutral-2 border border-autobuy-neutral-3"
                : "text-autobuy-primary2.5 border border-autobuy-primary2.5 hover:bg-autobuy-primary2.5/5"
            }`}
          >
            {isBulk ? <>Cancel<span className="md:hidden block ml-1">{selectedItems.length}</span> </> : "Bulk Selection"}
          </button>
        </header>

        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <div className="w-full flex-shrink-0">
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
        </div>
      </div>

      {/* Modal Components */}
      <BasicFilterModal
        content={<VehicleFilters />}
        isOpen={isFilterModal1Open}
        onClose={() => setIsFilterModal1Open(false)}
      />
      <AdvancedFilterModal
        content={<AdvancedFilter />}
        isOpen={isFilterModal2Open}
        onClose={() => setIsFilterModal2Open(false)}
      />

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes card-appear {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-card-appear {
          animation: card-appear 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-in {
          animation: bounce-in 1s ease-out 1.5s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default ProductLayout;
