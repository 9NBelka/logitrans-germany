import React from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Phone, ChevronRight } from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';
import s from '../../src/styles/Home.module.scss';
import clsx from 'clsx';

const translations = {
  ua: {
    logo: 'Kantsedal Artem',
    description: 'Ваш надійний партнер з перевезень та логістичних рішень у Німеччині та Європі.',

    navTitle: 'Навігація',
    navLinks: [
      { text: 'Про нас', href: '#about' },
      { text: 'Перевезення', href: '#transport' },
      { text: 'Логістика', href: '#logistics' },
      { text: 'Переїзди', href: '#moving' },
    ],

    contactTitle: 'Контакти',
    address: 'Bahnhofstr 7\n85221 Dachau',
    phone1: '+49 1753 426987',
    phone2: '+49 1733 970527',
    whatsapp: '+49 1511 5885744',
    email: 'hinundher.de@gmail.com',

    careerTitle: 'Карʼєра',
    careerSub: 'Ми продовжуємо зростати! Наразі шукаємо:',
    careerItems: ['Водій вантажівки (CE)', 'Диспетчери'],
    careerLinkText: 'Подати заявку →',

    copyright: '© 2026 Kantsedal Artem GmbH. Усі права захищено.',
    legalImpressum: 'Вихідні дані',
    legalPrivacy: 'Політика конфіденційності',
  },

  de: {
    logo: 'Kantsedal Artem',
    description:
      'Ihr zuverlässiger Partner für Transporte und Logistiklösungen in Deutschland und Europa.',

    navTitle: 'Navigation',
    navLinks: [
      { text: 'Über uns', href: '#about' },
      { text: 'Transporte', href: '#transport' },
      { text: 'Logistik', href: '#logistics' },
      { text: 'Umzüge', href: '#moving' },
    ],

    contactTitle: 'Kontakt',
    address: 'Bahnhofstr 7\n85221 Dachau',
    phone1: '+49 1511 5885744',
    phone2: '+49 1733 970527',
    whatsapp: '+49 1511 5885744',
    email: 'hinundher.de@gmail.com',

    careerTitle: 'Karriere',
    careerSub: 'Wir wachsen weiter! Suchen aktuell:',
    careerItems: ['LKW-Fahrer (CE)', 'Disponenten'],
    careerLinkText: 'Jetzt bewerben →',

    copyright: '© 2026 Kantsedal Artem GmbH. Alle Rechte vorbehalten.',
    legalImpressum: 'Impressum',
    legalPrivacy: 'Datenschutzerklärung',
  },
};

export default function Footer({ isNotMenu }) {
  const location = useLocation();
  const isUa = location.pathname.startsWith('/ua');
  const lang = isUa ? 'ua' : 'de';
  const t = translations[lang];

  return (
    <footer className={s.footer}>
      <div className={clsx(s.footerInner, isNotMenu && s.isNotMenu)}>
        {!isNotMenu && (
          <div className={s.footerGrid}>
            <div>
              <a href='#' className={s.footerLogo}>
                <span>{t.logo}</span>
              </a>
              <p className={s.footerDesc}>{t.description}</p>

              {/* Соціальні іконки (тільки для німецької версії) */}
              {/* {!isUa && (
                <div className={s.socialRow}>
                  <div className={s.socialIcon}>in</div>
                  <div className={s.socialIcon}>fb</div>
                </div>
              )} */}
            </div>

            <div>
              <h4 className={s.footerColTitle}>{t.navTitle}</h4>
              <div className={s.footerLinks}>
                {t.navLinks.map((link, i) => (
                  <a key={i} href={link.href}>
                    {link.text}
                  </a>
                ))}
              </div>
            </div>

            {/* Контакти */}
            <div>
              <h4 className={s.footerColTitle}>{t.contactTitle}</h4>
              <div className={s.contactList}>
                <div className={s.contactItem}>
                  <MapPin size={16} />
                  <span>{t.address}</span>
                </div>
                <div className={s.contactItem}>
                  <Phone size={16} />
                  <a href={`tel:${t.phone1.replace(/\s/g, '')}`}>{t.phone1}</a>
                </div>
                <div className={s.contactItem}>
                  <Phone size={16} />
                  <a href={`tel:${t.phone2.replace(/\s/g, '')}`}>{t.phone2}</a>
                </div>
                <div className={s.contactItem}>
                  <BsWhatsapp size={16} />
                  <a href={`https://wa.me/${t.whatsapp.replace(/\s/g, '').replace('+', '')}`}>
                    {t.whatsapp}
                  </a>
                </div>
                <div className={s.contactItem}>
                  <span className={s.contactAt}>@</span>
                  <a href={`mailto:${t.email}`}>{t.email}</a>
                </div>
              </div>
            </div>

            {/* Кар'єра */}
            <div className={s.careerBox}>
              <h4 className={s.careerTitle}>{t.careerTitle}</h4>
              <p className={s.careerSub}>{t.careerSub}</p>
              <ul className={s.careerList}>
                {t.careerItems.map((item, i) => (
                  <li key={i} className={s.careerItem}>
                    <ChevronRight size={12} /> {item}
                  </li>
                ))}
              </ul>
              <a href='#' className={s.careerLink}>
                {t.careerLinkText}
              </a>
            </div>
          </div>
        )}

        {/* Нижня частина */}
        <div className={s.footerBottom}>
          <p>{t.copyright}</p>
          <div className={s.footerLegal}>
            <a href={isUa ? '/ua/impressum-policy' : '/impressum-policy'} target='_blank'>
              {t.legalImpressum}
            </a>
            <a href={isUa ? '/ua/privacy-policy' : '/privacy-policy'} target='_blank'>
              {t.legalPrivacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
