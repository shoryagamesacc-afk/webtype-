import Link from "next/link";
import { MessageCircle as Twitter, Camera as Instagram, Briefcase as Linkedin, Mail, MessageSquare } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE, WHATSAPP_LINK } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-black py-20 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/10 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-widest text-white">
                WEB<span className="text-purple-500">TYPE</span>
              </span>
            </Link>
            <p className="text-sm font-bold tracking-widest text-gray-400 mb-6 uppercase">
              DESIGN • DEVELOP • DELIVER
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all border border-white/10">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all border border-white/10">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all border border-white/10">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">SERVICES</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/services" className="hover:text-purple-400 transition-colors">Website Design</Link></li>
              <li><Link href="/services" className="hover:text-purple-400 transition-colors">Business Dashboard</Link></li>
              <li><Link href="/services" className="hover:text-purple-400 transition-colors">AI Receptionist</Link></li>
              <li><Link href="/services" className="hover:text-purple-400 transition-colors">Payment Integration</Link></li>
              <li><Link href="/services" className="hover:text-purple-400 transition-colors">Booking Systems</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">COMPANY</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/about" className="hover:text-purple-400 transition-colors">About Us</Link></li>
              <li><Link href="/pricing" className="hover:text-purple-400 transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-purple-400 transition-colors">Contact</Link></li>
              <li><Link href="/tools" className="hover:text-purple-400 transition-colors">AI Tools</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">CONTACT</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-purple-400 transition-colors inline-flex items-center gap-2">
                  <Mail size={16} /> {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors inline-flex items-center gap-2">
                  <MessageSquare size={16} /> {CONTACT_PHONE}
                </a>
              </li>
              <li className="pt-4 flex flex-col gap-3">
                <a 
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="px-6 py-2.5 bg-white/5 border border-white/10 text-white text-xs font-bold tracking-widest rounded-full hover:bg-white/10 text-center transition-colors"
                >
                  EMAIL US
                </a>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-purple-600 text-white text-xs font-bold tracking-widest rounded-full hover:bg-purple-500 text-center transition-colors"
                >
                  WHATSAPP US
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Web Type. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
