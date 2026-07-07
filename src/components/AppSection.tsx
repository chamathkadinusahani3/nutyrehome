import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, CheckCircle2 } from 'lucide-react';
export function AppSection() {
  const features = [
  'Search tyres instantly',
  'Book fitting appointments',
  'Manage multiple vehicles',
  'Track appointments in real-time',
  'Access exclusive app-only offers'];

  return (
    <section className="py-24 bg-gradient-to-br from-ink to-slate-900 overflow-hidden">
      <div className="max-w-site mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Phone Mockup */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut'
            }}
            className="relative flex justify-center lg:justify-end">
            
            <div className="relative w-[300px] h-[600px] bg-white rounded-[48px] border-8 border-slate-800 shadow-2xl overflow-hidden z-10">
              <img
                src="/screen.jpeg"
                alt="NUTYRE app screenshot"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative blur behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand/30 rounded-full blur-[100px]" />
          </motion.div>

          {/* Right: Content */}
          <div className="text-white">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
              The Ultimate Tyre Companion
            </h2>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-lg">
              Download the NUTYRE app to manage your vehicles, book fittings on
              the go, and get exclusive access to special promotions.
            </p>

            <ul className="space-y-4 mb-12">
              {features.map((feature, idx) =>
              <li
                key={idx}
                className="flex items-center gap-3 text-slate-200 font-medium">
                
                  <CheckCircle2 className="w-6 h-6 text-brand" />
                  {feature}
                </li>
              )}
            </ul>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-ink px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors flex items-center gap-2">
                Download on App Store
              </button>
              <button className="bg-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-colors backdrop-blur-sm">
                Get it on Google Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

}