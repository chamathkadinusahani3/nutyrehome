import React from 'react';
import { motion } from 'framer-motion';
export function TrustStats() {
  const stats = [
  {
    value: '50,000+',
    label: 'Tyres Sold'
  },
  {
    value: '500+',
    label: 'Partner Fitters'
  },

  {
    value: '4.9★',
    label: 'Average Rating'
  },
  {
    value: '99%',
    label: 'On-Time Appointments'
  },
  ];

  return (
    <section className="py-20 bg-white border-b border-hairline">
      <div className="max-w-site mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
          {stats.map((stat, idx) =>
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              y: 20
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
            className="text-center w-28 sm:w-32">

              <div className="text-3xl lg:text-4xl font-extrabold text-ink mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-subtle uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}