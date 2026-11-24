"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AddAdminModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

const AddAdminModal: React.FC<AddAdminModalProps> = ({
  open,
  onOpenChange,
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Super Admin",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Adding admin:", formData);
    // Simulate API call
    onOpenChange(false);
    onSuccess();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px] p-0 bg-white overflow-hidden rounded-2xl">
        <DialogHeader className="px-8 pt-8 pb-2">
          <DialogTitle className="text-[18px] font-[500] text-center text-[#1A1A1A]">
            Add New Admin
          </DialogTitle>
          <p className="text-center font-[400] text-[14px] text-[#4D4C4C]">
            Create a new admin account and assign appropriate roles
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="px-8 pb-8 space-y-5">
          <div className="space-y-1.5">
            <label className="text-[14px] font-[400] text-[#4D4C4C]">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
              className="w-full px-4 py-3 rounded-lg border border-autobuy-neutral-6 focus:outline-none focus:ring-1 focus:ring-autobuy-blue-2 text-sm text-autobuy-neutral-1 placeholder:text-autobuy-neutral-4 transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[14px] font-[500] text-[#4D4C4C]">
              Email address
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="myemail@gmail.com"
              className="w-full px-4 py-3 rounded-lg border border-autobuy-neutral-6 focus:outline-none focus:ring-1 focus:ring-autobuy-blue-2 text-sm text-autobuy-neutral-1 placeholder:text-autobuy-neutral-4 transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[14px] font-[400] text-[#4D4C4C]">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="00000000000"
              className="w-full px-4 py-3 rounded-lg border border-autobuy-neutral-6 focus:outline-none focus:ring-1 focus:ring-autobuy-blue-2 text-sm text-autobuy-neutral-1 placeholder:text-autobuy-neutral-4 transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[14px] font-[400] text-[#4D4C4C]">
              Role
            </label>
            <div className="relative">
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-autobuy-neutral-6 focus:outline-none focus:ring-1 focus:ring-autobuy-blue-2 text-sm text-autobuy-neutral-1 appearance-none bg-white cursor-pointer transition-all"
              >
                <option value="Super Admin">Super Admin</option>
                <option value="Field Agent">Field Agent</option>
                <option value="Control / Sales Agent">
                  Control / Sales Agent
                </option>
              </select>
              <Icon
                icon="mdi:chevron-down"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-autobuy-neutral-1 pointer-events-none w-5 h-5"
              />
            </div>
          </div>

          <div className="pt-4 flex gap-4">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="flex-1 py-3.5 rounded-lg bg-[#E4E4E4] text-autobuy-neutral-1 text-[16px] font-[600] hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3.5 rounded-lg bg-[#0A6DFF] text-white text-[16px] font-[600] hover:bg-blue-600 transition-colors"
            >
              Create Admin
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddAdminModal;
