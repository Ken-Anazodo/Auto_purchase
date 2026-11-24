"use client";

import React from "react";
import QuoteCard from "./components/QuoteCard";
import { Vehicle } from "@/components/ProductCard";

const QuotesPage = () => {
  // Mock Vehicles
  const mockVehicle: Vehicle = {
      id: 1,
      name: "Toyota Camry 2018",
      price: "₦45,000,000",
      isNegotiable: true,
      images: ["https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fHww"],
      specs: { mileage: "45,000km", transmission: "Automatic", fuel: "Fuel", location: "Lagos, Nigeria" },
      services: [],
      isVerified: true
  };

  const quotes = [
      { id: "1", vehicle: mockVehicle, quantity: 7, dateRequested: "12 Jan, 2026", status: "Pending" as const },
      { id: "2", vehicle: mockVehicle, quantity: 7, dateRequested: "12 Jan, 2026", status: "Quote Ready" as const },
      { id: "3", vehicle: mockVehicle, quantity: 7, dateRequested: "12 Jan, 2026", status: "Expired" as const },
  ];

  return (
    <div className="min-h-screen pb-10">
      <div className="mb-8">
        <h1 className="text-xl font-medium text-autobuy-neutral-1 mb-1">My Quotes</h1>
        <p className="text-sm text-autobuy-neutral-2">View and download quotes for your bulk purchase request</p>
      </div>

      <div>
          {quotes.map((quote) => (
              <QuoteCard key={quote.id} {...quote} />
          ))}
      </div>
    </div>
  );
};

export default QuotesPage;
