'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Calendar, Shield, Clock, MapPin } from 'lucide-react';

const badges = [
  { icon: Calendar, text: 'Psihologie · Psihiatrie · Logopedie' },
  { icon: Shield, text: 'Confidențialitate garantată' },
  { icon: Clock, text: 'Evaluare inițială gratuită' },
  { icon: MapPin, text: 'București și Online' },
];

const stats = [
  { value: '4+', label: 'Specialiști' },
  { value: '3', label: 'Discipline' },
  { value: '100%', label: 'Confidențial' },
  { value: '24h', label: 'Răspuns' },
];

export const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col"
      style={{
        backgroundImage: `
          linear-gradient(135deg,
            rgba(47, 74, 67, 0.93) 0%,
            rgba(63, 94, 85, 0.82) 45%,
            rgba(168, 131, 74, 0.45) 100%
          ),
          url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=85&w=1920&auto=format&fit=crop')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '28px 28px',
        }}
      />

      {/* Main content */}
      <div className="flex-1 flex items-center relative z-10">
        <div
          className="container-custom w-full"
          style={{ paddingTop: 'clamp(5rem, 12vw, 9rem)', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="lg:col-span-7 space-y-6 md:space-y-8"
            >
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2"
              >
                <div className="h-px w-8 bg-auriu" />
                <span
                  className="text-auriu font-semibold uppercase tracking-widest"
                  style={{ fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)' }}
                >
                  Cabinet de Psihologie București
                </span>
              </motion.div>

              {/* H1 */}
              <h1
                className="text-white font-titlu leading-tight"
                style={{ fontSize: 'clamp(1.85rem, 5.5vw, 3.5rem)', lineHeight: 1.1 }}
              >
                Nu trebuie să treci singur
                <br />
                <span style={{ color: '#e8d5b0' }}>
                  prin ceea ce simți acum.
                </span>
              </h1>

              {/* Subtitlu */}
              <div className="space-y-3 max-w-2xl">
                <p
                  className="text-white/80 leading-relaxed"
                  style={{ fontSize: 'clamp(0.95rem, 2.2vw, 1.2rem)' }}
                >
                  Suntem o echipă tânără de psihologi, psihoterapeuți, psihiatru și logopezi —
                  în București și online. Un spațiu sigur, fără judecată.
                </p>
                <p className="font-medium" style={{ color: '#e8d5b0', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>
                  Primul pas e mereu cel mai greu. Și e în regulă.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1">
                <Button
                  variant="gold"
                  size="md"
                  onClick={() => scrollToSection('#contact')}
                  className="w-full sm:w-auto justify-center"
                >
                  Programează prima ședință
                </Button>
                <button
                  onClick={() => scrollToSection('#servicii')}
                  className="w-full sm:w-auto px-7 py-4 rounded-lg text-base font-medium transition-all duration-300 border-2 text-white/90 hover:text-auriu"
                  style={{ borderColor: 'rgba(255,255,255,0.25)', background: 'transparent' }}
                >
                  Cum te putem ajuta →
                </button>
              </div>

              {/* Badges — 2 coloane pe mobile */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-2">
                {badges.map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(201, 169, 110, 0.2)', border: '1px solid rgba(201, 169, 110, 0.35)' }}
                    >
                      <badge.icon className="w-3 h-3" style={{ color: '#e8d5b0' }} />
                    </div>
                    <span className="text-white/70 leading-tight" style={{ fontSize: 'clamp(0.65rem, 1.8vw, 0.8rem)' }}>
                      {badge.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Card flotant dreapta — ascuns pe mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div
                className="rounded-3xl p-8 relative overflow-hidden"
                style={{
                  background: 'rgba(247, 245, 241, 0.07)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(201, 169, 110, 0.25)',
                  boxShadow: '0 25px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                }}
              >
                <div className="absolute top-0 left-8 right-8 h-px" style={{ background: 'linear-gradient(90deg, transparent, #c9a96e, transparent)' }} />

                <p className="text-white/60 text-xs uppercase tracking-widest mb-6">De ce să ne alegi</p>

                <div className="space-y-5">
                  {[
                    { title: 'Echipă completă sub un singur acoperiș', desc: 'Psiholog, psihoterapeut, psihiatru și logoped' },
                    { title: 'Abordare integrată și colaborativă', desc: 'Specialiștii comunică între ei pentru planul tău' },
                    { title: 'Evaluare inițială gratuită', desc: '15 minute ca să vedem dacă ne potrivim' },
                    { title: 'Cabinet București + Online', desc: 'Tu alegi formatul, noi ne adaptăm' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: 'rgba(201, 169, 110, 0.3)' }}
                      >
                        <span style={{ color: '#c9a96e', fontSize: '10px' }}>✓</span>
                      </div>
                      <div>
                        <p className="text-white/90 text-sm font-medium">{item.title}</p>
                        <p className="text-white/50 text-xs mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(201, 169, 110, 0.2)' }}>
                  <button
                    onClick={() => scrollToSection('#contact')}
                    className="w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #c9a96e, #a8834a)',
                      color: 'white',
                      boxShadow: '0 4px 15px rgba(201, 169, 110, 0.4)',
                    }}
                  >
                    Rezervă evaluarea gratuită →
                  </button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="relative z-10 border-t"
        style={{
          borderColor: 'rgba(201, 169, 110, 0.2)',
          backgroundColor: 'rgba(47, 74, 67, 0.75)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div className="container-custom py-4 md:py-5">
          <div className="grid grid-cols-4 gap-2 md:gap-0">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`text-center ${idx < stats.length - 1 ? 'md:border-r' : ''}`}
                style={{ borderColor: 'rgba(201, 169, 110, 0.2)' }}
              >
                <p
                  className="font-titlu font-bold"
                  style={{ fontSize: 'clamp(1.1rem, 3vw, 1.875rem)', color: '#c9a96e', lineHeight: 1.1 }}
                >
                  {stat.value}
                </p>
                <p className="text-white/60 uppercase tracking-wide mt-1" style={{ fontSize: 'clamp(0.55rem, 1.5vw, 0.7rem)' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
