import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';
export function FinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-ink">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(#FFD400 2px, transparent 2px)',
          backgroundSize: '30px 30px'
        }} />
      

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}>
          
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Ready to Find Your Perfect Tyres?
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Book online in minutes and let us come to you. The easiest way to
            buy and fit tyres in the UK.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-brand text-ink px-8 py-4 rounded-xl font-extrabold text-lg hover:bg-brand-hover transition-colors shadow-lg hover:shadow-xl active:scale-95">
              Find My Tyres
            </button>
            <button className="w-full sm:w-auto bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-colors border border-white/20 flex items-center justify-center gap-2">
              <PhoneCall className="w-5 h-5" />
              Call Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>);

}