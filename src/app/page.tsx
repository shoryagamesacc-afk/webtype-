"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search, Globe, UserCheck, ArrowRightCircle } from "lucide-react";
import Hero3D from "@/components/3d/Hero3D";
import Testimonials from "@/components/sections/Testimonials";

// Reusable Section wrapper
const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-32 relative z-10 ${className}`}>
    {children}
  </section>
);

export default function Home() {
  return (
    <div className="relative bg-black">
      {/* 01 NAVBAR is globally in layout.tsx */}
      
      {/* 02 & 03 HERO & 3D DIGITAL BUSINESS EXPERIENCE */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20">
        <Hero3D />
        
        <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse-glow" />
            <span className="text-xs font-bold tracking-widest text-purple-300">WEB TYPE — DIGITAL SOLUTIONS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-6"
          >
            YOUR BUSINESS.<br />
            DESERVES A<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 text-glow">
              PROFESSIONAL WEBSITE.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-4 max-w-2xl"
          >
            Turn your business online into a 24/7 customer experience.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm tracking-widest text-gray-500 font-mono mb-10"
          >
            Professional • Business-focused • Custom functionality
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link
              href="/pricing"
              className="group relative px-8 py-4 bg-white text-black font-bold tracking-wide rounded-full overflow-hidden hover:scale-105 transition-transform"
            >
              <div className="absolute inset-0 bg-purple-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10 group-hover:text-white transition-colors flex items-center gap-2">
                BUILD MY WEBSITE <ArrowRight size={18} />
              </span>
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 text-white font-bold tracking-wide border border-white/20 rounded-full hover:bg-white/5 transition-colors"
            >
              EXPLORE SERVICES
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 04 WHY YOUR BUSINESS NEEDS A WEBSITE */}
      <Section className="bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              WHY DOES YOUR BUSINESS<br />
              <span className="text-purple-500 text-glow">NEED A WEBSITE?</span>
            </h2>
            <p className="text-xl text-gray-400">
              Your website becomes your always-available digital storefront.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-white/10 -translate-y-1/2 z-0" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Customer searches", icon: <Search size={24} /> },
                { step: "02", title: "Finds your website", icon: <Globe size={24} /> },
                { step: "03", title: "Learns about you", icon: <UserCheck size={24} /> },
                { step: "04", title: "Contacts • Books • Buys", icon: <ArrowRight size={24} /> },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-purple p-8 rounded-2xl flex flex-col items-center text-center relative group hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="absolute -top-4 -right-4 text-6xl font-black text-white/5 pointer-events-none transition-all group-hover:text-purple-500/10">
                    {item.step}
                  </div>
                  <div className="w-16 h-16 rounded-full bg-purple-600/20 border border-purple-500/50 flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg text-white">{item.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 05 WHAT YOUR WEBSITE CAN DO */}
      <Section className="bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight">
              ONE DIGITAL HOME.<br />
              <span className="text-gray-500">EVERYTHING YOUR CUSTOMER NEEDS.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Business Information", "Services & Products", "Contact & WhatsApp", "Maps & Location",
              "Reservations", "Appointment Booking", "Payments", "Customer Inquiries",
              "Gallery & Reviews", "Promotions", "Mobile Experience", "Custom Features"
            ].map((title, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.1 }}
                className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-purple-500/50 hover:bg-white/5 transition-all group cursor-default"
              >
                <div className="w-2 h-2 rounded-full bg-purple-500 group-hover:scale-150 transition-transform" />
                <h3 className="font-semibold text-gray-200 group-hover:text-white transition-colors">{title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 06 WHY CHOOSE WEB TYPE */}
      <Section className="bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              WE BUILD AROUND YOUR BUSINESS.<br />
              <span className="text-purple-500 text-glow">NOT JUST A TEMPLATE.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "BUSINESS-FIRST", desc: "We start with your goals, customers and services." },
              { title: "MOBILE-READY", desc: "A professional experience across phones, tablets and computers." },
              { title: "CUSTOM FUNCTIONALITY", desc: "Booking, payments, forms and other needs can be planned in." },
              { title: "GUIDANCE & SUPPORT", desc: "We help you understand what is being built and why." },
              { title: "DOMAIN ASSISTANCE", desc: "Help with your online address and related services." },
              { title: "FUTURE-READY", desc: "Your website can grow as your business grows." },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 border-l-2 border-purple-500/30 hover:border-purple-500 hover:bg-white/[0.02] transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 07 SERVICES */}
      <Section className="bg-black text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold mb-6">OUR <span className="text-purple-500">SERVICES</span></h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">From stunning website designs to full automation integrations.</p>
          <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 glass-purple rounded-full font-bold text-white hover:bg-purple-600 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            EXPLORE ALL SERVICES <ArrowRight size={18} />
          </Link>
        </div>
      </Section>

      {/* 08 AI RECEPTIONIST */}
      <Section className="bg-[#050505] relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            YOUR BUSINESS.<br/>
            <span className="text-purple-500">ALWAYS READY TO RESPOND.</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 text-center max-w-2xl">
            Our AI Receptionist answers questions, shares service info, and captures leads outside normal hours.
          </p>
          <div className="glass p-8 rounded-3xl w-full max-w-md">
            <div className="flex gap-4 items-end mb-6">
              <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white shrink-0 shadow-[0_0_15px_rgba(139,92,246,0.6)]">
                AI
              </div>
              <div className="bg-white/10 px-4 py-3 rounded-2xl rounded-bl-none text-white text-sm">
                How can I help your customers today?
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-purple-300 cursor-default">Services</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-purple-300 cursor-default">Hours</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-purple-300 cursor-default">Reservations</span>
            </div>
          </div>
        </div>
      </Section>

      {/* 09 BOOKING + PAYMENT FLOW */}
      <Section className="bg-black">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold mb-16">INTEGRATED <span className="text-purple-500">BOOKING & PAYMENTS</span></h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-5xl mx-auto mb-16">
            {["Customer", "Website", "Select Service", "Reservation", "Payment", "Confirmation"].map((step, idx, arr) => (
              <div key={idx} className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <div className="glass-purple px-6 py-3 rounded-full text-sm font-bold text-white whitespace-nowrap">
                  {step}
                </div>
                {idx !== arr.length - 1 && (
                  <ArrowRightCircle className="text-purple-500 hidden md:block" size={24} />
                )}
                {idx !== arr.length - 1 && (
                  <ArrowRightCircle className="text-purple-500 md:hidden rotate-90" size={24} />
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-gray-500 uppercase tracking-widest">
            <span>Restaurants</span> • <span>Salons</span> • <span>Clinics</span> • <span>Hotels</span> • <span>Gyms</span> • <span>Consultants</span>
          </div>
        </div>
      </Section>

      {/* 10 PRICING */}
      <Section className="bg-[#050505] text-center border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold mb-6">TRANSPARENT <span className="text-purple-500">PRICING</span></h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">Plans designed for local businesses ready to grow.</p>
          <Link href="/pricing" className="inline-flex items-center gap-2 px-8 py-4 glass-purple rounded-full font-bold text-white hover:bg-purple-600 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            VIEW PRICING PLANS <ArrowRight size={18} />
          </Link>
        </div>
      </Section>

      {/* 11 & 12 5-STAR REVIEWS & CTA */}
      <Testimonials />

      {/* 13 CONTACT */}
      <Section className="bg-black text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold mb-6">HAVE QUESTIONS?</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">We're here to help you understand how a professional digital presence can grow your business.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full font-bold text-white hover:border-purple-500 transition-all">
            CONTACT US <ArrowRight size={18} />
          </Link>
        </div>
      </Section>

      {/* 14 FOOTER is globally in layout.tsx */}
    </div>
  );
}
