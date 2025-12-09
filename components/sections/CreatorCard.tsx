'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar as CalendarIcon, CheckCircle } from 'lucide-react';

const benefits = [
  'Website-uri care convertesc vizitatori în clienți',
  'Design modern și profesionist adaptatBusinessului tău',
  'Optimizare SEO și performanță maximă',
  'Consultație gratuită de 30 minute',
];

export const CreatorCard: React.FC = () => {
  return (
    <section className="section-spacing-small bg-gradient-to-br from-accent-cald/10 via-fundal-principal to-fundal-secundar">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Card principal */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12 lg:p-16">
              {/* Header cu icon */}
              <div className="flex items-center justify-center mb-8">
                <div className="bg-accent-cald/10 rounded-full p-4">
                  <Sparkles className="w-10 h-10 text-accent-cald" />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-center mb-4">
                Vrei un website ca acesta?
              </h2>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-text-principal text-center mb-6 font-medium">
                Website creat de <span className="text-accent-cald">ROXANA LĂUDATU</span>
              </p>

              <p className="text-lg text-text-secundar text-center mb-8">
                Specialist AI Business & Prompt Engineering
              </p>

              {/* Description */}
              <div className="max-w-3xl mx-auto mb-10">
                <p className="text-text-secundar leading-relaxed-custom text-center text-lg">
                  Ești specialist în psihologie, coaching, terapie sau consultanță și vrei un website profesionist care să aducă clienți? Acest site a fost creat cu gândirea strategică despre cum clienții caută și aleg un specialist.
                </p>
                <p className="text-text-principal font-medium leading-relaxed-custom text-center mt-4 text-lg">
                  Nu e doar "frumos" - e construit să convertească vizitatori în programări reale.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-3xl mx-auto">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3 bg-fundal-secundar rounded-lg p-4"
                  >
                    <CheckCircle className="w-6 h-6 text-accent-cald flex-shrink-0 mt-0.5" />
                    <span className="text-text-principal">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="text-center space-y-6">
                <a
                  href="https://calendly.com/laudatu-roxana/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-accent-cald text-white px-10 py-5 rounded-xl font-medium text-lg transition-all duration-300 hover:bg-opacity-90 hover:shadow-2xl hover:scale-105 focus:ring-4 focus:ring-accent-cald focus:ring-offset-2 group"
                >
                  <CalendarIcon className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  Programează consultație website gratuită
                </a>

                <p className="text-text-secundar max-w-2xl mx-auto">
                  30 minute în care discutăm despre nevoile tale și cum un website poate să îți aducă clienții potriviți.
                </p>

                {/* Info creator */}
                <div className="pt-8 border-t border-fundal-secundar mt-8">
                  <p className="text-text-secundar italic">
                    Pentru antreprenori, specialiști, consultanți care vor website-uri profesioniste<br />
                    construite strategic pentru a atrage și converti clienții ideali.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative bottom accent */}
            <div className="h-2 bg-gradient-to-r from-primar via-accent-cald to-secundar"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
