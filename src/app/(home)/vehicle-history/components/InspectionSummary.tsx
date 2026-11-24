import { Icon } from "@iconify/react";
import React from "react";

const inspectionPoints = [
  "150+ Inspection Completed",
  "VIN Verified",
  "Document Reviewed",
  "Vehicle Condition assessed",
];

const InspectionSummary = () => {
  return (
    <section
      className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8"
      id="inspection"
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
            icon="heroicons:clipboard-document-check"
            className="text-white text-xl"
          />
        </div>
        <h3 className="text-lg font-bold text-autobuy-primary2.5">
          Autobuy Inspection Summary
        </h3>
      </div>
      <p className="text-sm text-[#3385FF] mb-8 ml-[52px]">
        This section highlights key findings from our professional 150+ point
        inspection
      </p>

      <div className="bg-blue-50/30 rounded-2xl border border-blue-50 p-8">
        <div className="space-y-6">
          {inspectionPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-3">
              <Icon
                icon="heroicons:check-circle"
                className="text-autobuy-primary2.5 size-4"
              />
              <span className="text-base font-medium text-autobuy-neutral-1">
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspectionSummary;
