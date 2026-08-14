"use client";

import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";
import Link from "next/link";
import { plans } from "@/lib/data";

export default function PricingPage() {
  // Only display the 4 main premium cards in the grid. The "not-sure" plan is handled separately below.
  const premiumPlans = plans.filter(p => p.id !== "not-sure");

  return (
    <div className="pt-32 pb-20 min-h-screen relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-900/20 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            SIMPLE, TRANSPARENT <span className="text-purple-500 text-glow">PRICING</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Invest in a professional digital presence built around your business goals.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 max-w-[1400px] mx-auto mb-16">
          {premiumPlans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative flex flex-col rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-2 ${
                plan.highlight 
                  ? "glass-purple border-purple-500 shadow-[0_0_40px_rgba(139,92,246,0.3)] transform md:-translate-y-4" 
                  : "glass border-white/10"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest shadow-[0_0_15px_rgba(139,92,246,0.8)] border border-purple-400/50">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-sm font-bold tracking-widest text-purple-400 mb-3">{plan.name}</h3>
                <div className="text-3xl xl:text-4xl font-black text-white mb-4">{plan.price}</div>
                <p className="text-sm text-gray-300 font-medium mb-4">{plan.tagline}</p>
              </div>
              
              <div className="flex-grow mb-10">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-purple-400" />
                      </div>
                      <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto">
                <Link
                  href={plan.href}
                  className={`w-full py-4 rounded-xl flex items-center justify-center text-xs font-bold tracking-widest transition-all shadow-lg ${
                    plan.highlight 
                      ? "bg-purple-600 text-white hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.6)]" 
                      : "bg-white text-black hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary "Not sure" CTA */}
        <div className="text-center pb-20 border-b border-white/10 max-w-2xl mx-auto">
          <p className="text-gray-400 mb-4">Not sure which plan fits your business best?</p>
          <Link
            href="/signup?plan=not-sure"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-white transition-all text-sm font-bold tracking-widest"
          >
            HELP ME CHOOSE →
          </Link>
        </div>
      </div>
    </div>
  );
}
