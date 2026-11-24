"use client";

import React, { Suspense } from "react";
import EmptyInspections from "./components/EmptyInspections";
import { useRouter, useSearchParams } from "next/navigation";
import InspectionPageHeader from "./components/InspectionPageHeader";
import InspectionHistory from "./components/InspectionHistory";
import UpcomingInspectioncalendarView from "./components/UpcomingInspectioncalendarView";

const InspectionPageContent = () => {
  const hasInspections = false;
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentTab = searchParams.get("tab") || "upcoming";
  const activeTab =
    currentTab === "upcoming" || currentTab === "history"
      ? currentTab
      : "upcoming";

  const handleBookInspection = () => {
    router.push("/seller/inspections/booking");
  };

  const handleTabChange = (tab: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tab);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="p-">
      {!hasInspections ? (
        <div>
          <InspectionPageHeader
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
          <main>
            {activeTab === "history" ? (
              <InspectionHistory />
            ) : (
              <UpcomingInspectioncalendarView />
            )}
          </main>
        </div>
      ) : (
        <EmptyInspections onBookInspection={handleBookInspection} />
      )}
    </div>
  );
};

const InspectionPage = () => {
  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
      <InspectionPageContent />
    </Suspense>
  );
};

export default InspectionPage;
