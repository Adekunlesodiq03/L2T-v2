import { motion } from 'motion/react';
import { MapPin, Calendar, Bed, Bath, Square, Building, CheckCircle, ShieldCheck, MessageSquare, Star, Train, School, Verified } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { PROPERTIES } from '@/src/constants';

export default function PropertyDetails() {
  const { id } = useParams();
  const property = PROPERTIES.find(p => p.id === id) || PROPERTIES[0];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 pb-20 max-w-7xl mx-auto px-6"
    >
      {/* Editorial Property Header */}
      <header className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              {property.status === 'Verified' ? (
                <div className="bg-primary-fixed text-primary px-4 py-1.5 rounded-xl flex items-center gap-2 border border-primary/10 shadow-sm">
                  <Verified className="w-5 h-5 fill-current" />
                  <span className="text-xs font-bold tracking-tight uppercase">Verified Listing</span>
                </div>
              ) : (
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                  {property.status || 'Featured Residence'}
                </span>
              )}
              <span className="text-secondary text-[10px] uppercase tracking-widest">• Premium Property</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-on-surface leading-tight mb-4">{property.title}</h1>
            <div className="flex items-center gap-4 text-on-surface-variant">
              <div className="flex items-center gap-1">
                <MapPin className="w-5 h-5" />
                <span className="text-sm font-medium">{property.address}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-5 h-5" />
                <span className="text-sm font-medium">Available Sept 1st</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-secondary text-[10px] uppercase tracking-widest mb-1">Monthly Lease</p>
            <p className="text-4xl font-extrabold text-primary leading-none">${property.price.toLocaleString()}</p>
          </div>
        </div>
      </header>

      {/* Asymmetric Editorial Gallery */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-16">
        <div className="md:col-span-8 h-[500px] overflow-hidden rounded-xl relative group">
          <img 
            alt="Primary living space" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src={property.image}
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-6 left-6 glass-effect px-4 py-2 rounded-lg text-sm font-semibold text-on-surface">Main Living Area</div>
        </div>
        <div className="md:col-span-4 flex flex-col gap-4 h-[500px]">
          <div className="h-1/2 overflow-hidden rounded-xl relative group">
            <img 
              alt="Kitchen view" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuyZDsPnezDH0DZ1Ekd90cbPkP96QrhHOmOCWPv8N8EQcGsNnvGHbwaWt9JROe4NAJ-5akwwJAZW4z9ZF-NQB8U0LHuLBE2Ej0QuJdOtaffp8uPowdZ5SKcUaxfQShd4VZBWEcmUYZRuHoH3lFxXvu411Jt-g3QgOugKIUtJRs4n3rLckG8Z22fHjnomc5NaeXsdn0eyv0S-oMCzeNaDe8p-E0Pua-bM4yKRwpnBj4291WEnW_Tc7uq4x2ccCkz0OWAjGetL02Cxc"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="h-1/2 overflow-hidden rounded-xl relative group">
            <img 
              alt="Master bedroom" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4X61sJl93NqdG3g-flZ5dQxCPnEbXA10QbVYomCRwjOWapxSwPnWPVuDASLO0_e3ymd6hdUun6MCEYzBdadjGyYb8gjETEnj-OP0Skr1yJ7lwOojzadKuyqrHIFEpbpaSfhuFC0Uqj3-Zp_fiAtX_r-ZdL8vgQzn_iKEMph-OLIxWCPoDUHIZRYBr8L_8GWY1EvaSMKjZLqXeul6ffuQPU87b52Oh-ON1RLJFmQdEY3_n42fN2he13BBrhv3X0Mw7i8f9MH9az9A"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-on-surface/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-surface-container-lowest text-on-surface px-6 py-2 rounded-full font-bold text-sm">View 24 Photos</button>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left Column: Content */}
        <div className="lg:col-span-2 space-y-16">
          {/* Quick Facts Bento */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Bed, label: 'Bedrooms', value: `${property.beds} Units` },
              { icon: Bath, label: 'Bathrooms', value: `${property.baths} Baths` },
              { icon: Square, label: 'Area', value: `${property.sqft.toLocaleString()} SF` },
              { icon: Building, label: 'Type', value: property.type },
            ].map((fact) => (
              <div key={fact.label} className="bg-surface-container-low p-6 rounded-xl text-center transition-all hover:bg-surface-container">
                <fact.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-[10px] uppercase tracking-widest text-secondary">{fact.label}</p>
                <p className="text-xl font-bold">{fact.value}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <article>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-8 h-px bg-primary"></div>
              The Narrative
            </h3>
            <div className="space-y-4 text-on-surface-variant leading-relaxed text-lg font-body">
              <p>Discover an unparalleled living experience in the heart of Tribeca. The Meridian Glass House represents the pinnacle of modern architectural design, featuring soaring 12-foot ceilings and a floor plan that maximizes both private sanctuary and grand entertaining.</p>
              <p>The interior palette emphasizes natural materials: wide-plank white oak flooring, honed Calacatta marble, and custom-milled cabinetry. Every detail has been curated for the discerning urbanite who values quiet luxury and precision craftsmanship.</p>
            </div>
          </article>

          {/* Amenities List */}
          <section>
            <h3 className="text-2xl font-bold mb-8">Premium Amenities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              {[
                'Climate Controlled HVAC',
                'Wolf/Sub-Zero Kitchen',
                'Private 400sf Terrace',
                'In-unit Washer/Dryer'
              ].map((amenity) => (
                <div key={amenity} className="flex items-center justify-between py-3 group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary transition-colors group-hover:bg-primary-container group-hover:text-on-primary">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{amenity}</span>
                  </div>
                  <CheckCircle className="w-5 h-5 text-tertiary fill-current" />
                </div>
              ))}
            </div>
          </section>

          {/* Location / Neighborhood */}
          <section>
            <h3 className="text-2xl font-bold mb-6">The Neighborhood</h3>
            <div className="bg-surface-container-low rounded-xl overflow-hidden mb-8">
              <div className="h-64 bg-slate-200 relative">
                <img 
                  alt="Map location" 
                  className="w-full h-full object-cover opacity-60 grayscale" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5JyrEq5P1E8dSVZh8XgBRY6r6eya-FTP7z05gaD7c6PwzqCTNJi17BOVkm6egi8vRBpjw1IupwNzp8B-575jkRKpWxUpbhoq77v_N5o2gYPzdBdiA71zqt2N-M3-5N7o0nK-dmYAXKRKIQK-djqZbYasNrdXjApVPPWS61bPuyx4pQBCSueemrW1_noUQDNFGJNBl-ND-JD7mg4kXKlJEY672YDCmcUIapJlYsCaTGvjHy7GMk9_wv4objoVlnERdnuPINP-FIlg"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <MapPin className="w-10 h-10 text-error fill-current" />
                </div>
              </div>
              <div className="p-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-4 uppercase text-[10px] tracking-widest text-secondary">Public Transit</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm">
                      <span className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px] font-bold">1</span>
                      <span>Franklin St Station (2 min walk)</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                      <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">A</span>
                      <span>Canal St Station (5 min walk)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4 uppercase text-[10px] tracking-widest text-secondary">Local Schools</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm">
                      <School className="w-5 h-5 text-primary" />
                      <span>PS 234 Independence School</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                      <School className="w-5 h-5 text-primary" />
                      <span>Stuyvesant High School</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Actions (Sticky) */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-surface-container-lowest border border-outline-variant/15 p-8 rounded-xl shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-3xl font-extrabold text-on-surface">${property.price.toLocaleString()}<span className="text-lg font-normal text-secondary">/mo</span></p>
                <p className="text-[10px] text-tertiary font-bold flex items-center gap-1 mt-1 uppercase tracking-wider">
                  <ShieldCheck className="w-3 h-3" /> 
                  Rent Protected Guarantee
                </p>
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  alt="Agent Profile" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXUB9EMgPOe-N6L5dyUSuk34-NRIyrWNeAAn24xvvgoZQ2e1KFvkhs2Icagjz6rSjEMeCDoaAYWtnVhjAg2QLdhiqBlFgYx0CH7mEosllnnmLoLhdKW45wJSj1MhV2ZbNpQVeL-tGyfDfEsnia-Xm3jTKPRAEc3lnj5VMlwW6PQ-gdeXyzzBUe4x3wpV8-tXIx4cTbWX5S_1zqei5AKpfaJxRFk6dA3d36K_3gHp2ycsNjUa1Fl2VvrdPMmfAtcLpKFgaco-pbKW0" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="space-y-4 mb-8">
              <button className="w-full bg-tertiary text-on-tertiary font-bold py-4 rounded-full hover:bg-tertiary-container transition-all active:scale-[0.98]">
                Apply Now
              </button>
              <button className="w-full bg-surface-container-high text-on-surface font-bold py-4 rounded-full hover:bg-surface-container-highest transition-all active:scale-[0.98]">
                Contact Landlord
              </button>
            </div>
            <div className="pt-8 border-t border-surface-container-high space-y-6">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-5 h-5 text-secondary" />
                <div>
                  <h5 className="font-bold text-sm">Screened Tenants Only</h5>
                  <p className="text-xs text-secondary mt-1">This landlord requires a pre-screened profile before touring.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <div>
                  <h5 className="font-bold text-sm">Digital Lease Enabled</h5>
                  <p className="text-xs text-secondary mt-1">Secure, paperless signing available through our platform.</p>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-primary-fixed text-primary p-4 rounded-lg text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1">Current Demand</p>
              <p className="text-sm font-medium">8 people have viewed this today</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
