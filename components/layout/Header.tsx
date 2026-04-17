'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const navigation = [
  { name: 'Servicii', href: '#servicii' },
  { name: 'Echipa', href: '#despre' },
  { name: 'Cum lucrăm', href: '#proces' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-fundal-principal/96 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
      style={isScrolled ? { borderBottom: '1px solid rgba(201,169,110,0.25)' } : {}}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }} className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Logo - cerc incomplet care se închide (simbol vindecare) */}
              <svg width="40" height="40" viewBox="0 0 40 40" className="transition-all duration-300 group-hover:scale-110">
                <circle cx="20" cy="20" r="16" fill="none" stroke="#3f5e55" strokeWidth="2.5" strokeDasharray="85 15" strokeLinecap="round" style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }} />
                <circle cx="20" cy="20" r="10" fill="none" stroke="#c9a96e" strokeWidth="1.5" strokeDasharray="40 25" strokeLinecap="round" style={{ transform: 'rotate(45deg)', transformOrigin: 'center' }} />
              </svg>
            </div>
            <div>
              <div className="font-titlu text-xl md:text-2xl font-semibold text-text-principal">
                Cabinet de Psihologie
              </div>
              <div className="text-xs text-text-secundar hidden md:block">
                Psihologie · Psihiatrie · Logopedie
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-text-principal hover:text-primar transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="md"
              onClick={() => scrollToSection('#contact')}
            >
              Programează prima ședință
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-text-principal hover:text-primar transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-fundal-principal/98 backdrop-blur-md border-t border-fundal-secundar"
          >
            <div className="container-custom py-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="block py-3 text-lg text-text-principal hover:text-primar transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => scrollToSection('#contact')}
                  className="w-full"
                >
                  Programează prima ședință
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
