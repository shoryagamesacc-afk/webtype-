"use client";

import { motion } from "framer-motion";
import { MonitorPlay, Smartphone, Code, Settings, LayoutDashboard, BrainCircuit, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "website-design",
    title: "WEBSITE DESIGN",
    description: "Stunning, modern designs built around the business.",
    icon: <MonitorPlay size={40} />,
  },
  {
    id: "website-development",
    title: "WEBSITE DEVELOPMENT",
    description: "Fast, scalable and professional websites.",
    icon: <Code size={40} />,
  },
  {
    id: "responsive-design",
    title: "RESPONSIVE DESIGN",
    description: "Perfect experience across devices.",
    icon: <Smartphone size={40} />,
  },
  {
    id: "business-features",
    title: "BUSINESS FEATURES",
    description: "Bookings, payments, forms, WhatsApp, maps and custom functionality.",
    icon: <Settings size={40} />,
  },
  {
    id: "ai-receptionist",
    title: "AI RECEPTIONIST",
    description: "AI assistance for common customer questions.",
    icon: <BrainCircuit size={40} />,
  },
  {
    id: "business-dashboard",
    title: "BUSINESS DASHBOARD",
    description: "One central place for important website activity.",
    icon: <LayoutDashboard size={40} />,
  }
];


export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            OUR <span className="text-purple-500 text-glow">SERVICES</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Premium digital solutions designed to elevate your brand and automate your operations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
              className="glass-purple p-8 rounded-2xl relative group overflow-hidden"
              style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
            >
              {/* Animated background glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-purple-600/0 via-purple-600/0 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl z-0" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-8 group-hover:scale-110 group-hover:text-purple-300 transition-transform duration-500">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">{service.title}</h3>
                <p className="text-gray-400 flex-grow mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <Link
                  href={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-purple-400 group-hover:text-white transition-colors uppercase mt-auto"
                >
                  Learn More <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
