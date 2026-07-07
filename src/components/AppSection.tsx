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
          <motion.div
            initial={{
              opacity: 0,
              y: 40
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.7,
              ease: 'easeOut'
            }}
            className="text-white">

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: 0.1
              }}
              className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm">

              <Smartphone className="w-8 h-8 text-white" />
            </motion.div>
            <motion.h2
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
                duration: 0.6,
                delay: 0.15
              }}
              className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">

              The Ultimate Tyre Companion
            </motion.h2>
            <motion.p
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
                duration: 0.6,
                delay: 0.2
              }}
              className="text-lg text-slate-300 mb-10 leading-relaxed max-w-lg">

              Download the NUTYRE app to manage your vehicles, book fittings on
              the go, and get exclusive access to special promotions.
            </motion.p>

            <ul className="space-y-4 mb-12">
              {features.map((feature, idx) =>
              <motion.li
                key={idx}
                initial={{
                  opacity: 0,
                  x: -20
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.25 + idx * 0.08
                }}
                className="flex items-center gap-3 text-slate-200 font-medium">

                  <CheckCircle2 className="w-6 h-6 text-brand" />
                  {feature}
                </motion.li>
              )}
            </ul>

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
                duration: 0.5,
                delay: 0.6
              }}
              className="flex flex-wrap gap-4">

              <a
                href="https://apps.apple.com/lk/app/nutyreuk/id6758754476"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-ink px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors flex items-center gap-2">
                Download on App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.nutyre.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-colors backdrop-blur-sm">
                Get it on Google Play
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>);

}