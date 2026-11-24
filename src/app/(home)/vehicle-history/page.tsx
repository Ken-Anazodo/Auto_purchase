"use client";

import React from "react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import BackButton from "@/components/BackButton";

import HistoryHeader from "./components/HistoryHeader";
import HistorySectionNav from "./components/HistorySectionNav";
import VehicleHeaderCard from "./components/VehicleHeaderCard";
import VehicleSummary from "./components/VehicleSummary";
import InspectionSummary from "./components/InspectionSummary";
import SalesHistory from "./components/SalesHistory";
import SalvageRecord from "./components/SalvageRecord";
import TheftRecord from "./components/TheftRecord";

const VehicleHistoryPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8 spacing">
        <header className="mb-6">
          <BackButton />
        </header>

        <section className="space-y-8">
          <HistoryHeader />
          <HistorySectionNav />
          <VehicleHeaderCard />
          <VehicleSummary />
        </section>

        <section className="space-y-8 my-8">
          <InspectionSummary />
          <SalesHistory />
        </section>

        <section className="space-y-8 my-8">
          <SalvageRecord />
          <TheftRecord />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VehicleHistoryPage;
