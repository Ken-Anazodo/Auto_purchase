import { Icon } from "@iconify/react";
import React from "react";

const TheftRecord = () => {
  return (
    <section
      className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8"
      id="theft"
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          style={{
            background:
              "linear-gradient(217.57deg, #FAFCFF -138.48%, #BDD7FF -47.17%, #0067FF 17.55%, #064199 74.19%)",
          }}
          className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0"
        >
          <Icon
            icon="heroicons:exclamation-triangle"
            className="text-white text-xl"
          />
        </div>
        <h3 className="text-lg font-bold text-autobuy-primary2.5">
          Theft Records
        </h3>
      </div>
      <p className="text-sm text-[#3385FF] mb-8 ml-[52px]">
        This confirms the vehicle&apos;s legal status for sale
      </p>

      <div className="pb-12 pt-8 flex flex-col items-center justify-center text-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center z-10 relative shadow-xl shadow-blue-200">
            <Icon icon="gg:check-o" className="text-white text-5xl" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-blue-50 -z-0"></div>
        </div>

        <p className="text-gray-700 font-bold text-lg  leading-relaxed">
        This vehicle has not been reported or listed as stolen by Nigerian law enforcement or insurance databases
        </p>
      </div>
    </section>
  );
};

export default TheftRecord;
