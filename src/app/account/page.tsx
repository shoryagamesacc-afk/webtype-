"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { GOOGLE_FORM_URL, getPlanById } from "@/lib/data";

// Mocking Customer Data for simplified account flow
const customerData = {
  name: "John Doe",
  selectedPlanId: "growth",
};

export default function AccountPage() {
  const plan = getPlanById(customerData.selectedPlanId);

  return (
    <div className="pt-32 pb-20 min-h-screen relative z-10 flex flex-col items-center justify-center px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black -z-10" />
      
      <div className="w-full max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Welcome, {customerData.name.split(' ')[0]}</h1>
          <p className="text-gray-400">Manage your Web Type digital presence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* MY SELECTED PLAN */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass p-8 rounded-3xl border border-white/10 flex flex-col items-start"
          >
            <h2 className="text-xs font-bold tracking-widest text-gray-500 mb-6 uppercase">MY SELECTED PLAN</h2>
            
            <div className="mb-4">
              <p className="text-sm text-gray-400 mb-1">Plan:</p>
              <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
            </div>
            
            <div className="mb-8">
              <p className="text-sm text-gray-400 mb-1">Price:</p>
              <p className="text-xl text-purple-400 font-bold">{plan.price}</p>
            </div>
            
            <div className="mt-auto w-full">
              <p className="text-sm text-gray-400 mb-2">Status:</p>
              <div className="px-4 py-2 bg-green-500/10 text-green-400 border border-green-500/20 rounded-xl text-sm font-bold flex items-center justify-center gap-2">
                <CheckCircle2 size={16} /> CONFIRMED
              </div>
            </div>
          </motion.div>

          {/* NEXT STEP */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-purple p-8 rounded-3xl border border-purple-500/30 bg-purple-900/10 flex flex-col relative overflow-hidden text-center justify-center"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-[50px] pointer-events-none" />
            <h2 className="text-xs font-bold tracking-widest text-purple-400 mb-4 uppercase">NEXT STEP</h2>
            <h3 className="text-xl font-bold text-white mb-4 leading-relaxed">
              Complete your website requirements form.
            </h3>
            
            <a 
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full flex items-center justify-center gap-2 py-4 bg-purple-600 text-white text-sm font-bold tracking-widest rounded-xl hover:bg-purple-500 transition-colors shadow-[0_0_15px_rgba(139,92,246,0.3)]"
            >
              OPEN REQUIREMENTS FORM <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>
        
        <div className="text-center">
          <Link href="/pricing" className="text-sm text-gray-500 hover:text-white transition-colors font-medium">
            Change Plan
          </Link>
        </div>
      </div>
    </div>
  );
}
