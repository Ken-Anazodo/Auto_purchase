import React from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

export interface UserItem {
  _id: string;
  email: string;
  userType: string;
  isVerified: boolean;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  createdAt: string;
}

const formatDate = (dateString: string) => {
  if (!dateString) return "-";
  try {
    const d = new Date(dateString);
    const day = d.getDate().toString().padStart(2, "0");
    const month = (d.getMonth() + 1).toString().padStart(2, "0");
    const year = d.getFullYear().toString().slice(-2);
    return `${day}/${month}/${year}`;
  } catch (e) {
    return dateString;
  }
};

interface UsersTableProps {
  users: UserItem[];
  isLoading: boolean;
  pagination: {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalRecords: number;
  } | null;
  onPageChange: (page: number) => void;
}

const UsersTable: React.FC<UsersTableProps> = ({ users, isLoading, pagination, onPageChange }) => {
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl border border-gray-100 p-6 mt-6 flex justify-center items-center overflow-hidden h-64">
        <Icon icon="mdi:loading" className="w-14 h-14 animate-spin text-autobuy-blue-2" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 mt-6 overflow-hidden">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead>
            <tr className="bg-autobuy-blue-6 text-[#4D4C4C] text-[14px] font-[500]">
              <th className="px-4 py-4 rounded-l-lg whitespace-nowrap">Full Name</th>
              <th className="px-4 py-4 whitespace-nowrap">Email</th>
              <th className="px-4 py-4 whitespace-nowrap">Phone</th>
              <th className="px-4 py-4 whitespace-nowrap">Category</th>
              <th className="px-4 py-4 whitespace-nowrap text-center">Identity</th>
              <th className="px-4 py-4 whitespace-nowrap text-center">Listed Vehicles</th>
              <th className="px-4 py-4 whitespace-nowrap text-center">Inspections</th>
              <th className="px-4 py-4 whitespace-nowrap text-center">Road to Sale</th>
              <th className="px-4 py-4 whitespace-nowrap text-center">Sales</th>
              <th className="px-4 py-4 whitespace-nowrap text-center">Purchase</th>
              <th className="px-4 py-4 whitespace-nowrap">Date Joined</th>
              <th className="px-4 py-4 whitespace-nowrap">Status</th>
              <th className="px-4 py-4 rounded-r-lg whitespace-nowrap text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-[14px] font-[400] text-[#4D4C4C]">
            {users.length === 0 ? (
              <tr>
                <td colSpan={13} className="text-center py-6">
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user._id} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="px-4 text-nowrap py-4 font-medium text-gray-800">
                    {user.firstName || user.lastName ? `${user.firstName || ""} ${user.lastName || ""}` : "N/A"}
                  </td>
                  <td className="px-4 py-4">{user.email}</td>
                  <td className="px-4 py-4">{user.phoneNumber || "-"}</td>
                  <td className="px-4 py-4 text-nowrap capitalize">{user.userType?.toLowerCase() || "-"}</td>
                  <td className="px-4 py-4 text-center">N/A</td>
                  <td className="px-4 py-4 text-center">0</td>
                  <td className="px-4 py-4 text-center">0</td>
                  <td className="px-4 py-4 text-center">0</td>
                  <td className="px-4 py-4 text-center">0</td>
                  <td className="px-4 py-4 text-center">0</td>
                  <td className="px-4 py-4">
                    {formatDate(user.createdAt)}
                  </td>
                  <td className={`px-4 py-4 font-medium ${user.isVerified ? "text-[#34B233]" : "text-gray-500"}`}>
                    {user.isVerified ? "Verified" : "Unverified"}
                  </td>
                  <td className="px-4 py-4 text-center">
                    <button onClick={() => router.push(`users/${user._id}`)} className="text-[#0A6DFF] text-[14px] font-[400] hover:underline">
                      View
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

       {/* Pagination */}
       {pagination && pagination.totalPages > 1 && (
        <div className="flex justify-end items-center gap-2 mt-6">
          <button
            onClick={() => onPageChange(pagination.currentPage - 1)}
            disabled={pagination.currentPage === 1}
            className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50"
          >
            <Icon icon="mdi:chevron-left" className="w-5 h-5" />
          </button>
          
          {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-8 h-8 flex items-center justify-center rounded-full text-[14px] font-[500] ${
                pagination.currentPage === page
                  ? "bg-[#0A6DFF] text-white"
                  : "hover:bg-gray-100 text-[#4D4C4C]"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => onPageChange(pagination.currentPage + 1)}
            disabled={pagination.currentPage === pagination.totalPages}
            className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50"
          >
            <Icon icon="mdi:chevron-right" className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default UsersTable;
