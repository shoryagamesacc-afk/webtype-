"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code as Github, Mail } from "lucide-react";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, FormEvent } from "react";

function LoginForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const plan = searchParams.get("plan") || "base";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/confirm-plan?plan=${plan}`);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label className="text-xs font-bold tracking-widest text-gray-500">EMAIL</label>
        <input 
          type="email" 
          required
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" 
          placeholder="hello@example.com"
        />
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-xs font-bold tracking-widest text-gray-500">PASSWORD</label>
          <a href="#" className="text-xs text-purple-400 hover:text-purple-300">Forgot?</a>
        </div>
        <input 
          type="password" 
          required
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" 
          placeholder="••••••••"
        />
      </div>

      <button type="submit" className="w-full py-3.5 bg-purple-600 text-white font-bold tracking-widest rounded-xl hover:bg-purple-500 transition-colors shadow-[0_0_20px_rgba(139,92,246,0.3)]">
        SIGN IN
      </button>
    </form>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-6 relative z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md my-10"
      >
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <span className="text-3xl font-bold tracking-widest text-white">
              WEB<span className="text-purple-500">TYPE</span>
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-gray-400 text-sm">Sign in to your account</p>
        </div>

        <div className="glass-purple p-8 rounded-3xl">
          <Suspense fallback={<div className="text-white text-center py-10">Loading...</div>}>
            <LoginForm />
          </Suspense>

          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-[1px] bg-white/10" />
            <span className="text-xs text-gray-500 font-medium">OR CONTINUE WITH</span>
            <div className="flex-1 h-[1px] bg-white/10" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium transition-colors">
              <Mail size={16} /> Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium transition-colors">
              <Github size={16} /> GitHub
            </button>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Don't have an account?{' '}
          <Link href="/signup" className="text-white hover:text-purple-400 transition-colors font-medium">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
