import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
export function PromotionBar() {
  const promos = [
  {
    title: '5% OFF',
    desc: 'Buy 2 or 4 tyres.',
    tag: 'Bundle Deal',
    image: '/promo1.jpg'
  },
  {
    title: 'Vehicle Servicing',
    desc: 'Book your full service today.',
    tag: 'Full Service',
    image: '/promo2.png'
  },
  {
    title: '10% OFF Avon Tyres',
    desc: 'Limited time offer.',
    tag: 'Special Offer',
    image: '/promo3.png'
  }];

  return (
    <section className="py-16 bg-white border-b border-hairline">
      <div className="max-w-site mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {promos.map((promo, idx) =>
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
            whileHover={{
              y: -6
            }}
            className="group relative h-80 rounded-[32px] overflow-hidden shadow-card cursor-pointer">

              <img
              src={promo.image}
              alt={promo.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

              <span className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-brand text-ink text-xs font-bold uppercase tracking-wider">
                {promo.tag}
              </span>

              <div className="absolute bottom-0 inset-x-0 p-7 flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-extrabold text-white text-2xl lg:text-3xl leading-tight mb-1">
                    {promo.title}
                  </h3>
                  <p className="text-slate-200 text-sm font-medium">
                    {promo.desc}
                  </p>
                </div>
                <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center flex-shrink-0 group-hover:bg-brand transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-ink" />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
