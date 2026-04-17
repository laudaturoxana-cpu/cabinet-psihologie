'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { User, Users, Phone, Brain, MessageSquare, Stethoscope, MapPin, Video } from 'lucide-react';

const services = [
  {
    icon: Brain,
    tag: 'Psihologie',
    title: 'Psihologie Clinică',
    description: 'Evaluare psihologică și suport specializat pentru anxietate, depresie, burnout, crize emoționale și tulburări de adaptare. Abordare empatică și bazată pe dovezi.',
    subdescription: 'Psihologii clinicieni din echipa noastră oferă evaluări complete și planuri de intervenție personalizate.',
    details: [
      { label: 'Format', value: 'Cabinet București sau Online' },
      { label: 'Durata', value: '50 minute/ședință' },
      { label: 'Preț', value: 'De la 200 lei/ședință' },
    ],
    cta: 'Programează consultație',
    color: 'green',
  },
  {
    icon: Stethoscope,
    tag: 'Psihiatrie',
    title: 'Psihiatrie',
    description: 'Evaluare psihiatrică, diagnostic și tratament medicamentos pentru tulburări de anxietate, depresie, tulburare bipolară, ADHD, insomnie și alte afecțiuni psihice.',
    subdescription: 'Psihiatrul nostru colaborează strâns cu psihologii și psihoterapeuții pentru un tratament integrat, nu izolat.',
    details: [
      { label: 'Format', value: 'Cabinet București sau Online' },
      { label: 'Prima vizită', value: '60 minute' },
      { label: 'Preț', value: 'De la 300 lei/consultație' },
    ],
    cta: 'Solicită consultație psihiatrică',
    color: 'sand',
  },
  {
    icon: MessageSquare,
    tag: 'Logopedie',
    title: 'Logopedie',
    description: 'Evaluare și terapie logopedică pentru copii (de la 2 ani) și adulți: bâlbâială, tulburări de articulație, întârziere în vorbire, dislexie, disgrafie, tulburări de voce.',
    subdescription: 'Logopezii noștri folosesc metode moderne, jucăușe pentru copii și practice pentru adulți — în cabinet sau online.',
    details: [
      { label: 'Vârste', value: 'Copii (2+ ani) și adulți' },
      { label: 'Format', value: 'Cabinet București sau Online' },
      { label: 'Preț', value: 'De la 180 lei/ședință' },
    ],
    cta: 'Programează evaluare logopedică',
    color: 'green',
  },
  {
    icon: User,
    tag: 'Psihoterapie',
    title: 'Psihoterapie Individuală',
    description: 'Proces terapeutic structurat pentru anxietate, depresie, traume, probleme de relație și criză de identitate. Folosim metode validate: CBT, terapie psihodinamică, EMDR, ACT.',
    subdescription: 'Fiecare terapeut are specializarea sa — te conectăm cu cel mai potrivit specialist pentru nevoile tale.',
    details: [
      { label: 'Durata', value: '50 minute/ședință' },
      { label: 'Format', value: 'Cabinet București sau Online (Zoom)' },
      { label: 'Preț', value: 'De la 250 lei/ședință | Pachete disponibile' },
    ],
    cta: 'Programează prima ședință',
    color: 'sand',
  },
  {
    icon: Users,
    tag: 'Cuplu',
    title: 'Terapie de Cuplu',
    description: 'Sprijin specializat pentru cupluri care traversează conflicte repetate, comunicare deficitară, infidelitate sau distanțare emoțională. Lucrăm cu ambii parteneri.',
    subdescription: 'Terapeuții de cuplu din echipa noastră sunt specializați în metodele Gottman și abordări sistemice.',
    details: [
      { label: 'Durata', value: '60 minute/ședință' },
      { label: 'Format', value: 'Cabinet București (recomandat) sau Online' },
      { label: 'Preț', value: 'De la 300 lei/ședință' },
    ],
    cta: 'Programează evaluare cuplu',
    color: 'green',
  },
  {
    icon: Phone,
    tag: 'Gratuit',
    title: 'Evaluare Inițială Gratuită',
    description: '15 minute telefonice sau pe Zoom pentru a discuta ce te aduce la noi, cum lucrăm și dacă suntem potriviti pentru tine. Fără presiune, fără obligații.',
    subdescription: 'Înțelegem că primul pas e cel mai greu. De aceea îl facem ușor.',
    details: [
      { label: 'Preț', value: 'GRATUIT' },
      { label: 'Durata', value: '15 minute' },
      { label: 'Format', value: 'Telefon sau Zoom' },
    ],
    cta: 'Rezervă apel gratuit',
    color: 'highlight',
    highlight: true,
  },
];

const colorMap = {
  green: {
    iconBg: 'bg-primar/10',
    iconColor: 'text-primar',
    tag: 'bg-primar/10 text-primar',
    detailsBg: 'bg-fundal-principal',
  },
  sand: {
    iconBg: 'bg-secundar/20',
    iconColor: 'text-secundar-dark',
    tag: 'bg-secundar/20 text-secundar-dark',
    detailsBg: 'bg-fundal-principal',
  },
  highlight: {
    iconBg: 'bg-primar/10',
    iconColor: 'text-primar',
    tag: 'bg-primar text-white',
    detailsBg: 'bg-fundal-principal',
  },
};

export const Services: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
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
          <span className="inline-block text-sm font-medium text-primar bg-primar/10 px-4 py-1.5 rounded-full mb-4">
            Serviciile noastre
          </span>
          <h2 className="mb-6">Psihologie, Psihiatrie și Logopedie<br />în București și Online</h2>
          <p className="text-xl text-text-secundar leading-relaxed">
            O echipă completă de specialiști sub același acoperiș — pentru că sănătatea mintală are mai multe fațete.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto mb-8">
          {services.map((service, index) => {
            const colors = colorMap[service.color as keyof typeof colorMap];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col ${
                  service.highlight ? 'border-2 border-primar ring-1 ring-primar/20' : 'border border-fundal-secundar'
                }`}
              >
                <div className="p-7 flex flex-col flex-1">
                  {/* Tag + Icon */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${colors.iconBg} ${colors.iconColor} flex items-center justify-center`}>
                      <service.icon className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colors.tag}`}>
                      {service.tag}
                    </span>
                  </div>

                  {/* Title + Description */}
                  <h3 className="text-xl font-titlu font-semibold text-text-principal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-secundar leading-relaxed text-sm mb-2">
                    {service.description}
                  </p>
                  <p className="text-text-principal text-sm italic mb-5">
                    {service.subdescription}
                  </p>

                  {/* Details */}
                  <div className={`${colors.detailsBg} rounded-xl p-4 mb-5 space-y-2 border border-fundal-secundar`}>
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start justify-between gap-3">
                        <span className="text-text-secundar text-xs font-medium flex-shrink-0">{detail.label}:</span>
                        <span className="text-text-principal text-xs text-right font-medium">{detail.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Button
                      variant={service.highlight ? 'gold' : 'secondary'}
                      size="sm"
                      onClick={scrollToContact}
                      className="w-full"
                    >
                      {service.cta}
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Info suplimentare */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-xl p-6 shadow-sm border border-fundal-secundar">
            <div className="flex items-center space-x-3 mb-3">
              <MapPin className="w-5 h-5 text-primar" />
              <h4 className="font-titlu text-lg font-semibold">La cabinet — București</h4>
            </div>
            <p className="text-text-secundar leading-relaxed text-sm">
              Cabinet modern, privat și confortabil în centrul Bucureștiului. Acces facil cu transportul în comun și parcare în zonă.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-fundal-secundar">
            <div className="flex items-center space-x-3 mb-3">
              <Video className="w-5 h-5 text-primar" />
              <h4 className="font-titlu text-lg font-semibold">Online — Oriunde în România</h4>
            </div>
            <p className="text-text-secundar leading-relaxed text-sm">
              Ședințe prin platformă securizată, din confortul casei tale. Disponibil pentru psihologie, psihoterapie și logopedie.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
