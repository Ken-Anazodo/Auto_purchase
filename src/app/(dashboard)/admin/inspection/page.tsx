"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import InspectionFormLayout from "./components/InspectionFormLayout";

const BookingPageContent = () => {
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");
  const isFirstTimer = true; 

  return <InspectionFormLayout isFirstTimer={isFirstTimer} userId={userId || undefined} />;
};

const BookingPage = () => {
  return (
    <Suspense fallback={<div className="p-8">Loading...</div>}>
      <BookingPageContent />
    </Suspense>
  )
}

export default BookingPage;
