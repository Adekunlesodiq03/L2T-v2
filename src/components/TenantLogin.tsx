import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, Mail, Lock, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TenantLogin() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-surface px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-surface-container-lowest p-10 rounded-[2.5rem] shadow-2xl border border-outline-variant/10"
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-primary-container text-on-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">Tenant Login</h1>
          <p className="text-secondary text-sm">Access your Rental Pass and active applications.</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-secondary ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-outline" />
              <input 
                type="email" 
                placeholder="alexander@example.com"
                className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary/40 outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-xs font-bold uppercase tracking-widest text-secondary">Password</label>
              <button className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline">Forgot?</button>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-outline" />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary/40 outline-none transition-all"
              />
            </div>
          </div>

          <button className="w-full bg-primary text-on-primary py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary-container transition-all active:scale-[0.98]">
            Sign In
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="mt-8 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-outline-variant/30"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold">
            <span className="bg-surface-container-lowest px-4 text-secondary">Or continue with</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 py-3 border border-outline-variant rounded-2xl hover:bg-surface-container-low transition-all">
            <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
            <span className="text-sm font-bold">Google</span>
          </button>
          <button className="flex items-center justify-center gap-2 py-3 border border-outline-variant rounded-2xl hover:bg-surface-container-low transition-all">
            <Github className="w-4 h-4" />
            <span className="text-sm font-bold">GitHub</span>
          </button>
        </div>

        <p className="mt-10 text-center text-sm text-secondary">
          Don't have a Rental Pass? <Link to="#" className="text-primary font-bold hover:underline">Apply for verification</Link>
        </p>
      </motion.div>
    </div>
  );
}
