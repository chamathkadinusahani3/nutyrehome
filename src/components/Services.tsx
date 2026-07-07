import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
export function Services() {
  const services = [
  {
    title: 'Mobile Fitting',
    desc: 'We come to your home or workplace. Save time and avoid waiting at the garage.',
    img: '/MobileFitting.jpeg',
    benefits: [
    'Convenient locations',
    'Professional vans',
    'No waiting rooms']

  },
  {
    title: 'Garage Fitting',
    desc: 'Visit one of our hundreds of trusted partner garages across the UK.',
    img: '/GarageFitting.png',
    benefits: [
    'Local experts',
    'State-of-the-art tools',
    'While-you-wait service']

  },
  {
    title: 'Home Delivery',
    desc: 'Get your tyres delivered directly to your door anywhere in the UK.',
    img: '/homedelivery.jpeg',
    benefits: ['Fast shipping', 'Secure packaging', 'Tracked delivery']
  },
  {
    title: 'Same Day Fitting',
    desc: 'Emergency? Get your tyres fitted today in selected postcodes.',
    img: '/samedayfitting.jpeg',
    benefits: ['Rapid response', 'Priority booking', 'Get back on the road']
  }];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-site mx-auto px-6">
        <motion.div
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
            duration: 0.6
          }}
          className="text-center max-w-2xl mx-auto mb-16">

          <span className="inline-block text-sm font-bold tracking-widest text-ink uppercase mb-3 bg-brand/15 px-4 py-1.5 rounded-full">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-lg text-subtle">
            Flexible fitting options designed around your lifestyle.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) =>
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              y: 40
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              amount: 0.3
            }}
            transition={{
              duration: 0.6,
              delay: (idx % 2) * 0.15
            }}
            whileHover={{
              y: -8
            }}
            className="relative bg-white rounded-[32px] overflow-hidden border border-hairline shadow-sm hover:shadow-card hover:border-brand/30 transition-all group">

              <div className="h-64 overflow-hidden relative">
                <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />

                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <span className="absolute top-6 left-8 w-9 h-9 rounded-xl bg-brand flex items-center justify-center font-extrabold text-ink text-sm">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="absolute bottom-6 left-8 text-3xl font-extrabold text-white tracking-tight">
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

                      <div className="w-5 h-5 rounded-full bg-brand/15 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-ink" />
                      </div>
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
