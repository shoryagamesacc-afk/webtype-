"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Link from "next/link";

const testimonials = [
  { 
    id: 1,
    rating: 5, 
    review: "Web Type made the entire process simple. The website feels professional, fast and exactly suited to our business.", 
    name: "Aarav Mehta", 
    business: "Business Owner", 
    gradient: "from-blue-600 to-purple-600",
    initial: "A",
    isDemo: true
  },
  { 
    id: 2,
    rating: 5, 
    review: "The design is clean, modern and our customers can finally find everything they need in one place.", 
    name: "Riya Sharma", 
    business: "Founder", 
    gradient: "from-pink-500 to-rose-500",
    initial: "R",
    isDemo: true
  },
  { 
    id: 3,
    rating: 5, 
    review: "We wanted something more professional than a basic website, and Web Type delivered a much more polished digital experience.", 
    name: "Kabir Malhotra", 
    business: "Business Owner", 
    gradient: "from-emerald-500 to-teal-500",
    initial: "K",
    isDemo: true
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto-slide
  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered]);

  const getVisibleCards = () => {
    if (isMobile) {
      return [
        testimonials[currentIndex]
      ];
    }
    
    // Desktop: Show 3 cards (previous, current, next)
    const prev = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    const next = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    return [
      { ...testimonials[prev], position: "prev" },
      { ...testimonials[currentIndex], position: "current" },
      { ...testimonials[next], position: "next" },
    ];
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            WHAT OUR <span className="text-purple-500 text-glow">CLIENTS SAY</span>
          </h2>
          <p className="text-xl text-gray-400">
            Professional websites. Better digital experiences.
          </p>
        </div>

        <div 
          className="relative max-w-6xl mx-auto h-[400px] flex items-center justify-center mb-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="popLayout">
            {getVisibleCards().map((card: any) => {
              const isCenter = isMobile || card.position === "current";
              
              return (
                <motion.div
                  key={`${card.id}-${card.position || 'mobile'}`}
                  initial={{ opacity: 0, scale: 0.8, x: card.position === "prev" ? -100 : card.position === "next" ? 100 : 0 }}
                  animate={{ 
                    opacity: isCenter ? 1 : 0.4, 
                    scale: isCenter ? 1 : 0.85,
                    x: isMobile ? 0 : card.position === "prev" ? "-105%" : card.position === "next" ? "105%" : "0%",
                    zIndex: isCenter ? 10 : 0,
                    filter: isCenter ? "blur(0px)" : "blur(4px)"
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, type: "spring", bounce: 0.1 }}
                  drag={isMobile ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  whileHover={isCenter && !isMobile ? { y: -5 } : {}}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      nextSlide();
                    } else if (swipe > swipeConfidenceThreshold) {
                      prevSlide();
                    }
                  }}
                  className={`absolute w-full max-w-lg glass-purple rounded-3xl p-8 md:p-10 text-left border border-white/10 ${isCenter ? 'shadow-[0_0_40px_rgba(139,92,246,0.15)]' : ''}`}
                >
                  {card.isDemo && (
                    <div className="absolute top-4 right-4 px-2 py-0.5 rounded text-[10px] font-bold tracking-widest text-white/20 uppercase border border-white/10 select-none">
                      DEMO DATA
                    </div>
                  )}

                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="fill-[#D4AF37] text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                    ))}
                  </div>
                  
                  <p className="text-lg md:text-xl text-white font-medium mb-12 leading-relaxed italic">
                    "{card.review}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white font-bold text-lg border border-white/20 shrink-0 shadow-inner`}>
                      {card.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{card.name}</h4>
                      <p className="text-xs text-gray-400">{card.business}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 lg:-left-4 z-20 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-purple-600 hover:border-purple-500 transition-all focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 lg:-right-4 z-20 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-purple-600 hover:border-purple-500 transition-all focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mb-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === i ? "bg-purple-500 w-8" : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-2">READY TO BUILD YOUR BUSINESS ONLINE?</h3>
          <p className="text-gray-400 text-lg mb-8">Tell us what you need. We'll build the website around your business.</p>
          <Link 
            href="/pricing"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full text-sm font-bold tracking-widest bg-white text-black hover:bg-purple-500 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]"
          >
            START YOUR PROJECT →
          </Link>
        </div>
      </div>
    </section>
  );
}

// Swipe detection helpers
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
