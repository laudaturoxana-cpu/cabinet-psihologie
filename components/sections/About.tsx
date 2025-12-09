'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Heart, Shield } from 'lucide-react';

const credentials = [
  'Licență în Psihologie - Universitatea București',
  'Master în Psihoterapie Integrativă - Universitatea București',
  'Membru în Colegiul Psihologilor din România (nr. XXXXX)',
  'Training intensiv în EMDR și Terapie Trauma-Informată',
  'Supraveghere clinică continuă',
];

const specializations = [
  'Anxietate și tulburări de panică',
  'Depresie și tulburări de dispoziție',
  'Traume complexe și PTSD',
  'Probleme de relație și atașament',
  'Criză existențială și identitară',
];

const values = [
  {
    icon: Shield,
    title: 'Confidențialitate absolută',
    description: 'Cadru etic și legal strict',
  },
  {
    icon: Heart,
    title: 'Zero judecată, empatie totală',
    description: 'Spațiu sigur pentru vulnerabilitate',
  },
  {
    icon: Award,
    title: 'Feedback honest și direct',
    description: 'Când e necesar, cu respect',
  },
  {
    icon: GraduationCap,
    title: 'Ritm dictat de client',
    description: 'Nu de terapeut sau protocol',
  },
];

export const About: React.FC = () => {
  return (
    <section id="despre" className="section-spacing bg-fundal-principal">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Imagine - 40% */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
              {/* Placeholder pentru foto profesionist */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primar/20 to-secundar/20 backdrop-blur-sm flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-primar/20 mx-auto mb-4 flex items-center justify-center">
                    <User className="w-16 h-16 text-primar" />
                  </div>
                  <p className="text-text-secundar italic text-sm">
                    [Foto profesionist:<br />
                    Lumină naturală,<br />
                    fundal neutru,<br />
                    expresie caldă dar profesionistă]
                  </p>
                </div>
              </div>

              {/* Certificări badge */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-lg p-4 w-11/12">
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <Award className="w-5 h-5 text-accent-cald" />
                  <span className="text-text-principal font-medium">
                    Membru CPR nr. XXXXX
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content - 60% */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8 mt-8 lg:mt-0"
          >
            <div>
              <h2 className="mb-6">Despre mine</h2>

              <div className="space-y-4 text-text-secundar leading-relaxed-custom">
                <p>
                  Mă numesc <strong className="text-text-principal">[Nume Psiholog]</strong> și lucrez ca psihoterapeut de peste <strong className="text-text-principal">X ani</strong>.
                </p>

                <p>
                  Nu o să îți spun că "totul va fi bine" pentru că ambii știm că vindecarea nu funcționează așa. Dar îți pot spune că ceea ce simți acum - oricât de copleșitor ar fi - nu te definește pentru totdeauna.
                </p>

                <p>
                  Am ales această profesie pentru că am crezut mereu că fiecare persoană merită un spațiu unde poate fi vulnerabilă fără consecințe. Unde durerea nu e privită ca slăbiciune, ci ca parte integrantă a experienței umane care așteaptă să fie înțeleasă.
                </p>
              </div>
            </div>

            {/* Educație și Experiență */}
            <div>
              <h3 className="text-2xl font-titlu font-semibold mb-4 text-text-principal">
                Educație și Experiență
              </h3>
              <ul className="space-y-3">
                {credentials.map((credential, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primar mr-3 mt-1">✓</span>
                    <span className="text-text-secundar">{credential}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specializări */}
            <div>
              <h3 className="text-2xl font-titlu font-semibold mb-4 text-text-principal">
                Specializări
              </h3>
              <p className="text-text-secundar mb-4">
                Lucrez în special cu persoane care se confruntă cu:
              </p>
              <div className="flex flex-wrap gap-2">
                {specializations.map((spec, index) => (
                  <span
                    key={index}
                    className="bg-primar/10 text-primar px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Abordare */}
            <div className="bg-fundal-secundar rounded-xl p-6">
              <h3 className="text-xl font-titlu font-semibold mb-3 text-text-principal">
                Abordare
              </h3>
              <p className="text-text-secundar leading-relaxed-custom">
                Nu cred în protocoloale rigide. Fiecare om vine cu poveste diferită și merită o abordare adaptată nevoilor sale. Folosesc elemente din terapie cognitivă, psihodinamică și orientată pe traumă - dar mai presus de toate, folosesc ascultarea activă și prezența autentică.
              </p>
            </div>

            {/* Valori */}
            <div>
              <h3 className="text-2xl font-titlu font-semibold mb-6 text-text-principal">
                Valori
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primar/10 text-primar flex items-center justify-center">
                      <value.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-text-principal mb-1">{value.title}</h4>
                      <p className="text-sm text-text-secundar">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Final Note */}
            <div className="bg-alerta-blanda/30 rounded-xl p-6 border-l-4 border-accent-cald">
              <p className="text-text-principal leading-relaxed-custom italic">
                Dacă te întrebi dacă sunt persoana potrivită pentru tine: Cel mai bun mod de a afla e să vorbim. De aceea ofer evaluarea inițială gratuită.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Import necesare pentru placeholder imagine
import { User } from 'lucide-react';
