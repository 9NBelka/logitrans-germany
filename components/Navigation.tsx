import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from './Button';
import { useNavigate, useLocation } from 'react-router-dom';
import { FormType } from '../types';
import { Modal } from './Modal';
import { LeadForm } from './LeadForm';
import { useLanguage } from '../context/LanguageContext';

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeForm, setActiveForm] = useState<FormType | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useLanguage();

  // Определяем язык по пути
  const currentLang = location.pathname.startsWith('/ua') ? 'ua' : 'de';

  const modalTitles = {
    [FormType.TRANSPORT]:
      lang === 'de' ? 'Frachtkosten Kalkulation' : 'Розрахунок вартості перевезення',
    [FormType.LOGISTICS]:
      lang === 'de' ? 'Logistik-Analyse anfordern' : 'Замовити аналіз логістики',
    [FormType.MOVING]: lang === 'de' ? 'Umzugsangebot anfordern' : 'Замовити пропозицію переїзду',
    [FormType.GENERAL]: lang === 'de' ? 'Allgemeine Anfrage' : 'Загальний запит',
  };

  // Тексты на двух языках
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
      transport: 'Транспорти',
      logistics: 'Логістика',
      moving: 'Переїзди',
      requestFreight: 'Подати заявку',
      chooseLanguage: 'Оберіть мову',
    },
  };

  const t = navTexts[currentLang]; // удобная переменная

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openForm = (type: FormType) => setActiveForm(type);
  const closeForm = () => setActiveForm(null);

  const switchLanguage = (lang: 'de' | 'ua') => {
    if (lang === 'de') {
      navigate('/');
    } else {
      navigate('/ua');
    }
    setIsMobileMenuOpen(false);
  };

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
      href={href}
      className='text-white hover:text-signal-500 font-medium transition-colors duration-200'
      onClick={(e) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }}>
      {children}
    </a>
  );

  return (
    <>
      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${
          scrolled ? 'bg-navy-900 shadow-lg py-3' : 'bg-transparent py-6'
        }`}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center'>
              <a href='#' className='text-2xl font-extrabold text-white tracking-tighter'>
                AK<span className='text-signal-500'>Umzüge</span>
              </a>
            </div>

            {/* Desktop Nav */}
            <div className='hidden md:flex items-center space-x-8'>
              <NavLink href='#about'>{t.about}</NavLink>
              <NavLink href='#transport'>{t.transport}</NavLink>
              <NavLink href='#logistics'>{t.logistics}</NavLink>
              <NavLink href='#moving'>{t.moving}</NavLink>

              {/* Переключатель языка */}
              <div className='relative group'>
                <button className='flex items-center text-white hover:text-signal-500 transition-colors'>
                  <Globe size={20} className='mr-2' />
                  <span className='font-medium'>{currentLang.toUpperCase()}</span>
                </button>
                <div className='absolute top-full mt-2 right-0 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-40'>
                  <button
                    onClick={() => switchLanguage('de')}
                    className='flex items-center w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors'>
                    <span className='mr-3 text-lg'>🇩🇪</span>
                    Deutsch
                  </button>
                  <button
                    onClick={() => switchLanguage('ua')}
                    className='flex items-center w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors'>
                    <span className='mr-3 text-lg'>🇺🇦</span>
                    Українська
                  </button>
                </div>
              </div>

              <Button variant='primary' size='sm' onClick={() => openForm(FormType.TRANSPORT)}>
                {t.requestFreight}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className='md:hidden flex items-center space-x-4'>
              {/* Мобильный переключатель языка */}
              <button
                onClick={() => switchLanguage(currentLang === 'de' ? 'ua' : 'de')}
                className='text-white'>
                <Globe size={24} />
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className='text-white focus:outline-none'>
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className='md:hidden bg-navy-900 absolute w-full top-full left-0 shadow-xl border-t border-navy-800'>
            <div className='px-4 pt-2 pb-6 space-y-4 flex flex-col'>
              <NavLink href='#about'>{t.about}</NavLink>
              <NavLink href='#transport'>{t.transport}</NavLink>
              <NavLink href='#logistics'>{t.logistics}</NavLink>
              <NavLink href='#moving'>{t.moving}</NavLink>

              {/* Мобильный выбор языка */}
              <div className='pt-4 border-t border-navy-800'>
                <p className='text-gray-400 text-sm mb-2'>{t.chooseLanguage}</p>
                <div className='flex gap-4'>
                  <button
                    onClick={() => switchLanguage('de')}
                    className='flex items-center text-white hover:text-signal-500'>
                    <span className='mr-2 text-2xl'>🇩🇪</span> Deutsch
                  </button>
                  <button
                    onClick={() => switchLanguage('ua')}
                    className='flex items-center text-white hover:text-signal-500'>
                    <span className='mr-2 text-2xl'>🇺🇦</span> Українська
                  </button>
                </div>
              </div>

              <div className='pt-2'>
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

      {/* Модалки (заголовки модалок пока оставляем на немецком, или тоже переведёшь позже) */}
      <Modal
        isOpen={activeForm === FormType.TRANSPORT}
        onClose={closeForm}
        title={modalTitles[FormType.TRANSPORT]}>
        <LeadForm type={FormType.TRANSPORT} onSuccess={closeForm} />
      </Modal>

      <Modal
        isOpen={activeForm === FormType.LOGISTICS}
        onClose={closeForm}
        title={modalTitles[FormType.TRANSPORT]}>
        <LeadForm type={FormType.LOGISTICS} onSuccess={closeForm} />
      </Modal>

      <Modal
        isOpen={activeForm === FormType.MOVING}
        onClose={closeForm}
        title={modalTitles[FormType.TRANSPORT]}>
        <LeadForm type={FormType.MOVING} onSuccess={closeForm} />
      </Modal>

      <Modal
        isOpen={activeForm === FormType.GENERAL}
        onClose={closeForm}
        title={modalTitles[FormType.TRANSPORT]}>
        <LeadForm type={FormType.GENERAL} onSuccess={closeForm} />
      </Modal>
    </>
  );
};
