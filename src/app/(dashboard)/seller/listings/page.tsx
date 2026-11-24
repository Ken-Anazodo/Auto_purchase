"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import EmptyListings from "./components/EmptyListings";
import ListingHeader from "./components/ListingHeader";
import GridList from "./components/GridList";
import TableList from "./components/TableList";

const ListingContent = () => {
  const isListing = false;
  const searchParams = useSearchParams();
  const viewMode = searchParams.get("view") || "grid";

  return (
    <div className="">
      {isListing ? (
        <section>
          <EmptyListings />
        </section>
      ) : (
        <section>
          <ListingHeader />

          <main>{viewMode === "grid" ? <GridList /> : <TableList />}</main>
        </section>
      )}
    </div>
  );
};

const Listing = () => {
  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
      <ListingContent />
    </Suspense>
  );
};

export default Listing;
