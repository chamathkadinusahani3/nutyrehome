import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';
export function Testimonials() {
  const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Range Rover Owner',
    text: "Incredible service. I booked online at 9am, and by 2pm a van was on my driveway fitting two new Pirellis. Didn't even have to leave the house.",
    rating: 5
  },
  {
    name: 'David Chen',
    role: 'BMW 3 Series',
    text: 'The website is so easy to use. Just put in my reg, picked the tyres, and chose a local garage. Price was exactly as quoted, no hidden fees.',
    rating: 5
  },
  {
    name: 'Emma Thompson',
    role: 'VW Golf',
    text: "I had a puncture on a Sunday. NUTYRE's same-day service saved me. The fitter was polite, professional, and very quick. Highly recommended.",
    rating: 5
  }];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-site mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-ink mb-4 tracking-tight">
            Don't Just Take Our Word For It
          </h2>
          <p className="text-lg text-subtle">
            Thousands of drivers across the UK trust NUTYRE.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) =>
          <motion.div
            key={idx}
            whileHover={{
              y: -8
            }}
            className="bg-white p-8 rounded-3xl border border-hairline shadow-sm hover:shadow-card transition-all">
            
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) =>
              <Star
                key={i}
                className="w-5 h-5 text-yellow-400 fill-yellow-400" />

              )}
              </div>
              <p className="text-ink text-lg font-medium leading-relaxed mb-8">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-ink rounded-full flex items-center justify-center text-xl font-bold text-brand">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-ink flex items-center gap-2">
                    {testimonial.name}
                    <CheckCircle className="w-4 h-4 text-success" />
                  </div>
                  <div className="text-sm text-subtle">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}