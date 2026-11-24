import React from "react";

interface VehicleData {
  year: string;
  transmission: string;
  condition: string;
  make: string;
  bodyType: string;
  vin: string;
  model: string;
  driveTrain: string;
  fuelType: string;
  trim: string;
  interiorColor: string;
  mileage: string;
  exteriorColor: string;
}

interface VehicleOverviewProps {
  vehicleData: VehicleData;
  title?: string;
}

const VehicleOverview: React.FC<VehicleOverviewProps> = ({
  vehicleData,
  title = "Vehicle Overview",
}) => {
  const vehicleFields = [
    { label: "Year", value: vehicleData.year },
    { label: "Transmission", value: vehicleData.transmission },
    { label: "Condition", value: vehicleData.condition },
    { label: "Make", value: vehicleData.make },
    { label: "Body Type", value: vehicleData.bodyType },
    { label: "Vin", value: vehicleData.vin },
    { label: "Model", value: vehicleData.model },
    { label: "Drive Train", value: vehicleData.driveTrain },
    { label: "Fuel Type", value: vehicleData.fuelType },
    { label: "Trim", value: vehicleData.trim },
    { label: "Interior color", value: vehicleData.interiorColor },
    { label: "Mileage", value: vehicleData.mileage },
    { label: "Exterior color", value: vehicleData.exteriorColor },
  ];

  return (
    <main>
      <div className="mb-6">
        <h3 className="text-base font-medium text-autobuy-primary2.5">
          {title}
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-x-10 gap-y-4">
        {vehicleFields.map((field, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-3 border-b border-autobuy-neutral-4 rounded-sm"
          >
            <span className="text-autobuy-neutral-2 text-base">
              {field.label}:
            </span>
            <span className="text-autobuy-neutral-1 font-medium text-base">
              {field.value}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default VehicleOverview;
export type { VehicleData };
