'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export const VisualBanner: React.FC = () => {
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
      className="relative overflow-hidden"
      style={{
        paddingTop: 'clamp(4rem, 10vw, 10rem)',
        paddingBottom: 'clamp(4rem, 10vw, 10rem)',
        backgroundImage: `
          linear-gradient(135deg,
            rgba(168, 131, 74, 0.90) 0%,
            rgba(201, 169, 110, 0.78) 40%,
            rgba(47, 74, 67, 0.90) 100%
          ),
          url('https://images.unsplash.com/photo-1448375240586-882707db888b?q=85&w=1920&auto=format&fit=crop')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        /* NB: fără background-attachment: fixed — e broken pe iOS Safari */
      }}
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '20px 20px',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center px-2">

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center space-x-4 mb-8"
          >
            <div className="h-px flex-1 max-w-[3rem]" style={{ background: 'rgba(247, 245, 241, 0.4)' }} />
            <div className="w-2 h-2 rounded-full bg-white/60" />
            <div className="h-px flex-1 max-w-[3rem]" style={{ background: 'rgba(247, 245, 241, 0.4)' }} />
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="font-accent italic text-white mb-6"
            style={{ fontSize: 'clamp(1.15rem, 3.5vw, 2rem)', lineHeight: 1.55 }}
          >
            "Sănătatea mintală nu e un lux. E fundația pe care construiești
            <span style={{ color: '#f5edd8' }}> tot restul vieții tale.</span>"
          </motion.blockquote>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/60 text-xs uppercase tracking-widest mb-10"
          >
            Cabinet de Psihologie București
          </motion.p>

          {/* Stats — 2 coloane pe mobile, 4 pe desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 mb-12"
          >
            {[
              { number: '3', label: 'Specialități', sub: 'Psihologie · Psihiatrie · Logopedie' },
              { number: '4+', label: 'Specialiști', sub: 'Echipă interdisciplinară' },
              { number: '100%', label: 'Flexibil', sub: 'Online sau la cabinet' },
              { number: '15 min', label: 'Gratuit', sub: 'Evaluare inițială fără obligații' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <p
                  className="font-titlu font-bold mb-1"
                  style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', color: '#f5edd8', lineHeight: 1 }}
                >
                  {item.number}
                </p>
                <p className="text-white font-medium mb-1" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.875rem)' }}>
                  {item.label}
                </p>
                <p className="text-white/50 leading-tight hidden sm:block" style={{ fontSize: '0.65rem' }}>
                  {item.sub}
                </p>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              variant="gold"
              size="md"
              onClick={() => scrollToSection('#contact')}
              className="w-full sm:w-auto"
            >
              Programează prima ședință →
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
