'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Heart, Brain, Clock, Users, Compass, TreePine, Flame, Wind } from 'lucide-react';

const problems = [
  {
    icon: Wind,
    title: 'Anxietate și atacuri de panică',
    description: 'Când inima îți bate nebunește fără motiv, când tot ce simți e că pierzi controlul și nu înțelegi de ce. Când teama a devenit colegul tău de zi cu zi.',
  },
  {
    icon: Brain,
    title: 'Depresie și epuizare emoțională',
    description: 'Când nimic nu mai are culoare, când te simți gol/goală pe dinăuntru, când chiar și lucrurile care îți plăceau nu mai contează. Când te trezești obosit/ă chiar dacă ai dormit.',
  },
  {
    icon: TreePine,
    title: 'Traume și experiențe dureroase din trecut',
    description: 'Când trecutul refuză să te lase în pace. Când amintirile te copleșesc, când simți că ceva din ce s-a întâmplat îți dictează încă prezentul.',
  },
  {
    icon: Heart,
    title: 'Probleme de relație și dependență emoțională',
    description: 'Când te pierzi în celălalt, când dragostea doare mai mult decât vindecă, când singurătatea din doi e mai grea decât singurătatea reală.',
  },
  {
    icon: Compass,
    title: 'Criză de identitate și lipsă de scop',
    description: 'Când nu mai știi cine ești cu adevărat, când faci tot ce trebuie dar te simți vid/vidă, când viața pare că merge pe pilot automat.',
  },
  {
    icon: Clock,
    title: 'Traumă de dezvoltare și copilărie dificilă',
    description: 'Când ce s-a întâmplat în copilărie încă îți afectează prezentul. Când părinții, deși poate au încercat, nu au știut cum să îți ofere ce aveai nevoie.',
  },
  {
    icon: Flame,
    title: 'Burnout și epuizare profesională',
    description: 'Când succesul pe dinafară nu se potrivește cu golul din interior. Când munca te-a consumat până la punctul în care nu mai recunoști persoana din oglindă.',
  },
  {
    icon: Users,
    title: 'Dificultăți în procesarea emoțiilor',
    description: 'Când simți prea mult sau nu simți deloc. Când furia explodează necontrolat sau când plânsul vine doar când ești singur/ă.',
  },
];

export const Problems: React.FC = () => {
  return (
    <section id="probleme" className="section-spacing bg-fundal-principal">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="mb-6">În ce situații mă poți contacta</h2>
          <p className="text-xl text-text-secundar leading-relaxed">
            Nu trebuie să ai toate răspunsurile. Uneori e suficient să știi că ceva nu e în regulă și să ceri ajutor.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {problems.map((problem, index) => (
            <Card
              key={index}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
              variant="elevated"
              hoverEffect={true}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Validare text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-alerta-blanda/30 rounded-xl p-8 md:p-10 max-w-4xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl text-text-principal leading-relaxed font-accent italic">
            "Nu trebuie să încadrezi perfect ceea ce simți într-o etichetă. Multe dintre aceste probleme coexistă sau se suprapun. De aici începem - cu ceea ce simți tu acum, cum reușești să pui în cuvinte."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
