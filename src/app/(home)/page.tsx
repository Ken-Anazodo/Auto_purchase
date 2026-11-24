import FeaturedVehicles from "@/components/Home/FeaturedVehicles";
import HomeHero from "@/components/Home/HomeHero";
import HowBuyingWorks from "@/components/Home/HowBuyingWorks";
import LoanSection from "@/components/Home/LoanSection";
import SearchByBrand from "@/components/Home/SearchByBrand";
import SearchByBudget from "@/components/Home/SearchByBudget";
import SimplifyAction from "@/components/Home/SimplifyAction";
import Testimonial from "@/components/Home/Testimonial";
import WantToSell from "@/components/Home/WantToSell";
import WhyChooseUS from "@/components/Home/WhyChooseUS";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <SearchByBudget />
      <SearchByBrand />
      <FeaturedVehicles />
      <WhyChooseUS />
      <LoanSection />
      <HowBuyingWorks />
      <WantToSell />
      <Testimonial
        TestimonialAttributes={
          <div className="space-y-6">
            <div className="inline-block">
              <span
                style={{
                  background:
                    "linear-gradient(42.88deg, #8F2E1C 5.37%, #E6583D 56.63%, #D64D33 86.99%)",
                }}
                className=" text-white px-4 py-2 rounded-full text-sm font-medium font-helvetica"
              >
                User Testimonials
              </span>
            </div>

            <h2 className="text-3xl md:text-3xl lg:text-3xl font-medium text-[#333333] animate-fade-in font-helvetica">
              What Our User Say
            </h2>

            <p className="text-base text-[#333333] leading-relaxed animate-slide-up max-w-[500px]">
              Real buyers and sellers share their experience with Autobuy.
              Trusted, transparent, and hassle-free.
            </p>
          </div>
        }
      />
      <SimplifyAction />
      <Footer />
    </div>
  );
};

export default page;
