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
    <section className="py-24 bg-soft relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-site mx-auto px-6 text-center relative">
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
          }}>

          <span className="inline-block text-sm font-bold tracking-widest text-ink uppercase mb-3 bg-brand/15 px-4 py-1.5 rounded-full">
            Trusted Partners
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink mb-4 tracking-tight">
            Premium Brands We Stock
          </h2>
          <p className="text-lg text-subtle max-w-xl mx-auto mb-16">
            We partner with the world's leading tyre manufacturers to bring you
            quality and performance you can trust.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 md:gap-6">
          {brands.map((brand, idx) =>
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1
            }}
            viewport={{
              once: true,
              amount: 0.4
            }}
            transition={{
              duration: 0.5,
              delay: idx * 0.06,
              ease: 'easeOut'
            }}
            whileHover={{
              y: -6,
              scale: 1.04
            }}
            className="group relative bg-white px-6 py-9 rounded-3xl border border-hairline shadow-sm flex items-center justify-center hover:shadow-card hover:border-brand/40 transition-shadow cursor-pointer">

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand/0 to-brand/0 group-hover:from-brand/[0.06] group-hover:to-transparent transition-all duration-300" />
              <img
              src={brand.logo}
              alt={brand.name}
              className="relative h-9 md:h-11 w-auto object-contain opacity-80 grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />

            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
