import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-ink text-white pt-20 pb-10">
      <div className="max-w-site mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Col */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
                <span className="text-ink font-bold text-xl leading-none">
                  N
                </span>
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                NUTYRE
              </span>
            </div>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
              The UK's premium online tyre retailer and fitting booking
              platform. We make buying and fitting tyres simple, fast, and
              transparent.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) =>
              <a
                key={i}
                href="#"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand transition-colors group">
                
                  <Icon className="w-5 h-5 text-white group-hover:text-ink transition-colors" />
                </a>
              )}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  Mobile Fitting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  Garage Fitting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  Home Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  Same Day Fitting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  Partner With Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4 text-slate-400">
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} NUTYRE Ltd. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Payment Icons Placeholder */}
            <div className="h-8 w-12 bg-white/10 rounded" />
            <div className="h-8 w-12 bg-white/10 rounded" />
            <div className="h-8 w-12 bg-white/10 rounded" />
          </div>
        </div>
      </div>
    </footer>);

}