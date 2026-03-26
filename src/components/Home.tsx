import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Search, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0eB_tSi27f78h1EuWjBo7YdY-T27QJTkyNIFrsx9hC3MkT7JTvkZrDRzX1OfUUrs6GkeylN2kslo_4jA0CCwp_1XThIH8hxniG211Eo-GaiY4VTHjOYSH9LVyohyeH1UDq6-aKQKnmJ-KfqcV8U2WCITt40eeDCgq_ikBeMYzui4FZvAiL4ubzmuX1cNywkQKmaBXAwAKvaU3aBJvBYtfCoGbLGqFKBHy7bxKPDOY3-uWiWpNiE9KtF4SDjIHvpY-XtnBy7XLHII" 
            alt="Hero Background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-on-surface/40 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-tertiary text-on-tertiary px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">New Standard</span>
              <span className="text-sm font-medium opacity-80">Architectural Curation for Modern Living</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8">
              Where High-End <br />
              <span className="text-tertiary-fixed">Design</span> Meets <br />
              Verified <span className="text-primary-fixed">Trust</span>.
            </h1>
            <p className="text-xl opacity-90 mb-10 font-medium max-w-lg leading-relaxed">
              Landlord2Tenant is the premium ecosystem connecting verified tenants with the world's most exceptional rental properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/search">
                <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-primary-container transition-all active:scale-95">
                  Explore Listings
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link to="/login/landlord">
                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all active:scale-95">
                  For Landlords
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-12 right-12 hidden lg:flex gap-8">
          {[
            { label: 'Verified Properties', value: '2.4k+' },
            { label: 'Trusted Landlords', value: '850+' },
            { label: 'Tenant Satisfaction', value: '4.9/5' },
          ].map((stat) => (
            <div key={stat.label} className="glass-effect p-6 rounded-2xl border border-white/10">
              <p className="text-3xl font-extrabold text-primary mb-1">{stat.value}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">The Landlord2Tenant Ecosystem</h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg">We've reimagined the rental journey from the ground up, focusing on quality, transparency, and architectural appreciation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: ShieldCheck,
              title: 'Premium Screening',
              desc: 'Our proprietary "Rental Pass" verifies credit, background, and rental history once, allowing you to apply to any property instantly.'
            },
            {
              icon: Search,
              title: 'Architectural Curation',
              desc: 'We don\'t list everything. Every property on our platform is hand-selected for its design, quality, and unique character.'
            },
            {
              icon: CheckCircle,
              title: 'Verified Landlords',
              desc: 'Trust goes both ways. We verify every landlord on our platform to ensure professional management and fair treatment.'
            }
          ].map((feature, idx) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/10 hover:bg-surface-container transition-colors"
            >
              <div className="w-16 h-16 bg-primary-container rounded-2xl flex items-center justify-center text-on-primary mb-8">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-secondary leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-on-surface py-24 px-6 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 leading-tight">
              Trusted by the world's <br />
              most <span className="text-tertiary-fixed">discerning</span> tenants.
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <Star className="w-6 h-6 text-tertiary-fixed fill-current" />
                </div>
                <p className="text-xl opacity-80 italic leading-relaxed">
                  "The only platform where I felt the property photos actually matched reality. The Rental Pass made my move across the country seamless."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src="https://picsum.photos/seed/user1/100/100" alt="User" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold">Julianne Moore</p>
                  <p className="text-sm opacity-60">Design Consultant, NYC</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-white/5 rounded-full absolute -top-20 -right-20 w-[120%] blur-3xl"></div>
            <img 
              className="rounded-3xl shadow-2xl relative z-10" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFzX6pslCfNntA5ayiz0EpHkBmJ7BpUd9pj3jMYFCxq_0FH_N5CqsH-Pkk96AiNOvzHR7Prpn7ODYWNcSAPQ28Mue_K19hMFazyypGi48xqzq98GS0e99yTZQ5C8v23rrh00Rtc1npsB3A-gGf0F21VFrHRlD6_sKfuGIemp7q9nATquRPcImXYf4S--6_n8-fLl5-oLmEQk3Ydt4JCKT54TdHaWTx0MS8FLlkxNAtuMK-IMRu5RpeuG0rqB5u0EW050ty3MIF2Xw" 
              alt="Testimonial Property"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto bg-primary-container text-on-primary p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Ready to find your <br /> next architectural gem?</h2>
          <p className="text-lg opacity-90 mb-10 max-w-lg mx-auto">Join thousands of verified tenants who have found their perfect home through Landlord2Tenant.</p>
          <Link to="/search">
            <button className="bg-white text-primary px-12 py-4 rounded-full font-bold text-lg hover:bg-surface-container transition-all active:scale-95">
              Get Started Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
