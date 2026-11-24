"use client";

import React, { useState } from "react";
import ProductCard, { Vehicle } from "@/components/ProductCard";
import EmptyFavourites from "./components/EmptyFavourites";

const FavouritesPage = () => {
  // Toggle for demo purposes
  const [hasFavourites, setHasFavourites] = useState(true);

  const favouriteCars: Vehicle[] = [
      {
          id: 1,
          name: "Toyota Camry 2025",
          price: "₦45,000,000",
          isNegotiable: true,
          images: ["https://images.unsplash.com/photo-1542362567-b07e54358753?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"],
          specs: { mileage: "45,000km", transmission: "Automatic", fuel: "Fuel", location: "Lagos, Nigeria" },
          services: [],
          isVerified: true
      },
      {
          id: 2,
          name: "Toyota Camry 2025",
          price: "₦45,000,000",
          isNegotiable: true,
          images: ["https://images.unsplash.com/photo-1542362567-b07e54358753?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"],
          specs: { mileage: "45,000km", transmission: "Automatic", fuel: "Fuel", location: "Lagos, Nigeria" },
          services: [],
          isVerified: true
      },
      {
          id: 3,
          name: "Toyota Camry 2025",
          price: "₦45,000,000",
          isNegotiable: true,
          images: ["https://images.unsplash.com/photo-1542362567-b07e54358753?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"],
          specs: { mileage: "45,000km", transmission: "Automatic", fuel: "Fuel", location: "Lagos, Nigeria" },
          services: [],
          isVerified: true
      },
  ];

  if (!hasFavourites) {
      return (
          <div className="min-h-screen">
               <button onClick={() => setHasFavourites(true)} className="fixed bottom-4 right-4 text-xs opacity-50 hover:opacity-100">Toggle State</button>
               <EmptyFavourites />
          </div>
      )
  }

  return (
    <div className="min-h-screen pb-10">
      <button onClick={() => setHasFavourites(false)} className="fixed bottom-4 right-4 text-xs opacity-50 hover:opacity-100">Toggle State</button>
      
      <div className="mb-8">
        <h1 className="text-xl font-medium text-autobuy-neutral-1 mb-1">Favourites</h1>
        <p className="text-xs text-autobuy-neutral-2">All the cars you love, saved in one place.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favouriteCars.map((car) => (
                <ProductCard 
                    key={car.id} 
                    vehicle={car} 
                    isFavorited={true}
                    onToggleFavorite={() => {}}
                />
            ))}
      </div>
    </div>
  );
};

export default FavouritesPage;
