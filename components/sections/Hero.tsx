'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Calendar, Shield, Clock, MessageCircle } from 'lucide-react';

const badges = [
  { icon: Calendar, text: 'Ședințe online și la cabinet' },
  { icon: Shield, text: 'Confidențialitate totală garantată' },
  { icon: Clock, text: 'Prima consultație: evaluare gratuită 15 min' },
  { icon: MessageCircle, text: 'Răspund în max 24h' },
];

export const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern - subtil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          color: 'var(--primar)',
        }}></div>
      </div>

      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content - 60% */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-8"
          >
            {/* H1 - Empatic, validare imediată */}
            <h1 className="text-balance">
              Nu trebuie să treci singur/ă <br />
              prin ceea ce simți acum.
            </h1>

            {/* Subtitlu - 3-4 propoziții, ton blând dar ferm */}
            <div className="space-y-4 text-lg md:text-xl text-text-secundar leading-relaxed-custom max-w-2xl">
              <p>
                Indiferent dacă vii cu anxietate, depresie, traume sau pur și simplu
                cu senzația că ceva nu e în regulă - aici ai un spațiu sigur.
              </p>
              <p>
                Un loc unde poți fi vulnerabil/ă fără judecată, unde vorbim despre
                ce doare cu adevărat și găsim împreună căi de vindecare.
              </p>
              <p className="font-medium text-text-principal">
                Primul pas e mereu cel mai greu. Și e în regulă.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('#contact')}
              >
                Programează prima ședință
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection('#probleme')}
              >
                Cum te pot ajuta
              </Button>
            </div>

            {/* Badge-uri informative */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 text-primar mt-1">
                    <badge.icon className="w-full h-full" />
                  </div>
                  <span className="text-text-secundar text-sm md:text-base">
                    {badge.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Spațiu respirație dreapta - 40% */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative aspect-square max-w-md ml-auto">
              {/* Placeholder pentru imagine liniștitoare */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primar/10 to-secundar/10 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center p-8">
                  <svg width="200" height="200" viewBox="0 0 200 200" className="mx-auto opacity-20">
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray="440 60"
                      strokeLinecap="round"
                      className="text-primar"
                      style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
                    />
                  </svg>
                  <p className="text-text-secundar italic mt-4">
                    [Spațiu pentru imagine liniștitoare:<br />
                    fereastră cu lumină naturală,<br />
                    plantă, fotoliu confortabil]
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - subtil */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-primar/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-primar rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};
