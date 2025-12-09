'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { User, Users, Phone, Package } from 'lucide-react';

const pricingOptions = [
  {
    icon: User,
    title: 'Ședință individuală',
    price: '250 lei',
    duration: '50 minute',
    features: [
      'Ședință one-to-one',
      'La cabinet sau online',
      'Plată: numerar, card sau transfer bancar',
    ],
    highlight: false,
  },
  {
    icon: Users,
    title: 'Terapie de cuplu',
    price: '300 lei',
    duration: '60 minute',
    features: [
      'Ședință pentru cuplu',
      'La cabinet (recomandat)',
      'Plată: numerar, card sau transfer bancar',
    ],
    highlight: false,
  },
  {
    icon: Phone,
    title: 'Evaluare inițială',
    price: 'GRATIS',
    duration: '15 minute',
    features: [
      'Consultație telefonică',
      'Fără obligație de continuare',
      'Răspuns în maxim 24h',
    ],
    highlight: true,
  },
];

const packages = [
  {
    title: 'Pachet 4 ședințe individuale',
    originalPrice: '1000 lei',
    price: '900 lei',
    savings: 'Economisești 100 lei',
  },
  {
    title: 'Pachet 4 ședințe cuplu',
    originalPrice: '1200 lei',
    price: '1100 lei',
    savings: 'Economisești 100 lei',
  },
];

export const Pricing: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
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
    <section className="section-spacing bg-fundal-principal">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="mb-6">Tarife și programări</h2>
          <p className="text-xl text-text-secundar leading-relaxed">
            Transparent, clar, fără costuri ascunse.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 max-w-6xl mx-auto">
          {pricingOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 ${
                option.highlight ? 'border-2 border-accent-cald ring-4 ring-accent-cald/10' : ''
              }`}
            >
              {option.highlight && (
                <div className="bg-accent-cald text-white text-sm px-4 py-2 rounded-full inline-block mb-4 font-medium">
                  Recomandat pentru început
                </div>
              )}

              <div className={`w-14 h-14 rounded-full ${option.highlight ? 'bg-accent-cald/10 text-accent-cald' : 'bg-primar/10 text-primar'} flex items-center justify-center mb-6`}>
                <option.icon className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-titlu font-semibold text-text-principal mb-2">
                {option.title}
              </h3>

              <div className="mb-6">
                <div className="text-4xl font-bold text-text-principal mb-1">
                  {option.price}
                </div>
                <div className="text-text-secundar">
                  {option.duration}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primar mr-2 mt-1">✓</span>
                    <span className="text-text-secundar">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={option.highlight ? 'primary' : 'secondary'}
                size="md"
                onClick={scrollToContact}
                className="w-full"
              >
                {option.highlight ? 'Rezervă acum' : 'Programează'}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Pachete */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-titlu font-semibold text-text-principal mb-2">
              Pachete avantajoase
            </h3>
            <p className="text-text-secundar">
              Economisești când alegi să investești în procesul tău terapeutic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-fundal-secundar rounded-xl p-6 border-2 border-primar/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <Package className="w-8 h-8 text-primar" />
                  <span className="bg-primar text-white text-sm px-3 py-1 rounded-full font-medium">
                    {pkg.savings}
                  </span>
                </div>
                <h4 className="font-titlu text-xl font-semibold text-text-principal mb-3">
                  {pkg.title}
                </h4>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-primar">{pkg.price}</span>
                  <span className="text-text-secundar line-through">{pkg.originalPrice}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {/* Tarif redus */}
          <div className="bg-alerta-blanda/30 rounded-xl p-6 md:p-8 border-l-4 border-accent-cald">
            <p className="text-text-principal leading-relaxed font-medium">
              Dacă situația financiară este o barieră reală, hai să vorbim. Am câteva locuri rezervate pentru tarif redus.
            </p>
          </div>

          {/* Factură */}
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <p className="text-text-secundar">
              <strong className="text-text-principal">Notă:</strong> Pot emite factură fiscală cu cod CAEN pentru servicii de psihologie. Întreabă despre asta la evaluarea inițială.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
