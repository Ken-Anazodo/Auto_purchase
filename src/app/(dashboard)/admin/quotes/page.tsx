"use client";

import React from "react";
import QuotesTable from "./components/QuotesTable";

const QuotesPage = () => {
  return (
    <div className="">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-xl font-bold text-autobuy-neutral-1">Custom Quotes</h1>
        <p className="text-sm text-autobuy-neutral-3 mt-1">
          Manage all customer quote requests in one place.
        </p>
      </div>

      {/* Table */}
      <QuotesTable />
    </div>
  );
};

export default QuotesPage;