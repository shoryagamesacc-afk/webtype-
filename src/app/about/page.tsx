"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight"
          >
            WE DON'T JUST BUILD WEBSITES.<br />
            <span className="text-purple-500 text-glow">WE BUILD DIGITAL EXPERIENCES.</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              At Web Type, we believe that a website shouldn't just be an online brochure. It should be an active participant in your business growth.
            </p>
            <p>
              Our <strong className="text-white">business-first approach</strong> means we don't start with templates or generic designs. We start by understanding your customer needs, your operational bottlenecks, and your long-term goals.
            </p>
            <p>
              Whether it's integrating an AI receptionist to handle late-night inquiries, or building a custom reservation system to bypass third-party commissions, we build the exact digital infrastructure your business needs to scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { title: "Business Goals", desc: "Aligned with your KPIs" },
              { title: "Custom Features", desc: "No generic plugins" },
              { title: "Automation", desc: "Saving you hours daily" },
              { title: "Future Expansion", desc: "Built to scale with you" },
            ].map((item, i) => (
              <div key={i} className="glass p-6 rounded-2xl flex flex-col justify-center text-center hover:border-purple-500/50 transition-colors">
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-purple rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to upgrade your business?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Let's discuss how a professional online presence can transform your customer experience.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold tracking-widest rounded-full hover:bg-purple-500 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]">
              START A CONVERSATION <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
