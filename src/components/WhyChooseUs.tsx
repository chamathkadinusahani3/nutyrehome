import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Layers, Zap, Users, Truck, Lock } from 'lucide-react';
export function WhyChooseUs() {
  const features = [
  {
    title: 'Transparent Pricing',
    desc: 'No hidden fees. The price you see is the price you pay.',
    icon: ShieldCheck
  },
  {
    title: 'Huge Tyre Selection',
    desc: 'Thousands of premium, mid-range, and budget tyres.',
    icon: Layers
  },
  {
    title: 'Same-Day Fitting',
    desc: 'Get back on the road today with our express service.',
    icon: Zap
  },
  {
    title: 'Trusted UK Fitters',
    desc: 'Fully vetted, highly trained professional technicians.',
    icon: Users
  },
  {
    title: 'Home Delivery',
    desc: 'Prefer to fit them yourself? We deliver nationwide.',
    icon: Truck
  },
  {
    title: 'Secure Booking',
    desc: 'Bank-level encryption for all your payments and data.',
    icon: Lock
  }];

  return (
    <section className="py-24 bg-soft">
      <div className="max-w-site mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Illustration */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="relative h-[600px] rounded-[40px] overflow-hidden shadow-2xl hidden lg:block">
            
            <img
              src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1600"
              alt="Premium automotive service"
              className="w-full h-full object-cover" />
            
            <div className="absolute inset-0 bg-brand/10" />
          </motion.div>

          {/* Right: Features */}
          <div>
            <h2 className="text-4xl font-extrabold text-ink mb-12 tracking-tight">
              Why Choose NUTYRE
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, idx) =>
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
                className="bg-white p-6 rounded-3xl shadow-sm border border-hairline hover:shadow-md transition-shadow">
                
                  <div className="w-12 h-12 bg-ink rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-brand" />
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-subtle text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}