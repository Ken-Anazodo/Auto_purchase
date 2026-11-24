import { Icon } from "@iconify/react";
import React from "react";

const images = [1, 2, 3, 4, 5];

const historyEvents = [
  {
    date: "21 March, 2025",
    role: "#First Owner",
    location: "Lagos, Nigeria",
    event: "First Registration",
    status: "Verified",
  },
  {
    date: "21 March, 2025",
    role: "#Second Owner",
    location: "Lagos, Nigeria",
    event: "Ownership Transfer",
    status: "Verified",
  },
  {
    date: "21 March, 2025",
    role: "#Third Owner",
    location: "Lagos, Nigeria",
    event: "Ownership Transfer",
    status: "Verified",
  },
];

const SalesHistory = () => {
  return (
    <section
      className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8"
      id="sales"
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          style={{
            background:
              "linear-gradient(217.57deg, #FAFCFF -138.48%, #BDD7FF -47.17%, #0067FF 17.55%, #064199 74.19%)",
          }}
          className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0"
        >
          <Icon icon="heroicons:user-group" className="text-white text-xl" />
        </div>
        <h3 className="text-lg font-bold text-autobuy-primary2.5">
          Sales History
        </h3>
      </div>
      <p className="text-sm text-[#3385FF] mb-8 ml-[52px]">
        This timeline shows the vehicle&lsquo;s recorded ownership changes
      </p>

      {/* Image Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 mb-8">
        {images.map((i, idx) => (
          <div
            key={idx}
            className="aspect-[4/3] rounded-2xl border border-gray-200 flex items-center justify-center shrink-0 text-gray-400 text-sm"
          >
            Image {i}
          </div>
        ))}
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {historyEvents.map((item, index) => (
          <div
            key={index}
            style={{
              boxShadow:
                "1px 1px 4px 0px #3385FF26 inset, -1px -1px 4px 0px #3385FF26 inset, 0px 1px 6px 0px #00000014",
            }}
            className="rounded-2xl border bg-[#FAFCFF] border-[#99C2FF] bg-blue-50/10 hover:shadow-md transition-shadow p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="rounded-full border-4 border-[#CCE0FF] bg-[#0A6DFF] p-2">
                <Icon
                  icon="streamline-ultimate:car-3"
                  className="text-white text-lg"
                />
              </span>
              <span className="text-sm font-bold text-gray-800">
                {item.date} - <span className="text-gray-600">{item.role}</span>
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex flex-col">
                <span className="text-gray-500 text-xs">
                  Location:{" "}
                  <span className="font-bold text-gray-700">
                    {item.location}
                  </span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-xs">
                  Event:{" "}
                  <span className="font-bold text-gray-700">{item.event}</span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-xs">
                  Status:{" "}
                  <span className="font-bold text-green-500">
                    {item.status}
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SalesHistory;
