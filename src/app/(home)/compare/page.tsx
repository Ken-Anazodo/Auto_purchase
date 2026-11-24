"use client";
import React, { useState } from "react";
import CompareHeader from "./components/CompareHeader";
import CarComparisonCard from "./components/CarComparisonCard";
import Header from "@/components/layouts/Header";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import BackButton from "@/components/BackButton";
import { Icon } from "@iconify/react";

const ComparePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const cars = [
    {
      id: 1,
      name: "Toyota Camry 2025",
      price: "₦45,000,000",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAC2dQC2ekPIUXZYJzlvtufbMdxWVss_IFHKoRrIlx2zNbdL-L3RAc1THuh84SpU6vHqQAUChPIIG_WdrL9ONDy_bBMqjGvm8DxMKIeV5VnHCyzZ-a1hs1jZj5DIdDbh5Bb_Ghh9hogUusXsm6ZG3vNXxOdba2YkQ-TzsEXHS9qnsFSX2LoYMQ847UqC5x00BIr-Xfh96vbnh9IA4l0PCuCvo0WQ_-J4z5V4kiPQGWlQieH0ai8uiIvSVKhzc_XNLTHefLYJ4WFejE",
      tags: ["150+ Point Inspected", "Video Tour", "Full History Report"],
      specs: [
        {
          label: "Drive train",
          value: "All wheel drive(AWD)",
          icon: "mdi:car-cog",
        },
        { label: "Mileage", value: "45,000km", icon: "mdi:speedometer" },
        {
          label: "Transmission",
          value: "Automatic",
          icon: "mdi:car-shift-pattern",
        },
        { label: "Body", value: "Sedan", icon: "mdi:car-side" },
        { label: "Condition", value: "Foreign", icon: "mdi:map-marker" },
        { label: "Engine type", value: "Hybrid", icon: "mdi:engine" },
        { label: "History", value: "Clean", icon: "mdi:clipboard-text" },
        { label: "Location", value: "Lagos, Nigeria", icon: "mdi:map-marker" },
        { label: "Payment", value: "Escrow secured", icon: "mdi:credit-card" },
      ],
      additionalFeatures: [
        "Bluetooth Connectivity",
        "Sunroof",
        "Leather Seats",
        "Navigation System",
        "Backup Camera",
        "Power Seats",
        "Heated Seats",
        "All-Wheel Drive (AWD)",
        "Premium Sound System",
      ],
    },
    {
      id: 2,
      name: "Honda Accord 2024",
      price: "₦42,500,000",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC6sXIPptwqa_poskx08mQzSXUdzPFPqw5Ke2gHSp6QfuXnZmxg536rJ69jNWySuJTUs5ZsjwK7GMUIAugRM9phnFnhbV8RI5Wuqv1Np_sFI_UGfJ576ahXVocNz_Md72xnNZm3-c9gqwAqejsXAofL1smtWOd2xuKzH4VGREWt-xGmsZAMeRqehYmdaTznd9BFeIXArId7FBtZBtH8nOICX6c3qPiRUNC7aQiy3AAU-CglHw0yrJIRmLMN7SdoQAElob80W2pn5xU",
      tags: ["150+ Point Inspected", "Video Tour", "Full History Report"],
      specs: [
        {
          label: "Drive train",
          value: "Front wheel drive(FWD)",
          icon: "mdi:car-cog",
        },
        { label: "Mileage", value: "38,000km", icon: "mdi:speedometer" },
        { label: "Transmission", value: "CVT", icon: "mdi:car-shift-pattern" },
        { label: "Body", value: "Sedan", icon: "mdi:car-side" },
        { label: "Condition", value: "Local", icon: "mdi:map-marker" },
        { label: "Engine type", value: "Gasoline", icon: "mdi:engine" },
        { label: "History", value: "Clean", icon: "mdi:clipboard-text" },
        { label: "Location", value: "Abuja, Nigeria", icon: "mdi:map-marker" },
        { label: "Payment", value: "Escrow secured", icon: "mdi:credit-card" },
      ],
      additionalFeatures: [
        "Apple CarPlay",
        "Android Auto",
        "Wireless Charging",
        "Premium Audio",
        "Cruise Control",
        "Backup Camera",
        "Bluetooth Connectivity",
        "Smart Entry",
        "Push Button Start",
      ],
    },
    {
      id: 3,
      name: "BMW 3 Series 2023",
      price: "₦58,000,000",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDBEczym8OsKmCSn-YJmHfHAXIfTvAI7aNEeMIGkbWG9N-aiWVdb9DYZiYCDiS7S1cZSIwMeSaYpQIWbV14RuCZxao6ak7zuT_QKW-7CttTa69JSQwxV6QWhwDMEaBKcd48iQ__gnaDmCVERRtHgyBtAm28Yd_uHmuq7GbEJC39XNAayEe9itnS_FKaidtHil2u6AvBV7qcYwL-Ed5lyBvRSS6NXzfw3SrMAIwO8F6_b_gu1Noyg4hEziB0ZaZwkT6fieLk6eu-9QQ",
      tags: ["150+ Point Inspected", "Video Tour", "Full History Report"],
      specs: [
        {
          label: "Drive train",
          value: "All wheel drive(AWD)",
          icon: "mdi:car-cog",
        },
        { label: "Mileage", value: "22,000km", icon: "mdi:speedometer" },
        {
          label: "Transmission",
          value: "Automatic",
          icon: "mdi:car-shift-pattern",
        },
        { label: "Body", value: "Sedan", icon: "mdi:car-side" },
        { label: "Condition", value: "Foreign", icon: "mdi:map-marker" },
        { label: "Engine type", value: "Turbo", icon: "mdi:engine" },
        { label: "History", value: "Clean", icon: "mdi:clipboard-text" },
        { label: "Location", value: "Lagos, Nigeria", icon: "mdi:map-marker" },
        { label: "Payment", value: "Escrow secured", icon: "mdi:credit-card" },
      ],
      additionalFeatures: [
        "Sport Package",
        "Heated Seats",
        "Premium Sound",
        "Navigation System",
        "Keyless Entry",
        "Park Assist",
        "Bluetooth Connectivity",
        "Performance Tires",
        "Luxury Interior",
      ],
    },
    {
      id: 4,
      name: "Mercedes-Benz C-Class 2023",
      price: "₦65,000,000",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAzpX5e_i3CvA-82UYAHWeT96jaMMtYP-Ayv0f_XjCJ2ksA-PQm1UPtrEE2kKvc3rF7qlm4zgx9KkPWLiXh69-mt4sXRvY2f7IGa1LWtmHFuUVEgVtg9dTB_fVTqklg49Xy9I3ZoaZGodBKdFn5cDefC7ID_TVk0MXt4BFmw1aDHaip7-AwEMirXBPRfZcXlO6bSAWg9c-tMiIAsMun8_EUqwBDHsImqF-f3mSw8qXVdSygKSzZn1NlFbNetObL0OwynT1dAcRwyMM",
      tags: ["150+ Point Inspected", "Video Tour", "Full History Report"],
      specs: [
        {
          label: "Drive train",
          value: "Rear wheel drive(RWD)",
          icon: "streamline:ai-settings-spark",
        },
        { label: "Mileage", value: "18,000km", icon: "carbon:meter" },
        {
          label: "Transmission",
          value: "9-Speed Automatic",
          icon: "streamline-freehand:settings-cog",
        },
        { label: "Body", value: "Sedan", icon: "streamline-ultimate:car-3" },
        { label: "Condition", value: "Foreign", icon: "rivet-icons:check-circle-breakout" },
        { label: "Engine type", value: "Turbo", icon: "mdi:engine-outline" },
        { label: "History", value: "Clean", icon: "mage:file-2" },
        { label: "Location", value: "Lagos, Nigeria", icon: "basil:location-outline" },
        { label: "Payment", value: "Escrow secured", icon: "famicons:card-outline" },
      ],
      additionalFeatures: [
        "AMG Styling",
        "Premium Package",
        "Panoramic Sunroof",
        "Digital Cockpit",
        "Premium Audio",
        "Ambient Lighting",
        "Bluetooth Connectivity",
        "Wireless Charging",
        "Advanced Safety",
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div className="container px-4 sm:px-6 md:px-16 lg:px-16 py-16">
        <BackButton text="Back" />

        <CompareHeader />

        {/* Car Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20">
          {cars.map((car) => (
            <CarComparisonCard key={car.id} car={car} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComparePage;
