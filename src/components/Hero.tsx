import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero.png"
          alt="Professional tyre fitting"
          className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/70 to-ink/90" />
      </div>

      <div className="max-w-site mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              ease: 'easeOut'
            }}>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              Buy Tyres & Get <br className="hidden lg:block" />
              <span className="relative inline-block text-white">
                Fitted Easily
                <span className="absolute left-0 -bottom-1 h-3 w-full bg-brand/60 -z-10 rounded" />
              </span>
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed mb-10 max-w-5xl mx-auto">
              Book professional tyre fitting at your home, workplace, or a
              trusted local garage in just a few clicks.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 justify-center">
              {[
              'Prices include fitting',
              'No hidden charges',
              'Secure checkout'].
              map((text) =>
              <div key={text} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  <span className="text-xs font-semibold text-slate-200">
                    {text}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}