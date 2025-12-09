'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { User, Users, Phone, Calendar, MapPin, Video } from 'lucide-react';

const services = [
  {
    icon: User,
    title: 'Psihoterapie individuală',
    description: 'Întâlniri săptămânale sau bisăptămânale în care explorăm împreună rădăcinile a ceea ce simți. Lucrăm cu metodele care se potrivesc nevoilor tale specifice - terapie cognitivă, psihodinamică, orientată către traumă sau integrativă.',
    subdescription: 'Nu există un "script" prestabilit. Fiecare persoană vine cu poveste și ritm propriu.',
    details: [
      { label: 'Durata', value: '50 minute/ședință' },
      { label: 'Format', value: 'Cabinet sau Online (Zoom securizat)' },
      { label: 'Preț', value: '250 lei/ședință | Pachete disponibile' },
    ],
    cta: 'Programează o evaluare gratuită',
    iconBg: 'bg-primar/10',
    iconColor: 'text-primar',
  },
  {
    icon: Users,
    title: 'Terapie de cuplu',
    description: 'Când ambii parteneri vor să salveze relația dar nu mai știu cum. Când comunicarea s-a rupt, când rănile nediscutate au devenit ziduri.',
    subdescription: 'Lucrăm la reconstruirea încrederii, la comunicare autentică, la reînvățarea intimității emoționale.',
    details: [
      { label: 'Durata', value: '60 minute/ședință' },
      { label: 'Format', value: 'Doar la cabinet (recomandare pentru prezență fizică comună)' },
      { label: 'Preț', value: '300 lei/ședință' },
    ],
    cta: 'Programează evaluare cuplu',
    iconBg: 'bg-secundar/10',
    iconColor: 'text-secundar',
  },
  {
    icon: Phone,
    title: 'Evaluare inițială gratuită (15 min)',
    description: 'Înțeleg că primul pas e cel mai greu și că nu știi dacă sunt persoana potrivită pentru tine.',
    subdescription: 'De aceea ofer 15 minute gratuite de evaluare telefonică - poți să îmi spui pe scurt ce te aduce aici, eu îți explic cum lucrez și decidem împreună dacă ne potrivim.',
    details: [
      { label: 'Fără presiune', value: 'fără obligație' },
    ],
    cta: 'Rezervă apel evaluare',
    iconBg: 'bg-accent-cald/10',
    iconColor: 'text-accent-cald',
    highlight: true,
  },
];

export const Services: React.FC = () => {
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
    <section id="servicii" className="section-spacing bg-fundal-secundar">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="mb-6">Servicii și modalități de lucru</h2>
          <p className="text-xl text-text-secundar leading-relaxed">
            Fiecare persoană e diferită. Îți ofer opțiuni adaptate nevoilor și preferințelor tale.
          </p>
        </motion.div>

        {/* Services Cards - Layout asimetric */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${
                service.highlight ? 'border-2 border-accent-cald' : ''
              }`}
            >
              <div className="p-8 md:p-10">
                {/* Icon și Title */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-full ${service.iconBg} ${service.iconColor} flex items-center justify-center`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-titlu font-semibold text-text-principal mb-3">
                      {service.title}
                    </h3>
                    {service.highlight && (
                      <span className="inline-block bg-accent-cald text-white text-sm px-3 py-1 rounded-full font-medium">
                        Recomandat pentru început
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-4 mb-6">
                  <p className="text-text-secundar leading-relaxed-custom">
                    {service.description}
                  </p>
                  <p className="text-text-principal leading-relaxed-custom italic">
                    {service.subdescription}
                  </p>
                </div>

                {/* Details */}
                <div className="bg-fundal-secundar rounded-lg p-6 mb-6 space-y-3">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start justify-between">
                      <span className="text-text-secundar font-medium">{detail.label}:</span>
                      <span className="text-text-principal text-right ml-4">{detail.value}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  variant={service.highlight ? 'primary' : 'secondary'}
                  size="md"
                  onClick={scrollToContact}
                  className="w-full sm:w-auto"
                >
                  {service.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info suplimentare - format și locație */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="w-6 h-6 text-primar" />
              <h4 className="font-titlu text-xl font-semibold">La cabinet</h4>
            </div>
            <p className="text-text-secundar leading-relaxed">
              Spațiu privat, confortabil și liniștitor în centrul Bucureștiului. Acces ușor cu transportul în comun și opțiuni de parcare în zonă.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <Video className="w-6 h-6 text-primar" />
              <h4 className="font-titlu text-xl font-semibold">Online</h4>
            </div>
            <p className="text-text-secundar leading-relaxed">
              Ședințe prin Zoom securizat, din confortul casei tale. Eficiență similară cu ședințele față-în-față pentru majoritatea problemelor.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
