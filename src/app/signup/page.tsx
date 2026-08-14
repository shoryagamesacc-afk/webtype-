"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Code as Github, Eye, EyeOff, CheckCircle2, AlertCircle } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, FormEvent, useState } from "react";

function SignupForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const plan = searchParams.get("plan");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user types
    if (error) setError(null);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.password || !formData.confirmPassword) {
      setError("Please enter your password in both fields.");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Please enter both passwords properly. Passwords do not match.");
      return;
    }

    // Success
    if (plan) {
      router.push(`/confirm-plan?plan=${plan}`);
    } else {
      router.push(`/pricing`);
    }
  };

  const hasStartedTypingConfirm = formData.confirmPassword.length > 0;
  const passwordsMatch = formData.password === formData.confirmPassword && formData.password.length > 0;
  const hasError = error !== null;

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-bold tracking-widest text-gray-500">FIRST NAME</label>
          <input 
            type="text" 
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" 
            placeholder="John"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold tracking-widest text-gray-500">LAST NAME</label>
          <input 
            type="text" 
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" 
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold tracking-widest text-gray-500">EMAIL</label>
        <input 
          type="email" 
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" 
          placeholder="hello@example.com"
        />
      </div>
      
      <div className="space-y-2 relative">
        <label className="text-xs font-bold tracking-widest text-gray-500">PASSWORD</label>
        <div className="relative">
          <input 
            type={showPassword ? "text" : "password"} 
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
            className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white focus:outline-none transition-colors pr-12 ${
              hasError && formData.password !== formData.confirmPassword ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-purple-500'
            }`} 
            placeholder="••••••••"
          />
          <button 
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none"
            aria-label="Toggle password visibility"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        <p className="text-[10px] text-gray-500 mt-1">Minimum 8 characters</p>
      </div>

      <div className="space-y-2 relative">
        <label className="text-xs font-bold tracking-widest text-gray-500">CONFIRM PASSWORD</label>
        <div className="relative">
          <input 
            type={showConfirmPassword ? "text" : "password"} 
            name="confirmPassword"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white focus:outline-none transition-colors pr-12 ${
              hasError && formData.password !== formData.confirmPassword ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-purple-500'
            }`} 
            placeholder="••••••••"
          />
          <button 
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none"
            aria-label="Toggle confirm password visibility"
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        
        {/* Live Match Indicator */}
        <div className="h-5 flex items-center">
          {hasStartedTypingConfirm && !hasError && (
            passwordsMatch ? (
              <span className="text-[11px] text-green-400 flex items-center gap-1 font-medium">
                <CheckCircle2 size={12} /> ✓ Passwords match
              </span>
            ) : (
              <span className="text-[11px] text-yellow-500 flex items-center gap-1 font-medium">
                Passwords do not match
              </span>
            )
          )}
        </div>
      </div>

      {/* Error Message display directly beneath Confirm Password logic block */}
      {error && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-xl flex items-start gap-3"
        >
          <AlertCircle size={18} className="shrink-0 mt-0.5" />
          <p>{error}</p>
        </motion.div>
      )}

      <button type="submit" className="w-full py-3.5 bg-white text-black font-bold tracking-widest rounded-xl hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] mt-2">
        CREATE ACCOUNT →
      </button>
    </form>
  );
}

export default function SignupPage() {
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
          <h1 className="text-2xl font-bold text-white mb-2">Create an Account</h1>
          <p className="text-gray-400 text-sm">Start building your digital presence</p>
        </div>

        <div className="glass-purple p-8 rounded-3xl">
          <Suspense fallback={<div className="text-white text-center py-10">Loading...</div>}>
            <SignupForm />
          </Suspense>

          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-[1px] bg-white/10" />
            <span className="text-xs text-gray-500 font-medium">OR CONTINUE WITH</span>
            <div className="flex-1 h-[1px] bg-white/10" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium transition-colors text-white">
              <Mail size={16} /> Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium transition-colors text-white">
              <Github size={16} /> GitHub
            </button>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Already have an account?{' '}
          <Link href="/login" className="text-white hover:text-purple-400 transition-colors font-medium">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
