"use client";

import React from "react";
import InspectionFormLayout from "../components/InspectionFormLayout";

const BookingPage = () => {
  const isFirstTimer = true; 

  return <InspectionFormLayout isFirstTimer={!isFirstTimer} />;
};

export default BookingPage;
