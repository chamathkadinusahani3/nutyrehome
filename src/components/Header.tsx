import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  'Tyres',
  'Mobile Fitting',
  'Home Delivery',
  'Same Day',
  'Brands',
  'FAQ'];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${isScrolled ? 'shadow-header py-4' : 'py-6'}`}
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.5,
        ease: 'easeOut'
      }}>
      
      <div className="max-w-site mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
            <span className="text-ink font-bold text-xl leading-none">N</span>
          </div>
          <span className="font-extrabold text-2xl tracking-tight text-ink">
            NUTYRE
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link}
            href={`#${link.toLowerCase().replace(' ', '-')}`}
            className="text-sm font-semibold text-subtle hover:text-ink transition-colors">
            
              {link}
            </a>
          )}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:0800123456"
            className="flex items-center gap-2 text-sm font-semibold text-ink hover:text-brand-hover transition-colors">
            
            <Phone className="w-4 h-4" />
            <span>0800 123 456</span>
          </a>
          <button className="text-sm font-semibold text-ink hover:text-brand-hover transition-colors">
            Login
          </button>
          <button className="bg-ink hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-sm hover:shadow-md active:scale-95">
            Find My Tyres
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-ink"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          
          {mobileMenuOpen ?
          <X className="w-6 h-6" /> :

          <Menu className="w-6 h-6" />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen &&
      <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-card border-t border-hairline p-6 flex flex-col gap-4">
          {navLinks.map((link) =>
        <a
          key={link}
          href={`#${link.toLowerCase().replace(' ', '-')}`}
          className="text-lg font-semibold text-ink py-2 border-b border-hairline"
          onClick={() => setMobileMenuOpen(false)}>
          
              {link}
            </a>
        )}
          <button className="bg-ink text-white px-6 py-4 rounded-xl font-bold text-lg mt-4 w-full">
            Find My Tyres
          </button>
        </div>
      }
    </motion.header>);

}