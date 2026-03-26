import { Link, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Search', path: '/search' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <Link to="/" className="font-headline text-xl font-bold tracking-tight text-slate-900">
          Landlord2Tenant
        </Link>
        
        <div className="hidden md:flex items-center gap-8 font-headline text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "transition-colors hover:text-primary",
                location.pathname === link.path 
                  ? "text-primary font-bold border-b-2 border-primary pb-1" 
                  : "text-slate-600"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full text-sm focus:ring-2 focus:ring-primary/40 w-64 transition-all outline-none"
              placeholder="Search properties..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-2">
            <Link to="/login/tenant">
              <button className="transition-all duration-300 ease-in-out active:scale-95 text-primary px-4 py-2 rounded-full font-bold text-sm hover:bg-primary/5">
                Login
              </button>
            </Link>
            <Link to="/dashboard">
              <button className="transition-all duration-300 ease-in-out active:scale-95 bg-primary text-on-primary px-6 py-2 rounded-full font-medium text-sm">
                Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
