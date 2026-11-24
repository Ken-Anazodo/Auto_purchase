"use client";

import React, { useState } from "react";
import BookingsTable from "./components/BookingsTable";
import Pagination from "@/components/Pagination";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useGetAllBookingsQuery } from "@/services/admin/adminuserApi";
import { useDebounce } from "@/hooks/useDebounce";

const BookingsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 500);
  const router = useRouter();

  const { data, isLoading, isFetching } = useGetAllBookingsQuery({
    page: currentPage,
    limit: 10,
    search: debouncedSearch,
  });

  const bookings = data?.data || [];
  const pagination = data?.pagination || null;
  const totalPages = pagination?.totalPages || 1;

  const handleAddVehicle = (id: string) => {
    console.log("Add Vehicle", id);
  };

  const handleViewVehicle = (id: string) => {
    router.push(`/admin/bookings/${id}`);
  };

  const handleBookInspection = () => {
    router.push(`/admin/inspection`);
  };

  return (
    <div className=" space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-[18px] font-[500] text-[#1A1A1A]">All Bookings</h1>
        <p className="text-[14px] text-[#6B6B6B]">
          View and manage all bookings and inspections
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative w-full md:w-96">
          <Icon
            icon="mdi:magnify"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
          />
          <Input
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search by date, name, email, status..."
            className="pl-10 h-12 rounded-lg border-gray-200 bg-white"
          />
        </div>
        <Button
          onClick={() => handleBookInspection()}
          className="bg-[#0A6DFF] hover:bg-blue-600 text-white h-12 px-6 rounded-xl font-[600] flex items-center gap-2"
        >
          <Icon icon="mdi:plus" className="size-6" />
          Book an Inspection
        </Button>
      </div>

      {/* Table */}
      <BookingsTable
        bookings={bookings}
        isLoading={isLoading || isFetching}
        onAddVehicle={handleAddVehicle}
        onViewVehicle={handleViewVehicle}
      />

      {/* Pagination */}
      <div className="flex justify-end pt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          size="sm"
        />
      </div>
    </div>
  );
};

export default BookingsPage;
