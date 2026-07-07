import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        fill="#4285F4"
        d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47a5.54 5.54 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.57-5.17 3.57-8.82Z" />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.07 7.95-2.91l-3.88-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.26v3.1A11.998 11.998 0 0 0 12 24Z" />
      <path
        fill="#FBBC05"
        d="M5.27 14.28A7.2 7.2 0 0 1 4.89 12c0-.79.14-1.56.38-2.28v-3.1H1.26A12 12 0 0 0 0 12c0 1.94.46 3.77 1.26 5.38l4.01-3.1Z" />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.26 6.62l4.01 3.1C6.22 6.86 8.87 4.75 12 4.75Z" />
    </svg>);

}
export function Testimonials() {
  const testimonials = [
  {
    name: 'Kanchana Gajaba Thalwaththa',
    role: '3 reviews · 3 days ago',
    text: 'I had a great experience at this tyre shop. The prices are very fair, and the service was excellent. Even though the other staff were busy, the owner changed my tyre himself, which I really appreciated. He was friendly, professional, and made sure everything was done properly. I would definitely recommend this tyre shop to anyone looking for good value and reliable service. Thank you!',
    rating: 5
  },
  {
    name: 'Ryan Kern',
    role: '2 reviews · a year ago',
    text: 'I visited for a general service at NUTYRE and while the service was going on they identified that my front tyres were worn out badly and recommended a Tyre change. I’m happy to say they provided an excellent service to replace my BMW X1 tyres with Premium tyres at a very good and competitive rate. A definite recommended place for your Tyre replacements and services.',
    rating: 5
  },
  {
    name: 'Mahnaz Interiors',
    role: '1 review · 11 months ago',
    text: 'I had a flat tire the other day and was trying to get myself to the closest tire shop—and I’m so glad I found this place! From the moment I arrived, the team was incredibly professional, helpful, and efficient. They changed the tire quickly and got me back on the road in no time. I was really impressed with their service and couldn’t be happier. Highly recommend!',
    rating: 5
  },
  {
    name: 'Sakuntha Premarathne',
    role: '2 reviews · a year ago',
    text: 'I had an outstanding experience at NUTYERS UK LTD! From the moment I walked in, the staff were incredibly friendly and knowledgeable. The selection of tyres was extensive, with options to suit every budget. The service was quick and efficient, and the installation was flawless. I was particularly impressed with their transparency—no hidden costs or surprise charges. Overall, NUTYRES exceeded my expectations in every way. I highly recommend them to anyone in need of quality tyres and top-notch service. I’ll definitely be returning for all my future tyre needs!',
    rating: 5
  }];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-site mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-hairline bg-soft mb-6">
            <GoogleIcon className="w-4 h-4" />
            <span className="text-sm font-bold text-ink">4.9</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) =>
              <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              )}
            </div>
            <span className="text-sm text-subtle">Google Reviews</span>
          </div>
          <h2 className="text-4xl font-extrabold text-ink mb-4 tracking-tight">
            Don't Just Take Our Word For It
          </h2>
          <p className="text-lg text-subtle">
            Real reviews from real customers on Google.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, idx) =>
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
              delay: idx * 0.08
            }}
            whileHover={{
              y: -8
            }}
            className="flex flex-col bg-white p-6 rounded-3xl border border-hairline shadow-sm hover:shadow-card transition-all">

              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-ink rounded-full flex items-center justify-center text-base font-bold text-brand flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-ink text-sm leading-tight">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-subtle">{testimonial.role}</div>
                  </div>
                </div>
                <GoogleIcon className="w-5 h-5 flex-shrink-0" />
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) =>
              <Star
                key={i}
                className="w-4 h-4 text-yellow-400 fill-yellow-400" />

              )}
              </div>
              <p className="text-ink text-sm leading-relaxed">
                {testimonial.text}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}