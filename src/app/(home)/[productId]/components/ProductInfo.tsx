"use client";

import React from "react";
import VehicleStats from "./VehicleStats";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ProductInfoProps {
  product: {
    name: string;
    location: string;
    price: number;
    isVerified: boolean;
    isNegotiable: boolean;
    stats: {
      inspection: string;
      history: string;
      payment: string;
      mileage: string;
      transmission: string;
      bodyType: string;
      fuelType: string;
      engineType: string;
      condition: string;
    };
  };
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {

const router = useRouter();


  return (
    <div className="bg-white  p-2">
      <div className="mb-4 space-y-5">
        <header className="flex items-center gap-4">
          {product.isVerified && (
            <span
              style={{
                background:
                  "linear-gradient(32.92deg, #34B233 1.01%, #4CD74B 54.03%, #34B233 85.84%)",
              }}
              className="flex w-fit items-center px-4 py-1.5 text-white font-medium rounded-[12px] text-[13px]"
            >
              verified{" "}
              <Icon
                icon="prime:check-circle"
                width="1.2em"
                height="1.2em"
                className="ml-2"
              />
            </span>
          )}

          <label className="flex w-fit items-center gap-2 text-xs  text-autobuy-neutral-2 border-[0.3px] border-autobuy-neutral-3  rounded-[12px] px-3 py-1.5  cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="font-medium">Compare</span>
          </label>
        </header>

        <div className="flex flex-col items-start">
          <h1 className="lg:text-3xl md:text-xl text-lg font-medium text-slate-900">
            {product.name}
          </h1>
          <span className=" text-sm text-autobuy-neutral-2">
            {product.location}
          </span>
        </div>
      </div>

      {/* Price Section */}
      <div className="flex items-baseline justify-between mb-8">
        <div className="lg:text-3xl md:xl text-lg font-medium text-autobuy-primary2.5">
          ₦{product.price.toLocaleString()}
        </div>
        {product.isNegotiable && (
          <div className="text-base font-normal text-autobuy-primary2.5 cursor-pointer hover:underline flex items-center italic">
            Negotiable{" "}
            <Icon
              icon="fluent:chevron-double-right-20-filled"
              width="1.2em"
              height="1.2em"
              className="ml-2"
            />
          </div>
        )}
      </div>

      {/* Vehicle Stats */}
      <VehicleStats stats={product.stats} />

      {/* Vehicle History Link */}
      <Link
        href="/vehicle-history"
        className="text-base italic font-normal text-autobuy-primary2.5 cursor-pointer hover:underline flex items-center float-right mb-10"
      >
        View Vehicle History Report
        <Icon
          icon="akar-icons:link-out"
          width="1.2em"
          height="1.2em"
          className="ml-2"
        />
      </Link>

      {/* Action Buttons */}
      <button onClick={()=> router.push('/check-out')} className="w-full md:py-4 py-3 bg-autobuy-primary2.5 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-autobuy-primary2.5 transition-all mb-4 text-[13px] md:text-base">
        Order Now
      </button>

      <div className="grid grid-cols-2 gap-2 md:gap-4 mb-6">
        <button className="md:py-4 py-3 px-2 border border-autobuy-primary2.5 text-autobuy-primary2.5 font-semibold rounded-xl text-[13px] md:text-base  hover:bg-blue-50 transition-colors">
          Book Inspection
        </button>
        <button onClick={()=> router.push('/bulk-purchase')} className="md:py-4 py-3 px-2 border border-autobuy-primary2.5 text-autobuy-primary2.5 font-semibold rounded-xl text-[13px] md:text-base hover:bg-blue-50 transition-colors">
          Buy Multiple Units
        </button>
      </div>

      {/* Info Note */}
      <div className="flex items-start gap-2 text-[14px] text-autobuy-neutral-2 leading-tight">
       <Icon icon="lucide:info" width="1.2em" height="1.2em" />
        <span>
          Buying multiple units or want to inspect the vehicle? We&apos;ve got
          you covered.
        </span>
      </div>
    </div>
  );
};

export default ProductInfo;
