import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";


const carListings = [
  {
    id: 1,
    title: "Toyota Camry",
    price: "₦45,000,000",
    image: "https://images.pexels.com/photos/93615/pexels-photo-93615.jpeg",
    status: "live" as const,
    views: 223,
    dateListed: "25 Nov, 2025",
    vin: "23124569874596",
  },
  {
    id: 2,
    title: "Toyota Camry",
    price: "₦45,000,000",
    image: "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg",
    status: "live" as const,
    views: 223,
    dateListed: "25 Nov, 2025",
    vin: "23124569874596",
  },
  {
    id: 3,
    title: "Toyota Camry",
    price: "₦45,000,000",
    image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
    status: "live" as const,
    views: 223,
    dateListed: "25 Nov, 2025",
    vin: "23124569874596",
  },
  {
    id: 4,
    title: "Toyota Camry",
    price: "₦45,000,000",
    image: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg",
    status: "live" as const,
    views: 223,
    dateListed: "25 Nov, 2025",
    vin: "23124569874596",
  },
];

const TableList = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleMenuClick = (id: number) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleStatusChange = (id: number, status: string) => {
    console.log(`Car ${id} status changed to:`, status);
    setOpenDropdown(null);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">

        <div className="grid grid-cols-7 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 min-w-[900px]">
          <div className="text-sm font-medium text-gray-700">Image</div>
          <div className="text-sm font-medium text-gray-700">Car Name</div>
          <div className="text-sm font-medium text-gray-700">Price</div>
          <div className="text-sm font-medium text-gray-700 hidden md:block">
            Date Listed
          </div>
          <div className="text-sm font-medium text-gray-700 hidden lg:block">
            VIN
          </div>
          <div className="text-sm font-medium text-gray-700 hidden sm:block">
            Views
          </div>
          <div className="text-sm font-medium text-gray-700">Status</div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-200">
          {carListings.map((car) => (
            <div
              key={car.id}
              className="grid grid-cols-7 gap-4 px-6 py-4 items-center hover:bg-gray-50 min-w-[900px]"
            >
     
              <div className="w-12 h-9 sm:w-16 sm:h-12 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={car.image}
                  alt={car.title}
                  width={64}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>

  
              <div className="text-xs sm:text-sm text-gray-900 truncate">
                {car.title}
              </div>

              <div className="text-xs sm:text-sm text-blue-600 font-medium truncate">
                {car.price}
              </div>

              <div className="text-xs sm:text-sm text-gray-600 hidden md:block">
                {car.dateListed}
              </div>

              <div className="text-xs sm:text-sm text-gray-600 hidden lg:block truncate">
                {car.vin}
              </div>

              <div className="items-center gap-1 text-xs sm:text-sm text-gray-600 hidden sm:flex">
                <Icon icon="mdi:eye" className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{car.views}</span>
              </div>

              <div className="flex items-center relative">
                <span
                  className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                    car.status === "live"
                      ? "bg-green-100 text-green-700"
                      : car.status === "pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {car.status.charAt(0).toUpperCase() + car.status.slice(1)}
                </span>

                <button
                  onClick={() => handleMenuClick(car.id)}
                  className="text-gray-400 hover:text-gray-600 p-1 ml-1 sm:ml-2"
                >
                  <Icon
                    icon="mdi:dots-vertical"
                    className="w-3 h-3 sm:w-4 sm:h-4"
                  />
                </button>

                {/* Dropdown Menu */}
                {openDropdown === car.id && (
                  <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-lg shadow-lg min-w-24 z-10">
                    <button
                      onClick={() => handleStatusChange(car.id, "sold")}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-t-lg"
                    >
                      Sold
                    </button>
                    <button
                      onClick={() => handleStatusChange(car.id, "live")}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Live
                    </button>
                    <button
                      onClick={() => handleStatusChange(car.id, "pending")}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-b-lg"
                    >
                      Pending
                    </button>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableList;
