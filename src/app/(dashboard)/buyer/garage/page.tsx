"use client";

import React from "react";
import GarageItemCard from "./components/GarageItemCard";
import OrderSummary from "./components/OrderSummary";
import { Vehicle } from "@/components/ProductCard";

const GaragePage = () => {
  // Mock Data
  const garageItems: Vehicle[] = [
      {
          id: 1,
          name: "Toyota Camry 2018",
          price: "₦45,000,000",
          isNegotiable: true,
          images: ["https://images.unsplash.com/photo-1541443131876-44b03de101c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"],
          specs: { mileage: "45,000km", transmission: "Automatic", fuel: "Fuel", location: "Lagos, Nigeria" },
          services: [],
          isVerified: true
      },
      {
          id: 2,
          name: "Toyota Camry 2018",
          price: "₦45,000,000",
          isNegotiable: true,
          images: ["https://images.unsplash.com/photo-1541443131876-44b03de101c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"],
          specs: { mileage: "45,000km", transmission: "Automatic", fuel: "Fuel", location: "Lagos, Nigeria" },
          services: [],
          isVerified: true
      },
  ];

  return (
    <div className="min-h-screen pb-10">
      <div className="mb-8">
        <h1 className="text-xl font-medium text-autobuy-neutral-1 mb-1">Garage</h1>
        <p className="text-xs text-autobuy-neutral-2 mb-4">Cars you&apos;ve saved and are ready to purchase</p>
        
        <ul className="list-disc list-inside text-xs text-autobuy-neutral-2 pl-1">
            <li>Items in your garage are not reserved until you proceed to checkout</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">
              {garageItems.map((item) => (
                  <GarageItemCard key={item.id} vehicle={item} />
              ))}
          </div>


          <div className="lg:col-span-1">
               <OrderSummary />
          </div>
      </div>
    </div>
  );
};

export default GaragePage;
