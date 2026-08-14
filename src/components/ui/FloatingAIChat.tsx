"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

export default function FloatingAIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "ai"; content: string }[]>([
    { role: "ai", content: "Hi! I'm the Web Type AI assistant. How can I help you today? Ask me about our services, pricing, or features!" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = input.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");

    // Simulate AI response based on Web Type knowledge
    setTimeout(() => {
      let aiResponse = "I can definitely help with that. Could you provide a few more details so I can give you the best answer?";
      const lower = userMessage.toLowerCase();
      
      if (lower.includes("price") || lower.includes("cost") || lower.includes("packages")) {
        aiResponse = "We offer four main plans: Base Plan (₹20,000) to get online quickly, Standard Plan (₹30,000) for added protection and promotion, Master Plan ⭐ (₹40,000) which is our most popular option with full functionality, and Custom Plans starting from ₹20,000. Which one sounds like a fit for you?";
      } else if (lower.includes("service") || lower.includes("what do you do")) {
        aiResponse = "We offer Website Design, Website Development, Responsive Design, Business Features (like booking and payments), and AI Receptionists. We build everything around your specific business needs!";
      } else if (lower.includes("ai receptionist")) {
        aiResponse = "Our AI Receptionist feature acts like me! It can answer common questions, share service information, and help guide your customers toward making a reservation, 24/7.";
      } else if (lower.includes("contact") || lower.includes("talk") || lower.includes("reach") || lower.includes("email") || lower.includes("whatsapp")) {
        aiResponse = "Great! You can reach us at Email: webtype28@gmail.com or WhatsApp: +91 95883 34026. You can also click 'Let's Talk' in the navigation.";
      }

      setMessages((prev) => [...prev, { role: "ai", content: aiResponse }]);
    }, 1000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.6)] hover:scale-110 transition-transform ${isOpen ? "hidden" : ""}`}
        aria-label="Open AI Assistant"
      >
        <MessageCircle size={28} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] flex flex-col rounded-2xl glass-purple overflow-hidden"
          >
            {/* Header */}
            <div className="bg-black/60 p-4 border-b border-purple-500/30 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center shadow-[0_0_10px_rgba(139,92,246,0.8)]">
                  <MessageCircle size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Web Type AI</h3>
                  <p className="text-xs text-purple-400">Always online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-black/40">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                      msg.role === "user"
                        ? "bg-purple-600 text-white rounded-tr-sm"
                        : "bg-white/10 text-gray-200 border border-white/10 rounded-tl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-black/60 border-t border-purple-500/30">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="relative flex items-center"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about our services..."
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white hover:bg-purple-500 transition-colors"
                  disabled={!input.trim()}
                >
                  <Send size={14} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
