"use client";

import BackButton from "@/components/BackButton";
import Navbar from "@/components/layouts/Navbar";
import {
  ProductImageGallery,
  ProductTabs,
  LoanCalculator,
  ProductInfo,
} from "@/app/(home)/[productId]/components";
import React, { useState } from "react";
import Footer from "@/components/layouts/Footer";
import SimilarCars from "./components/SimilarCars";

const ProductDetailsPage = () => {
  const [loanTenure, setLoanTenure] = useState("6 Months");
  const [depositPercentage, setDepositPercentage] = useState(40);
  const [activeTab, setActiveTab] = useState("Car History");

  const productData = {
    name: "2018 Toyota Camry XLE",
    location: "Lagos, Nigeria",
    price: 45000000,
    isVerified: true,
    isNegotiable: true,
    stats: {
      inspection: "150+ inspected",
      history: "Clean",
      payment: "Escrow secured",
      mileage: "45,000km",
      transmission: "Automatic",
      bodyType: "Sedan",
      fuelType: "Petrol",
      engineType: "Hybrid",
      condition: "Good",
    },
  };

  const imageData = {
    mainImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuATvU7BTw_ozR4neoW09ztLUW8Vz8ifkDLY2n2KxmJv_qSrtncH4zeq7ik-jfeJJ8HIUDs8KqBbNek6_no-_CqeJ5tfPTeoe0bOfVgQDwYrnuH40C16YB46NQ6147lJ6cwKOZ7H-Dgy0JjibUw95GxFNq6q9CsO1yyy5kNc7CIUK8J3CaAb2MOH0PEGFV7teyE28TGsmOI77aWw4IVPsT1VDw5BAB3qyps7q35gGg57kbGYT8Sv7T2mr7KRyvPV11ea144utIBZXdw",
    thumbnails: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuATvU7BTw_ozR4neoW09ztLUW8Vz8ifkDLY2n2KxmJv_qSrtncH4zeq7ik-jfeJJ8HIUDs8KqBbNek6_no-_CqeJ5tfPTeoe0bOfVgQDwYrnuH40C16YB46NQ6147lJ6cwKOZ7H-Dgy0JjibUw95GxFNq6q9CsO1yyy5kNc7CIUK8J3CaAb2MOH0PEGFV7teyE28TGsmOI77aWw4IVPsT1VDw5BAB3qyps7q35gGg57kbGYT8Sv7T2mr7KRyvPV11ea144utIBZXdw",
      "",
      "",
    ],
  };

  const vehiclePrice = 45050000;
  const tabs = [
    "Vehicle Summary",
    "Car Features",
    "Inspection Report",
    "Car History",
  ];

  return (
    <div className="min-h-screen ">
      <Navbar />

      {/* Header with BackButton and action buttons */}
      <header className="md:py-5 pt-4 container spacing">
        <BackButton />
      </header>

      <main className="py-5 container spacing grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="lg:col-span-1 space-y-8">
          {/* Product Image Gallery */}
          <ProductImageGallery
            mainImage={imageData.mainImage}
            thumbnails={imageData.thumbnails}
            productName={productData.name}
          />
        </div>

        <div className="lg:col-span-1 space-y-6">
          <ProductInfo product={productData} />
        </div>
      </main>

      {/* Product Tabs */}
      <main className="container spacing mt-5">
        <ProductTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={tabs}
        />
      </main>

      <main className="container spacing mt-5 mb-20">
        <LoanCalculator vehiclePrice={vehiclePrice} />
      </main>

      <main className="container spacing mt-5 mb-20">
        <SimilarCars />
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
