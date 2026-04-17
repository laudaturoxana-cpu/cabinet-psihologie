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
      className="relative py-28 md:py-40 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(135deg,
            rgba(168, 131, 74, 0.88) 0%,
            rgba(201, 169, 110, 0.75) 40%,
            rgba(47, 74, 67, 0.88) 100%
          ),
          url('https://images.unsplash.com/photo-1448375240586-882707db888b?q=85&w=1920&auto=format&fit=crop')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '20px 20px',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center space-x-4 mb-10"
          >
            <div className="h-px flex-1 max-w-16" style={{ background: 'rgba(247, 245, 241, 0.4)' }} />
            <div className="w-2 h-2 rounded-full bg-white/60" />
            <div className="h-px flex-1 max-w-16" style={{ background: 'rgba(247, 245, 241, 0.4)' }} />
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="font-accent italic text-white mb-8"
            style={{ fontSize: 'clamp(1.3rem, 3vw, 2rem)', lineHeight: 1.5 }}
          >
            "Sănătatea mintală nu e un lux. E fundația pe care construiești
            <span style={{ color: '#f5edd8' }}> tot restul vieții tale.</span>"
          </motion.blockquote>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/60 text-sm uppercase tracking-widest mb-12"
          >
            Cabinet de Psihologie București
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14"
          >
            {[
              { number: '3', label: 'Specialități', sub: 'Psihologie · Psihiatrie · Logopedie' },
              { number: '4+', label: 'Specialiști', sub: 'Echipă interdisciplinară' },
              { number: '100%', label: 'Online sau cabinet', sub: 'Tu alegi formatul' },
              { number: '15 min', label: 'Evaluare gratuită', sub: 'Fără obligații' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <p
                  className="font-titlu font-bold mb-1"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#f5edd8' }}
                >
                  {item.number}
                </p>
                <p className="text-white font-medium text-sm mb-1">{item.label}</p>
                <p className="text-white/50 text-xs">{item.sub}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              variant="gold"
              size="lg"
              onClick={() => scrollToSection('#contact')}
            >
              Programează prima ședință →
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
