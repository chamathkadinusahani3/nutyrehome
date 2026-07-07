import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, CalendarCheck, Smile } from 'lucide-react';
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
    <section className="py-24 bg-white">
      <div className="max-w-site mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-ink mb-4 tracking-tight">
            How NUTYRE Works
          </h2>
          <p className="text-lg text-subtle">
            Four simple steps to get you back on the road safely and without
            hassle.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-hairline" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) =>
            <motion.div
              key={idx}
              whileHover={{
                y: -8
              }}
              className="relative bg-white p-8 rounded-3xl border border-hairline shadow-sm hover:shadow-card transition-all text-center group">
              
                <div className="w-24 h-24 mx-auto bg-ink rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:bg-ink/90 transition-colors">
                  <step.icon className="w-10 h-10 text-brand" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-ink text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-white">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">
                  {step.title}
                </h3>
                <p className="text-subtle leading-relaxed">{step.desc}</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}