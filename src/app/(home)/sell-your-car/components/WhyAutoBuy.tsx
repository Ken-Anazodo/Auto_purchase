import { Icon } from "@iconify/react";
import React from "react";

const WhyAutoBuy = () => {
  const features = [
    {
      icon: "tabler:file-check-filled",
      title: "150+ Points Certified Inspection",
      description:
        "Our certified engineers inspect every aspect of your vehicle (physical and mechanical check) for accurate valuation.",
    },
    {
      icon: "tabler:file-check-filled",
      title: "Secure Payment Ecosystem",
      description:
        "Enjoy fraud-proof transactions. Funds are securely held and released only after verification, ensuring zero risk for you.",
    },
    {
      icon: "tabler:file-check-filled",
      title: "Seamless Paperwork & Support",
      description:
        "From valuation to buyer negotiation to final documents, we manage it all seamless for both you and the buyer.",
    },
    {
      icon: "uis:padlock",
      title: "Verified Buyers Guaranteed",
      description:
        "Your car is showcased and accessed by a large pool of serious, vetted buyers who trust Autobuy's certified listings",
    },
  ];

  return (
    <section className=" bg-gray-50">
      <div className="container py-16 px-6 spacing">
        {/* Header Badge */}
        <div className="flex justify-center mb-6">
          <span
            style={{
              background:
                "linear-gradient(42.88deg, #8F2E1C 5.37%, #E6583D 56.63%, #D64D33 86.99%)",
            }}
            className=" text-white px-12 py-2 rounded-full text-sm font-medium font-helvetica"
          >
            Why AutoBuy
          </span>
        </div>

        {/* Main Title */}
        <div className="text-center mb-3">
          <h2 className="text-xl md:text-3xl font-semibold text-autobuy-neutral-1 mb-4">
            Your Safest and Easiest Way to Sell.
          </h2>
          <p className="text-base text-autobuy-neutral-2 max-w-3xl mx-auto">
            We make selling cars simple, secure, and more profitable so you can
            sell with peace of mind
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center border border-autobuy-neutral-5 rounded-[16px] px-[15px] py-[30px] shadow-sm "
            >
              <figure className="size-28 mx-auto mb-10 rounded-full flex items-center justify-center border-2 border-[#EF693E] p-3 bg-white">
                <div className="size-full bg-[#FCE0D1] rounded-full flex items-center justify-center">
                  <Icon
                    icon={feature.icon}
                    className="text-[#EF693E] size-10"
                    width="1.2em"
                    height="1.2em"
                  />
                </div>
              </figure>
              <h3 className="text-xl font-semibold text-autobuy-neutral-1 mb-3">
                {feature.title}
              </h3>
              <p className="text-autobuy-neutral-2 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAutoBuy;
