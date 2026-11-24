/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  FileCheck,
  Video,
  FileText,
} from "lucide-react";
import ProductCard, { Vehicle } from "../ProductCard";

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

const FeaturedVehicles = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [compareList, setCompareList] = useState<number[]>([]);

  const itemsPerPage = 3;
  const totalSlides = Math.ceil(featuredVehicles.length / itemsPerPage);



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
    <section className="py-16 px-6 lg:px-16 xl:px-24">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-helvetica font-medium text-autobuy-neutral-1 mb-2 animate-fade-in">
            Featured Vehicles
          </h2>
          <p className="text-sm md:text-base text-autobuy-neutral-2 animate-slide-up">
            Handpicked premium vehicles from our exclusive collection
          </p>
        </div>


        <div className="relative">
    

            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredVehicles
                      .slice(
                        slideIndex * itemsPerPage,
                        slideIndex * itemsPerPage + itemsPerPage
                      )
                      .map((vehicle, index) => (
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
              ))}
            </div>
          </div>


        {/* View More Button */}
        <div className="text-center mt-12">
          <Link href="/browse-cars">
            <button className="group  text-autobuy-primary2.5 font-medium  hover:scale-105 flex items-center space-x-2 ml-auto ">
              <span>View More Listings</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </Link>
        </div>
      </div>

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

export default FeaturedVehicles;
