"use client";

import React, { useState } from "react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import BackButton from "@/components/BackButton";
import { Icon } from "@iconify/react";
import OfferStatusModal, { OfferStatus } from "./components/OfferStatusModal";
import Link from "next/link";
import AuthRequiredModal from "@/components/modals/AuthRequiredModal";
import Cookies from "js-cookie";

const MakeOfferPage = () => {
  const [offerAmount, setOfferAmount] = useState("");
  const [offerStatus, setOfferStatus] = useState<OfferStatus>("idle");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Mock vehicle data
  const vehicle = {
    name: "Toyota Camry 2018",
    price: 45000000,
    mileage: "45,000km",
    transmission: "Automatic",
    fuel: "Fuel",
    color: "Black",
    location: "Lagos, Nigeria",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAb_nvWOWd_b9v01Jo_n8xPw30U7dJkdtezaEF7wbFQn8UfG46OrTKRgmP5N3aB3CJgKPzxKng5IKizjD2dRXK5Tgzfio12Isy1SDmxoISIrDU4sPw5PGScQNmLFJA6NFmlV9XibmE-Dae93fJo3g7lbW-nSd_5DyP-DZgFWbW6WhmNtDqWaivnn1DqQVftEWnX2fYkMboECTaFONAE95VnYkqtdOuXDcQ5iH-m8JnAL-0l-eHiOy-urzNiGLB4NdOBCMYK8YwBwjY",
  };

  const handleSubmitOffer = () => {
    if (!offerAmount) return;

    // Check for authentication
    const token = Cookies.get("autobuy_session_client");
    if (!token) {
      setIsAuthModalOpen(true);
      return;
    }
    
    // For demo: success
    setOfferStatus("success");
    setIsModalOpen(true);
  };

  const handleFormatCurrency = (val: string) => {
    // Allow numbers only
    const numericValue = val.replace(/[^0-9]/g, "");
    if (!numericValue) {
      setOfferAmount("");
      return;
    }
    const formatted = parseInt(numericValue).toLocaleString();
    setOfferAmount(formatted);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-7xl">
        <header className="mb-6 md:mb-8">
          <BackButton />
        </header>

        <div className="mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Make An Offer</h1>
          <p className="text-gray-500 text-sm md:text-base">
            Submit your best price. The seller can accept, decline, or counter
            your offer.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20">
          {/* Left Column: Vehicle Card */}
          <div className="flex-1 bg-white rounded-[24px] border border-gray-100 shadow-sm p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Image */}
              <div className="w-full md:w-[280px] lg:w-[300px] xl:w-[360px] aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 relative shrink-0">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
               
                {/* Dots indicator mockup */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                </div>
                 {/* Navigation arrows mockup */}
                 <button className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/20 backdrop-blur-[2px] flex items-center justify-center text-white hover:bg-black/40 transition-colors">
                     <Icon icon="heroicons:chevron-left" className="text-xl" />
                 </button>
                 <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/20 backdrop-blur-[2px] flex items-center justify-center text-white hover:bg-black/40 transition-colors">
                     <Icon icon="heroicons:chevron-right" className="text-xl" />
                 </button>
              </div>

              {/* Details */}
              <div className="flex-1 py-1 flex flex-col h-full">
                <div className="flex justify-between items-start mb-2">
                    <h2 className="text-lg md:text-xl font-medium text-gray-900">
                    {vehicle.name}
                    </h2>
                     <div className="text-[#22C55E]">
                         <Icon icon="prime:check-circle" className="text-2xl md:text-3xl" />
                    </div>
                </div>
                
                <p className="text-[#2563EB] font-bold text-2xl md:text-3xl mb-4 md:mb-6">
                  ₦{vehicle.price.toLocaleString()}
                </p>

                <div className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-2 md:gap-y-3 text-xs text-gray-500 mb-6 md:mb-8 font-medium">
                   <div className="flex items-center gap-1.5">
                     <Icon icon="pajamas:tachometer" className="text-sm" />
                     <span>{vehicle.mileage}</span>
                   </div>
                   <div className="flex items-center gap-1.5">
                     <Icon icon="bi:gear-wide" className="text-sm" />
                     <span>{vehicle.transmission}</span>
                   </div>
                   <div className="flex items-center gap-1.5">
                     <Icon icon="bi:fuel-pump" className="text-sm" />
                     <span>{vehicle.fuel}</span>
                   </div>
                    <div className="flex items-center gap-1.5">
                     <Icon icon="solar:pallete-2-outline" className="text-sm" />
                     <span>{vehicle.color}</span>
                   </div>
                    <div className="flex items-center gap-1.5">
                     <Icon icon="ion:location-outline" className="text-sm" />
                     <span>{vehicle.location}</span>
                   </div>
                </div>
                
                 {/* Services Pills */}
                <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                  <ServicePill icon="heroicons:document-check" text="150+ Point Inspection" />
                  <ServicePill icon="heroicons:video-camera" text="Video Tour" />
                  <ServicePill icon="heroicons:clipboard-document-list" text="Full History Report" />
                </div>

                <div className="mt-auto text-right">
                    <Link href="#" className="text-[#2563EB] text-xs font-bold hover:underline inline-flex items-center gap-1">
                        View Full Vehicle Details <Icon icon="heroicons:chevron-double-right" className="text-[10px]" />
                    </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Offer Form */}
          <div className="w-full lg:w-[420px] xl:w-[480px] shrink-0 pt-2 flex flex-col">
            <label className="block text-gray-700 text-sm mb-3">
              Enter Your Offer amount:
            </label>
            <div className="relative mb-3">
               <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[#2563EB] font-bold text-lg select-none">₦</span>
               <input 
                  type="text"
                  value={offerAmount}
                  onChange={(e) => handleFormatCurrency(e.target.value)}
                  placeholder="00,000,000"
                  className="w-full pl-10 pr-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-[#2563EB] placeholder:text-[#2563EB]/40 text-lg font-medium"
               />
            </div>
            
            <div className="flex items-center gap-2 mb-8 md:mb-12">
                <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                <p className="text-gray-500 text-xs">Enter the amount you&apos;re willing to pay</p>
            </div>

            <button 
                onClick={handleSubmitOffer}
                className="w-full sm:w-auto sm:px-12 md:px-20 sm:ml-auto py-4 bg-[#2563EB] text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-blue-100 shadow-lg text-sm mt-auto"
            >
                Submit Offer
            </button>
          </div>
        </div>
      </main>

      <Footer />

      <OfferStatusModal 
        isOpen={isModalOpen}
        status={offerStatus}
        onClose={() => setIsModalOpen(false)}
        onRetry={() => setOfferStatus("idle")}
        onSuccessAction={() => setIsModalOpen(false)}
      />

      <AuthRequiredModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        redirectUrl="/make-offer" // Optional: redirect back here
      />
    </div>
  );
};

const ServicePill = ({ icon, text }: { icon: string; text: string }) => (
  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#EFF6FF] text-[#3B82F6] text-[10px] font-medium border border-blue-100 whitespace-nowrap">
    <Icon icon={icon} className="text-xs" />
    <span>{text}</span>
  </div>
);

export default MakeOfferPage;