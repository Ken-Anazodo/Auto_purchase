import React, { useState, useMemo, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";

interface Vehicle {
  id: string;
  name: string;
  year: string;
  amountSold: string;
  deliveryStatus: "In-Transit" | "Delivered" | "Awaiting Pickup";
  remittanceStatus: "Pending" | "Paid";
  date: string;
}

interface SalesHistoryTableProps {
  vehicles: Vehicle[];
}

type SortOption =
  | "date-desc"
  | "date-asc"
  | "amount-desc"
  | "amount-asc"
  | "name-asc"
  | "name-desc";
type FilterOption = {
  deliveryStatus: string[];
  remittanceStatus: string[];
};

const SalesHistoryTable: React.FC<SalesHistoryTableProps> = ({ vehicles }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>("date-desc");
  const [filters, setFilters] = useState<FilterOption>({
    deliveryStatus: [],
    remittanceStatus: [],
  });

  const filterRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setShowFilterDropdown(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setShowSortDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getDeliveryStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "text-green-600";
      case "In-Transit":
        return "text-orange-600";
      case "Awaiting Pickup":
        return "text-gray-600";
      default:
        return "text-gray-600";
    }
  };

  const getRemittanceStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "text-green-600";
      case "Pending":
        return "text-yellow-600";
      default:
        return "text-gray-600";
    }
  };

  // Convert date string to Date object for sorting
  const parseDate = (dateStr: string) => {
    const [day, month, year] = dateStr.split(/[, ]+/);
    const monthMap: { [key: string]: number } = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    };
    return new Date(parseInt(year), monthMap[month], parseInt(day));
  };

  // Convert amount string to number for sorting
  const parseAmount = (amountStr: string) => {
    return parseFloat(amountStr.replace(/[₦,]/g, ""));
  };

  // Filter and sort vehicles
  const processedVehicles = useMemo(() => {
    let filtered = vehicles;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (vehicle) =>
          vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          vehicle.year.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply status filters
    if (filters.deliveryStatus.length > 0) {
      filtered = filtered.filter((vehicle) =>
        filters.deliveryStatus.includes(vehicle.deliveryStatus)
      );
    }

    if (filters.remittanceStatus.length > 0) {
      filtered = filtered.filter((vehicle) =>
        filters.remittanceStatus.includes(vehicle.remittanceStatus)
      );
    }

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "date-desc":
          return parseDate(b.date).getTime() - parseDate(a.date).getTime();
        case "date-asc":
          return parseDate(a.date).getTime() - parseDate(b.date).getTime();
        case "amount-desc":
          return parseAmount(b.amountSold) - parseAmount(a.amountSold);
        case "amount-asc":
          return parseAmount(a.amountSold) - parseAmount(b.amountSold);
        case "name-asc":
          return `${a.name} ${a.year}`.localeCompare(`${b.name} ${b.year}`);
        case "name-desc":
          return `${b.name} ${b.year}`.localeCompare(`${a.name} ${a.year}`);
        default:
          return 0;
      }
    });

    return sorted;
  }, [vehicles, searchQuery, filters, sortBy]);

  const handleFilterChange = (
    type: "deliveryStatus" | "remittanceStatus",
    value: string
  ) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value],
    }));
  };

  const clearFilters = () => {
    setFilters({
      deliveryStatus: [],
      remittanceStatus: [],
    });
  };

  const getSortLabel = () => {
    switch (sortBy) {
      case "date-desc":
        return "Date (Newest)";
      case "date-asc":
        return "Date (Oldest)";
      case "amount-desc":
        return "Amount (Highest)";
      case "amount-asc":
        return "Amount (Lowest)";
      case "name-asc":
        return "Vehicle (A-Z)";
      case "name-desc":
        return "Vehicle (Z-A)";
      default:
        return "Sort by";
    }
  };

  const filteredVehicles = processedVehicles;

  return (
    <div className=" rounded-lg overflow-visible relative">
      {/* Header */}
      <div className="px-6 py-4 ">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Sales & Remittance History
        </h2>
        <p className="text-sm text-gray-600">
          Track delivery progress and payment status for each sale.
        </p>
      </div>

      {/* Search and Actions */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="md:flex space-y-5 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Icon
              icon="mdi:magnify"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search vehicle..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center space-x-3 ml-4">

            <div className="relative" ref={filterRef}>
              <button
                onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <Icon icon="mdi:filter-variant" className="w-4 h-4" />
                <span>Filter</span>
                {(filters.deliveryStatus.length > 0 ||
                  filters.remittanceStatus.length > 0) && (
                  <span className="bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {filters.deliveryStatus.length +
                      filters.remittanceStatus.length}
                  </span>
                )}
                <Icon icon="mdi:chevron-down" className="w-4 h-4" />
              </button>


              {showFilterDropdown && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-medium text-gray-900">Filter by</h4>
                      <button
                        onClick={clearFilters}
                        className="text-sm text-orange-600 hover:text-orange-700"
                      >
                        Clear all
                      </button>
                    </div>

                    <div className="space-y-4">
                      {/* Delivery Status */}
                      <div>
                        <h5 className="text-sm font-medium text-gray-700 mb-2">
                          Delivery Status
                        </h5>
                        <div className="space-y-2">
                          {["Delivered", "In-Transit", "Awaiting Pickup"].map(
                            (status) => (
                              <label key={status} className="flex items-center">
                                <input
                                  type="checkbox"
                                  checked={filters.deliveryStatus.includes(
                                    status
                                  )}
                                  onChange={() =>
                                    handleFilterChange("deliveryStatus", status)
                                  }
                                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                                />
                                <span className="ml-2 text-sm text-gray-700">
                                  {status}
                                </span>
                              </label>
                            )
                          )}
                        </div>
                      </div>




                      {/* Remittance Status */}
                      <div>
                        <h5 className="text-sm font-medium text-gray-700 mb-2">
                          Remittance Status
                        </h5>
                        <div className="space-y-2">
                          {["Paid", "Pending"].map((status) => (
                            <label key={status} className="flex items-center">
                              <input
                                type="checkbox"
                                checked={filters.remittanceStatus.includes(
                                  status
                                )}
                                onChange={() =>
                                  handleFilterChange("remittanceStatus", status)
                                }
                                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                              />
                              <span className="ml-2 text-sm text-gray-700">
                                {status}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="relative" ref={sortRef}>
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <Icon icon="mdi:sort" className="w-4 h-4" />
                <span>{getSortLabel()}</span>
                <Icon icon="mdi:chevron-down" className="w-4 h-4" />
              </button>

              {showSortDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="p-2">
                    {[
                      { value: "date-desc", label: "Date (Newest)" },
                      { value: "date-asc", label: "Date (Oldest)" },
                      { value: "amount-desc", label: "Amount (Highest)" },
                      { value: "amount-asc", label: "Amount (Lowest)" },
                      { value: "name-asc", label: "Vehicle (A-Z)" },
                      { value: "name-desc", label: "Vehicle (Z-A)" },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortBy(option.value as SortOption);
                          setShowSortDropdown(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-100 transition-colors duration-200 ${
                          sortBy === option.value
                            ? "bg-orange-50 text-orange-600"
                            : "text-gray-700"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto overflow-y-visible ">
        <table className="w-full rounded-t-lg ">
          <thead className="bg-[#EDF4FF]">
            <tr>
              <th className="px-6 py-8 text-nowrap text-left text-base font-medium text-autobuy-neutral-1 tracking-wider">
                Vehicle (MMY)
              </th>
              <th className="px-6 py-8 text-nowrap text-left text-base font-medium text-autobuy-neutral-1 tracking-wider">
                Amount Sold
              </th>
              <th className="px-6 py-8 text-nowrap text-left text-base font-medium text-autobuy-neutral-1 tracking-wider">
                Delivery Status
              </th>
              <th className="px-6 py-8 text-nowrap text-left text-base font-medium text-autobuy-neutral-1 tracking-wider">
                Remittance Status
              </th>
              <th className="px-6 py-8 text-nowrap text-left text-base font-medium text-autobuy-neutral-1 tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredVehicles.map((vehicle) => (
              <tr
                key={vehicle.id}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {vehicle.name} {vehicle.year}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {vehicle.amountSold}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span
                    className={`font-medium ${getDeliveryStatusColor(
                      vehicle.deliveryStatus
                    )}`}
                  >
                    {vehicle.deliveryStatus}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span
                    className={`font-medium ${getRemittanceStatusColor(
                      vehicle.remittanceStatus
                    )}`}
                  >
                    {vehicle.remittanceStatus}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {vehicle.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {filteredVehicles.length === 0 && (
        <div className="px-6 py-20 text-center min-h-[200px] flex items-center justify-center">
          <div>
            <p className="text-gray-500 text-sm mb-2">
              {searchQuery ||
              filters.deliveryStatus.length > 0 ||
              filters.remittanceStatus.length > 0
                ? "No vehicles found matching your current filters."
                : "No sales history found."}
            </p>
            {(searchQuery ||
              filters.deliveryStatus.length > 0 ||
              filters.remittanceStatus.length > 0) && (
              <p className="text-gray-400 text-xs">
                Try adjusting your search or filter criteria.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesHistoryTable;
