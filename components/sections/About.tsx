'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Award, GraduationCap, User, Users } from 'lucide-react';

const teamMembers = [
  {
    role: 'Psiholog Clinician',
    specialty: 'Anxietate · Depresie · Burnout',
    description: 'Specializat în evaluare psihologică și intervenție terapeutică pentru adulți. Abordare caldă, bazată pe curiozitate și respect față de ritmul fiecărui client.',
    credentials: ['Licență Psihologie — Univ. București', 'Master Psihologie Clinică', 'Supervizare clinică continuă'],
    color: 'green',
  },
  {
    role: 'Psihoterapeut',
    specialty: 'Traume · Relații · Identitate',
    description: 'Lucrează cu adulți care traversează traume, dificultăți de relație sau crize de identitate. Metodă integrativă: CBT, EMDR, psihodinamic.',
    credentials: ['Licență Psihologie — Univ. București', 'Formare în Psihoterapie Integrativă', 'Certificat EMDR Europa'],
    color: 'sand',
  },
  {
    role: 'Psihiatru',
    specialty: 'Diagnostic · Tratament · ADHD',
    description: 'Oferă evaluare psihiatrică completă, diagnostic și tratament medicamentos. Colaborează permanent cu echipa pentru un plan integrat de sănătate mintală.',
    credentials: ['Medic Specialist Psihiatrie', 'Rezidențiat Spitalul Clinic București', 'Formare în Psihofarmacologie'],
    color: 'green',
  },
  {
    role: 'Logoped',
    specialty: 'Vorbire · Limbaj · Dislexie',
    description: 'Evaluare și terapie logopedică pentru copii și adulți. Metodă jucăușă, centrată pe copil — și pragmatică, orientată pe rezultat, pentru adulți.',
    credentials: ['Licență Logopegie — Univ. București', 'Specializare Dislexie și Disgrafie', 'Formare în Terapie de Vorbire pentru Adulți'],
    color: 'sand',
  },
];

const values = [
  {
    icon: Shield,
    title: 'Confidențialitate absolută',
    description: 'Cadru etic și legal strict, respectat de întreaga echipă',
  },
  {
    icon: Heart,
    title: 'Zero judecată',
    description: 'Spațiu sigur pentru vulnerabilitate — indiferent de ce aduci',
  },
  {
    icon: Award,
    title: 'Abordare integrată',
    description: 'Psihologie, psihiatrie și logopedie în colaborare strânsă',
  },
  {
    icon: GraduationCap,
    title: 'Formare continuă',
    description: 'Supervizare și training regulat pentru toți membrii echipei',
  },
];

const colorMap = {
  green: {
    iconBg: 'bg-primar/10',
    iconColor: 'text-primar',
    badge: 'bg-primar text-white',
    border: 'border-primar/20',
    checkmark: 'text-primar',
  },
  sand: {
    iconBg: 'bg-secundar/20',
    iconColor: 'text-secundar-dark',
    badge: 'bg-secundar text-text-principal',
    border: 'border-secundar/30',
    checkmark: 'text-secundar-dark',
  },
};

export const About: React.FC = () => {
  return (
    <section id="despre" className="section-spacing bg-fundal-principal">
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
            Cine suntem
          </span>
          <h2 className="mb-6">O echipă tânără de specialiști<br />dedicați sănătății tale mintale</h2>
          <p className="text-xl text-text-secundar leading-relaxed">
            Nu credem în soluții universale. Credem în potrivirea corectă dintre specialist și client — și în colaborarea între discipline pentru rezultate reale.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
          {teamMembers.map((member, index) => {
            const colors = colorMap[member.color as keyof typeof colorMap];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-7 shadow-sm border ${colors.border} hover:shadow-md transition-all duration-300`}
              >
                {/* Avatar placeholder + Role */}
                <div className="flex items-start space-x-4 mb-5">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${colors.iconBg} ${colors.iconColor} flex items-center justify-center`}>
                    <User className="w-7 h-7" />
                  </div>
                  <div>
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-2 ${colors.badge}`}>
                      {member.role}
                    </span>
                    <p className="text-xs text-text-secundar font-medium">{member.specialty}</p>
                  </div>
                </div>

                <p className="text-text-secundar leading-relaxed text-sm mb-5">
                  {member.description}
                </p>

                <ul className="space-y-2">
                  {member.credentials.map((cred, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className={`mr-2 mt-0.5 font-bold ${colors.checkmark}`}>✓</span>
                      <span className="text-text-secundar">{cred}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Despre cabinet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-primar rounded-3xl p-10 md:p-14 max-w-5xl mx-auto mb-16 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }}></div>
          </div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-titlu font-semibold text-white mb-4">
                De ce o echipă și nu un singur specialist?
              </h3>
              <p className="text-white/80 leading-relaxed mb-4">
                Sănătatea mintală rareori are o singură față. Uneori simptomele cer și o evaluare psihiatrică, alteori terapia logopedică merge mână în mână cu cea psihologică.
              </p>
              <p className="text-white/80 leading-relaxed">
                Având o echipă completă, colaborăm intern pentru a îți oferi cel mai potrivit plan — fără să fii nevoiți să cauți singur specialiști diferiți.
              </p>
            </div>
            <div className="space-y-4">
              {[
                'Psihologi clinicieni atestați CPR',
                'Psihoterapeuți cu supervizare continuă',
                'Psihiatru pentru evaluare și tratament',
                'Logopezi specializați copii și adulți',
                'Abordare interdisciplinară și colaborativă',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white/90 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Valori */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-titlu font-semibold text-center text-text-principal mb-10">
            Valorile noastre comune
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-fundal-secundar text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primar/10 text-primar flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-text-principal mb-2 text-sm">{value.title}</h4>
                <p className="text-text-secundar text-xs leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
