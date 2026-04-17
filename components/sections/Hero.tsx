'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Calendar, Shield, Clock, MapPin } from 'lucide-react';

const badges = [
  { icon: Calendar, text: 'Psihologie · Psihiatrie · Logopedie' },
  { icon: Shield, text: 'Confidențialitate totală garantată' },
  { icon: Clock, text: 'Evaluare inițială gratuită — 15 min' },
  { icon: MapPin, text: 'Cabinet București și Online' },
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
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '28px 28px',
        }}
      />

      {/* Main content */}
      <div className="flex-1 flex items-center relative z-10">
        <div className="container-custom py-24 md:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="lg:col-span-7 space-y-8"
            >
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2"
              >
                <div className="h-px w-10 bg-auriu" />
                <span className="text-auriu text-sm font-semibold uppercase tracking-widest">
                  Cabinet de Psihologie București
                </span>
              </motion.div>

              {/* H1 */}
              <h1
                className="text-white font-titlu leading-tight"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
              >
                Nu trebuie să treci singur
                <br />
                <span style={{ color: '#e8d5b0' }}>
                  prin ceea ce simți acum.
                </span>
              </h1>

              {/* Subtitlu */}
              <div className="space-y-4 max-w-2xl">
                <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                  Suntem o echipă tânără de psihologi, psihoterapeuți, psihiatru și logopezi —
                  în București și online. Un spațiu sigur, fără judecată.
                </p>
                <p className="font-medium" style={{ color: '#e8d5b0' }}>
                  Primul pas e mereu cel mai greu. Și e în regulă.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  variant="gold"
                  size="lg"
                  onClick={() => scrollToSection('#contact')}
                >
                  Programează prima ședință
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={() => scrollToSection('#servicii')}
                  className="text-white border-2 border-white/30 hover:border-auriu hover:text-auriu hover:bg-transparent"
                >
                  Cum te putem ajuta →
                </Button>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {badges.map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(201, 169, 110, 0.2)', border: '1px solid rgba(201, 169, 110, 0.4)' }}
                    >
                      <badge.icon className="w-3.5 h-3.5" style={{ color: '#e8d5b0' }} />
                    </div>
                    <span className="text-white/75 text-sm">{badge.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Card flotant dreapta */}
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
                {/* Gold accent line */}
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

                {/* CTA in card */}
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
                    Reservă evaluarea gratuită →
                  </button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Stats bar — fundal semi-transparent */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="relative z-10 border-t"
        style={{ borderColor: 'rgba(201, 169, 110, 0.2)', backgroundColor: 'rgba(47, 74, 67, 0.7)', backdropFilter: 'blur(10px)' }}
      >
        <div className="container-custom py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`text-center ${idx < stats.length - 1 ? 'md:border-r' : ''}`}
                style={{ borderColor: 'rgba(201, 169, 110, 0.2)' }}
              >
                <p className="text-2xl md:text-3xl font-titlu font-bold" style={{ color: '#c9a96e' }}>
                  {stat.value}
                </p>
                <p className="text-white/60 text-xs mt-1 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
