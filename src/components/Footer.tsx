import { Link } from 'react-router-dom';
import { Share2, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 mt-auto bg-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="font-headline font-extrabold text-slate-900 mb-4">Landlord2Tenant</div>
          <p className="text-slate-500 text-xs leading-relaxed">
            Defining the next generation of rental transparency and architectural appreciation.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:col-span-3 gap-8">
          <div>
            <h5 className="font-headline text-xs tracking-wider uppercase text-primary font-bold mb-4">Platform</h5>
            <ul className="space-y-2">
              <li><Link className="text-xs tracking-wider uppercase text-slate-500 hover:text-primary transition-opacity" to="/search">Search Listings</Link></li>
              <li><Link className="text-xs tracking-wider uppercase text-slate-500 hover:text-primary transition-opacity" to="#">Landlord Tools</Link></li>
              <li><Link className="text-xs tracking-wider uppercase text-slate-500 hover:text-primary transition-opacity" to="#">Tenant Screening</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-headline text-xs tracking-wider uppercase text-primary font-bold mb-4">Legal</h5>
            <ul className="space-y-2">
              <li><Link className="text-xs tracking-wider uppercase text-slate-500 hover:text-primary transition-opacity" to="#">Privacy Policy</Link></li>
              <li><Link className="text-xs tracking-wider uppercase text-slate-500 hover:text-primary transition-opacity" to="#">Cookie Policy</Link></li>
              <li><Link className="text-xs tracking-wider uppercase text-slate-500 hover:text-primary transition-opacity" to="#">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-headline text-xs tracking-wider uppercase text-slate-500">
          © 2024 Landlord2Tenant. Architectural Curation for Modern Living.
        </p>
        <div className="flex gap-6">
          <Share2 className="w-4 h-4 text-slate-400 cursor-pointer hover:text-primary transition-colors" />
          <Globe className="w-4 h-4 text-slate-400 cursor-pointer hover:text-primary transition-colors" />
        </div>
      </div>
    </footer>
  );
}
