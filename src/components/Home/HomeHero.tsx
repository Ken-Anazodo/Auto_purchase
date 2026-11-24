/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, Mic } from "lucide-react";
import { Icon } from "@iconify/react";

// TypeScript declarations for Web Speech API
declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognition;
    webkitSpeechRecognition: new () => SpeechRecognition;
  }
}

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
  message: string;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onend: () => void;
  onerror: (event: SpeechRecognitionErrorEvent) => void;
}

const HomeHero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [speechError, setSpeechError] = useState<string>("");
  const [isSupported, setIsSupported] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

      if (SpeechRecognition) {
        setIsSupported(true);
        const recognition = new SpeechRecognition();

        // Configure recognition settings
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = "en-US";

        // Handle speech recognition results
        recognition.onresult = (event: SpeechRecognitionEvent) => {
          const transcript = Array.from(event.results)
            .map((result) => result[0].transcript)
            .join("");

          setSearchQuery(transcript);
        };

        // Handle recognition end
        recognition.onend = () => {
          setIsListening(false);
        };

        // Handle recognition errors
        recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
          setIsListening(false);
          setSpeechError(`Speech recognition error: ${event.error}`);

          // Clear error after 3 seconds
          setTimeout(() => setSpeechError(""), 3000);
        };

        recognitionRef.current = recognition;
      } else {
        setIsSupported(false);
        setSpeechError("Speech recognition is not supported in this browser");
      }
    }

    // Cleanup
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    console.log("Searching for:", searchQuery);
  };

  const handleVoiceSearch = () => {
    if (!isSupported || !recognitionRef.current) {
      setSpeechError("Speech recognition is not available");
      setTimeout(() => setSpeechError(""), 3000);
      return;
    }

    if (isListening) {
      // Stop listening
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      // Start listening
      try {
        setSpeechError("");
        setIsListening(true);
        recognitionRef.current.start();
      } catch (error) {
        setIsListening(false);
        setSpeechError("Failed to start speech recognition");
        setTimeout(() => setSpeechError(""), 3000);
      }
    }
  };

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <section className="relative h-fit md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bgs/herobg.png"
          alt="Premium car background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-2 spacing flex items-center justify-start h-fit  md:min-h-screen md:py-40 py-20 lg:py-0 ">

        <figure className=" rounded-[32px] overflow-hidden p-5 md:p-12 lg:p-16 max-w-4xl w-full bg-[url('/bgs/formBg.png')] bg-fill bg-no-repeat bg-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center text-left mb-8">
            <span
              style={{
                background:
                  "linear-gradient(42.88deg, #8F2E1C 5.37%, #E6583D 56.63%, #D64D33 86.99%)",
              }}
              className=" text-white px-8 py-3 font-helvetica  rounded-[12px] text-xs font-medium shadow-lg"
            >
              Premium Car Marketplace
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
            Find the Right Car. Buy With Confidence.
          </h1>

          {/* Subheading */}
          <p className="text-lg text-white font-medium mb-12  mx-auto leading-relaxed">
            Every car goes through a 150+ point inspection, verified
            documentation, and transparent pricing - every time.
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            {/* Error Message */}
            {speechError && (
              <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg text-sm">
                {speechError}
              </div>
            )}

            <form onSubmit={handleSearch} className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-2 flex items-center md:gap-2">
                {/* Search Icon */}
                <div className="pl-2">
                  <Search className="w-6 h-6 text-[#4D4C4C]" />
                </div>

                {/* Search Input */}
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    isListening
                      ? "Listening..."
                      : "Search cars by brand, model, price or keyword..."
                  }
                  className={`flex-1 py-2 md:py-4 px-2 text-gray-700 text-lg placeholder-[#4D4C4C] border-none outline-none bg-transparent ${
                    isListening ? "animate-pulse" : ""
                  }`}
                />

                {/* Voice Search Button */}
                <button
                  type="button"
                  onClick={handleVoiceSearch}
                  disabled={!isSupported}
                  title={
                    !isSupported
                      ? "Voice search not supported"
                      : isListening
                      ? "Stop listening"
                      : "Start voice search"
                  }
                  className={`p-2 rounded-xl transition-all duration-200 relative ${
                    !isSupported
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : isListening
                      ? "bg-red-10 text-red-600 animate-pulse"
                      : "bg-gray-10 text-[#4D4C4C] hover:bg-gray-200"
                  }`}
                >
                  <Mic className="w-8 h-8" />
                  {isListening && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
                  )}
                </button>

                {/* Search Button */}
                <button
                  type="submit"
                  style={{
                    boxShadow:
                      "1px 1px 8px 0px #061F4526 inset, -1px -1px 8px 0px #061F4526 inset, 0px 1px 6px 0px #00000014",
                  }}
                  className="bg-[#0A6DFF]  hover:to-blue-700 text-white px-3 md:px-8 py-2 md:py-4 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </figure>

        <ul className="flex items-center justify-center gap-2 md:gap-6 absolute bottom-5 left-0 mx-auto w-full px-5">
          <li className="flex items-center justify-center gap-3">
            <Icon
              icon="gg:check-o"
              className="size-8 text-autobuy-primary2.5 animate-bounce mx-auto"
            />
            <span className="text-white text-[10px] md:text-base font-medium">
              Verified Sellers
            </span>
          </li>
          <li className="flex items-center justify-center gap-3">
            <Icon
              icon="codicon:inspect"
              className="size-8 text-autobuy-primary2.5 animate-bounce mx-auto"
            />
            <span className="text-white text-[10px] md:text-base font-medium">
              150+ Point Inspection
            </span>
          </li>
          <li className="flex items-center justify-center gap-3">
            <Icon
              icon="mdi:secure-outline"
              className="size-8 text-autobuy-primary2.5 animate-bounce mx-auto"
            />
            <span className="text-white text-[10px] md:text-base font-medium">
              Secure payments
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomeHero;
