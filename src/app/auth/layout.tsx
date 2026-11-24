import type { Metadata } from "next";
import { Geist, Roboto } from "next/font/google";



const geistRoboto = Roboto({
  variable: "--font-geist-roboto",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "AutoBuy v2",
  description: "AutoMobile E-commerce application ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistRoboto.variable} antialiased `}
      >
     {children}
      </body>
    </html>
  );
}
