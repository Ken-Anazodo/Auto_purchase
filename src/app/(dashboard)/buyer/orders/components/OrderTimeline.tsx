import { Icon } from "@iconify/react";
import React from "react";

interface TimelineStep {
  label: string;
  date?: string;
  status: "completed" | "current" | "pending";
  subLabel?: string;
  expected?: boolean;
}

const OrderTimeline = ({ steps }: { steps: TimelineStep[] }) => {
  return (
    <div className="mt-8 relative">
        {/* Connecting Line */}
      <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gray-100 -z-0"></div>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-6 relative z-10">
            {/* Icon */}
            <div className={`w-10 h-10 rounded-full flex items-center text-2xl justify-center shrink-0 border-[3px] ${
                step.status === "completed" 
                    ? "bg-autobuy-primary2.5 border-blue-100 text-white" 
                    : step.status === "current"
                    ? "bg-blue-600 border-blue-100 text-white"
                    : "bg-gray-100 border-gray-50 text-gray-300"
            }`}>
                 {step.status === "completed" || step.status === "current" ? <Icon icon="prime:check-circle" /> : <Icon icon="prime:check-circle" />}
            </div>

            {/* Content Card */}
            <div className={`flex-1 flex justify-between items-center p-4 rounded-lg border ${
                step.status === "current" ? "bg-[#F5F9FF] border-[#0A6DFF]" : "bg-[#F5F9FF] border-[#0A6DFF]"
            }`}>
                 <div>
                     <h4 className={`font-medium ${step.status === "current" ? "text-autobuy-primary2.5" : "text-[#00317A]"}`}>
                        {step.label}
                     </h4>
                     {step.subLabel && <p className="text-xs text-autobuy-primary2.5 mt-1">{step.subLabel}</p>}
                 </div>
                 <div className="text-sm font-medium text-[#00317A]">
                     {step.expected && <span className="mr-1">Expected:</span>}
                     {step.date && <>
                        <Icon icon="heroicons:calendar" className="inline mr-1 text-lg mb-0.5" />
                        {step.date}
                     </>}
                 </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTimeline;
