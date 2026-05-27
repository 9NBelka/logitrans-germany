import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Impressum.module.scss';
import Footer from '../../components/Footer/Footer';

const isNotMenu = true;

const translations = {
  ua: {
    title: 'Impressum / Вихідні дані',

    section1: 'Angaben gemäß § 5 DDG',
    name: 'Artem Kantsedal',
    address: 'Bahnhofstraße 7',
    plz: '85221 Dachau',
    country: 'Deutschland',

    contactTitle: 'Контактна інформація',
    phone: 'Телефон:',
    mobil: 'Мобільний:',
    email: 'E-Mail:',

    ustTitle: 'Податкові дані',
    ustId: 'Umsatzsteuer-Identifikationsnummer (USt-IdNr.):',
    steuerNr: 'Steuernummer:',

    responsible: 'Відповідальна особа за зміст сайту:',
  },

  de: {
    title: 'Impressum',

    section1: 'Angaben gemäß § 5 DDG',
    name: 'Artem Kantsedal',
    address: 'Bahnhofstraße 7',
    plz: '85221 Dachau',
    country: 'Deutschland',

    contactTitle: 'Kontakt',
    phone: 'Telefon:',
    mobil: 'Mobil:',
    email: 'E-Mail:',

    ustTitle: 'Umsatzsteuer-Identifikationsnummer',
    ustId: 'USt-IdNr.:',
    steuerNr: 'Steuernummer:',

    responsible: 'Verantwortlich für den Inhalt dieser Website:',
  },
};

export const ImpressumPolicy: React.FC = () => {
  const location = useLocation();
  const isUa = location.pathname.startsWith('/ua');
  const lang = isUa ? 'ua' : 'de';
  const t = translations[lang];

  return (
    <>
      <div className={styles.privacyPolicyMainBlock}>
        <div className={styles.privacyPolicyBlock}>
          <h1 className={styles.privacyPolicyTitle}>{t.title}</h1>

          <div className={styles.privacyPolicyMainList}>
            {/* Основна інформація */}
            <h4 className={styles.privacyPolicyMainListTitle}>{t.section1}</h4>

            <p className={styles.privacyPolicyMainListDescriptions}>
              <strong>{t.name}</strong>
              <br />
              {t.address}
              <br />
              {t.plz} {t.country}
            </p>

            {/* Контакти */}
            <h4 className={styles.privacyPolicyMainListTitle}>{t.contactTitle}</h4>
            <p className={styles.privacyPolicyMainListDescriptions}>
              {t.phone} <a href='tel:+491753426987'>+49 175 3426987</a>
              <br />
              {t.mobil} <a href='tel:+4915115885744'>+49 151 15885744</a>
              <br />
              {t.email} <a href='mailto:hinundher.de@gmail.com'>hinundher.de@gmail.com</a>
            </p>

            {/* Податкові дані */}
            <h4 className={styles.privacyPolicyMainListTitle}>{t.ustTitle}</h4>
            <p className={styles.privacyPolicyMainListDescriptions}>
              {t.ustId} <strong>DE355990234</strong>
              <br />
              {t.steuerNr} <strong>107/234/61001</strong>
            </p>

            {/* Відповідальна особа */}
            <h4 className={styles.privacyPolicyMainListTitle}>{t.responsible}</h4>
            <p className={styles.privacyPolicyMainListDescriptions}>
              <strong>Artem Kantsedal</strong>
              <br />
              Bahnhofstraße 7<br />
              85221 Dachau
            </p>
          </div>

          <p
            className={styles.privacyPolicyDescriptions}
            style={{ marginTop: '40px', fontSize: '0.95rem' }}>
            {isUa
              ? 'Ми прагнемо до точності та актуальності інформації на цьому сайті. При цьому ми не несемо відповідальності за правильність, повноту та актуальність контенту.'
              : 'Wir bemühen uns um Richtigkeit und Aktualität der Informationen auf dieser Website. Dennoch können wir keine Haftung für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen.'}
          </p>
        </div>
      </div>

      <Footer isNotMenu={isNotMenu} />
    </>
  );
};
