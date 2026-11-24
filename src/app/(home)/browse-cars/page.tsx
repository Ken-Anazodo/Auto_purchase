"use client";
import React from "react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import SearchFilter from "./components/SearchFilter";
import VehicleFilters from "./components/VehicleFilters";
import AdvancedFilter from "./components/AdvancedFilter";
import ProductLayout from "./components/ProductLayout";
import Pagination from "@/components/Pagination";
import RecentlyListed from "./components/RecentlyListed";
import Recommended from "./components/Recommended";

const BrowseCarsPage = () => {
  const handleSearch = (query: string, category: string, budget: string) => {
    console.log("Search:", { query, category, budget });
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <Navbar />

      <div className="mx-auto py-3 space-y-2 spacing gap-4 container">
        <header className="space-y-3 py-2 md:py-4">
          <h1 className="text-xl font-medium text-[#333333] font-helvetica">
            All Vehicles
          </h1>
          <p className=" text-autobuy-neutral-2 text-sm font-normal">
            Find the perfect car for your budget, lifestyle, and needs. Filter
            by price, brand, condition, features, and more.
          </p>
        </header>
        <SearchFilter onSearch={handleSearch} />
      </div>

      <section className="container spacing flex flex-col lg:flex-row pt-4 lg:pt-8 pb-10 lg:pb-10 gap-3 lg:gap-5 lg:h-[calc(110vh)] lg:overflow-hidden  ">
        <aside className="w-full lg:w-[280px] space-y-3 lg:space-y-5 order-2 lg:order-1 hidden lg:block lg:overflow-y-auto lg:h-full lg:pr-2">
          <h3 className="text-[#333333] font-medium text-lg font-helvetica">
            Apply Filter:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-0 lg:space-y-5">
            <VehicleFilters />
            <AdvancedFilter />
          </div>
        </aside>

        <main className="flex-1 order-1 lg:order-2 lg:overflow-y-auto lg:min-h-full lg:pl-2 lg:scrollbar-hide ">
          <ProductLayout />

          <footer className="w-full flex items-start justify-end pt-10">
            <Pagination
              currentPage={2}
              totalPages={6}
              size="lg"
              onPageChange={(page) => console.log("Page changed to:", page)}
            />
          </footer>

          <RecentlyListed />
          <Recommended />
        </main>
      </section>

      <Footer />
    </div>
  );
};

export default BrowseCarsPage;
