import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export function Services() {
  const services = [
  {
    title: 'Mobile Fitting',
    desc: 'We come to your home or workplace. Save time and avoid waiting at the garage.',
    img: 'https://images.unsplash.com/photo-1632823471565-3cefc4d44393?auto=format&fit=crop&q=80&w=800',
    benefits: [
    'Convenient locations',
    'Professional vans',
    'No waiting rooms']

  },
  {
    title: 'Garage Fitting',
    desc: 'Visit one of our hundreds of trusted partner garages across the UK.',
    img: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800',
    benefits: [
    'Local experts',
    'State-of-the-art tools',
    'While-you-wait service']

  },
  {
    title: 'Home Delivery',
    desc: 'Get your tyres delivered directly to your door anywhere in the UK.',
    img: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800',
    benefits: ['Fast shipping', 'Secure packaging', 'Tracked delivery']
  },
  {
    title: 'Same Day Fitting',
    desc: 'Emergency? Get your tyres fitted today in selected postcodes.',
    img: 'https://images.unsplash.com/photo-1503375894023-712f3228de17?auto=format&fit=crop&q=80&w=800',
    benefits: ['Rapid response', 'Priority booking', 'Get back on the road']
  }];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-site mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-ink mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-lg text-subtle">
            Flexible fitting options designed around your lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) =>
          <motion.div
            key={idx}
            whileHover={{
              y: -8
            }}
            className="bg-white rounded-[32px] overflow-hidden border border-hairline shadow-sm hover:shadow-card transition-all group">
            
              <div className="h-64 overflow-hidden relative">
                <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                <h3 className="absolute bottom-6 left-8 text-3xl font-extrabold text-white">
                  {service.title}
                </h3>
              </div>
              <div className="p-8">
                <p className="text-subtle text-lg mb-6">{service.desc}</p>
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, i) =>
                <li
                  key={i}
                  className="flex items-center gap-3 text-ink font-semibold">
                  
                      <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                      {benefit}
                    </li>
                )}
                </ul>
                <button className="flex items-center gap-2 text-ink font-bold hover:text-brand-hover transition-colors group/btn">
                  Learn more{' '}
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}