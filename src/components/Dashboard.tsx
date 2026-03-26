import { motion } from 'motion/react';
import { Mail, CheckCircle, Verified, ChevronRight, User, CreditCard, Settings } from 'lucide-react';
import { PROPERTIES, ALERTS } from '@/src/constants';
import { cn } from '@/src/lib/utils';

export default function Dashboard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-28 pb-20 px-6 max-w-7xl mx-auto"
    >
      {/* Header Section */}
      <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface mb-2">Welcome back, Alexander</h1>
          <p className="text-secondary font-medium tracking-wide">You have 3 active applications and 2 new messages.</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-secondary-container text-on-secondary-container px-4 py-2 rounded-xl flex items-center gap-2">
            <Verified className="w-5 h-5 fill-current" />
            <span className="text-sm font-bold tracking-tight uppercase">Verified Tenant</span>
          </div>
        </div>
      </header>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Central Hub: Active Applications (8 Columns) */}
        <section className="md:col-span-8 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="font-headline text-2xl font-bold">Active Rental Applications</h2>
            <button className="text-primary font-bold text-sm hover:underline underline-offset-4">View All</button>
          </div>

          <div className="space-y-4">
            {PROPERTIES.slice(0, 2).map((prop) => (
              <motion.div 
                key={prop.id}
                whileHover={{ y: -4 }}
                className="bg-surface-container-lowest p-6 rounded-xl flex flex-col sm:flex-row gap-6 items-start sm:items-center group transition-all duration-300 border border-transparent hover:border-slate-200 shadow-sm"
              >
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img className="w-full h-full object-cover" src={prop.image} alt={prop.title} referrerPolicy="no-referrer" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={cn(
                      "text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded",
                      prop.status === 'In Review' ? "text-tertiary bg-tertiary-fixed" : "text-primary bg-primary-fixed"
                    )}>
                      {prop.status}
                    </span>
                    <span className="text-secondary text-xs">• {prop.statusDate}</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold">{prop.title}</h3>
                  <p className="text-secondary text-sm">{prop.address}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-lg font-bold text-on-surface">${prop.price.toLocaleString()}<span className="text-xs font-normal text-secondary">/mo</span></span>
                  <button className="text-sm font-bold bg-surface-container-high px-4 py-2 rounded-full hover:bg-tertiary hover:text-on-tertiary transition-all">
                    {prop.status === 'Interview Pending' ? 'Schedule' : 'Details'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Notifications/Messages Area */}
          <div className="mt-8">
            <h2 className="font-headline text-2xl font-bold mb-6">Recent Alerts</h2>
            <div className="bg-surface-container-low rounded-xl p-6 space-y-4">
              {ALERTS.map((alert) => (
                <div key={alert.id} className="flex gap-4 items-start pb-4 border-b border-outline-variant/20 last:border-0 last:pb-0">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                    alert.type === 'message' ? "bg-primary/10" : "bg-tertiary/10"
                  )}>
                    {alert.type === 'message' ? (
                      <Mail className="w-5 h-5 text-primary fill-current" />
                    ) : (
                      <CheckCircle className="w-5 h-5 text-tertiary fill-current" />
                    )}
                  </div>
                  <div>
                    <p className="text-on-surface font-semibold text-sm">{alert.title}</p>
                    <p className="text-secondary text-sm mt-1 line-clamp-1">{alert.content}</p>
                    <span className="text-[10px] text-secondary/60 font-bold uppercase tracking-tighter mt-2 inline-block">{alert.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Side Column: Profile & Saved (4 Columns) */}
        <aside className="md:col-span-4 flex flex-col gap-8">
          {/* Account Quick Links */}
          <div className="bg-surface-container p-8 rounded-xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-container">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5WPr8T9SNTvfSRTM_l6t4aLHNk1Db8za3O5bd0_5i5GrO_bZm9s0kt_vNY38F8ahnOkcrLo3qTGm0n8jva9VOcnUnao7mUU37hFrsHMlxT9JjRb7kEb0UmtTUF4J0ymQvfyk1oWRbup65y9oB0t972z3uMWH2jx8diw5doIJhtXm9370y4rEB4yiYnUgA9Fl3Zk2OqvGcwMrSpWcx5HBS0kfG4kbsHgRosVi5DSTXl1f3WsnjfbXHT3XQOg72T6_TsWKqpx-DLrg" 
                  alt="Alexander Chen" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="font-headline font-bold text-lg">Alexander Chen</p>
                <p className="text-secondary text-sm">alexander.c@email.com</p>
              </div>
            </div>
            <nav className="space-y-2">
              {[
                { icon: User, label: 'Personal Profile' },
                { icon: CreditCard, label: 'Rental Pass & Documents' },
                { icon: Settings, label: 'Security Settings' },
              ].map((item) => (
                <a key={item.label} className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-highest transition-colors group" href="#">
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-semibold">{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </nav>
          </div>

          {/* Saved Properties Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-headline text-xl font-bold">Saved Homes</h2>
              <span className="text-[10px] font-bold text-secondary bg-surface-container-high px-2 py-1 rounded">5 TOTAL</span>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {PROPERTIES.slice(2, 4).map((prop) => (
                <div key={prop.id} className="bg-surface-container-lowest rounded-xl overflow-hidden flex h-24 border border-outline-variant/10 shadow-sm">
                  <img className="w-24 object-cover h-full" src={prop.image} alt={prop.title} referrerPolicy="no-referrer" />
                  <div className="p-3 flex flex-col justify-center">
                    <h4 className="font-headline font-bold text-sm truncate">{prop.title}</h4>
                    <p className="text-secondary text-xs mb-1">${prop.price.toLocaleString()}/mo</p>
                    <div className="flex gap-2">
                      <span className={cn(
                        "text-[10px] font-bold uppercase",
                        prop.status === 'Available' ? "text-tertiary" : "text-error"
                      )}>
                        {prop.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-3 rounded-xl border border-dashed border-outline text-secondary font-semibold text-sm hover:bg-surface-container transition-colors">
              Browse More Properties
            </button>
          </div>
        </aside>
      </div>
    </motion.div>
  );
}
