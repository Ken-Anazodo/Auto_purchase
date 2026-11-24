import { Icon } from "@iconify/react";
import React from "react";

const summaryData = [
  { label: "Make:", value: "Toyota" },
  { label: "Condition:", value: "New" },
  { label: "Model:", value: "Camry XLE" },
  { label: "Engine:", value: "Hybrid" },
  { label: "Year:", value: "2018" },
  { label: "Body Type:", value: "Sedan" },
  { label: "Trim:", value: "XLE" },
  { label: "Drive Train:", value: "FWD" },
  { label: "Mileage:", value: "45,000 km" },
  { label: "Interior color:", value: "Black" },
  { label: "Transmission:", value: "Automatic" },
  { label: "Exterior color:", value: "Silver" },
];

const VehicleSummary = () => {
  return (
    <section
      className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
      id="summary"
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          style={{
            background:
              "linear-gradient(217.57deg, #FAFCFF -138.48%, #BDD7FF -47.17%, #0067FF 17.55%, #064199 74.19%)",
          }}
          className="w-10 h-10 rounded-full  flex items-center justify-center shrink-0"
        >
          <Icon
            icon="streamline-ultimate:car-3"
            className="text-white text-xl"
          />
        </div>
        <h3 className="text-lg font-bold text-autobuy-primary2.5">
          Vehicle Summary (Quick Facts)
        </h3>
      </div>
      <p className="text-sm text-[#3385FF] mb-8 ml-[52px]">
        This section displays the basic vehicle information of this vehicle
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {summaryData.map((item, index) => (
          <div
            style={{
              background:
                "linear-gradient(181.51deg, #FAFCFF 34.26%, #BDD7FF 92.4%, #0067FF 120.13%, #064199 133.55%)",
            }}
            key={index}
            className="flex items-center justify-between px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-blue-100/50 border border-[#CCE0FF]"
          >
            <span className="text-autobuy-neutral-2 text-base font-medium">
              {item.label}
            </span>
            <span className="text-autobuy-neutral-1 text-base font-medium">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VehicleSummary;
