'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/Button';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

// Schema validare Zod
const contactSchema = z.object({
  name: z.string().min(2, 'Te rog să completezi numele tău'),
  email: z.string().email('Te rog să introduci o adresă de email validă'),
  phone: z.string().min(10, 'Te rog să introduci un număr de telefon valid'),
  preferredFormat: z.enum(['cabinet', 'online', 'indiferent']),
  sessionType: z.enum(['evaluare', 'individuala', 'cuplu']),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '+40 123 456 789',
    link: 'tel:+40123456789',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@cabinetpsihologie.ro',
    link: 'mailto:contact@cabinetpsihologie.ro',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Trimite mesaj',
    link: 'https://wa.me/40123456789?text=Bună,%20aș%20vrea%20să%20programez%20o%20ședință',
  },
];

const schedule = [
  { day: 'Luni - Joi', hours: '10:00 - 19:00' },
  { day: 'Vineri', hours: '10:00 - 16:00' },
  { day: 'Weekend', hours: 'Programări ocazionale (anunțate pe site)' },
];

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulare trimitere (în producție, aici ar fi API call)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Log pentru demonstrație
      console.log('Form submitted:', data);

      setSubmitStatus('success');
      reset();

      // Reset success message după 5 secunde
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-spacing bg-fundal-secundar">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="mb-6">Programează prima ședință</h2>
          <p className="text-xl text-text-secundar leading-relaxed">
            Primul pas e mereu cel mai greu. Dar ești deja aici - și asta contează enorm.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          {/* Contact Form - 60% */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
              <h3 className="text-2xl font-titlu font-semibold text-text-principal mb-6">
                Completează formularul
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Nume */}
                <div>
                  <label htmlFor="name" className="block text-text-principal font-medium mb-2">
                    Nume complet <span className="text-primar">*</span>
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      errors.name ? 'border-red-400' : 'border-fundal-secundar'
                    } focus:border-primar focus:outline-none transition-colors`}
                    placeholder="ex: Maria Popescu"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-text-principal font-medium mb-2">
                    Email <span className="text-primar">*</span>
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      errors.email ? 'border-red-400' : 'border-fundal-secundar'
                    } focus:border-primar focus:outline-none transition-colors`}
                    placeholder="ex: maria.popescu@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Telefon */}
                <div>
                  <label htmlFor="phone" className="block text-text-principal font-medium mb-2">
                    Telefon <span className="text-primar">*</span>
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    id="phone"
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      errors.phone ? 'border-red-400' : 'border-fundal-secundar'
                    } focus:border-primar focus:outline-none transition-colors`}
                    placeholder="ex: 0712345678"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                {/* Format preferat */}
                <div>
                  <label htmlFor="preferredFormat" className="block text-text-principal font-medium mb-2">
                    Prefer <span className="text-primar">*</span>
                  </label>
                  <select
                    {...register('preferredFormat')}
                    id="preferredFormat"
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      errors.preferredFormat ? 'border-red-400' : 'border-fundal-secundar'
                    } focus:border-primar focus:outline-none transition-colors bg-white`}
                  >
                    <option value="indiferent">Indiferent</option>
                    <option value="cabinet">La cabinet</option>
                    <option value="online">Online</option>
                  </select>
                </div>

                {/* Tip ședință */}
                <div>
                  <label htmlFor="sessionType" className="block text-text-principal font-medium mb-2">
                    Tip ședință <span className="text-primar">*</span>
                  </label>
                  <select
                    {...register('sessionType')}
                    id="sessionType"
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      errors.sessionType ? 'border-red-400' : 'border-fundal-secundar'
                    } focus:border-primar focus:outline-none transition-colors bg-white`}
                  >
                    <option value="evaluare">Evaluare gratuită (15 min)</option>
                    <option value="individuala">Ședință individuală</option>
                    <option value="cuplu">Terapie de cuplu</option>
                  </select>
                </div>

                {/* Mesaj opțional */}
                <div>
                  <label htmlFor="message" className="block text-text-principal font-medium mb-2">
                    Mesaj (opțional)
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border-2 border-fundal-secundar focus:border-primar focus:outline-none transition-colors resize-none"
                    placeholder="Poți să îmi spui pe scurt ce te aduce aici - sau lasă gol dacă preferi să discutăm telefonic"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={isSubmitting}
                  className="w-full"
                >
                  Trimite cererea de programare
                </Button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-primar/10 text-primar p-4 rounded-lg border-l-4 border-primar"
                  >
                    <p className="font-medium">Mesajul tău a fost trimis cu succes!</p>
                    <p className="text-sm mt-1">
                      Îți răspund în maxim 24 ore. Dacă e urgent, sună direct la numărul de telefon.
                    </p>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-100 text-red-700 p-4 rounded-lg border-l-4 border-red-500"
                  >
                    <p className="font-medium">A apărut o eroare</p>
                    <p className="text-sm mt-1">
                      Te rog să încerci din nou sau contactează-mă direct la telefon/email.
                    </p>
                  </motion.div>
                )}

                {/* Info text */}
                <p className="text-sm text-text-secundar text-center">
                  Îți răspund în maxim 24 ore (de obicei în câteva ore).<br />
                  Dacă e urgent, sună direct la <a href="tel:+40123456789" className="text-primar hover:underline">+40 123 456 789</a>
                </p>
              </form>
            </div>
          </motion.div>

          {/* Contact Info - 40% */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Methods */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-titlu font-semibold text-text-principal mb-6">
                Alternative de contact
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-fundal-secundar transition-colors group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primar/10 text-primar flex items-center justify-center group-hover:bg-primar group-hover:text-white transition-colors">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-text-secundar">{info.label}</p>
                      <p className="text-text-principal font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Program */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-6 h-6 text-primar" />
                <h3 className="text-xl font-titlu font-semibold text-text-principal">
                  Program
                </h3>
              </div>
              <div className="space-y-3">
                {schedule.map((item, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <span className="text-text-principal font-medium">{item.day}:</span>
                    <span className="text-text-secundar text-right ml-4">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Adresa */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="w-6 h-6 text-primar" />
                <h3 className="text-xl font-titlu font-semibold text-text-principal">
                  Adresa cabinet
                </h3>
              </div>
              <p className="text-text-secundar mb-4 leading-relaxed">
                Strada Exemplu, nr. 123, bloc A1, scara 2, etaj 3, ap. 15<br />
                Sector 1, București, 010101
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-fundal-secundar text-primar px-4 py-2 rounded-lg hover:bg-primar hover:text-white transition-colors text-sm font-medium"
              >
                Deschide în Google Maps →
              </a>
              <p className="text-xs text-text-secundar mt-4">
                Acces ușor cu transportul în comun (metrou Exemplu, autobuz 123)<br />
                Parcare disponibilă în zonă
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
