"use client";
import React from "react";
import { Icon } from "@iconify/react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showPrevNext?: boolean;
  maxVisiblePages?: number;
  size?: "sm" | "md" | "lg";
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  showPrevNext = true,
  maxVisiblePages = 3,
  size = "md",
}) => {
  // Calculate visible page numbers
  const getVisiblePages = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const half = Math.floor(maxVisiblePages / 2);
      let start = Math.max(1, currentPage - half);
      const end = Math.min(totalPages, start + maxVisiblePages - 1);

      // Adjust start if end is at totalPages
      if (end === totalPages) {
        start = Math.max(1, end - maxVisiblePages + 1);
      }

      // Add first page and ellipsis if needed
      if (start > 1) {
        pages.push(1);
        if (start > 2) {
          pages.push("...");
        }
      }

      // Add visible pages
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      // Add ellipsis and last page if needed
      if (end < totalPages) {
        if (end < totalPages - 1) {
          pages.push("...");
        }
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const handlePageClick = (page: number | string) => {
    if (typeof page === "number" && page !== currentPage) {
      onPageChange(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Size configurations
  const sizeClasses = {
    sm: {
      container: "gap-1",
      button: "w-8 h-8 text-sm",
      icon: "w-3 h-3",
    },
    md: {
      container: "gap-2",
      button: "w-10 h-10 text-sm",
      icon: "w-4 h-4",
    },
    lg: {
      container: "gap-2",
      button: "w-10 h-10 text-lg",
      icon: "w-6 h-6",
    },
  };

  const config = sizeClasses[size];

  if (totalPages <= 1) return null;

  return (
    <div className={`flex items-center justify-center ${config.container}`}>
      {/* Previous Button */}
      {showPrevNext && (
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`
            ${config.button} 
            flex items-center justify-center  text-gray-600
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white 
          transition-all duration-200
          `}
        >
          <Icon icon="mdi:chevron-left" className={config.icon} />
        </button>
      )}

      {/* Page Numbers */}
      {getVisiblePages().map((page, index) => (
        <React.Fragment key={index}>
          {page === "..." ? (
            <span
              className={`
                ${config.button} 
                flex items-center justify-center text-gray-400 cursor-default
              `}
            >
              ...
            </span>
          ) : (
            <button
              onClick={() => handlePageClick(page)}
              className={`
                ${config.button} 
                flex items-center justify-center rounded-full border transition-all duration-200
                ${
                  page === currentPage &&
                  "bg-blue-600 border-blue-600 text-white hover:bg-blue-700"
                }
              `}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}

      {/* Next Button */}
      {showPrevNext && (
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`
            ${config.button} 
                 flex items-center justify-center  text-gray-600
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white 
          transition-all duration-200
          `}
        >
          <Icon icon="mdi:chevron-right" className={config.icon} />
        </button>
      )}
    </div>
  );
};

export default Pagination;
