'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, FileText, RefreshCw, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: Phone,
    title: 'Evaluarea inițială',
    duration: '15 min gratis, telefonic',
    description: 'Îmi spui pe scurt ce te aduce aici. Eu îți explic cum lucrez. Decidem dacă ne potrivim. Fără presiune.',
  },
  {
    number: '2',
    icon: FileText,
    title: 'Prima ședință - Cunoaștere',
    duration: '50 min',
    description: 'Povestești liber despre ceea ce simți și ce te-a adus la terapie. Eu ascult, pun întrebări clarificatoare și încep să înțeleg contextul. La final stabilim împreună obiectivele terapiei.',
  },
  {
    number: '3',
    icon: RefreshCw,
    title: 'Procesul terapeutic',
    duration: '8-20+ ședințe',
    description: 'Explorăm împreună rădăcinile problemelor, schimburile de gândire, emoțiile neexprimate. Lucrăm cu instrumente specifice - exerciții cognitive, procesare traumă, tehnici de reglare emoțională.',
    subdescription: 'Frecvență recomandată: săptămânal sau bisăptămânal. Durată estimată: variază enorm - 2-3 luni pentru probleme acute, 6-12+ luni pentru traume complexe.',
  },
  {
    number: '4',
    icon: CheckCircle,
    title: 'Reevaluare și închidere',
    duration: 'Flexibil',
    description: 'La intervale regulate evaluăm progresul. Când simți că ești pregătit/ă, planificăm închiderea terapiei. Poți reveni oricând.',
  },
];

export const Process: React.FC = () => {
  return (
    <section id="proces" className="section-spacing bg-fundal-secundar">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="mb-6">Cum funcționează terapia</h2>
          <p className="text-xl text-text-secundar leading-relaxed">
            Transparență totală - vrei să știi exact cum arată procesul, fără surprize neplăcute.
          </p>
        </motion.div>

        {/* Timeline - Vertical */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-primar/20 hidden md:block"></div>
              )}

              <div className="flex flex-col md:flex-row gap-6 mb-12 md:mb-16">
                {/* Number + Icon */}
                <div className="flex items-start md:items-center gap-4 md:gap-0">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primar text-white flex items-center justify-center text-2xl font-bold font-titlu shadow-lg z-10 relative">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center text-primar md:ml-6">
                    <step.icon className="w-7 h-7" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-2xl font-titlu font-semibold text-text-principal">
                      {step.title}
                    </h3>
                    <span className="text-sm font-medium text-primar bg-primar/10 px-3 py-1 rounded-full mt-2 sm:mt-0 inline-block w-fit">
                      {step.duration}
                    </span>
                  </div>

                  <p className="text-text-secundar leading-relaxed-custom mb-3">
                    {step.description}
                  </p>

                  {step.subdescription && (
                    <p className="text-text-secundar text-sm leading-relaxed bg-fundal-secundar rounded-lg p-4 italic">
                      {step.subdescription}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Validare finală */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 md:p-10 max-w-4xl mx-auto shadow-lg border-l-4 border-accent-cald"
        >
          <h3 className="text-2xl font-titlu font-semibold text-text-principal mb-4">
            Cea mai frecventă întrebare: Cât durează terapia?
          </h3>
          <p className="text-text-secundar leading-relaxed-custom text-lg">
            <strong className="text-text-principal">Răspuns onest:</strong> Depinde de tine, de problemă, de cât de adânc vrei să mergi. Nu există "quick fix" pentru durerea emoțională - dar există vindecare reală.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
