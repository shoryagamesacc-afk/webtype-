import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import FloatingAIChat from "@/components/ui/FloatingAIChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web Type — Professional Websites & Digital Solutions",
  description: "Web Type designs, develops and delivers professional websites and digital solutions built around your business.",
  openGraph: {
    title: "Web Type — Professional Websites & Digital Solutions",
    description: "Web Type designs, develops and delivers professional websites and digital solutions built around your business.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-black text-white relative`}
      >
        <CustomCursor />
        <Navbar />
        <main className="flex-grow pt-24">{children}</main>
        <Footer />
        <FloatingAIChat />
      </body>
    </html>
  );
}
