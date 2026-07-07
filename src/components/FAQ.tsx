import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
export function FAQ() {
  const faqs = [
  {
    q: 'How does mobile fitting work?',
    a: 'Simply select "Mobile Fitting" at checkout, choose a date and time, and our professional fitter will arrive at your home or workplace in a fully equipped van to fit your tyres on-site.'
  },
  {
    q: "What's included in the price?",
    a: 'Our prices are fully inclusive. The price you see includes the tyre, fitting, new standard valve, wheel balancing, and environmentally friendly disposal of your old tyre.'
  },
  {
    q: 'How long does fitting take?',
    a: 'On average, it takes about 20-30 minutes per tyre. A full set of four tyres usually takes around 1 to 1.5 hours.'
  },
  {
    q: 'Can I choose my fitting location?',
    a: 'Yes! You can choose to have them fitted at home, at work, or at one of our hundreds of trusted partner garages across the UK.'
  },
  {
    q: 'Can I change my appointment?',
    a: 'Absolutely. You can manage your booking online or via our app to reschedule your appointment up to 24 hours before the scheduled time.'
  }];

  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="py-24 bg-soft" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-ink mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-subtle">
            Everything you need to know about buying and fitting tyres with us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) =>
          <div
            key={idx}
            className="bg-white rounded-2xl border border-hairline overflow-hidden shadow-sm">
            
              <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none">
              
                <span className="font-bold text-ink text-lg">{faq.q}</span>
                <ChevronDown
                className={`w-5 h-5 text-subtle transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} />
              
              </button>
              <AnimatePresence>
                {openIdx === idx &&
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0
                }}
                animate={{
                  height: 'auto',
                  opacity: 1
                }}
                exit={{
                  height: 0,
                  opacity: 0
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut'
                }}>
                
                    <div className="px-6 pb-5 text-subtle leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
              }
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </section>);

}