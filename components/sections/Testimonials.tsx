'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'După 6 luni de terapie am înțeles de ce toate relațiile mele urmau același tipar distructiv. Nu a fost ușor să privesc în trecut, dar acum sunt într-o relație sănătoasă pentru prima dată în viață. Mulțumesc că ai avut răbdare cu mine.',
    author: 'Anca M.',
    age: '34 ani',
    location: 'București',
  },
  {
    quote: 'Am venit cu atacuri de panică atât de severe încât nu mai puteam ieși din casă. După 3 luni am înțeles de unde vin, am învățat instrumente de gestionare și acum trăiesc normal. Încă am momente dificile, dar nu mai sunt prizonieră.',
    author: 'Cristina R.',
    age: '28 ani',
    location: '',
  },
  {
    quote: 'Nu credeam că pot vorbi despre trauma din copilărie cu cineva. M-ai făcut să simt că e safe. Procesul e încă în desfășurare, dar pentru prima dată în viață nu mă mai simt rupt în două.',
    author: 'Andrei T.',
    age: '41 ani',
    location: '',
  },
  {
    quote: 'Prima dată când mi-ai zis că nu sunt nebună, ci doar copleșită, am plâns de ușurare. Mulțumesc că mi-ai dat voie să fiu vulnerabilă.',
    author: 'Maria D.',
    age: '36 ani',
    location: '',
  },
  {
    quote: 'Burnout-ul m-a adus aici. Eram convins că sunt slab pentru că nu mai fac față. Mi-ai arătat că nu e vorba de slăbiciune, ci de limite depășite constant. Acum știu să spun "nu" fără vinovăție.',
    author: 'Ștefan B.',
    age: '42 ani',
    location: '',
  },
  {
    quote: 'Mi-am petrecut toată viața încercând să fiu ce vor alții. Acum, după aproape un an de terapie, încep să descopăr cine sunt eu cu adevărat. E înspăimântător și eliberator în același timp.',
    author: 'Elena P.',
    age: '29 ani',
    location: '',
  },
];

export const Testimonials: React.FC = () => {
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
          <h2 className="mb-6">Ce spun clienții</h2>
          <p className="text-xl text-text-secundar leading-relaxed">
            Povești reale de la oameni reali care au ales să facă primul pas.
          </p>
        </motion.div>

        {/* Testimonials Grid - Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primar/10">
                <Quote className="w-12 h-12" />
              </div>

              {/* Quote Text */}
              <div className="relative z-10 mb-6">
                <p className="text-text-secundar leading-relaxed-custom font-accent italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="border-t border-fundal-secundar pt-4">
                <p className="text-text-principal font-semibold">
                  {testimonial.author}
                  {testimonial.age && <span className="text-text-secundar font-normal">, {testimonial.age}</span>}
                </p>
                {testimonial.location && (
                  <p className="text-text-secundar text-sm">{testimonial.location}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about confidentiality */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center max-w-2xl mx-auto"
        >
          <p className="text-sm text-text-secundar italic">
            * Testimonialele sunt reale, dar numele și unele detalii au fost modificate pentru a proteja confidențialitatea clienților.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
