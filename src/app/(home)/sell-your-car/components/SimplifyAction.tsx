import React from "react";
import Link from "next/link";

const SimplifyAction = () => {
  return (
    <section className="py-16 px-6 spacing bg-[url('/bgs/readyToSellBg.svg')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-medium font-helvetica text-[#333333] mb-6">
          Ready To Sell Your Car
        </h2>

        <p className="text-lg font-medium md:text-lg text-[#4D4C4C] mb-12 max-w-xl mx-auto leading-relaxed font-helvetica">
          Buy or sell with confidence. Every car goes through a 150+ point
          inspection, verified documentation, and transparent pricing.
        </p>

        <div className="flex flex-col  justify-center items-center">
          <Link className="md:max-w-[450px] w-full" href="/sell-your-car">
            <button
              style={{
                boxShadow:
                  "1px 1px 8px 0px #061F4526 inset, -1px -1px 8px 0px #061F4526 inset, 0px 1px 6px 0px #00000014",
              }}
              className="w-full  bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-[12px] transition-colors duration-200 "
            >
              Sell Your Car
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SimplifyAction;
