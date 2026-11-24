"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import AdminsTable from "./components/AdminsTable";
import AddAdminModal from "./components/AddAdminModal";
import SuccessModal from "./components/SuccessModal";
import EditAdminModal from "./components/EditAdminModal";
import DeactivateAdminModal from "./components/DeactivateAdminModal";

const AdminManagementPage = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeactivateModalOpen, setIsDeactivateModalOpen] = useState(false);
  const [selectedAdminId, setSelectedAdminId] = useState<number | undefined>(
    undefined
  );

  const handleEdit = (id: number) => {
    setSelectedAdminId(id);
    setIsEditModalOpen(true);
  };

  const handleDeactivate = (id: number) => {
    setSelectedAdminId(id);
    setIsDeactivateModalOpen(true);
  };

  const handleAddSuccess = () => {
    setIsSuccessModalOpen(true);
  };

  const handleAddAnother = () => {
    setIsSuccessModalOpen(false);
    setIsAddModalOpen(true);
  };

  return (
    <div className="">
      {/* Header */}
      <div className="mb-8">
        <p className="text-[16px] text-[#4D4C4C] font-[400] max-w-2xl">
          Manage all platform administrators, assign roles, and control access
          permissions.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        {/* Search */}
        <div className="relative w-full md:w-[400px]">
          <Icon
            icon="mdi:magnify"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-autobuy-neutral-4 w-5 h-5 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search admin by name, email or role..."
            className="w-full pl-11 pr-4 py-3 rounded-lg border border-autobuy-neutral-6 focus:outline-none focus:ring-1 focus:ring-autobuy-blue-2 focus:border-autobuy-blue-2 text-sm text-autobuy-neutral-1 placeholder:text-autobuy-neutral-4 transition-all bg-white"
          />
        </div>

        {/* Add Button */}
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="w-full md:w-auto px-6 py-3 bg-[#0A6DFF] hover:bg-blue-600 text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors"
        >
          <Icon icon="mdi:plus" className="w-5 h-5" />
          Add New Admin
        </button>
      </div>

      {/* Table */}
      <AdminsTable onEdit={handleEdit} onDeactivate={handleDeactivate} />

      {/* Modals */}
      <AddAdminModal
        open={isAddModalOpen}
        onOpenChange={setIsAddModalOpen}
        onSuccess={handleAddSuccess}
      />
      <SuccessModal
        open={isSuccessModalOpen}
        onOpenChange={setIsSuccessModalOpen}
        onAddAnother={handleAddAnother}
      />
      <EditAdminModal
        open={isEditModalOpen}
        onOpenChange={setIsEditModalOpen}
        adminId={selectedAdminId}
      />
      <DeactivateAdminModal
        open={isDeactivateModalOpen}
        onOpenChange={setIsDeactivateModalOpen}
        adminId={selectedAdminId}
      />
    </div>
  );
};

export default AdminManagementPage;