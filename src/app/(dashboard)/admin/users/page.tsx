"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import UsersTable from "./components/UsersTable";
import ExportUsersModal from "./components/ExportUsersModal";
import { useGetAllUsersQuery } from "@/services/admin/adminuserApi";
import { useDebounce } from "@/hooks/useDebounce";

const UsersPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("All Users");
  const tabs = ["All Users", "Buyers", "Sellers"];

  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 500);

  const userTypeMap: Record<string, string | undefined> = {
    "All Users": undefined,
    "Buyers": "BUYER",
    "Sellers": "SELLER",
  };

  const { data, isLoading, isFetching } = useGetAllUsersQuery({
    page,
    limit: 10,
    search: debouncedSearch,
    userType: userTypeMap[activeTab],
  });

  // Reset page when tab or search changes
  useEffect(() => {
    setPage(1);
  }, [activeTab, debouncedSearch]);

  const users = data?.data || [];
  const pagination = data?.pagination || null;
  const totalUsers = data?.pagination?.totalRecords || 0;

  return (
    <div className="  mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[18px] font-[500] text-[#1A1A1A]">All Users</h1>
        <p className="text-[14px] font-[500] text-[#6B6B6B] mt-1">
          View and manage all buyers and sellers
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-8 border-b border-gray-100 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-[16px] font-[500] transition-colors border-b-2 px-1 ${
              activeTab === tab
                ? "border-[#0A6DFF] text-[#0A6DFF]"
                : "border-transparent text-[#6B6B6B] font-[400] hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4 w-full md:w-auto">
          {/* Search */}
          <div className="relative w-full md:w-[320px]">
             <Icon
                icon="mdi:magnify"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
             />
             <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search users by name, email..."
                className="w-full pl-11 pr-4 py-2.5 rounded-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-autobuy-blue-2 focus:border-autobuy-blue-2 text-sm transition-all"
             />
          </div>
        </div>

        <div className="flex items-center gap-4 self-end md:self-auto">
          {/* Export Button */}
          <ExportUsersModal>
            <Button
              variant="outline"
              className="border-[#3385FF] text-[#3385FF] hover:bg-blue-50 h-10 px-4 rounded-lg text-[16px] font-[400] flex items-center gap-2"
            >
              <Icon icon="mdi:export-variant" className="w-5 h-5" />
              Export
              <Icon icon="mdi:chevron-down" className="w-4 h-4" />
            </Button>
          </ExportUsersModal>
          
          <span className="text-[16px] font-[500] text-[#333333] whitespace-nowrap">
             {totalUsers.toLocaleString()} Users
          </span>

           {/* Create New User */}
           <Button 
              onClick={() => router.push("/admin/users/new")}
              className="bg-[#0A6DFF] hover:bg-blue-600 text-white h-10 px-4 rounded-lg text-[16px] font-[500] flex items-center gap-2"
           >
              <Icon icon="mdi:plus" className="w-5 h-5" />
              Create New User
           </Button>
        </div>
      </div>

      {/* Table */}
      <UsersTable 
        users={users} 
        isLoading={isLoading || isFetching} 
        pagination={pagination} 
        onPageChange={setPage} 
      />
    </div>
  );
};

export default UsersPage;