import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './CookieConsent.module.scss';

// === Декларація dataLayer для TypeScript ===
declare global {
  interface Window {
    dataLayer: any[];
  }
}

const CookieConsent: React.FC = () => {
  const location = useLocation();
  const isUa = location.pathname.startsWith('/ua');
  const lang = isUa ? 'ua' : 'de';

  const translations = {
    ua: {
      title: 'Ми використовуємо cookies',
      text: 'Цей сайт використовує файли cookie для покращення роботи, аналізу відвідуваності та персоналізованого маркетингу.',
      settings: 'Налаштувати',
      necessary: 'Тільки необхідні',
      acceptAll: 'Прийняти всі',
      save: 'Зберегти вибір',
      revoke: 'Відкликати згоду',
    },
    de: {
      title: 'Wir verwenden Cookies',
      text: 'Diese Website verwendet Cookies, um die Funktionalität zu gewährleisten, die Nutzung zu analysieren und personalisierte Werbung zu ermöglichen.',
      settings: 'Einstellungen',
      necessary: 'Nur notwendige',
      acceptAll: 'Alle akzeptieren',
      save: 'Auswahl speichern',
      revoke: 'Einwilligung widerrufen',
    },
  };

  const t = translations[lang];

  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [consent, setConsent] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  // Завантаження збереженої згоди
  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent');
    if (savedConsent) {
      const parsed = JSON.parse(savedConsent);
      setConsent(parsed);
      applyConsent(parsed);
    } else {
      setIsVisible(true);
    }
  }, []);

  const applyConsent = (c: typeof consent) => {
    // Ініціалізуємо dataLayer, якщо його немає
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: 'consent_update',
      consent: {
        ad_storage: c.marketing ? 'granted' : 'denied',
        analytics_storage: c.analytics ? 'granted' : 'denied',
        functionality_storage: 'granted',
        personalization_storage: c.marketing ? 'granted' : 'denied',
        security_storage: 'granted',
      },
    });
  };

  const saveConsent = (newConsent: typeof consent) => {
    localStorage.setItem('cookieConsent', JSON.stringify(newConsent));
    setConsent(newConsent);
    applyConsent(newConsent);
    setIsVisible(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    const all = { necessary: true, analytics: true, marketing: true };
    saveConsent(all);
  };

  const acceptNecessary = () => {
    const necessaryOnly = { necessary: true, analytics: false, marketing: false };
    saveConsent(necessaryOnly);
  };

  const revokeConsent = () => {
    localStorage.removeItem('cookieConsent');
    setConsent({ necessary: true, analytics: false, marketing: false });
    setIsVisible(true);
    window.location.reload();
  };

  // Кнопка відкликання згоди (постійно видима)
  if (!isVisible) {
    return (
      <button onClick={revokeConsent} className={styles.revokeButton}>
        {t.revoke}
      </button>
    );
  }

  return (
    <div className={styles.cookieBanner}>
      <div className={styles.cookieContent}>
        <h3>{t.title}</h3>
        <p>{t.text}</p>

        {showSettings && (
          <div className={styles.cookieSettings}>
            <label className={styles.checkboxLabel}>
              <input type='checkbox' checked disabled />
              <span>Необхідні / Erforderlich</span>
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type='checkbox'
                checked={consent.analytics}
                onChange={(e) => setConsent({ ...consent, analytics: e.target.checked })}
              />
              <span>Аналітика / Analytics (Google Analytics)</span>
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type='checkbox'
                checked={consent.marketing}
                onChange={(e) => setConsent({ ...consent, marketing: e.target.checked })}
              />
              <span>Маркетинг / Marketing (Meta Pixel)</span>
            </label>
          </div>
        )}

        <div className={styles.buttons}>
          <button onClick={() => setShowSettings(!showSettings)} className={styles.settingsBtn}>
            {t.settings}
          </button>
          <button onClick={acceptNecessary} className={styles.necessaryBtn}>
            {t.necessary}
          </button>
          <button onClick={acceptAll} className={styles.acceptAllBtn}>
            {t.acceptAll}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
