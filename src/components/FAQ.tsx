import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
export function FAQ() {
  const faqs = [
  {
    q: 'How does your mobile tyre fitting service work?',
    a: 'Our service lets you order tyres online and have them fitted at your home, workplace, or even roadside. Just select your tyres, choose a convenient time during checkout, and our technician will come directly to your location.'
  },
  {
    q: 'Do you also offer garage fitting?',
    a: 'Yes! Alongside our mobile service, you can also have your tyres fitted at one of our trusted partner garages. Just choose whichever option is more convenient for you at checkout.'
  },
  {
    q: 'Are the prices shown inclusive of fitting and other costs?',
    a: 'Yes, all tyre prices you see include fitting, balancing, and disposal of old tyres. There are no hidden charges — what you see is exactly what you’ll pay.'
  },
  {
    q: 'How long does a fitting appointment usually take?',
    a: 'On average, a tyre fitting takes between 30 to 60 minutes depending on the number of tyres and the vehicle type. Our technicians work efficiently to ensure minimal disruption to your day.'
  },
  {
    q: "I'm not sure which tyres to choose — can you help?",
    a: 'Absolutely! You can search by vehicle registration, tyre size, or make and model on our website. And if you still need assistance, our friendly team is always happy to help you find the right fit.'
  },
  {
    q: 'Can I change my appointment?',
    a: 'Absolutely. You can manage your booking online or via our app to reschedule your appointment up to 24 hours before the scheduled time.'
  }];

  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="py-24 bg-soft relative overflow-hidden" id="faq">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative">
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
          className="text-center mb-16">

          <span className="inline-block text-sm font-bold tracking-widest text-ink uppercase mb-3 bg-brand/15 px-4 py-1.5 rounded-full">
            Got Questions?
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-subtle">
            Everything you need to know about buying and fitting tyres with us.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) =>
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              y: 24
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              amount: 0.5
            }}
            transition={{
              duration: 0.5,
              delay: idx * 0.08,
              ease: 'easeOut'
            }}
            className={`bg-white rounded-3xl border overflow-hidden shadow-sm transition-colors duration-300 ${openIdx === idx ? 'border-brand/50 shadow-card' : 'border-hairline'}`}>

              <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full px-6 md:px-8 py-6 flex items-center justify-between gap-4 text-left focus:outline-none group">

                <span className={`font-bold text-lg transition-colors ${openIdx === idx ? 'text-ink' : 'text-ink/90 group-hover:text-ink'}`}>
                  {faq.q}
                </span>
                <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIdx === idx ? 'bg-brand rotate-45' : 'bg-soft group-hover:bg-brand/20'}`}>
                  <Plus className="w-4 h-4 text-ink" />
                </div>
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

                    <div className="px-6 md:px-8 pb-6 text-subtle leading-relaxed border-t border-hairline pt-5">
                      {faq.a}
                    </div>
                  </motion.div>
              }
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
