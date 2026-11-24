"use client";

import Header from "./components/Header";
import RecentSalesTable from "./components/RecentSalesTable";
import RecentActivities from "./components/RecentActivities";

const AdminDashboard = () => {
  return (
    <div className="">
      <Header />
      <RecentSalesTable />
      <RecentActivities />
    </div>
  );
};

export default AdminDashboard;