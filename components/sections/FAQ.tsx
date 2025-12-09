'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Accordion } from '@/components/ui/Accordion';

const faqItems = [
  {
    question: 'Cum știu dacă am nevoie de terapie?',
    answer: 'Dacă te-ai pus această întrebare, probabil că da. Nu trebuie să ai o "problemă mare" ca să mergi la terapie. Orice te împiedică să trăiești viața pe care o vrei merită explorat. Dacă simți că ceva nu e în regulă, dacă emoțiile te copleșesc, dacă relațiile tale suferă sau dacă pur și simplu vrei să te înțelegi mai bine pe tine - acestea sunt motive suficiente.',
  },
  {
    question: 'Cât durează până văd rezultate?',
    answer: 'Unii clienți simt ușurare după primele 2-3 ședințe - simplul fapt de a fi ascultați și validați poate aduce confort imediat. Pentru alții, schimbările profunde apar după 2-3 luni de lucru constant. Nu există timeline universal - depinde de problema cu care vii, de cât de adânc vrei să mergi și de ritmul tău personal. Dar vei simți când lucrurile încep să se miște.',
  },
  {
    question: 'Pot să merg la terapie dacă iau medicamente?',
    answer: 'Da, absolut. Terapia și medicația pot funcționa foarte bine împreună - de fapt, cercetările arată că combinația dintre cele două e adesea cea mai eficientă. Dacă ești în tratament psihiatric, e chiar recomandat să ai și suport psihoterapeutic. Important e să comunic cu psihiatrul tău când e necesar (cu acordul tău) pentru a asigura cea mai bună îngrijire.',
  },
  {
    question: 'Ce se întâmplă dacă plâng în ședință?',
    answer: 'Plângi. Și e complet OK. Cabinetul e un spațiu sigur pentru toate emoțiile - inclusiv cele pe care le-ai ascuns toată viața. Plânsul e adesea o eliberare necesară, un semn că atingem ceva profund și real. Nu e nevoie să te scuzi, să te rușinezi sau să îți ceri iertare pentru că simți. Am șervețele și răbdare nelimitată.',
  },
  {
    question: 'Cât de confidențial este?',
    answer: 'Total confidențial. Sunt obligat/ă prin lege și cod etic să păstrez confidențialitatea absolută a tot ce discutăm. Excepții există doar în situații de pericol iminent pentru tine sau alții (risc suicidar activ, abuz asupra unui copil, etc.) - dar despre aceste situații te avertizez mereu înainte și discutăm împreună. Nimeni - nici familia, nici prietenii, nici angajatorul - nu va afla ce vorbim în ședințe fără acordul tău explicit scris.',
  },
  {
    question: 'Pot să vin și cu problemele "mici"?',
    answer: 'Nu există probleme mici dacă te afectează. Anxietatea din trafic e la fel de validă ca depresia severă dacă îți afectează calitatea vieții. Frustrarea la job e la fel de importantă ca trauma din copilărie dacă te face nefericit/ă în fiecare zi. Durerea ta e validă indiferent de "mărime" - și meriți sprijin pentru ea.',
  },
  {
    question: 'Cum funcționează online?',
    answer: 'Folosim Zoom securizat (sau altă platformă sigură), te conectezi de pe laptop sau telefon, din spațiul tău confortabil și privat. Eficiența e similară cu ședințele față-în-față pentru majoritatea problemelor - anxietate, depresie, probleme de relație, criză identitară. Unele metode (cum ar fi EMDR) pot fi adaptate pentru online. Singurul dezavantaj e lipsa prezenței fizice, dar mulți clienți apreciază confortul de a fi în mediul lor familiar.',
  },
  {
    question: 'Pot să întrerup terapia dacă nu simt că merge?',
    answer: 'Da, oricând. Ești liber/ă să oprești când vrei, fără explicații. Dar îți recomand să discutăm mai întâi - uneori ceea ce simți ca "nu merge" e de fapt rezistența normală față de schimbare, parte din procesul terapeutic. Dacă după discuție simți în continuare că nu ne potrivim, te pot îndruma către alt specialist care ar putea fi mai potrivit pentru tine. Nu există vină sau obligație să continui dacă nu simți conexiune.',
  },
];

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="section-spacing bg-fundal-secundar">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="mb-6">Întrebări frecvente</h2>
          <p className="text-xl text-text-secundar leading-relaxed">
            Răspunsuri oneste la întrebările pe care le au majoritatea oamenilor înainte de prima ședință.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion items={faqItems} allowMultiple={false} />
        </motion.div>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-sm"
        >
          <p className="text-text-secundar leading-relaxed mb-4">
            Nu ai găsit răspunsul la întrebarea ta?
          </p>
          <p className="text-text-principal font-medium">
            Sună-mă sau scrie-mi direct - îți răspund cu plăcere la orice nelămurire.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
