import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, ShieldCheck, Gauge, Award, PhoneCall, X } from 'lucide-react';

const STD_WIDTHS = ['145', '155', '165', '175', '185', '195', '205', '215', '225', '235', '245', '255', '265'];
const STD_PROFILES = ['30', '35', '40', '45', '50', '55', '60', '65', '70', '75'];
const STD_DIAMETERS = ['13', '14', '15', '16', '17', '18', '19', '20'];

function SizeSelect({
  label,
  badge,
  value,
  options,
  onChange
}: {
  label: string;
  badge: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-6 rounded-full bg-brand flex items-center justify-center text-ink text-[10px] font-black flex-shrink-0">
          {badge}
        </div>
        <label className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400">
          {label}
        </label>
      </div>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full h-14 rounded-2xl border bg-white/[0.04] backdrop-blur-md px-5 pr-10 font-mono text-sm appearance-none cursor-pointer outline-none transition-all duration-300 ${value ? 'border-brand/50 text-brand' : 'border-white/10 text-slate-300 hover:border-white/20'}`}>

          <option value="" className="bg-slate-900 text-slate-300">
            Any
          </option>
          {options.map((o) =>
          <option key={o} value={o} className="bg-slate-900 text-white">
              {o}
            </option>
          )}
        </select>
        <ChevronDown
          className={`absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none transition-colors duration-300 ${value ? 'text-brand' : 'text-slate-500'}`} />

      </div>
    </div>);

}

export function TyreSearch() {
  const [width, setWidth] = useState('');
  const [profile, setProfile] = useState('');
  const [diameter, setDiameter] = useState('');
  const [confirmed, setConfirmed] = useState('');

  const builtSize = width && profile && diameter ? `${width}/${profile}R${diameter}` : '';

  const handleSearch = () => {
    if (!builtSize) return;
    setConfirmed(builtSize);
  };

  const handleReset = () => {
    setWidth('');
    setProfile('');
    setDiameter('');
    setConfirmed('');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ink to-slate-900 py-24">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand/10 blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-brand/10 blur-[140px]" />
      </div>

      <div className="max-w-site mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Search */}
          <motion.div
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
              duration: 0.6,
              ease: 'easeOut'
            }}>

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
              <Search className="w-4 h-4 text-brand" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-slate-300">
                Find Your Fit
              </span>
            </span>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              Search Tyres by <br className="hidden lg:block" />
              <span className="relative inline-block text-brand">Exact Size</span>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-lg">
              Select your tyre&apos;s width, profile and rim diameter — found
              on the sidewall of your current tyre — to see what fits your
              vehicle.
            </p>

            <div className="relative rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 md:p-8">
              <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
                <SizeSelect
                  label="Width"
                  badge="W"
                  value={width}
                  options={STD_WIDTHS}
                  onChange={(v) => {
                    setWidth(v);
                    setConfirmed('');
                  }} />

                <SizeSelect
                  label="Profile"
                  badge="P"
                  value={profile}
                  options={STD_PROFILES}
                  onChange={(v) => {
                    setProfile(v);
                    setConfirmed('');
                  }} />

                <SizeSelect
                  label="Rim"
                  badge="R"
                  value={diameter}
                  options={STD_DIAMETERS}
                  onChange={(v) => {
                    setDiameter(v);
                    setConfirmed('');
                  }} />

              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleSearch}
                  disabled={!builtSize}
                  className="flex-1 h-14 rounded-2xl bg-brand text-ink font-bold text-sm hover:bg-brand-hover transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_20px_50px_rgba(255,212,0,0.15)] disabled:opacity-40 disabled:cursor-not-allowed">

                  <Search className="w-4 h-4" />
                  Search Tyres
                </button>
                {(width || profile || diameter) &&
                <button
                  onClick={handleReset}
                  className="h-14 px-5 rounded-2xl border border-white/10 bg-white/[0.03] text-slate-300 hover:text-white hover:border-white/20 transition-all duration-300 flex items-center gap-2 flex-shrink-0 text-sm font-bold">

                    <X className="w-4 h-4" />
                    Reset
                  </button>
                }
              </div>

              <AnimatePresence>
                {confirmed &&
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                    marginTop: 0
                  }}
                  animate={{
                    opacity: 1,
                    height: 'auto',
                    marginTop: 20
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    marginTop: 0
                  }}
                  className="overflow-hidden">

                    <div className="rounded-2xl border border-brand/20 bg-brand/10 p-5 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                      <div>
                        <p className="text-white font-bold text-sm">
                          Great choice —{' '}
                          <span className="font-mono text-brand">
                            {confirmed}
                          </span>
                        </p>
                        <p className="text-slate-400 text-xs mt-1">
                          Call our team to confirm live stock and book
                          fitting.
                        </p>
                      </div>
                      <a
                      href="tel:0800123456"
                      className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-white text-ink font-bold text-sm hover:bg-slate-100 transition-colors flex-shrink-0">

                        <PhoneCall className="w-4 h-4" />
                        Call Now
                      </a>
                    </div>
                  </motion.div>
                }
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right: Tyre Visual */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.7,
              ease: 'easeOut'
            }}
            className="relative hidden lg:flex justify-center">

            <div className="absolute w-[420px] h-[420px] bg-brand/20 rounded-full blur-[110px]" />
            <img
              src="/tyre.png"
              alt="Premium tyre"
              className="relative z-10 w-full max-w-md drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]" />


            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute top-8 left-0 bg-white p-4 rounded-2xl shadow-float flex items-center gap-3 z-20">

              <div className="w-10 h-10 bg-ink rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-brand" />
              </div>
              <div>
                <p className="font-bold text-ink text-sm">Genuine Stock</p>
                <p className="text-xs text-subtle">100% authentic</p>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 12, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.8
              }}
              className="absolute bottom-16 right-0 bg-white p-4 rounded-2xl shadow-float flex items-center gap-3 z-20">

              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                <Gauge className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-bold text-ink text-sm">Precision Fit</p>
                <p className="text-xs text-subtle">Matched to spec</p>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -8, 0]
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.4
              }}
              className="absolute bottom-0 left-4 bg-white p-4 rounded-2xl shadow-float flex items-center gap-3 z-20">

              <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="font-bold text-ink text-sm">Warranty Included</p>
                <p className="text-xs text-subtle">Manufacturer backed</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>);

}
