import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from './components/Hero';
import { TyreSearch } from './components/TyreSearch';
import { PromotionBar } from './components/PromotionBar';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Services } from './components/Services';
import { AppSection } from './components/AppSection';
import { TrustStats } from './components/TrustStats';
import { Brands } from './components/Brands';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';

export function App() {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 0.5
      }}
      className="min-h-screen flex flex-col bg-white">
      
      
      <main className="flex-grow">
        <Hero />
        <TyreSearch />
        <PromotionBar />
        <HowItWorks />
        <WhyChooseUs />
        <Services />
        <AppSection />
        <TrustStats />
        <Brands />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      
    </motion.div>);

}