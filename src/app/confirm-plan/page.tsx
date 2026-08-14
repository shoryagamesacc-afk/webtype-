"use client";

import { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ExternalLink, Check, ArrowRight } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { getPlanById, GOOGLE_FORM_URL } from "@/lib/data";

function ConfirmContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const planId = searchParams.get("plan") || "base";
  const plan = getPlanById(planId);
  
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (!isConfirmed) {
    const isNotSure = plan.id === "not-sure";

    return (
      <motion.div
        key="confirm-step"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="glass-purple p-8 md:p-12 rounded-3xl border border-purple-500/30 max-w-2xl mx-auto w-full"
      >
        <div className="text-center mb-8">
          <h2 className="text-sm font-bold tracking-widest text-gray-400 mb-2">
            {isNotSure ? "LET'S FIND THE RIGHT PLAN" : "YOUR SELECTED PLAN"}
          </h2>
          
          {!isNotSure && (
            <>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{plan.name}</h1>
              <p className="text-3xl text-purple-400 font-black mb-4">{plan.price}</p>
              {plan.highlight && (
                <div className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-widest">
                  MOST POPULAR
                </div>
              )}
            </>
          )}

          {isNotSure && (
            <p className="text-lg text-gray-300 mt-4">
              Tell us about your business and requirements, and we'll help you choose the most suitable option.
            </p>
          )}
        </div>

        {!isNotSure && (
          <div className="bg-black/40 rounded-2xl p-6 mb-8 border border-white/5">
            <h3 className="font-bold text-white mb-4">Plan Features:</h3>
            <ul className="space-y-3">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check size={16} className="text-purple-400 mt-0.5 shrink-0" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => setIsConfirmed(true)}
            className="flex-1 py-4 bg-purple-600 text-white font-bold tracking-widest text-sm rounded-xl hover:bg-purple-500 transition-colors shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] flex items-center justify-center gap-2"
          >
            {isNotSure ? "CONTINUE TO REQUIREMENTS FORM" : `CONFIRM ${plan.name === "CUSTOM PLAN" ? "CUSTOM PLAN" : "PLAN"}`} <ArrowRight size={18} />
          </button>
          {!isNotSure && (
            <button 
              onClick={() => router.push("/pricing")}
              className="sm:w-1/3 py-4 bg-white/5 text-gray-300 font-bold tracking-widest text-sm rounded-xl hover:bg-white/10 hover:text-white transition-colors"
            >
              CHANGE PLAN
            </button>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      key="success-step"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center max-w-3xl mx-auto w-full"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.8, bounce: 0.5 }}
        className="w-20 h-20 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(139,92,246,0.3)]"
      >
        <CheckCircle2 size={40} />
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white"
      >
        PLAN <span className="text-purple-500 text-glow">CONFIRMED ✓</span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-xl text-gray-300 mb-8"
      >
        {plan.id === "not-sure" ? "We'll help you find the right path." : `Your ${plan.name} has been selected.`}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col items-center gap-3 mb-12"
      >
        <div className="flex items-center gap-2 text-green-400 font-medium">
          <Check size={18} /> Selected plan
        </div>
        <div className="flex items-center gap-2 text-green-400 font-medium">
          <Check size={18} /> Account created
        </div>
        <div className="flex items-center gap-2 text-green-400 font-medium">
          <Check size={18} /> Next step ready
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass-purple p-8 md:p-10 rounded-3xl border border-purple-500/30 text-center"
      >
        <h3 className="text-sm tracking-widest text-purple-400 font-bold mb-4">NEXT STEP</h3>
        <p className="text-gray-300 mb-8 max-w-lg mx-auto text-lg leading-relaxed">
          Tell us about your business so we can build your website around your requirements.
        </p>
        
        <a 
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-8 py-4 bg-purple-600 text-white font-bold tracking-widest text-sm rounded-xl hover:bg-purple-500 transition-colors shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]"
        >
          COMPLETE REQUIREMENTS FORM <ExternalLink size={18} />
        </a>
      </motion.div>
    </motion.div>
  );
}

export default function ConfirmPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-20 px-6 relative z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black -z-10" />
      
      <div className="w-full">
        <Suspense fallback={<div className="text-white text-center py-20">Processing...</div>}>
          <AnimatePresence mode="wait">
            <ConfirmContent />
          </AnimatePresence>
        </Suspense>
      </div>
    </div>
  );
}
