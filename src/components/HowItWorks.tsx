import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, CalendarCheck, Smile, ArrowRight } from 'lucide-react';
export function HowItWorks() {
  const steps = [
  {
    title: 'Search Tyres',
    desc: 'Enter your reg or tyre size to find the perfect match.',
    icon: Search
  },
  {
    title: 'Choose Fitting',
    desc: 'Select home, work, or a trusted local garage.',
    icon: MapPin
  },
  {
    title: 'Book Appointment',
    desc: 'Pick a date and time that suits your schedule.',
    icon: CalendarCheck
  },
  {
    title: 'Drive Away Happy',
    desc: 'Our experts fit your tyres quickly and safely.',
    icon: Smile
  }];

  return (
    <section className="py-24 bg-soft relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-site mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block text-sm font-bold tracking-widest text-ink uppercase mb-3 bg-brand/10 px-4 py-1.5 rounded-full">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink mb-4 tracking-tight">
            How NUTYRE Works
          </h2>
          <p className="text-lg text-subtle">
            Four simple steps to get you back on the road safely and without
            hassle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, idx) =>
          <motion.div
            key={idx}
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
              duration: 0.5,
              delay: idx * 0.1
            }}
            className="relative flex items-center gap-4 lg:gap-0 lg:flex-col">

              <motion.div
              whileHover={{
                y: -8
              }}
              className="group relative flex-1 lg:w-full bg-white p-8 rounded-3xl border border-hairline shadow-sm hover:shadow-card hover:border-brand/30 transition-all text-center overflow-hidden">

                <span className="absolute -top-4 -right-2 text-8xl font-extrabold text-ink/[0.04] select-none leading-none">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                <div className="relative w-16 h-16 mx-auto bg-ink rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand transition-colors duration-300">
                  <step.icon className="w-7 h-7 text-brand group-hover:text-ink transition-colors duration-300" />
                </div>
                <h3 className="relative text-xl font-bold text-ink mb-3">
                  {step.title}
                </h3>
                <p className="relative text-subtle leading-relaxed">{step.desc}</p>
              </motion.div>

              {idx < steps.length - 1 &&
              <div className="hidden lg:flex items-center justify-center absolute top-1/2 -right-4 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-hairline shadow-sm">
                  <ArrowRight className="w-4 h-4 text-ink" />
                </div>
              }
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
