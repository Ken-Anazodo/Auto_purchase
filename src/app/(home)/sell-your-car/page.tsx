import React from "react";
import SellerHero from "./components/SellerHero";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import WhyAutoBuy from "./components/WhyAutoBuy";
import SellingExperience from "./components/SellingExperience";
import Testimonial from "@/components/Home/Testimonial";
import SimplifyAction from "./components/SimplifyAction";

const page = () => {
  return (
    <div>
      <Navbar />
      <SellerHero />
      <WhyAutoBuy />
      <SellingExperience />
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
              Your Safety Comes First
            </h2>

            <p className="text-base text-[#333333] leading-relaxed animate-slide-up max-w-[500px]">
              Every transaction on Autobuy is protected. From buyer to secured
              escrow payments, we ensure a safe, transparent, and smooth selling
              experience.
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
