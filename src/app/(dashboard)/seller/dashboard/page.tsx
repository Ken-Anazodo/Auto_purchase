import React from "react";
import AnalyticsOverview from "../components/AnalyticsOverview";
// import Header from "@/components/layouts/Header";
import SellerProductCard from "../components/SellerProductCard";
import RecentActivities from "../components/RecentActivities";
import UpcomingInspections from "../components/UpcomingInspections";
import Header from "../components/Header";


const page = () => {
  const isEmpty = false;
  return (
    <div  className="space-y-5 min-h-screen ">
      <Header />

      {!isEmpty && <AnalyticsOverview />}
      
      <section  className="space-y-4">
        <p className="text-lg font-medium text-autobuy-neutral-1">
          Active Listings
        </p>

        {isEmpty ? (
          <div className="flex flex-col items-center justify-center py-20 h-full ">
            <h3 className="font-medium text-2xl text-autobuy-neutral-2">
              You haven’t listed any cars yet
            </h3>
            <p className="text-autobuy-neutral-2 text-base mb-4">
              Start by uploading your first car
            </p>
            <button className="px-10 py-3 bg-autobuy-orange-1 text-white rounded-lg hover:bg-autobuy-orange-2 transition-colors text-base">
              Book an inspection
            </button>
          </div>
        ) : (
          <>
            <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <SellerProductCard  />
              <SellerProductCard />
              <SellerProductCard />
            </main>

            <main className="grid md:grid-cols-5 gap-10">
              <figure className=" md:col-span-3">
                <RecentActivities />
              </figure>
              <figure className=" md:col-span-2">
                <UpcomingInspections />
              </figure>
            </main>
          </>
        )}
      </section>
    </div>
  );
};

export default page;
