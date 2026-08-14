"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import Link from "next/link";
import { CONTACT_EMAIL, CONTACT_PHONE, WHATSAPP_LINK } from "@/lib/data";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/10 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            LET'S <span className="text-purple-500 text-glow">TALK</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Ready to build a professional digital presence? Reach out to us.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-600/20 text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/30">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-widest text-gray-500 mb-2">EMAIL</h3>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-xl text-white hover:text-purple-400 transition-colors">{CONTACT_EMAIL}</a>
                  <div className="mt-4">
                    <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 text-white text-xs font-bold tracking-widest rounded-full hover:bg-white/10 transition-colors">
                      EMAIL US →
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-600/20 text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/30">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-widest text-gray-500 mb-2">WHATSAPP</h3>
                  <p className="text-xl text-white mb-4">{CONTACT_PHONE}</p>
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2 bg-purple-600 text-white text-xs font-bold tracking-widest rounded-full hover:bg-purple-500 transition-colors shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                  >
                    CHAT ON WHATSAPP →
                  </a>
                </div>
              </div>
            </div>
            
            <div className="glass-purple p-8 rounded-3xl mt-8">
              <h3 className="text-white font-bold mb-2">Not sure where to start?</h3>
              <p className="text-gray-400 text-sm mb-6">Explore our pricing plans and find what fits your business best.</p>
              <Link href="/pricing" className="text-purple-400 font-bold text-sm hover:text-purple-300 flex items-center gap-2">
                VIEW PRICING <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="glass p-10 rounded-3xl border border-white/10 h-full">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold tracking-widest text-gray-500">FIRST NAME</label>
                        <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold tracking-widest text-gray-500">LAST NAME</label>
                        <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-widest text-gray-500">EMAIL</label>
                      <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-widest text-gray-500">MESSAGE</label>
                      <textarea required rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"></textarea>
                    </div>
                    
                    <button type="submit" className="w-full py-4 bg-white text-black font-bold tracking-widest rounded-xl hover:bg-purple-500 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] mt-4">
                      SEND MESSAGE
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                  >
                    <div className="w-20 h-20 bg-purple-600/20 text-purple-400 rounded-full flex items-center justify-center border border-purple-500/30">
                      <Mail size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-white">THANK YOU</h2>
                    <p className="text-gray-400 text-lg">We've received your request. We'll get back to you soon.</p>
                    
                    <div className="pt-8 border-t border-white/10 w-full">
                      <p className="text-sm font-bold tracking-widest text-gray-500 mb-4 uppercase">Need a faster response?</p>
                      <a 
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 text-white text-sm font-bold tracking-widest rounded-full hover:bg-purple-500 transition-colors shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                      >
                        CHAT ON WHATSAPP →
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
