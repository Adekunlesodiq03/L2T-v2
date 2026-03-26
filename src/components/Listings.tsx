import { motion } from 'motion/react';
import { Search, MapPin, Home, CreditCard, Filter, Heart, Bed, Bath, Square, ChevronRight, Verified } from 'lucide-react';
import { PROPERTIES } from '@/src/constants';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';

export default function Listings() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 pb-12 px-6 max-w-7xl mx-auto w-full"
    >
      {/* Search & Filter Header */}
      <header className="mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-6 tracking-tight">Curated Listings</h1>
        <div className="bg-surface-container-lowest p-1.5 rounded-full shadow-sm flex flex-col md:flex-row items-center gap-2 border border-outline-variant/15">
          <div className="flex-grow flex items-center px-4 w-full">
            <MapPin className="text-outline mr-3 w-5 h-5" />
            <input 
              className="bg-transparent border-none focus:ring-0 w-full text-sm font-medium py-3 outline-none" 
              placeholder="Search by city, neighborhood, or ZIP" 
              type="text" 
            />
          </div>
          <div className="h-8 w-px bg-outline-variant hidden md:block"></div>
          <div className="flex items-center px-4 w-full md:w-auto">
            <Home className="text-outline mr-3 w-5 h-5" />
            <select className="bg-transparent border-none focus:ring-0 text-sm font-medium py-3 appearance-none cursor-pointer outline-none">
              <option>Property Type</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Condo</option>
            </select>
          </div>
          <div className="h-8 w-px bg-outline-variant hidden md:block"></div>
          <div className="flex items-center px-4 w-full md:w-auto">
            <CreditCard className="text-outline mr-3 w-5 h-5" />
            <select className="bg-transparent border-none focus:ring-0 text-sm font-medium py-3 appearance-none cursor-pointer outline-none">
              <option>Price Range</option>
              <option>$1000 - $2000</option>
              <option>$2000 - $3500</option>
              <option>$3500+</option>
            </select>
          </div>
          <button className="bg-tertiary text-on-tertiary px-8 py-3 rounded-full font-headline font-bold text-sm flex items-center gap-2 hover:bg-tertiary-container transition-colors w-full md:w-auto justify-center">
            <Filter className="w-4 h-4" />
            Refine
          </button>
        </div>

        {/* Quick Tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {[
            { label: 'Pet Friendly', icon: '🐾' },
            { label: 'Parking', icon: '🚗' },
            { label: 'In-unit Laundry', icon: '🧺' },
          ].map((tag) => (
            <span key={tag.label} className="bg-surface-container-high text-on-surface px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase flex items-center gap-2 cursor-pointer hover:bg-secondary-container transition-colors">
              {tag.icon} {tag.label}
            </span>
          ))}
        </div>
      </header>

      {/* Listing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROPERTIES.map((prop) => (
          <motion.article 
            key={prop.id}
            whileHover={{ y: -4 }}
            className="group bg-surface-container-lowest rounded-xl overflow-hidden transition-all duration-300 shadow-sm border border-transparent hover:border-slate-200"
          >
            <Link to={`/property/${prop.id}`}>
              <div className="relative h-80 overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={prop.image} 
                  alt={prop.title}
                  referrerPolicy="no-referrer"
                />
                {prop.status && (
                  <div className={cn(
                    "absolute top-4 left-4 glass-effect px-3 py-1 rounded-lg text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5",
                    prop.status === 'Verified' ? "text-primary bg-primary-fixed/80" : "text-primary"
                  )}>
                    {prop.status === 'Verified' && <Verified className="w-3.5 h-3.5 fill-current" />}
                    {prop.status}
                  </div>
                )}
                <div className="absolute bottom-4 left-4 glass-effect px-4 py-2 rounded-xl flex items-center gap-3">
                  <span className="font-headline font-extrabold text-lg text-primary">${prop.price.toLocaleString()}</span>
                  <span className="text-[10px] text-secondary font-bold tracking-tighter uppercase">/ month</span>
                </div>
              </div>
            </Link>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline font-bold text-xl text-on-surface">{prop.title}</h3>
                <button className="text-outline hover:text-error transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              <p className="text-secondary text-sm mb-4 flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {prop.address}
              </p>
              <div className="flex gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Bed className="w-4 h-4 text-secondary" />
                  <span className="text-[10px] font-bold text-on-surface tracking-wider uppercase">{prop.beds} Bed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="w-4 h-4 text-secondary" />
                  <span className="text-[10px] font-bold text-on-surface tracking-wider uppercase">{prop.baths} Bath</span>
                </div>
                <div className="flex items-center gap-2">
                  <Square className="w-4 h-4 text-secondary" />
                  <span className="text-[10px] font-bold text-on-surface tracking-wider uppercase">{prop.sqft.toLocaleString()} SF</span>
                </div>
              </div>
              <Link to={`/property/${prop.id}`}>
                <button className="w-full bg-surface-container-high text-on-surface py-3 rounded-full font-headline font-bold text-sm transition-all hover:bg-primary hover:text-on-primary">
                  View Details
                </button>
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-16 flex justify-center items-center gap-4">
        <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors">
          <ChevronRight className="w-5 h-5 rotate-180" />
        </button>
        <span className="font-headline font-bold text-sm px-4">Page 1 of 12</span>
        <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
}
