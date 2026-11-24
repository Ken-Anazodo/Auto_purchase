/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";

const HomeHero = () => {
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <section className="relative h-fit md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bgs/sellerHeroBg.png"
          alt="Premium car background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-2 md:px-16 lg:px-16 flex items-center justify-start h-fit  md:min-h-screen py-20 lg:py-0">
        <figure className="rounded-[32px] overflow-hidden p-5 md:p-10 lg:p-10 mx-auto max-w-5xl w-full bg-[url('/bgs/sellerTransparent.png')] bg-fill bg-no-repeat bg-center text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center text-center mb-4 ">
            <span
              style={{
                background:
                  "linear-gradient(42.88deg, #8F2E1C 5.37%, #E6583D 56.63%, #D64D33 86.99%)",
              }}
              className=" text-white px-5 py-2 font-helvetica  rounded-[12px] text-xs font-medium shadow-lg"
            >
              For Sellers
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            Sell Your Car, The Smart & Fast Way On AutoBuy
          </h1>

          {/* Subheading */}
          <p className="text-lg text-white font-medium mb-4  mx-auto leading-relaxed">
            We inspect, certify, photograph, list, and manage buyers, you just
            get paid.
          </p>

          <Link
            style={{
              boxShadow:
                "inset 1px 1px 12px 0px #E6583D, inset -1px -1px 12px 0px #E6583D, 0px 1px 8px 0px #0000001F",
            }}
            className="bg-[#EF693E] mb-4 py-4 px-5 mx-auto border-none rounded-[12px] block text-white text-base font-semibold max-w-xl"
            href="/sell-your-car"
          >
            Start Selling
          </Link>

          <ul className="flex gap-4 items-center justify-center text-base text-white font-medium flex-wrap">
            <li className="flex items-center gap-2">
              <Icon
              style={{
                  width: "24px",
                  height: "24px",
                  filter: "drop-shadow(0px 0.6px 1.2px rgba(0, 0, 0, 0.05))",
                  borderRadius: "7.2px",
                  flex: "none",
                  order: 0,
                  flexGrow: 0
                }}
                icon="icon-park-outline:check-one"
                width="1.2em"
                height="1.2em"
              />
              Secure Instant Payment
            </li>
            <li className="flex items-center gap-2">
              <Icon
              style={{
                  width: "24px",
                  height: "24px",
                  filter: "drop-shadow(0px 0.6px 1.2px rgba(0, 0, 0, 0.05))",
                  borderRadius: "7.2px",
                  flex: "none",
                  order: 0,
                  flexGrow: 0
                }}
                icon="icon-park-outline:check-one"
                width="1.2em"
                height="1.2em"
              />
              150+ point inspection
            </li>
            <li className="flex items-center gap-2">
              <Icon
                style={{
                  width: "24px",
                  height: "24px",
                  filter: "drop-shadow(0px 0.6px 1.2px rgba(0, 0, 0, 0.05))",
                  borderRadius: "7.2px",
                  flex: "none",
                  order: 0,
                  flexGrow: 0
                }}
                icon="icon-park-outline:check-one"
                width="1.2em"
                height="1.2em"
              />
              Verified Autobuy Experts
            </li>
          </ul>
        </figure>
      </div>
    </section>
  );
};

export default HomeHero;
