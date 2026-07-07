import React from 'react';
import { motion } from 'framer-motion';
export function Brands() {
  const brands = [
  { name: 'Michelin', logo: '/logo/michelin.jpg' },
  { name: 'Pirelli', logo: '/logo/pirelli.jpg' },
  { name: 'Continental', logo: '/logo/continental.jpg' },
  { name: 'Goodyear', logo: '/logo/goodyear.jpg.webp' },
  { name: 'Bridgestone', logo: '/logo/bridgestone.jpg' },
  { name: 'Hankook', logo: '/logo/hankook.jpg' },
  { name: 'Yokohama', logo: '/logo/yokohama.jpg' },
  { name: 'Dunlop', logo: '/logo/dunlop.jpg' },
  { name: 'BFGoodrich', logo: '/logo/bfgoodrich_1.jpg' },
  { name: 'Marshal', logo: '/logo/marshal.png.webp' }];

  return (
    <section className="py-24 bg-soft">
      <div className="max-w-site mx-auto px-6 text-center">
        <span className="inline-block text-sm font-bold tracking-widest text-brand uppercase mb-3">
          Trusted Partners
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-4 tracking-tight">
          Premium Brands We Stock
        </h2>
        <p className="text-subtle max-w-xl mx-auto mb-14">
          We partner with the world's leading tyre manufacturers to bring you
          quality and performance you can trust.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 md:gap-6">
          {brands.map((brand, idx) =>
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
              duration: 0.4,
              delay: idx * 0.05
            }}
            whileHover={{
              y: -4
            }}
            className="group bg-white px-6 py-8 rounded-2xl border border-hairline shadow-sm flex items-center justify-center hover:shadow-lg hover:border-brand/30 transition-all cursor-pointer">

              <img
              src={brand.logo}
              alt={brand.name}
              className="h-9 md:h-11 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity" />

            </motion.div>
          )}
        </div>
      </div>
    </section>);

}