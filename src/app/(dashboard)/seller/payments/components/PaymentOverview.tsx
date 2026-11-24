import React from "react";

interface PaymentOverviewProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const PaymentOverview: React.FC<PaymentOverviewProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="mb-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-gray-600">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  );
};

export default PaymentOverview;
