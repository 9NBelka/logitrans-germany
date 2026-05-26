import React, { useState, useEffect } from 'react';
import { Section } from '../components/Section/Section';
import { Button } from '../components/Button/Button';
import { Modal } from '../components/Modal/Modal';
import { LeadForm } from '../components/LeadForm/LeadForm';
import { FormType } from '../types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {
  Truck,
  MapPin,
  ShieldCheck,
  Clock,
  Package,
  TrendingUp,
  Users,
  Phone,
  ChevronRight,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import s from '../src/styles/Home.module.scss';
import { BsWhatsapp } from 'react-icons/bs';

export const HomeDe = () => {
  const [activeForm, setActiveForm] = useState<FormType | null>(null);

  const openForm = (type: FormType) => setActiveForm(type);
  const closeForm = () => setActiveForm(null);

  return (
    <div>
      {/* ===== HERO ===== */}
      <div className={s.hero}>
        <div className={s.heroBg}>
          <img src='/images/hero-bg-main.jpg' alt='Logistics Truck on Road' />
          <div className={s.heroOverlay} />
        </div>

        <div className={s.heroContent}>
          <span className={s.heroBadge}>ZUVERLÄSSIG. EUROPAWEIT. SCHNELL.</span>
          <h1 className={s.heroTitle}>
            Ihre Logistik. <span className={s.heroTitleGradient}>Unsere Verantwortung.</span>
          </h1>
          <p className={s.heroSubtitle}>
            Spezialisiert auf Transporte von 3,5 bis 20 Tonnen — optimieren Ihre Lieferkette mit
            Präzision und deutscher Zuverlässigkeit.
          </p>
          <div className={s.heroCta}>
            <Button variant='primary' size='lg' onClick={() => openForm(FormType.TRANSPORT)}>
              Kostenlose Kalkulation
              <ArrowRight style={{ marginLeft: 8, width: 20, height: 20 }} />
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

        <a href='#about' className={s.scrollIndicator}>
          <svg fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 14l-7 7m0 0l-7-7m7 7V3'
            />
          </svg>
        </a>
      </div>

      {/* ===== ABOUT ===== */}
      <Section id='about'>
        <div className={s.aboutGrid}>
          <div>
            <p className={s.sectionLabel}>Über Uns</p>
            <h3 className={s.sectionTitle}>
              Seit 2022 sind wir Ihr Partner für <span>professionelle</span> Transportlösungen.
            </h3>
            <p className={s.bodyText}>
              Kantsedal Artem wurde mit einer klaren Vision gegründet: Transportdienstleistungen
              transparenter, schneller und zuverlässiger zu gestalten. Was mit einem einzelnen LKW
              begann, ist heute eine leistungsstarke Flotte, die täglich Waren quer durch
              Deutschland und Europa bewegt.
            </p>
            <p className={s.bodyText}>
              Wir konzentrieren uns auf den Mittelstand. Wir wissen, dass jede Lieferverzögerung
              Geld kostet. Deshalb setzen wir auf moderne Telematik, qualifiziertes Personal und
              direkte Kommunikation.
            </p>

            <div className={s.featureGrid}>
              <div className={s.featureItem}>
                <div className={s.featureIcon}>
                  <Truck size={22} />
                </div>
                <div>
                  <div className={s.featureLabel}>Moderne Flotte</div>
                  <div className={s.featureSub}>Euro 6 Standard</div>
                </div>
              </div>
              <div className={s.featureItem}>
                <div className={s.featureIcon}>
                  <MapPin size={22} />
                </div>
                <div>
                  <div className={s.featureLabel}>Europaweit</div>
                  <div className={s.featureSub}>Grenzenlose Logistik</div>
                </div>
              </div>
            </div>
          </div>

          <div className={s.imageBlock}>
            {/* <div className={s.imageTilt} /> */}

            <Swiper
              modules={[Autoplay, Navigation]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              navigation
              loop
              className={s.swiper}>
              {[
                '/images/slide-image-one.jpg',
                '/images/slide-image-two.jpg',
                '/images/slide-image-three.jpg',
                '/images/slide-image-four.jpg',
              ].map((src, i) => (
                <SwiperSlide key={i}>
                  <img src={src} alt={`Slide ${i + 1}`} className={s.mainImage} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className={s.liveCard}>
              <div className={s.liveCardHeader}>
                <div className={s.liveDot} />
                <span className={s.liveLabel}>Live Status</span>
              </div>
              <p className={s.liveValue}>98.9% Pünktlichkeit</p>
              <p className={s.liveSub}>im letzten Quartal</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== TRANSPORT ===== */}
      <Section id='transport' gray>
        <div className={s.sectionHeader}>
          <p className={s.sectionLabel}>Transportdienstleistungen</p>
          <h3 className={s.sectionTitle}>Sicher. Pünktlich. Individuell.</h3>
          <p className={s.sectionDesc}>
            Ob Stückgut, Komplettladung oder Eiltransport – wir haben das passende Fahrzeug für Ihre
            Fracht von 3,5t bis 20t.
          </p>
        </div>

        <div className={s.cardsGrid}>
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
          ].map((f, i) => (
            <div key={i} className={s.card}>
              <div className={s.cardIcon}>
                <f.icon size={30} />
              </div>
              <h4 className={s.cardTitle}>{f.title}</h4>
              <p className={s.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>

        <div className={s.sectionCta}>
          <Button onClick={() => openForm(FormType.TRANSPORT)}>
            Jetzt Frachtpreis kalkulieren
          </Button>
        </div>
      </Section>

      {/* ===== WHY US ===== */}
      <Section id='why-us' dark>
        <div className={s.sectionHeader}>
          <p className={s.sectionLabel}>Warum man uns vertraut</p>
          <h3 className={`${s.sectionTitle} ${s.sectionTitleWhite}`}>
            Ihre Vorteile und unsere Garantie
          </h3>
        </div>

        <div className={s.whyGrid}>
          {[
            {
              icon: TrendingUp,
              title: 'Transparenz',
              desc: 'Keine versteckten Kosten. Wir informieren Sie offen über die Kosten und den Arbeitsfortschritt in jeder Phase.',
            },
            {
              icon: Users,
              title: 'Persönliche Ansprechpartner',
              desc: 'Kein Callcenter. Sie sprechen direkt mit Disponenten, die Ihr Geschäft verstehen.',
            },
            {
              icon: ShieldCheck,
              title: 'Maximale Sicherheit',
              desc: 'Geschultes Fahrpersonal, gesicherte Ladung und top-gewartete Fahrzeuge.',
            },
          ].map((w, i) => (
            <div key={i} className={s.whyItem}>
              <div className={s.whyIconWrap}>
                <w.icon size={38} />
              </div>
              <h4 className={s.whyTitle}>{w.title}</h4>
              <p className={s.whyDesc}>{w.desc}</p>
            </div>
          ))}
        </div>

        <div className={s.sectionCta}>
          <Button variant='white' onClick={() => openForm(FormType.GENERAL)}>
            Unverbindliches Angebot anfordern
          </Button>
        </div>
      </Section>

      {/* ===== LOGISTICS ===== */}
      <Section id='logistics'>
        <div className={s.logisticsRow}>
          <div className={s.logisticsLeft}>
            <p className={s.sectionLabel}>Logistik-Outsourcing für Unternehmen</p>
            <h3 className={s.sectionTitle}>
              Sie konzentrieren sich auf die Produktion — wir übernehmen die gesamte Logistik.
            </h3>
            <p className={s.bodyText}>
              Die Unterhaltung einer eigenen Logistikabteilung, eines Fuhrparks und von Personal
              bedeutet hohe laufende Kosten. Wir bieten vollständiges Logistik-Outsourcing:
              Lieferung, Transporte, Routenplanung, Kontrolle und Reporting — alles aus einer Hand.
            </p>

            <p className={s.bodyText}>Mit uns müssen Sie nicht:</p>
            <ul className={s.dotList}>
              {[
                'eine eigene Logistikabteilung unterhalten',
                'Fahrzeuge kaufen und warten',
                'Fahrer und Disponenten einstellen',
                'operative Logistikfragen lösen',
              ].map((item, i) => (
                <li key={i} className={s.dotItem}>
                  {item}
                </li>
              ))}
            </ul>

            <p className={s.boldText}>
              Sie produzieren das Produkt. Wir sorgen für seine Lieferung.
            </p>

            <p className={s.subLabel}>Was Sie durch die Zusammenarbeit mit uns erhalten</p>
            <ul className={s.checkList}>
              {[
                'Umfassende logistische Betreuung — von der Planung bis zur Lieferung an den Endkunden',
                'Eigener Fuhrpark — ohne Einbindung externer Transportunternehmen',
                'Kostensenkung — Sie zahlen nur für die Dienstleistung, nicht für Personal und Technik',
                'Flexibilität und Skalierbarkeit — einfache Anpassung der Volumen nach Bedarf',
                'Transparenz — klare Prozesse und regelmäßiges Reporting',
              ].map((item, i) => (
                <li key={i} className={s.checkItem}>
                  <CheckCircle size={18} />
                  {item}
                </li>
              ))}
            </ul>

            <Button variant='primary' onClick={() => openForm(FormType.LOGISTICS)}>
              Kostenlose Logistik-Analyse
            </Button>

            <p className={s.subLabel}>Ergebnis für Ihr Unternehmen</p>
            <ul className={s.checkList}>
              {[
                'geringere Kosten',
                'kein eigener Logistikstab',
                'planbare Lieferzeiten',
                'volle Kontrolle ohne operative Einbindung',
                'mehr Zeit für Entwicklung und Produktion',
              ].map((item, i) => (
                <li key={i} className={s.checkItem}>
                  <CheckCircle size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={s.logisticsRight}>
            <h4 className={s.stepsTitle}>Wie wir mit Unternehmen arbeiten</h4>
            <div className={s.stepsContainer}>
              {[
                {
                  title: 'Wir analysieren Ihr Geschäft',
                  subLabel: 'Wir analysieren:',
                  list: [
                    'Produktionsvolumen',
                    'Art und Häufigkeit der Transporte',
                    'Liefergeografie',
                    'aktuelle Logistikkosten',
                  ],
                  desc: '👉 Ziel: zu verstehen, wie Logistik kostengünstiger und effizienter gestaltet werden kann.',
                },
                {
                  title: 'Wir übernehmen die Logistik vollständig',
                  subLabel: 'Wir übernehmen die volle Verantwortung für:',
                  list: [
                    'Organisation der Transporte',
                    'Fuhrparkmanagement',
                    'Routenplanung',
                    'Koordination der Fahrer',
                    'Kontrolle der Liefertermine',
                  ],
                  desc: '👉 Sie sind nicht mehr in operative Logistikprozesse eingebunden.',
                },
                {
                  title: 'Lieferung mit eigenem Fuhrpark',
                  subLabel: 'Wir nutzen unseren eigenen Fuhrpark, was garantiert:',
                  list: [
                    'Stabilität',
                    'Qualitätskontrolle',
                    'Termintreue',
                    'keine „Zwischenhändler"',
                  ],
                  desc: '👉 Weniger Risiken — mehr Verantwortung auf unserer Seite.',
                },
                {
                  title: 'Optimierung und Reporting',
                  subLabel: 'Wir:',
                  list: [
                    'optimieren kontinuierlich die Routen',
                    'senken Kosten',
                    'erhöhen die Liefergeschwindigkeit',
                    'liefern transparente Berichte',
                  ],
                  desc: '👉 Ihre Logistik funktioniert als System — nicht als ständiges „Feuerlöschen".',
                },
              ].map((step, idx) => (
                <div key={idx} className={s.step}>
                  <div className={s.stepNum}>{idx + 1}</div>
                  <div className={s.stepBody}>
                    <h5 className={s.stepTitle}>{step.title}</h5>
                    <p className={s.stepSubLabel}>{step.subLabel}</p>
                    <ul className={s.dotList}>
                      {step.list.map((item, i) => (
                        <li key={i} className={s.dotItem}>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className={s.stepDesc}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ===== MOVING ===== */}
      <Section id='moving' gray>
        <div className={s.movingCard}>
          <div className={s.movingGrid}>
            <div className={s.movingContent}>
              <div className={s.movingTag}>
                <Package size={18} />
                <span>B2B & B2C</span>
              </div>
              <h3 className={s.movingTitle}>Umzüge in ganz Deutschland</h3>
              <p className={s.movingDesc}>
                Ob Firmenumzug oder privater Wohnungswechsel – wir bringen Ihr Hab und Gut sicher
                ans Ziel. Inklusive Montage, Verpackung und Versicherung.
              </p>
              <Button onClick={() => openForm(FormType.MOVING)}>Individuelles Umzugsangebot</Button>
            </div>
            <div
              className={s.movingImage}
              style={{ backgroundImage: 'url("/images/newPhotoLastSection.jpg")' }}
            />
          </div>
        </div>
      </Section>

      {/* ===== FOOTER ===== */}
      <footer className={s.footer}>
        <div className={s.footerInner}>
          <div className={s.footerGrid}>
            <div>
              <a href='#' className={s.footerLogo}>
                <span>Kantsedal Artem</span>
              </a>
              <p className={s.footerDesc}>
                Ihr zuverlässiger Partner für Transporte und Logistiklösungen in Deutschland und
                Europa.
              </p>
              <div className={s.socialRow}>
                <div className={s.socialIcon}>in</div>
                <div className={s.socialIcon}>fb</div>
              </div>
            </div>

            <div>
              <h4 className={s.footerColTitle}>Navigation</h4>
              <div className={s.footerLinks}>
                <a href='#about'>Über uns</a>
                <a href='#transport'>Transporte</a>
                <a href='#logistics'>Logistik</a>
                <a href='#moving'>Umzüge</a>
              </div>
            </div>

            <div>
              <h4 className={s.footerColTitle}>Kontakt</h4>
              <div className={s.contactList}>
                <div className={s.contactItem}>
                  <MapPin size={16} />
                  <span>
                    Bahnhofstr 7<br />
                    85221 Dachau
                  </span>
                </div>
                <div className={s.contactItem}>
                  <Phone size={16} />
                  <a href='tel:+4915115885744'>+49 1511 5885744</a>
                </div>
                <div className={s.contactItem}>
                  <Phone size={16} />
                  <a href='tel:+491733970527'>+49 1733 970527</a>
                </div>
                <div className={s.contactItem}>
                  <BsWhatsapp size={16} />
                  <a href='https://wa.me/491753426987'>+49 1511 5885744</a>
                </div>
                <div className={s.contactItem}>
                  <span className={s.contactAt}>@</span>
                  <a href='mailto:hinundher.de@gmail.com'>hinundher.de@gmail.com</a>
                </div>
              </div>
            </div>

            <div className={s.careerBox}>
              <h4 className={s.careerTitle}>Karriere</h4>
              <p className={s.careerSub}>Wir wachsen weiter! Suchen aktuell:</p>
              <ul className={s.careerList}>
                <li className={s.careerItem}>
                  <ChevronRight size={12} /> LKW-Fahrer (CE)
                </li>
                <li className={s.careerItem}>
                  <ChevronRight size={12} /> Disponenten
                </li>
              </ul>
              <a href='#' className={s.careerLink}>
                Jetzt bewerben &rarr;
              </a>
            </div>
          </div>

          <div className={s.footerBottom}>
            <p>&copy; 2026 Kantsedal Artem GmbH. Alle Rechte vorbehalten.</p>
            <div className={s.footerLegal}>
              {/* <a href='#'>Impressum</a> */}
              <a href='/privacy-policy' target='_blank'>
                Datenschutzerklärung
              </a>
              {/* <a href='#'>AGB</a> */}
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {(
        [
          { ft: FormType.TRANSPORT, title: 'Frachtkosten Kalkulation' },
          { ft: FormType.LOGISTICS, title: 'Logistik-Analyse anfordern' },
          { ft: FormType.MOVING, title: 'Umzugsangebot anfordern' },
          { ft: FormType.GENERAL, title: 'Allgemeine Anfrage' },
        ] as { ft: FormType; title: string }[]
      ).map(({ ft, title }) => (
        <Modal key={ft} isOpen={activeForm === ft} onClose={closeForm} title={title}>
          <LeadForm type={ft} onSuccess={closeForm} />
        </Modal>
      ))}
    </div>
  );
};
