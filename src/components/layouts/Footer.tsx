"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, useInView } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import ActionButton from "../ActionButton";

export const footerLinks = [
  {
    section: "Quick Links",
    links: [
      { label: "Browse Cars", href: "/browse-cars" },
      { label: "Sell Your Car", href: "/sell-your-car" },
      { label: "Procurement", href: "/sell-your-car" },
      { label: "About Us", href: "/sell-your-car" },
    ],
  },
  {
    section: "Support",
    links: [
      { label: "Help Center", href: "" },
      { label: "Contact Us", href: "https://wa.me/2347025640075" },
      { label: "FAQ", href: "sell-a-car" },
      { label: "Term of Service", href: "/terms-of-service" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Warranty", href: "" },
    ],
  },
  {
    section: "Contact Info",
    links: [
      { label: "+234 702 564 0075", href: "tel:+2347025640075" },
      { label: "Info@autobuyafrica.ai", href: "mailto:Info@autobuyafrica.ai" },
      { label: "1A, Hughes Avenue, Yaba, Lagos.", href: "#" },
    ],
    socials: [
      {
        label: "Facebook",
        icon: <Facebook />,
        href: "https://www.facebook.com/autobuyafrica",
      },
      {
        label: "X",
        icon: (
          <Icon icon="hugeicons:new-twitter" width="1.2em" height="1.2em" />
        ),
        href: "https://x.com/AutobuyAfrica",
      },
      {
        label: "Instagram",
        icon: <Instagram />,
        href: "https://www.instagram.com/autobuyafrica/",
      },
      {
        label: "LinkedIn",
        icon: <Linkedin />,
        href: "https://www.linkedin.com/company/autobuyafrica/",
      },
    ],
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(footerRef);
  const [bubblePos, setBubblePos] = useState({ x: 2, y: 0.5 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = footerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setBubblePos({ x, y });
  }

  return (
    <motion.section
      ref={footerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      style={{
        background: "linear-gradient(180deg, #064199 -30.59%, #080808 100%)",
      }}
      className="py-10"
    >
      <header className="grid lg:grid-cols-2 pt-5 px-6 spacing gap-4 container">
        <aside className="text-white space-y-5">
          <h1 className="font-medium text-3xl">
            Get our latest advice, news and offers
          </h1>
          <p className="font-medium text-base">
            Get the latest car deals, insights, and AutoBuy updates - straight
            to your inbox.
          </p>
        </aside>
        <aside>
          <form
            action=""
            className="lg:flex items-center bg-white rounded-[16px] p-2 w-full md:w-auto space-y-4 lg:space-y-0 "
          >
            <div className="flex items-center flex-1 px-4 border border-[#C9C9C9] p-3 rounded-[12px] lg:mr-4 gap-3 ">
              <Icon
                icon="mage:email"
                width="1.2em"
                height="1.2em"
                className="size-5 text-autobuy-neutral-2"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="flex-1 outline-none text-gray-700 placeholder-gray-400 bg-transparent"
              />
            </div>
            <ActionButton
              type="submit"
              className="bg-autobuy-primary2.5 hover:bg-blue-700 text-white font-medium px-10 py-3 rounded-[12px] transition-colors duration-200 w-full lg:w-fit"
              style={{
                boxShadow:
                  "1px 1px 8px 0px #061F4526 inset, -1px -1px 8px 0px #061F4526 inset, 0px 1px 6px 0px #00000014",
              }}
              isLoading={!false}
            >
              Subscribe
            </ActionButton>
          </form>
        </aside>
      </header>

      <motion.footer
        ref={footerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className=" text-white container py-16 px-6 spacing relative overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 0.3,
            x: `${bubblePos.x * 100}%`,
            y: `${bubblePos.y * 100}%`,
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute pointer-events-none"
          style={{
            left: "50%",
            top: 0,
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 40% 40%, #3b82f6 60%, #9333ea 100%)",
            filter: "blur(40px)",
            zIndex: 0,
            transform: `translate(-50%, -50%) translate(${
              bubblePos.x * 100
            }vw, ${bubblePos.y * 100}vh)`,
          }}
        />
        <div className="relative z-10">
          <header className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
            <aside className=" lg:col-span-1 md:col-span-2 col-span-2 ">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 mb-4"
              >
                <Image
                  src={"/logo/logo.svg"}
                  width={150}
                  height={50}
                  alt="logo"
                  className="object-contain"
                />
              </motion.div>
              <p className="text-sm text-[#FAFAFA] leading-relaxed">
                We help Nigerians buy and sell verified cars with ease. From
                inspections to secure payments, AutoBuy ensures a safe,
                transparent, and stress-free experience for every user.
              </p>
            </aside>

            <main className="col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {footerLinks.map((section, index) => (
                <div key={index} className=" ">
                  <h4 className="font-semibold mb-4">{section.section}</h4>
                  <ul className="space-y-2 text-sm">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <motion.div
                          whileHover={{ x: 8 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                        >
                          <Link
                            href={link.href}
                            className=" text-[#FAFAFA] hover:text-white transition-colors duration-200"
                          >
                            {link.label}
                          </Link>
                        </motion.div>
                      </li>
                    ))}
                  </ul>

                  {section.section === "Contact Info" && section.socials && (
                    <div className="flex gap-4 mt-6">
                      {section.socials.map((social) => (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full w-[2.2rem] aspect-square border p-1 flex items-center justify-center"
                          whileHover={{ scale: 1.15 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </main>

            <aside className="col-span-1 md:col-span-1 ">
              <h4 className="font-semibold mb-4">Accepted Payment Methods</h4>
              <figure className="grid grid-cols-4 gap-5 ">
                <Image
                  src={"/icons/visa.svg"}
                  width={300}
                  height={30}
                  className="w-full h-full"
                  alt={"payment"}
                />
                <Image
                  src={"/icons/master.svg"}
                  width={300}
                  height={30}
                  className="w-full h-full"
                  alt={"payment"}
                />
                <Image
                  src={"/icons/verve.svg"}
                  width={300}
                  height={30}
                  className="w-full h-full"
                  alt={"payment"}
                />
              </figure>
            </aside>
          </header>
        </div>
      </motion.footer>
    </motion.section>
  );
}
