"use client";

import React from "react";
import NotificationHeader from "./components/NotificationHeader";
import NotificationFilters from "./components/NotificationFilters";
import NotificationsList from "./components/NotificationsList";





const NotificationPage = () => {
  return (
    <div className="min-h-screen ">
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        {/* Header Section */}
        <NotificationHeader />

        {/* Filters Section */}
        <NotificationFilters />

        {/* Notifications List Section */}
        <NotificationsList />
      </div>
    </div>
  );
};

export default NotificationPage;
