import React, { useState, useEffect } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { LeadForm } from '../components/LeadForm';
import { FormType } from '../types';
import {
  Truck,
  MapPin,
  ShieldCheck,
  Clock,
  BarChart3,
  Package,
  TrendingUp,
  Users,
  Phone,
  Menu,
  X,
  ChevronRight,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

export const HomeDe = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeForm, setActiveForm] = useState<FormType | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Scroll handler for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openForm = (type: FormType) => setActiveForm(type);
  const closeForm = () => setActiveForm(null);
  // Здесь вставляешь ВЕСЬ контент из твоего оригинального return (от Hero до footer), кроме <nav>
  // То есть начиная с Hero Section и до конца, включая модалки (но модалки теперь в Navigation)

  return (
    <div className='min-h-screen bg-gray-50 font-sans text-slate-800'>
      {/* --- Hero Section --- */}

      {/* --- Hero Section --- */}
      <div className='relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden'>
        {/* Background Image with Overlay */}
        <div className='absolute inset-0 z-0'>
          <img
            src='https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
            alt='Logistics Truck on Road'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-navy-900 bg-opacity-70'></div>
        </div>

        <div className='relative z-10 text-center px-4 max-w-4xl mx-auto mt-16'>
          <span className='inline-block py-1 px-3 rounded-full bg-signal-500 bg-opacity-20 border border-signal-500 text-signal-500 font-bold mb-6 backdrop-blur-sm animate-fade-in-up'>
            ZUVERLÄSSIG. EUROPAWEIT. SCHNELL.
          </span>
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6'>
            Ihre Logistik. <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300'>
              Unsere Verantwortung.
            </span>
          </h1>
          <p className='text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light'>
            Spezialisiert auf Transporte von 3,5 bis 20 Tonnen. Wir optimieren Ihre Lieferkette mit
            Präzision und deutscher Zuverlässigkeit.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              variant='primary'
              size='lg'
              onClick={() => openForm(FormType.TRANSPORT)}
              className='group'>
              Kostenlose Kalkulation
              <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </Button>
            <Button
              variant='outline'
              size='lg'
              onClick={() =>
                document.getElementById('logistics')?.scrollIntoView({ behavior: 'smooth' })
              }>
              Logistik-Outsourcing
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white opacity-70'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 14l-7 7m0 0l-7-7m7 7V3'
            />
          </svg>
        </div>
      </div>

      {/* --- About Section --- */}
      <Section id='about'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='text-signal-500 font-bold tracking-wider uppercase mb-2'>Über Uns</h2>
            <h3 className='text-4xl font-extrabold text-navy-900 mb-6'>
              Seit 2022 Ihr Partner für Effizienz.
            </h3>
            <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
              AKTrans wurde mit einer klaren Vision gegründet: Transportdienstleistungen
              transparenter, schneller und zuverlässiger zu gestalten. Was mit einem einzelnen LKW
              begann, ist heute eine leistungsstarke Flotte, die täglich Waren quer durch
              Deutschland und Europa bewegt.
            </p>
            <p className='text-lg text-gray-600 mb-8 leading-relaxed'>
              Unser Fokus liegt auf dem Mittelstand. Wir verstehen, dass jede verspätete Lieferung
              Geld kostet. Deshalb setzen wir auf modernste Telematik, geschultes Personal und
              direkte Kommunikation.
            </p>

            <div className='grid grid-cols-2 gap-6'>
              <div className='flex items-start'>
                <div className='bg-navy-50 p-3 rounded-lg mr-4 text-navy-900'>
                  <Truck size={24} />
                </div>
                <div>
                  <h4 className='font-bold text-navy-900'>Moderne Flotte</h4>
                  <p className='text-sm text-gray-500'>Euro 6 Standard</p>
                </div>
              </div>
              <div className='flex items-start'>
                <div className='bg-navy-50 p-3 rounded-lg mr-4 text-navy-900'>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className='font-bold text-navy-900'>Europaweit</h4>
                  <p className='text-sm text-gray-500'>Grenzenlose Logistik</p>
                </div>
              </div>
            </div>
          </div>
          <div className='relative'>
            <div className='absolute -inset-4 bg-signal-500 rounded-lg opacity-20 transform rotate-3'></div>
            <img
              src='/images/screen-two.jpg'
              alt='Professional Logistics Team'
              className='relative rounded-lg shadow-2xl w-full h-auto object-cover'
            />
            <div className='absolute bottom-6 left-6 bg-white p-6 rounded-lg shadow-lg max-w-xs hidden lg:block'>
              <div className='flex items-center gap-3 mb-2'>
                <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
                <span className='text-sm font-bold text-gray-600'>Live Status</span>
              </div>
              <p className='font-bold text-navy-900 text-lg'>98.9% Pünktlichkeit</p>
              <p className='text-xs text-gray-500'>im letzten Quartal</p>
            </div>
          </div>
        </div>
      </Section>

      {/* --- Transport Services --- */}
      <Section id='transport' className='bg-gray-100'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-signal-500 font-bold tracking-wider uppercase mb-2'>
            Transportdienstleistungen
          </h2>
          <h3 className='text-4xl font-extrabold text-navy-900 mb-4'>
            Sicher. Pünktlich. Individuell.
          </h3>
          <p className='text-gray-600'>
            Ob Stückgut, Komplettladung oder Eiltransport – wir haben das passende Fahrzeug für Ihre
            Fracht von 3,5t bis 20t.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {[
            {
              icon: Truck,
              title: 'Eigener Fuhrpark',
              desc: 'Moderne Fahrzeuge von 3,5t bis 20t Nutzlast für flexible Einsatzmöglichkeiten.',
            },
            {
              icon: MapPin,
              title: 'GPS-Tracking',
              desc: 'Echtzeit-Sendungsverfolgung 24/7. Wissen Sie immer, wo Ihre Ware ist.',
            },
            {
              icon: ShieldCheck,
              title: 'Vollversichert',
              desc: 'Umfassender Versicherungsschutz für alle Transporte gemäß CMR/HGB.',
            },
            {
              icon: Clock,
              title: 'Just-in-Time',
              desc: 'Präzise Terminplanung für produktionskritische Lieferungen.',
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-transparent hover:border-signal-500 group'>
              <div className='mb-6 inline-block p-4 bg-navy-50 rounded-full group-hover:bg-signal-500 group-hover:text-white transition-colors duration-300 text-navy-900'>
                <feature.icon size={32} />
              </div>
              <h4 className='text-xl font-bold text-navy-900 mb-3'>{feature.title}</h4>
              <p className='text-gray-600 text-sm leading-relaxed'>{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className='mt-16 text-center'>
          <Button onClick={() => openForm(FormType.TRANSPORT)}>
            Jetzt Frachtpreis kalkulieren
          </Button>
        </div>
      </Section>

      {/* --- Why Us / Value Prop --- */}
      <Section id='why-us' dark>
        <div className='text-center mb-16'>
          <h2 className='text-signal-500 font-bold tracking-wider uppercase mb-2'>
            Warum AKTrans?
          </h2>
          <h3 className='text-4xl font-extrabold text-white'>Ihre Vorteile und unsere Garantie</h3>
        </div>

        <div className='grid md:grid-cols-3 gap-10'>
          <div className='flex flex-col items-center text-center'>
            <div className='bg-white/10 p-6 rounded-full mb-6 backdrop-blur-sm'>
              <TrendingUp size={40} className='text-signal-500' />
            </div>
            <h4 className='text-xl font-bold text-white mb-3'>Transparenz</h4>
            <p className='text-gray-300'>
              Keine versteckten Kosten. Wir kommunizieren offen und proaktiv bei jedem Schritt.
            </p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <div className='bg-white/10 p-6 rounded-full mb-6 backdrop-blur-sm'>
              <Users size={40} className='text-signal-500' />
            </div>
            <h4 className='text-xl font-bold text-white mb-3'>Persönliche Ansprechpartner</h4>
            <p className='text-gray-300'>
              Kein Callcenter. Sie sprechen direkt mit Disponenten, die Ihr Geschäft verstehen.
            </p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <div className='bg-white/10 p-6 rounded-full mb-6 backdrop-blur-sm'>
              <ShieldCheck size={40} className='text-signal-500' />
            </div>
            <h4 className='text-xl font-bold text-white mb-3'>Maximale Sicherheit</h4>
            <p className='text-gray-300'>
              Geschultes Fahrpersonal, gesicherte Ladung und top-gewartete Fahrzeuge.
            </p>
          </div>
        </div>

        <div className='mt-12 text-center'>
          <Button variant='white' onClick={() => openForm(FormType.GENERAL)}>
            Unverbindliches Angebot anfordern
          </Button>
        </div>
      </Section>

      {/* --- Logistics Outsourcing --- */}
      <Section id='logistics'>
        <div className='flex flex-col lg:flex-row gap-16'>
          <div className='lg:w-1/2'>
            <h2 className='text-signal-500 font-bold tracking-wider uppercase mb-2'>
              Logistik-Outsourcing
            </h2>
            <h3 className='text-4xl font-extrabold text-navy-900 mb-6'>
              Konzentrieren Sie sich auf Ihr Kerngeschäft.
            </h3>
            <p className='text-lg text-gray-600 mb-8'>
              Lagerhaltung, Kommissionierung und Transportmanagement binden wertvolle Ressourcen.
              Wir übernehmen Ihre komplette Logistik – effizienter und oft kostengünstiger als eine
              interne Lösung.
            </p>

            <ul className='space-y-4 mb-8'>
              {[
                'Keine Fixkosten für eigenen Fuhrpark & Personal',
                'Skalierbare Lösungen für saisonale Schwankungen',
                'Professionelle Lagerverwaltung & Bestandsführung',
                'Nahtlose IT-Integration',
              ].map((item, i) => (
                <li key={i} className='flex items-center text-navy-900 font-medium'>
                  <CheckCircle className='text-signal-500 mr-3 flex-shrink-0' size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <Button variant='primary' onClick={() => openForm(FormType.LOGISTICS)}>
              Kostenlose Logistik-Analyse
            </Button>
          </div>

          <div className='lg:w-1/2'>
            <h4 className='text-2xl font-bold text-navy-900 mb-8'>Unser Prozess</h4>
            <div className='space-y-8 relative'>
              {/* Vertical line */}
              <div className='absolute left-6 top-4 bottom-4 w-0.5 bg-gray-200'></div>

              {[
                {
                  title: 'Analyse',
                  desc: 'Wir prüfen Ihre aktuellen Prozesse und Kostenstrukturen.',
                },
                {
                  title: 'Konzept',
                  desc: 'Entwicklung einer maßgeschneiderten Outsourcing-Strategie.',
                },
                {
                  title: 'Organisation',
                  desc: 'Übernahme der Logistikprozesse und Implementierung.',
                },
                { title: 'Ergebnis', desc: 'Laufende Optimierung und Reporting.' },
              ].map((step, idx) => (
                <div key={idx} className='relative flex items-start'>
                  <div className='flex-shrink-0 w-12 h-12 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold z-10 border-4 border-white shadow-md'>
                    {idx + 1}
                  </div>
                  <div className='ml-6 pt-2'>
                    <h5 className='text-lg font-bold text-navy-900'>{step.title}</h5>
                    <p className='text-gray-600'>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* --- Moving Services --- */}
      <Section id='moving' className='bg-gray-100'>
        <div className='bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200'>
          <div className='grid md:grid-cols-2'>
            <div className='p-12 flex flex-col justify-center'>
              <div className='flex items-center gap-2 mb-4'>
                <Package className='text-signal-500' />
                <span className='text-sm font-bold text-gray-500 uppercase tracking-wide'>
                  B2B & B2C
                </span>
              </div>
              <h3 className='text-3xl font-extrabold text-navy-900 mb-4'>
                Umzüge in ganz Deutschland
              </h3>
              <p className='text-gray-600 mb-8'>
                Ob Firmenumzug oder privater Wohnungswechsel – wir bringen Ihr Hab und Gut sicher
                ans Ziel. Inklusive Montage, Verpackung und Versicherung.
              </p>
              <Button onClick={() => openForm(FormType.MOVING)}>Individuelles Umzugsangebot</Button>
            </div>
            <div
              className='h-64 md:h-auto bg-cover bg-center'
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1600518464441-9154a4dea21b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")',
              }}></div>
          </div>
        </div>
      </Section>

      {/* --- Career & Footer --- */}
      <footer className='bg-navy-900 text-white border-t border-navy-800'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-20 pb-10'>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
            {/* Brand */}
            <div>
              <a
                href='#'
                className='text-2xl font-extrabold text-white tracking-tighter mb-6 block'>
                LOGI<span className='text-signal-500'>TRANS</span>
              </a>
              <p className='text-gray-400 text-sm leading-relaxed mb-6'>
                Ihr zuverlässiger Partner für Transporte und Logistiklösungen in Deutschland und
                Europa.
              </p>
              <div className='flex space-x-4'>
                {/* Social Placeholders */}
                <div className='w-8 h-8 bg-navy-800 rounded flex items-center justify-center hover:bg-signal-500 transition-colors cursor-pointer'>
                  <span className='font-bold'>in</span>
                </div>
                <div className='w-8 h-8 bg-navy-800 rounded flex items-center justify-center hover:bg-signal-500 transition-colors cursor-pointer'>
                  <span className='font-bold'>fb</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className='font-bold text-lg mb-6'>Navigation</h4>
              <ul className='space-y-3 text-gray-400 text-sm'>
                <li>
                  <a href='#about' className='hover:text-signal-500 transition-colors'>
                    Über uns
                  </a>
                </li>
                <li>
                  <a href='#transport' className='hover:text-signal-500 transition-colors'>
                    Transporte
                  </a>
                </li>
                <li>
                  <a href='#logistics' className='hover:text-signal-500 transition-colors'>
                    Logistik
                  </a>
                </li>
                <li>
                  <a href='#moving' className='hover:text-signal-500 transition-colors'>
                    Umzüge
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className='font-bold text-lg mb-6'>Kontakt</h4>
              <ul className='space-y-4 text-gray-400 text-sm'>
                <li className='flex items-start'>
                  <MapPin size={18} className='mr-3 text-signal-500 mt-0.5' />
                  <span>
                    Logistikstraße 1<br />
                    10115 Berlin
                  </span>
                </li>
                <li className='flex items-center'>
                  <Phone size={18} className='mr-3 text-signal-500' />
                  <span>+49 (0) 30 123 456 78</span>
                </li>
                <li className='flex items-center'>
                  <span className='w-4 h-4 mr-3 flex items-center justify-center text-signal-500 font-bold'>
                    @
                  </span>
                  <span>info@AKtrans-example.de</span>
                </li>
              </ul>
            </div>

            {/* Career Teaser */}
            <div className='bg-navy-800 p-6 rounded-lg'>
              <h4 className='font-bold text-white mb-2'>Karriere</h4>
              <p className='text-xs text-gray-400 mb-4'>Wir wachsen weiter! Suchen aktuell:</p>
              <ul className='text-xs text-gray-300 space-y-2 mb-4'>
                <li className='flex items-center'>
                  <ChevronRight size={12} className='text-signal-500 mr-1' /> LKW-Fahrer (CE)
                </li>
                <li className='flex items-center'>
                  <ChevronRight size={12} className='text-signal-500 mr-1' /> Disponenten
                </li>
              </ul>
              <a
                href='#'
                className='text-xs font-bold text-signal-500 hover:text-white transition-colors'>
                Jetzt bewerben &rarr;
              </a>
            </div>
          </div>

          <div className='border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500'>
            <p>&copy; 2024 AKTrans GmbH. Alle Rechte vorbehalten.</p>
            <div className='flex space-x-6 mt-4 md:mt-0'>
              <a href='#' className='hover:text-white'>
                Impressum
              </a>
              <a href='#' className='hover:text-white'>
                Datenschutz
              </a>
              <a href='#' className='hover:text-white'>
                AGB
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- Modals --- */}
      <Modal
        isOpen={activeForm === FormType.TRANSPORT}
        onClose={closeForm}
        title='Frachtkosten Kalkulation'>
        <LeadForm type={FormType.TRANSPORT} onSuccess={closeForm} />
      </Modal>

      <Modal
        isOpen={activeForm === FormType.LOGISTICS}
        onClose={closeForm}
        title='Logistik-Analyse anfordern'>
        <LeadForm type={FormType.LOGISTICS} onSuccess={closeForm} />
      </Modal>

      <Modal
        isOpen={activeForm === FormType.MOVING}
        onClose={closeForm}
        title='Umzugsangebot anfordern'>
        <LeadForm type={FormType.MOVING} onSuccess={closeForm} />
      </Modal>

      <Modal
        isOpen={activeForm === FormType.GENERAL}
        onClose={closeForm}
        title='Allgemeine Anfrage'>
        <LeadForm type={FormType.GENERAL} onSuccess={closeForm} />
      </Modal>
    </div>
  );
};
