import React from "react";

const VehicleHeaderCard = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-medium text-autobuy-primary2.5 mb-6">
          Toyota Camry 2018
        </h2>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <span className=" text-autobuy-neutral-1">Vin:</span>
            <span className=" text-autobuy-neutral-1">WDC0G4JB3GF100727</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className=" text-autobuy-neutral-1">
              Vehicle History Report:
            </span>
            <span className=" text-autobuy-neutral-1">#1007258697</span>
          </div>
        </div>
      </div>

      <div className="w-full md:w-80 h-48 bg-white rounded-xl border border-gray-200"></div>
    </div>
  );
};

export default VehicleHeaderCard;
