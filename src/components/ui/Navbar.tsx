"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "AI Tools", href: "/tools" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "py-4 bg-black/60 backdrop-blur-xl border-b border-white/5" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Link href="/" className="relative z-50 group">
            <span className="text-2xl font-bold tracking-widest text-white group-hover:text-purple-400 transition-colors">
              WEB<span className="text-purple-500 text-glow">TYPE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-bold tracking-wider transition-colors ${ 
                  pathname === link.href ? "text-purple-400" : "text-white hover:text-purple-400" 
                }`} 
              > 
                {link.name} 
              </Link> 
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link 
              href="/contact" 
              className="group flex items-center gap-2 px-6 py-2.5 bg-white text-black text-xs font-bold tracking-widest rounded-full hover:bg-purple-500 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
            >
              LET'S TALK <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden relative z-50 text-white p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-bold tracking-widest hover:text-purple-400 transition-colors ${
                    pathname === link.href ? "text-purple-500" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-8 flex flex-col items-center gap-4">
                <Link 
                  href="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-8 py-4 bg-purple-600 text-white text-sm font-bold tracking-widest rounded-full"
                >
                  LET'S TALK →
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
