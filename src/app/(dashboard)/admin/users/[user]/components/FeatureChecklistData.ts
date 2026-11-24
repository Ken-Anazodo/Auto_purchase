export type FeatureCategory = {
  title: string;
  subgroups?: {
    title: string;
    items: string[];
  }[];
  items?: string[];
  othersInput?: boolean;
};

export const vehicleFeatures: FeatureCategory[] = [
  {
    title: "Performance",
    subgroups: [
      {
        title: "Engine Type",
        items: ["Gasoline", "Diesel", "Hybrid", "Electric"],
      },
      {
        title: "Transmission",
        items: ["Manual", "Automatic", "CVT", "Dual-Clutch"],
      },
      {
        title: "Drive Types",
        items: ["FWD", "RWD", "AWD", "4WD"],
      },
      {
        title: "Driving Modes",
        items: ["Eco", "Sport", "Comfort"],
      },
    ],
    items: [
        "Turbocharger",
        "Supercharger",
        "Adaptive Suspension",
        "Horsepower & torque ratings",
        "Regenerative Braking",
        "Towing Capacity"
    ],
    othersInput: true,
  },
  {
      title: "Safety",
      subgroups: [
          {
              title: "Airbags",
              items: ["Front", "Side", "Curtain", "Knee"]
          }
      ],
      items: [
          "Anti-lock Braking System (ABS)",
          "Electronic Stability Control (ESC)",
          "Traction Control System (TCS)",
          "Lane Departure Warning (LDW)",
          "Lane Keep Assist (LKA)",
          "Adaptive Cruise Control (ACC)",
          "Blind-Spot Monitoring",
          "Parking sensors",
          "Rearview camera",
          "360-degree camera",
          "Automatic Emergency Braking (AEB)",
          "Pedestrian Detection",
          "Driver Attention Monitoring",
          "Night Vision Assist",
          "Tire Pressure Monitoring System (TPMS)",
          "Collision Avoidance System",
          "Cross-Traffic Alert"
      ],
      othersInput: true,
  },
  {
      title: "Comfort",
      subgroups: [
          {
              title: "Automatic Climate Control",
              items: ["Single-Zone", "Dual-Zone", "Tri-Zone"]
          }
      ],
      items: [
          "Heated and ventilated seats",
          "Power-adjustable seats with memory",
          "Massage seats",
          "Leather or premium upholstery",
          "Panoramic sunroof or moonroof",
          "Noise insulation or active noise cancellation",
          "Keyless entry and start (Push-button start)",
          "Ambient lighting",
          "Adjustable steering wheel (Tilt, Telescopic)",
          "Adaptive Cruise Control (ACC)",
          "Adaptive Lights",
          "Android Auto",
          "Apple CarPlay",
          "Remote Start"
      ],
      othersInput: true,
  },
  {
      title: "Entertainment",
      items: [
          "Blind Spot Monitoring & Detection", // Note: This seems misplaced in Entertainment in the screenshot, but copying as is from image/ocr generally, or placing where appropriate. Screenshot puts it here? Actually screenshot list is visible. Let's follow screenshot.
          // Wait, screenshot for Entertainment shows: 
          // Blind Spot Monitoring... (Wait, this is likely duplicate or I'm misreading the cropped headers. Let's look closer at the third image).
          // Image 2 top: "Entertainment". Items: "Blind Spot..." -> This looks like a mistake in the provided design/screenshot or my reading. 
          // Let's re-read Image 2.
          // Ah, Image 3 has "Entertainment" at top? No Image 2 top is Entertainment.
          // Items listed under Entertainment in Image 2: "Blind Spot Monitoring & Detection", "Bluetooth Connectivity", "Intelligent Park Assist", "Infotainment System", "Isofix", "USB Ports", "Wi-Fi Hotspot", "Wireless Phone Charging".
          // "Blind Spot" and "Park Assist" are usually Safety/Tech. "Isofix" is Safety. 
          // I will follow the visual evidence of the screenshot even if illogical, as the user wants to match the UI.
          "Blind Spot Monitoring & Detection", 
          "Bluetooth Connectivity",
          "Intelligent Park Assist",
          "Infotainment System",
          "Isofix",
          "USB Ports",
          "Wi-Fi Hotspot",
          "Wireless Phone Charging"
      ],
      othersInput: true,
  },
  {
      title: "Tech",
      items: [
          "Touchscreen infotainment systems",
          "Apple CarPlay and Android Auto",
          "Built-in navigation systems",
          "Wireless charging pad",
          "USB ports (Type-A, Type-C)",
          "Bluetooth connectivity",
          "Wi-Fi hotspot",
          "Voice recognition",
          "Premium sound systems (e.g., Bose, Harman Kardon)",
          "Over-the-air updates",
          "Head-up display (HUD)",
          "Digital instrument cluster",
          "Climate Control",
          "CO2 Emissions",
          "Collision Avoidance System",
          "Cross-Traffic Alert",
          "Cruise Control",
          "CVT (Continuous Variable Transmission)",
          "Hands-Free Tailgate",
          "Heated Seats (and Steering Wheel)",
          "Hill Descent Control",
          "Hill-start Assist",
          "Keyless Entry (and Ignition)",
          "Lane Departure Warning",
          "LED Headlights",
          "Lane Keeping Assist",
          "Surround View Camera System",
          "Semi-Autonomous Driving Modes",
          "Smart Motorways",
          "Stop-Start System",
          "Supermini",
          "Traffic Sign Recognition",
          "Tire Pressure Monitoring System",
          "Xenon Headlights",
          "Yaw Control System",
          "Zero Emissions"
      ],
      othersInput: true,
  },
  {
      title: "Interior",
      items: [
          "DAB (Digital Audio Broadcast)",
          "Dash-cam",
          "DRLS",
          "Drive mode",
          "Driver Attention Monitoring",
          "Dynamic Stability Control",
          "Massaging Seats",
          "Multi-Zone Climate Control",
          "Memory Seats",
          "Over-the-Air Updates",
          "Voice Control",
          "Ventilated Seats",
          "Virtual Cockpit"
      ],
      othersInput: true,
  },
  {
      title: "Exterior",
      items: [
          "Eco Mode",
          "Power Steering",
          "Emergency Call (eCall) System",
          "Parking Sensors",
          "Panoramic Sunroof",
          "PHEV",
          "Pre-Collision Tensioning"
      ],
      othersInput: true,
  },
  {
      title: "Mechanical",
      items: [
          "GPS Navigation",
          "Gesture Control"
      ],
      othersInput: true,
  },
  {
      title: "Convenience",
      items: [
          "Power liftgate or hands-free tailgate",
          "Remote start",
          "Smart key access",
          "Auto-dimming mirrors",
          "Rain-sensing wipers",
          "Auto-folding side mirrors",
          "Power windows and locks",
          "Split-folding rear seats",
          "Cargo management system"
      ],
      othersInput: true,
  },
  {
      title: "Luxury",
      items: [
          "Reclining rear seats",
          "Fridge or cooler in the rear",
          "Rear-seat entertainment screens",
          "Privacy shades",
          "Premium interior trims (e.g., wood, carbon fiber, aluminum)",
          "Customizable interior accents",
          "Advanced air filtration systems"
      ],
      othersInput: true,
  },
  {
      title: "Offroad",
      items: [
          "Locking differentials",
          "Hill descent control",
          "Skid plates",
          "Off-road driving modes",
          "High ground clearance",
          "All-terrain tires",
          "Winch system"
      ],
      othersInput: true,
  },
  {
      title: "Advanced Driver Assistant System",
      items: [
          "Traffic sign recognition",
          "Highway driving assist",
          "Proximity sensors",
          "Automatic parking assist",
          "Adaptive headlights",
          "Collision avoidance systems"
      ],
      othersInput: true,
  },
  {
      title: "Sustainability And Efficiency",
      items: [
          "Hybrid or plug-in hybrid systems",
          "Fully electric powertrains",
          "Start-stop systems",
          "Eco-driving features",
          "Solar panel roofs (in some vehicles)"
      ],
      othersInput: true,
  }
];
