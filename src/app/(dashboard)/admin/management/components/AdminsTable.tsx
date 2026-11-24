"use client";

import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

interface AdminsTableProps {
  onEdit: (id: number) => void;
  onDeactivate: (id: number) => void;
  onViewProfile?: (id: number) => void;
  onChangeRole?: (id: number) => void;
  onDelete?: (id: number) => void;
}

const AdminsTable: React.FC<AdminsTableProps> = ({
  onEdit,
  onDeactivate,
  onViewProfile,
  onChangeRole,
  onDelete,
}) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const admins = Array(9)
    .fill({
      name: "Mr Ebenezer Akeem",
      email: "Myemail@gmail.com",
      phone: "08120568974",
      role: "Super Admin",
      status: "Active",
    })
    .map((admin, i) => ({ ...admin, id: i + 1 }));

  return (
    <div className="bg-autobuy-blue-6 bg-opacity-30 rounded-2xl border border-autobuy-neutral-6 overflow-hidden mt-6">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px] text-left border-collapse">
          <thead>
            <tr className="bg-autobuy-blue-6 bg-opacity-50 text-[14px] text-[#4D4C4C] font-[500] border-b border-autobuy-neutral-6">
              <th className="px-6 py-4 whitespace-nowrap">Admin Name</th>
              <th className="px-6 py-4 whitespace-nowrap">Email</th>
              <th className="px-6 py-4 whitespace-nowrap">Phone</th>
              <th className="px-6 py-4 whitespace-nowrap">Role</th>
              <th className="px-6 py-4 whitespace-nowrap">Status</th>
              <th className="px-6 py-4 whitespace-nowrap text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-autobuy-neutral-6 text-[14px] font-[500] text-[#4D4C4C]">
            {admins.map((admin) => (
              <tr
                key={admin.id}
                className="hover:bg-autobuy-blue-6/20 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <td className="px-6 py-4 font-medium text-autobuy-neutral-1">
                  {admin.name}
                </td>
                <td className="px-6 py-4">{admin.email}</td>
                <td className="px-6 py-4">{admin.phone}</td>
                <td className="px-6 py-4">{admin.role}</td>
                <td className="px-6 py-4 font-[500] text-[#34B233]">
                  {admin.status}
                </td>
                <td className="px-6 py-4 text-center relative">
                  <div className="flex items-center justify-center">
                    <button
                      onClick={(e) => toggleDropdown(admin.id, e)}
                      className="text-[#6B6B6B] hover:text-autobuy-neutral-1 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Icon icon="mdi:dots-vertical" className="w-5 h-5" />
                    </button>

                    {/* Dropdown Menu */}
                    {openDropdown === admin.id && (
                      <div
                        ref={dropdownRef}
                        className="absolute right-10 top-8 z-50 w-48 bg-white rounded-lg shadow-xl border border-autobuy-neutral-6 overflow-hidden text-left animation-fade-in origin-top-right"
                      >
                        <div className="py-1">
                          <button
                            className="w-full px-4 py-2.5 text-xs text-autobuy-neutral-2 hover:bg-gray-50 text-left transition-colors"
                            onClick={() => {
                              onViewProfile?.(admin.id);
                              setOpenDropdown(null);
                            }}
                          >
                            View Profile
                          </button>
                          <button
                            className="w-full px-4 py-2.5 text-xs text-autobuy-neutral-2 hover:bg-gray-50 text-left transition-colors"
                            onClick={() => {
                              onEdit(admin.id);
                              setOpenDropdown(null);
                            }}
                          >
                            Edit Admin
                          </button>
                          <button
                            className="w-full px-4 py-2.5 text-xs text-autobuy-neutral-2 hover:bg-gray-50 text-left transition-colors"
                            onClick={() => {
                              onChangeRole?.(admin.id);
                              setOpenDropdown(null);
                            }}
                          >
                            Change Role
                          </button>
                          <hr className="border-gray-50" />
                          <button
                            className="w-full px-4 py-2.5 text-xs text-autobuy-neutral-2 hover:bg-gray-50 text-left transition-colors"
                            onClick={() => {
                              onDeactivate(admin.id);
                              setOpenDropdown(null);
                            }}
                          >
                            Deactivate Admin
                          </button>
                          <button
                            className="w-full px-4 py-2.5 text-xs text-autobuy-red-1 hover:bg-red-50 text-left transition-colors font-medium border-t border-autobuy-neutral-6"
                            onClick={() => {
                              onDelete?.(admin.id);
                              setOpenDropdown(null);
                            }}
                          >
                            Delete Admin
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminsTable;
