import React from "react";

const OrderSummary = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm h-fit sticky top-24">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h3>

        <div className="space-y-4 mb-8">
            <div className="flex justify-between text-sm text-gray-600">
                <span>Item:</span>
                <span className="font-medium text-gray-900">2</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal:</span>
                <span className="font-medium text-gray-900">₦45,000,000</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
                <span>Delivery Fee:</span>
                <span className="font-medium text-gray-900">₦50,000</span>
            </div>
        </div>

        <div className="flex justify-between items-center mb-8 pt-4 border-t border-gray-100">
            <span className="text-base text-gray-600">Total:</span>
            <span className="text-lg font-bold text-blue-600">₦45,050,000</span>
        </div>

        <button className="w-full py-3.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm">
            Proceed to Checkout
        </button>
    </div>
  );
};

export default OrderSummary;
