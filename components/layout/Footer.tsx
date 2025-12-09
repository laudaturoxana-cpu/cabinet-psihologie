import React from 'react';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

const footerNavigation = {
  navigare: [
    { name: 'Servicii', href: '#servicii' },
    { name: 'Despre', href: '#despre' },
    { name: 'Cum lucrez', href: '#proces' },
    { name: 'Întrebări frecvente', href: '#faq' },
    { name: 'Contact și programări', href: '#contact' },
  ],
  legal: [
    { name: 'Politică confidențialitate GDPR', href: '#gdpr' },
    { name: 'Termeni și condiții', href: '#termeni' },
  ],
};

const urgencyContacts = [
  { name: 'Urgențe', number: '112' },
  { name: 'Telefonul de Suflet', number: '0800 800 200' },
  { name: 'Salvați Copiii', number: '116 111' },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
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
    <footer className="bg-fundal-secundar">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Coloana 1: Brand și Contact */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <circle
                  cx="20"
                  cy="20"
                  r="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeDasharray="85 15"
                  strokeLinecap="round"
                  className="text-primar"
                  style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
                />
              </svg>
              <div className="font-titlu text-xl font-semibold text-text-principal">
                Cabinet Psihologie
              </div>
            </div>
            <p className="text-text-secundar italic mb-6">
              Spațiul tău sigur pentru vindecare
            </p>
            <div className="space-y-3">
              <a
                href="tel:+40123456789"
                className="flex items-center text-text-secundar hover:text-primar transition-colors group"
              >
                <Phone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                <span>+40 123 456 789</span>
              </a>
              <a
                href="mailto:contact@cabinetpsihologie.ro"
                className="flex items-center text-text-secundar hover:text-primar transition-colors group"
              >
                <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                <span>contact@cabinetpsihologie.ro</span>
              </a>
            </div>
          </div>

          {/* Coloana 2: Navigare */}
          <div>
            <h4 className="font-titlu text-lg font-semibold text-text-principal mb-4">
              Navigare
            </h4>
            <ul className="space-y-2">
              {footerNavigation.navigare.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="text-text-secundar hover:text-primar transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              {footerNavigation.legal.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-sm text-text-secundar hover:text-primar transition-colors mb-2"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Coloana 3: Resurse și Informații Urgență */}
          <div>
            <h4 className="font-titlu text-lg font-semibold text-text-principal mb-4">
              Resurse și informații
            </h4>
            <p className="text-text-secundar mb-4 text-sm leading-relaxed">
              Dacă simți că ești în pericol imediat, te rog să suni la:
            </p>
            <ul className="space-y-2">
              {urgencyContacts.map((contact) => (
                <li key={contact.name} className="flex items-baseline">
                  <span className="text-text-principal font-medium mr-2">•</span>
                  <span className="text-text-secundar">
                    <strong className="text-text-principal">{contact.name}:</strong>{' '}
                    <a href={`tel:${contact.number}`} className="hover:text-primar transition-colors">
                      {contact.number}
                    </a>
                  </span>
                </li>
              ))}
            </ul>

            {/* Social Media - opțional */}
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="text-text-secundar hover:text-primar transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-text-secundar hover:text-primar transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-text-secundar/20"></div>

        {/* Creator Card - MĂRIT ȘI VIZIBIL */}
        <div className="py-10">
          <div className="bg-accent-cald/10 border-2 border-accent-cald/30 rounded-xl p-8 md:p-10 text-center max-w-4xl mx-auto">
            <h3 className="font-titlu text-2xl md:text-3xl font-semibold text-text-principal mb-4">
              Website creat de ROXANA LĂUDATU
            </h3>
            <p className="text-lg text-text-principal font-medium mb-4">
              Specialist AI Business & Prompt Engineering
            </p>
            <p className="text-text-secundar leading-relaxed mb-6 max-w-2xl mx-auto">
              Vrei un website ca acesta pentru cabinetul/business-ul tău?<br />
              Pentru antreprenori, specialiști, consultanți care vor website-uri care convertesc vizitatori în clienți.
            </p>
            <a
              href="https://calendly.com/laudatu-roxana/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent-cald text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-0.5 focus:ring-2 focus:ring-accent-cald focus:ring-offset-2"
            >
              Programează o consultație gratuită →
            </a>
            <p className="text-sm text-text-secundar mt-4">
              30 minute în care discutăm despre nevoile tale și cum un website poate să îți aducă clienții potriviți.
            </p>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-text-secundar/20"></div>

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between text-sm text-text-secundar gap-4">
          <p>
            © {currentYear} Cabinet Psihologie. Toate drepturile rezervate. <br className="md:hidden" />
            Membru Colegiul Psihologilor din România nr. XXXXX
          </p>
          <p className="text-xs">
            Ultima actualizare: {new Date().toLocaleDateString('ro-RO', { year: 'numeric', month: 'long' })}
          </p>
        </div>
      </div>
    </footer>
  );
};
