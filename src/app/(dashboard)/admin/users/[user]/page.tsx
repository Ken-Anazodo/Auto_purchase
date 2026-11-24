"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { format } from "date-fns";
import { useGetUserByIdQuery } from "@/services/admin/adminuserApi";
import ActivityStatCard from "./components/ActivityStatCard";
import InspectionsList from "./components/InspectionsList";
import SalesList from "./components/SalesList";

import InspectionVehicles from "./components/InspectionVehicles";
import SaleDetails from "./components/SaleDetails";
import OrdersList from "./components/OrdersList";
import OrderDetails from "./components/OrderDetails";
import AddVehicleForm from "./components/AddVehicleForm";

const UserDetailsPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Profile");
  const [selectedInspectionId, setSelectedInspectionId] = useState<number | null>(null);
  const [selectedSaleId, setSelectedSaleId] = useState<string | null>(null);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [isAddingVehicle, setIsAddingVehicle] = useState(false);

  const params = useParams();
  const userId = typeof params.user === 'string' ? params.user : Array.isArray(params.user) ? params.user[0] : '';
  
  const { data, isLoading } = useGetUserByIdQuery(
    { userId },
    { skip: !userId }
  );

  const userData = data?.data?.user;

  const tabs = [
    { id: "Profile", label: "Profile", icon: "solar:user-linear" },
    { id: "Inspection", label: "Inspection & Vehicle", icon: "solar:calendar-linear" },
    { id: "Sales", label: "Sales & Payment", icon: "solar:card-2-linear" },
    { id: "Orders", label: "Orders & Purchase", icon: "solar:bill-list-linear" },
  ];

  const activityStats = [
    {
      icon: "solar:car-bold",
      iconColor: "text-autobuy-blue-1",
      iconBgColor: "bg-autobuy-blue-6",
      title: "Cars Listed",
      value: "5",
      description: "Cars currently visible to buyers",
    },
    {
      icon: "solar:bill-check-bold",
      iconColor: "text-autobuy-green-1",
      iconBgColor: "bg-autobuy-green-4",
      title: "Cars Sold",
      value: "2",
      description: "Successful sales.",
    },
    {
      icon: "solar:eye-bold",
      iconColor: "text-autobuy-blue-1",
      iconBgColor: "bg-autobuy-blue-6",
      title: "Total Views",
      value: "2550",
      description: "+100 new views this week",
      trend: { value: "+12.4", isPositive: true },
    },
    {
      icon: "solar:checklist-bold",
      iconColor: "text-autobuy-orange-1",
      iconBgColor: "bg-autobuy-orange-5",
      title: "Total Inspection",
      value: "12",
      description: "12 completed inspections so far.",
    },
    {
      icon: "solar:map-arrow-square-bold",
      iconColor: "text-autobuy-orange-1",
      iconBgColor: "bg-autobuy-orange-5",
      title: "Road to Sales",
      value: "12",
      description: "Interested in 12 listings",
    },
    {
      icon: "solar:cart-large-4-bold",
      iconColor: "text-autobuy-green-1",
      iconBgColor: "bg-autobuy-green-4",
      title: "Total Purchase",
      value: "2",
      description: "2 cars successfully bought",
    },
  ];

  return (
    <div className="">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-8">
        <button
          onClick={() => router.push("/admin/users")}
          className="flex items-center gap-2 text-[18px] font-[500] text-[#4D4C4C] hover:text-gray-700 transition-colors"
        >
          <Icon icon="mdi:arrow-left" className="w-5 h-5" />
          All Users
        </button>
        <span className="text-gray-900 font-bold text-xl">•</span>
        <span className="text-[18px] font-[500] text-[#1A1A1A]">
          {isLoading ? "Loading..." : userData ? `${userData.firstName} ${userData.lastName}` : "User Details"}
        </span>
        <div className="ml-auto">
          <button
            onClick={() => router.push(`/admin/inspection?userId=${userId}`)}
            className="flex items-center gap-2 px-6 h-[46px] rounded-xl bg-autobuy-primary2.5 text-white text-sm font-semibold hover:bg-blue-600 transition-colors shadow-sm"
          >
            Book Inspection
          </button>
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-3xl border border-autobuy-neutral-6 shadow-sm p-8">
        
        {/* Tabs */}
        <div className="flex items-center gap-3 mb-12 overflow-x-auto pb-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setSelectedInspectionId(null);
                setSelectedSaleId(null);
                setSelectedOrderId(null);
                setIsAddingVehicle(false);
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm transition-all border ${
                activeTab === tab.id
                  ? "bg-autobuy-blue-6 text-[12px] border-[#0A6DFF] font-[500]"
                  : "bg-white text-[#6B6B6B] text-[12px] hover:text-gray-700 border-[#6B6B6B] font-[400]"
              }`}
            >
              <Icon icon={tab.icon} className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content based on Active Tab */}
        {activeTab === "Profile" && (
          <>
            {/* Basic Information Section */}
            <div className="mb-12">
              <h2 className="text-[18px] font-[500] text-[#4D4C4C] mb-8">Basic Information</h2>
              {isLoading ? (
                <div className="flex min-h-[200px] justify-center items-center">
                  <Icon icon="mdi:loading" className="w-8 h-8 animate-spin text-autobuy-blue-6" />
                </div>
              ) : userData ? (
                <div className="flex flex-col xl:flex-row gap-12">
                  {/* Avatar Placeholder */}
                  <div className="w-full xl:w-[280px] h-[320px] bg-autobuy-blue-6 bg-opacity-30 rounded-[32px] border border-autobuy-neutral-6 flex-shrink-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-autobuy-blue-6 opacity-50 uppercase">
                      {userData.firstName?.[0] || ""}{userData.lastName?.[0] || ""}
                    </span>
                  </div>

                  {/* Info Grid */}
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 h-fit self-center">
                    <div>
                      <p className="text-[14px] font-[400] text-[#4D4C4C] mb-1">First Name:</p>
                      <p className="text-[16px] font-[500] text-[#1A1A1A] capitalize">{userData.firstName || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-[14px] font-[400] text-[#4D4C4C] mb-1">Last Name:</p>
                      <p className="text-[16px] font-[500] text-[#1A1A1A] capitalize">{userData.lastName || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-[14px] font-[400] text-[#4D4C4C] mb-1">Email:</p>
                      <p className="text-[16px] font-[500] text-[#1A1A1A]">{userData.email || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-[14px] font-[400] text-[#4D4C4C] mb-1">Phone:</p>
                      <p className="text-[16px] font-[500] text-[#1A1A1A]">{userData.phoneNumber || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-[14px] font-[400] text-[#4D4C4C] mb-1">State & City:</p>
                      <p className="text-[16px] font-[500] text-[#1A1A1A] capitalize">
                        {userData.state || userData.city ? `${userData.state || ""} ${userData.city ? `, ${userData.city}` : ""}` : "N/A"}
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px] font-[400] text-[#4D4C4C] mb-1">Address:</p>
                      <p className="text-[16px] font-[500] text-[#1A1A1A] capitalize">{userData.address || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-[14px] font-[400] text-[#4D4C4C] mb-1">Date Joined:</p>
                      <p className="text-[16px] font-[500] text-[#1A1A1A]">
                        {userData.createdAt ? format(new Date(userData.createdAt), "dd MMM, yyyy") : "N/A"}
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px] font-[400] text-[#4D4C4C] mb-1">Last Login:</p>
                      <p className="text-[16px] font-[500] text-[#1A1A1A]">
                        {userData.lastLogin ? format(new Date(userData.lastLogin), "dd MMM, yyyy, hh:mm a") : "N/A"}
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px] font-[400] text-[#4D4C4C] mb-1">Category:</p>
                      <p className="text-[16px] font-[500] text-[#EF693E] capitalize">{userData.userType?.toLowerCase() || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-[14px] font-[400] text-[#4D4C4C] mb-1">NIN</p>
                      <p className="text-[16px] font-[500] text-[#1A1A1A]">{userData.nin || "N/A"}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex min-h-[200px] justify-center items-center text-gray-500">
                  User data not found
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="h-px bg-autobuy-neutral-6 mb-12" />

            {/* Activity Summary Section */}
            <div className="mb-12">
              <h2 className="text-[18PX] font-[500] text-[#4D4C4C] mb-8">Activity Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
                {activityStats.map((stat, index) => (
                  <ActivityStatCard key={index} {...stat} />
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-autobuy-neutral-6 mb-12" />

            {/* Bank Information Section */}
            <div className="mb-4">
              <h2 className="text-[18PX] font-[500] text-[#4D4C4C] mb-8">Bank Information</h2>
              <div className="space-y-12 max-w-4xl">
                <div>
                   <p className="text-[14PX] font-[400] text-[#4D4C4C] mb-1">Bank Name:</p>
                   <p className="text-[16px] font-[500] text-[#1A1A1A]">First Bank</p>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pr-20">
                    <div>
                       <p className="text-[14PX] font-[400] text-[#4D4C4C] mb-1">Account Name:</p>
                       <p className="text-[16px] font-[500] text-[#1A1A1A]">John Matthew Ugochukwu</p>
                    </div>
                    <div>
                       <p className="text-[14PX] font-[400] text-[#4D4C4C] mb-1">Account Number:</p>
                       <p className="text-[16px] font-[500] text-[#1A1A1A]">123456789101112</p>
                    </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === "Inspection" && (
            isAddingVehicle ? (
              <AddVehicleForm onCancel={() => setIsAddingVehicle(false)} />
            ) : selectedInspectionId ? (
                <InspectionVehicles 
                  onBack={() => setSelectedInspectionId(null)} 
                  onAddVehicle={() => setIsAddingVehicle(true)}
                />
            ) : (
                <InspectionsList 
                  onSelectInspection={setSelectedInspectionId} 
                  onAddVehicle={() => setIsAddingVehicle(true)}
                />
            )
        )}

        {activeTab === "Sales" && (
             selectedSaleId ? (
                <SaleDetails onBack={() => setSelectedSaleId(null)} />
             ) : (
                <SalesList onSelectSale={setSelectedSaleId} />
             )
        )}

        {activeTab === "Orders" && (
            selectedOrderId ? (
                <OrderDetails onBack={() => setSelectedOrderId(null)} />
            ) : (
                <OrdersList onSelectOrder={setSelectedOrderId} />
            )
        )}



      </div>
    </div>
  );
};

export default UserDetailsPage;