import { motion } from 'motion/react';
import { Building, ArrowRight, Mail, Lock, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandlordLogin() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-surface px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-surface-container-lowest p-10 rounded-[2.5rem] shadow-2xl border border-outline-variant/10"
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-tertiary-container text-on-tertiary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Building className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">Landlord Portal</h1>
          <p className="text-secondary text-sm">Manage your properties and verified tenant applications.</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-secondary ml-1">Business Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-outline" />
              <input 
                type="email" 
                placeholder="management@residence.com"
                className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-tertiary/40 outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-xs font-bold uppercase tracking-widest text-secondary">Password</label>
              <button className="text-[10px] font-bold text-tertiary uppercase tracking-widest hover:underline">Forgot?</button>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-outline" />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-tertiary/40 outline-none transition-all"
              />
            </div>
          </div>

          <button className="w-full bg-tertiary text-on-tertiary py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-tertiary-container transition-all active:scale-[0.98]">
            Portal Login
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="mt-10 p-6 bg-surface-container-low rounded-2xl border border-outline-variant/20">
          <div className="flex items-center gap-3 mb-2">
            <Briefcase className="w-5 h-5 text-tertiary" />
            <h4 className="font-bold text-sm">New Landlord?</h4>
          </div>
          <p className="text-xs text-secondary leading-relaxed mb-4">
            Join our exclusive network of verified property owners and reach high-intent, pre-screened tenants.
          </p>
          <button className="text-xs font-bold text-tertiary uppercase tracking-widest hover:underline">
            Request Partnership Access
          </button>
        </div>

        <p className="mt-8 text-center text-sm text-secondary">
          Are you a tenant? <Link to="/login/tenant" className="text-primary font-bold hover:underline">Tenant Login</Link>
        </p>
      </motion.div>
    </div>
  );
}
