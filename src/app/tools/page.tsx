"use client";

import { motion } from "framer-motion";
import { Bot, MessageSquare, LineChart, FileText, Settings, Zap, ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const tools = [
  { id: 1, name: "Web Type Receptionist", category: "Chatbots", desc: "24/7 AI agent that answers business questions and directs leads.", icon: <MessageSquare size={24} /> },
  { id: 2, name: "AutoBook AI", category: "Automation", desc: "Automated scheduling system that reads emails and syncs calendar.", icon: <Zap size={24} /> },
  { id: 3, name: "Insights Pro", category: "Data", desc: "Turn raw website traffic into actionable business strategies.", icon: <LineChart size={24} /> },
  { id: 4, name: "ContentGen", category: "Content", desc: "Generate SEO-optimized blog posts based on your business niche.", icon: <FileText size={24} /> },
  { id: 5, name: "Ops Manager", category: "Business", desc: "Centralized AI hub for managing digital workflows and approvals.", icon: <Settings size={24} /> },
  { id: 6, name: "Sales Agent", category: "AI Agents", desc: "Proactive website agent that engages visitors to increase conversions.", icon: <Bot size={24} /> },
];

const categories = ["All", "Automation", "Chatbots", "Content", "Business", "Data", "AI Agents"];

export default function ToolsPage() {
  const [activeCat, setActiveCat] = useState("All");
  const [search, setSearch] = useState("");

  const filteredTools = tools.filter(tool => 
    (activeCat === "All" || tool.category === activeCat) &&
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            AI TOOLS <span className="text-purple-500 text-glow">MARKETPLACE</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Supercharge your business with integrated AI solutions.
          </motion.p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCat === cat 
                    ? "bg-purple-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]" 
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-auto min-w-[300px]">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search tools..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, idx) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="glass p-6 rounded-2xl flex flex-col group hover:border-purple-500/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  {tool.icon}
                </div>
                <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                  {tool.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{tool.name}</h3>
              <p className="text-sm text-gray-400 mb-8 flex-grow">{tool.desc}</p>
              
              <Link 
                href="/contact"
                className="w-full py-3 rounded-xl bg-white/5 text-white text-sm font-bold tracking-widest text-center hover:bg-purple-600 transition-colors group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
              >
                OPEN TOOL
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
