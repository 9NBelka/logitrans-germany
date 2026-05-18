import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '../Button/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import { FormType } from '../../types';
import { Modal } from '../Modal/Modal';
import { LeadForm } from '../LeadForm/LeadForm';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Navigation.module.scss';

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeForm, setActiveForm] = useState<FormType | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useLanguage();

  const currentLang = location.pathname.startsWith('/ua') ? 'ua' : 'de';

  const modalTitles = {
    [FormType.TRANSPORT]:
      lang === 'de' ? 'Frachtkosten Kalkulation' : 'Розрахунок вартості перевезення',
    [FormType.LOGISTICS]:
      lang === 'de' ? 'Logistik-Analyse anfordern' : 'Замовити аналіз логістики',
    [FormType.MOVING]: lang === 'de' ? 'Umzugsangebot anfordern' : 'Замовити пропозицію переїзду',
    [FormType.GENERAL]: lang === 'de' ? 'Allgemeine Anfrage' : 'Загальний запит',
  };

  const navTexts = {
    de: {
      about: 'Über uns',
      transport: 'Transporte',
      logistics: 'Logistik',
      moving: 'Umzüge',
      requestFreight: 'Fracht anfragen',
      chooseLanguage: 'Sprache wählen',
    },
    ua: {
      about: 'Про нас',
      transport: 'Перевезення',
      logistics: 'Логістика',
      moving: 'Переїзди',
      requestFreight: 'Подати заявку',
      chooseLanguage: 'Оберіть мову',
    },
  };

  const t = navTexts[currentLang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openForm = (type: FormType) => setActiveForm(type);
  const closeForm = () => setActiveForm(null);

  const switchLanguage = (lng: 'de' | 'ua') => {
    navigate(lng === 'de' ? '/' : '/ua');
    setIsMobileMenuOpen(false);
  };

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navClass = `${styles.nav} ${scrolled ? styles.navScrolled : styles.navTransparent}`;

  return (
    <>
      <nav className={navClass}>
        <div className={styles.inner}>
          <div className={styles.row}>
            {/* Logo */}
            <a href='#' className={styles.logo}>
              Kantsedal <span className={styles.logoAccent}>Artem</span>
            </a>

            {/* Desktop Nav */}
            <div className={styles.desktopNav}>
              {(['#about', '#transport', '#logistics', '#moving'] as const).map((href, i) => (
                <a
                  key={href}
                  href={href}
                  className={styles.navLink}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(href);
                  }}>
                  {[t.about, t.transport, t.logistics, t.moving][i]}
                </a>
              ))}

              {/* Language switcher */}
              <div className={styles.langSwitch}>
                <button className={styles.langBtn}>
                  <Globe size={18} />
                  <span>{currentLang.toUpperCase()}</span>
                </button>
                <div className={styles.langDropdown}>
                  <button className={styles.langOption} onClick={() => switchLanguage('de')}>
                    <span>🇩🇪</span> Deutsch
                  </button>
                  <button className={styles.langOption} onClick={() => switchLanguage('ua')}>
                    <span>🇺🇦</span> Українська
                  </button>
                </div>
              </div>

              <Button variant='primary' size='sm' onClick={() => openForm(FormType.TRANSPORT)}>
                {t.requestFreight}
              </Button>
            </div>

            {/* Mobile controls */}
            <div className={styles.mobileControls}>
              <button
                className={styles.iconBtn}
                onClick={() => switchLanguage(currentLang === 'de' ? 'ua' : 'de')}
                aria-label='Switch language'>
                <Globe size={24} />
              </button>
              <button
                className={styles.iconBtn}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label='Toggle menu'>
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuInner}>
              {(['#about', '#transport', '#logistics', '#moving'] as const).map((href, i) => (
                <a
                  key={href}
                  href={href}
                  className={styles.navLink}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(href);
                  }}>
                  {[t.about, t.transport, t.logistics, t.moving][i]}
                </a>
              ))}

              <div className={styles.mobileLangSection}>
                <p className={styles.mobileLangLabel}>{t.chooseLanguage}</p>
                <div className={styles.mobileLangFlags}>
                  <button className={styles.mobileFlagBtn} onClick={() => switchLanguage('de')}>
                    🇩🇪
                  </button>
                  <button className={styles.mobileFlagBtn} onClick={() => switchLanguage('ua')}>
                    🇺🇦
                  </button>
                </div>
              </div>

              <div className={styles.mobileCtaWrapper}>
                <Button
                  variant='primary'
                  fullWidth
                  onClick={() => {
                    openForm(FormType.TRANSPORT);
                    setIsMobileMenuOpen(false);
                  }}>
                  {t.requestFreight}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Modals */}
      {(
        [FormType.TRANSPORT, FormType.LOGISTICS, FormType.MOVING, FormType.GENERAL] as FormType[]
      ).map((ft) => (
        <Modal key={ft} isOpen={activeForm === ft} onClose={closeForm} title={modalTitles[ft]}>
          <LeadForm type={ft} onSuccess={closeForm} />
        </Modal>
      ))}
    </>
  );
};
