import React from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import styles from './PrivacyPolicy.module.scss';
import Footer from '../../components/Footer/Footer';

const isNotMenu = true;

const translations = {
  ua: {
    title: 'Політика конфіденційності для',
    titleHighlight: 'Kantsedal Artem',

    description1:
      'Дякуємо, що обрали нас! Ми в Kantsedal Artem ("Компанія", "ми", "наш") серйозно ставимося до захисту вашої персональної інформації. Ця Політика конфіденційності пояснює, яку інформацію ми збираємо, як використовуємо її та які права ви маєте, коли відвідуєте наш сайт: https://hinunder2023.de',
    description2:
      'Використовуючи наш сайт, ви погоджуєтесь з умовами цієї Політики конфіденційності. Якщо ви не згодні, будь ласка, не використовуйте сайт.',

    section1: '1. Інформація, яку ми збираємо',
    section1_1: '1.1 Персональні дані, які ви надаєте',
    section1_1_desc: 'Ми збираємо інформацію, яку ви добровільно надаєте, коли:',
    section1_1_list1: [
      'Заповнюєте форми заявок на перевезення або логістику;',
      'Звертаєтесь через форми зворотного зв’язку;',
      'Підписуєтесь на розсилку або комунікуєте з нами;',
    ],
    section1_1_desc2: 'Такі дані можуть включати:',
    section1_1_list2: [
      "Ім'я та прізвище",
      'Назва компанії',
      'Електронна пошта',
      'Номер телефону',
      'Адреса завантаження та розвантаження',
      'Інформація про вантаж (вага, габарити тощо)',
    ],

    section1_2: '1.2 Автоматично зібрана інформація',
    section1_2_desc: 'При відвідуванні сайту автоматично збирається:',
    section1_2_list: [
      'IP-адреса',
      'Тип браузера та операційна система',
      'Сторінки, які ви відвідуєте, та час перебування',
      'Дата і час візиту',
      'Джерело переходу (Referrer)',
    ],
    section1_2_desc2: 'Ця інформація збирається за допомогою файлів cookie та подібних технологій.',

    section2: '2. Файли cookie та технології відстеження',
    section2_desc: 'Ми використовуємо cookie для:',
    section2_list: [
      'Забезпечення коректної роботи сайту',
      'Аналізу відвідуваності та поведінки користувачів',
      'Покращення користувацького досвіду',
      "Запам'ятовування ваших налаштувань",
    ],
    section2_desc2:
      'Ви можете керувати cookie у налаштуваннях браузера. Для повної відповідності DSGVO ми використовуємо cookie-банер, який блокує трекінг до отримання вашої згоди.',

    section3: '3. Третєсторонні сервіси та інтеграції',
    section3_desc: 'Ми використовуємо наступні сторонні сервіси:',
    section3_list: [
      'Google Fonts — для відображення шрифтів (завантажуються через Google)',
      'Google Analytics — для аналізу відвідуваності сайту',
      'Meta Pixel (Facebook Pixel) — для маркетингової аналітики та ретаргетингу',
      'Google Maps — для відображення локацій (якщо використовується)',
    ],
    section3_desc2:
      'Ці сервіси можуть збирати персональні дані (наприклад, IP-адресу). Ми докладаємо зусиль для мінімізації передачі даних і використовуємо анонімізацію де це можливо. Ви завжди можете відкликати згоду через cookie-банер.',

    section4: '4. Хостинг-провайдер',
    section4_desc:
      'Наш сайт розміщений на серверах надійного хостинг-провайдера в ЄС. Хостинг-провайдер обробляє дані виключно за нашим дорученням і не має права використовувати їх в інших цілях.',

    section5: '5. Як ми використовуємо вашу інформацію',
    section5_desc: 'Ми використовуємо зібрані дані для:',
    section5_list: [
      'Обробки ваших заявок на перевезення',
      'Зв’язку з вами щодо послуг',
      'Покращення якості наших послуг',
      'Виконання договірних зобов’язань',
      'Виконання вимог законодавства',
    ],

    section6: '6. Передача інформації',
    section6_desc: 'Ми можемо передавати ваші дані:',
    section6_list: [
      'Надійним партнерам-перевізникам (тільки для виконання перевезення)',
      'Стороннім сервісам (хостинг, аналітика, email-розсилки)',
      'Правоохоронним органам — лише у випадках, передбачених законом',
    ],
    section6_desc2: 'Ми не продаємо ваші персональні дані третім особам для маркетингу.',

    section7: '7. Безпека даних',
    section7_desc:
      'Ми застосовуємо сучасні технічні та організаційні заходи для захисту ваших даних від несанкціонованого доступу, втрати або зміни.',

    section8: '8. Ваші права згідно з DSGVO (GDPR)',
    section8_desc: 'Відповідно до Загального регламенту про захист даних (DSGVO) ви маєте право:',
    section8_list: [
      'На доступ до своїх персональних даних',
      'На виправлення неточних або неповних даних',
      'На видалення ваших даних ("право на забуття")',
      'На обмеження обробки',
      'На заперечення проти обробки',
      'На перенесення даних (Data Portability)',
      'На відкликання згоди в будь-який момент',
      'На подання скарги до наглядового органу (в Німеччині — Landesdatenschutzbehörde)',
    ],
    section8_desc2: "Для реалізації цих прав зв'яжіться з нами.",

    section9: '9. Відповідальний за обробку даних',
    section9_desc: 'Відповідальним за обробку персональних даних є:',
    section9_name: 'Kantsedal Artem',
    section9_contact: 'Email: hinundher.de@gmail.com',

    section10: '10. Зміни до політики',
    section10_desc:
      'Ми можемо періодично оновлювати цю Політику. Зміни набирають чинності з моменту публікації на сайті.',

    section11: "11. Зв'язок з нами",
    section11_desc: 'Якщо у вас є питання щодо цієї Політики конфіденційності, пишіть нам:',
    section11_contact: 'Email: hinundher.de@gmail.com',
  },

  // ==================== НІМЕЦЬКА ВЕРСІЯ ====================

  de: {
    title: 'Datenschutzerklärung für',
    titleHighlight: 'Kantsedal Artem',

    description1:
      'Vielen Dank, dass Sie sich für Kantsedal Artem entschieden haben! Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst. Diese Datenschutzerklärung erklärt, welche Informationen wir sammeln, wie wir sie verwenden und welche Rechte Sie haben, wenn Sie unsere Website https://hinunder2023.de besuchen.',
    description2:
      'Durch die Nutzung unserer Website stimmen Sie den Bedingungen dieser Datenschutzerklärung zu. Bitte nutzen Sie die Website nicht, wenn Sie nicht einverstanden sind.',

    section1: '1. Welche Daten wir sammeln',
    section1_1: '1.1 Von Ihnen bereitgestellte Daten',
    section1_1_desc: 'Wir sammeln Daten, die Sie uns freiwillig mitteilen, wenn Sie:',
    section1_1_list1: [
      'Ein Angebot für Transporte oder Logistik anfragen;',
      'Kontakt- oder Anfrageformulare ausfüllen;',
      'Mit uns kommunizieren;',
    ],
    section1_1_desc2: 'Dazu können gehören:',
    section1_1_list2: [
      'Vor- und Nachname',
      'Firmenname',
      'E-Mail-Adresse',
      'Telefonnummer',
      'Lade- und Entladeadresse',
      'Frachtinformationen (Gewicht, Maße etc.)',
    ],

    section1_2: '1.2 Automatisch erhobene Daten',
    section1_2_desc: 'Beim Besuch der Website werden automatisch folgende Daten erhoben:',
    section1_2_list: [
      'IP-Adresse',
      'Browsertyp und -version',
      'Betriebssystem',
      'Besuchte Seiten und Verweildauer',
      'Datum und Uhrzeit des Besuchs',
      'Referrer-URL',
    ],
    section1_2_desc2: 'Diese Daten werden mithilfe von Cookies und ähnlichen Technologien erfasst.',

    section2: '2. Cookies und Tracking-Technologien',
    section2_desc: 'Wir verwenden Cookies für folgende Zwecke:',
    section2_list: [
      'Gewährleistung der Funktionalität der Website',
      'Analyse der Website-Nutzung',
      'Verbesserung des Nutzererlebnisses',
      'Speicherung Ihrer Einstellungen',
    ],
    section2_desc2:
      'Sie können Cookies in Ihrem Browser verwalten. Wir verwenden ein Cookie-Banner, das Tracking-Tools erst nach Ihrer Einwilligung aktiviert (DSGVO-konform).',

    section3: '3. Drittanbieter-Dienste',
    section3_desc: 'Wir nutzen folgende Drittanbieter-Dienste:',
    section3_list: [
      'Google Fonts — zur Darstellung von Schriftarten',
      'Google Analytics — zur Analyse der Website-Nutzung',
      'Meta Pixel (Facebook Pixel) — für Marketing-Analyse und Retargeting',
      'Google Maps — zur Darstellung von Standorten (falls verwendet)',
    ],
    section3_desc2:
      'Diese Dienste können personenbezogene Daten (z. B. IP-Adresse) verarbeiten. Wir setzen wo möglich Anonymisierungsfunktionen ein. Sie können Ihre Einwilligung jederzeit über das Cookie-Banner widerrufen.',

    section4: '4. Hosting-Anbieter',
    section4_desc:
      'Unsere Website wird bei einem Hosting-Anbieter in der EU gehostet. Der Hosting-Provider verarbeitet Daten ausschließlich in unserem Auftrag und darf sie nicht für eigene Zwecke nutzen.',

    section5: '5. Wie wir Ihre Daten verwenden',
    section5_desc: 'Wir nutzen Ihre Daten für folgende Zwecke:',
    section5_list: [
      'Bearbeitung Ihrer Transportanfragen',
      'Kommunikation mit Ihnen',
      'Verbesserung unserer Dienstleistungen',
      'Erfüllung vertraglicher Verpflichtungen',
      'Einhaltung gesetzlicher Vorgaben',
    ],

    section6: '6. Weitergabe von Daten',
    section6_desc: 'Wir geben Ihre Daten weiter an:',
    section6_list: [
      'Vertrauenswürdige Transportpartner (nur zur Durchführung des Transports)',
      'Dienstleister (Hosting, Analysetools, E-Mail-Dienste)',
      'Behörden — nur wenn gesetzlich vorgeschrieben',
    ],
    section6_desc2:
      'Wir verkaufen oder vermieten Ihre personenbezogenen Daten nicht zu Marketingzwecken.',

    section7: '7. Datensicherheit',
    section7_desc:
      'Wir treffen angemessene technische und organisatorische Maßnahmen zum Schutz Ihrer Daten.',

    section8: '8. Ihre Rechte gemäß DSGVO',
    section8_desc: 'Nach der Datenschutz-Grundverordnung (DSGVO) haben Sie folgende Rechte:',
    section8_list: [
      'Auskunft über Ihre gespeicherten Daten',
      'Berichtigung unrichtiger oder unvollständiger Daten',
      'Löschung Ihrer Daten („Recht auf Vergessenwerden“)',
      'Einschränkung der Verarbeitung',
      'Widerspruch gegen die Verarbeitung',
      'Datenübertragbarkeit',
      'Jederzeitige Widerrufbarkeit einer Einwilligung',
      'Beschwerde bei einer Aufsichtsbehörde',
    ],
    section8_desc2: 'Zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte.',

    section9: '9. Verantwortlicher für die Datenverarbeitung',
    section9_desc: 'Verantwortlich für die Datenverarbeitung ist:',
    section9_name: 'Kantsedal Artem',
    section9_contact: 'E-Mail: hinundher.de@gmail.com',

    section10: '10. Änderungen dieser Datenschutzerklärung',
    section10_desc:
      'Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu aktualisieren. Die aktuelle Version finden Sie immer auf unserer Website.',

    section11: '11. Kontakt',
    section11_desc: 'Bei Fragen zu dieser Datenschutzerklärung kontaktieren Sie uns gerne:',
    section11_contact: 'E-Mail: hinundher.de@gmail.com',
  },
};

export const PrivacyPolicy: React.FC = () => {
  const location = useLocation();
  const isUa = location.pathname.startsWith('/ua');
  const lang = isUa ? 'ua' : 'de';
  const t = translations[lang];

  return (
    <>
      <div className={styles.privacyPolicyMainBlock}>
        <div className={styles.privacyPolicyBlock}>
          <h1 className={styles.privacyPolicyTitle}>
            {t.title} <span>{t.titleHighlight}</span>
          </h1>

          <p className={styles.privacyPolicyDescriptions}>{t.description1}</p>
          <p className={styles.privacyPolicyDescriptions}>{t.description2}</p>

          <div className={styles.privacyPolicyMainList}>
            {/* 1 */}
            <h4 className={styles.privacyPolicyMainListTitle}>{t.section1}</h4>

            <h5
              className={clsx(
                styles.privacyPolicyMainListTitle,
                styles.privacyPolicyMainListTitleDown,
              )}>
              {t.section1_1}
            </h5>
            <p className={styles.privacyPolicyMainListDescriptions}>{t.section1_1_desc}</p>
            <ul className={styles.privacyPolicyList}>
              {t.section1_1_list1.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className={styles.privacyPolicyMainListDescriptions}>{t.section1_1_desc2}</p>
            <ul className={styles.privacyPolicyList}>
              {t.section1_1_list2.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h5
              className={clsx(
                styles.privacyPolicyMainListTitle,
                styles.privacyPolicyMainListTitleDown,
              )}>
              {t.section1_2}
            </h5>
            <p className={styles.privacyPolicyMainListDescriptions}>{t.section1_2_desc}</p>
            <ul className={styles.privacyPolicyList}>
              {t.section1_2_list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className={styles.privacyPolicyMainListDescriptions}>{t.section1_2_desc2}</p>

            {/* 2 */}
            <h4 className={styles.privacyPolicyMainListTitle}>{t.section2}</h4>
            <p className={styles.privacyPolicyMainListDescriptions}>{t.section2_desc}</p>
            <ul className={styles.privacyPolicyList}>
              {t.section2_list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className={styles.privacyPolicyMainListDescriptions}>{t.section2_desc2}</p>

            {/* 3 — Новый раздел */}
            <h4 className={styles.privacyPolicyMainListTitle}>{t.section3}</h4>
            <p className={styles.privacyPolicyMainListDescriptions}>{t.section3_desc}</p>
            <ul className={styles.privacyPolicyList}>
              {t.section3_list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className={styles.privacyPolicyMainListDescriptions}>{t.section3_desc2}</p>

            {/* 4 — Хостинг */}
            <h4 className={styles.privacyPolicyMainListTitle}>{t.section4}</h4>
            <p className={styles.privacyPolicyMainListDescriptions}>{t.section4_desc}</p>

            {/* 5 */}
            <h4 className={styles.privacyPolicyMainListTitle}>{t.section5}</h4>
            <p className={styles.privacyPolicyMainListDescriptions}>{t.section5_desc}</p>
            <ul className={styles.privacyPolicyList}>
              {t.section5_list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {/* 6 */}
            <h4 className={styles.privacyPolicyMainListTitle}>{t.section6}</h4>
            <p className={styles.privacyPolicyMainListDescriptions}>{t.section6_desc}</p>
            <ul className={styles.privacyPolicyList}>
              {t.section6_list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className={styles.privacyPolicyMainListDescriptions}>{t.section6_desc2}</p>

            {/* 7 */}
            <h4 className={styles.privacyPolicyMainListTitle}>{t.section7}</h4>
            <p className={styles.privacyPolicyMainListDescriptions}>{t.section7_desc}</p>

            {/* 8 — Права по DSGVO */}
            <h4 className={styles.privacyPolicyMainListTitle}>{t.section8}</h4>
            <p className={styles.privacyPolicyMainListDescriptions}>{t.section8_desc}</p>
            <ul className={styles.privacyPolicyList}>
              {t.section8_list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className={styles.privacyPolicyMainListDescriptions}>{t.section8_desc2}</p>

            {/* 9 — Verantwortlicher */}
            <h4 className={styles.privacyPolicyMainListTitle}>{t.section9}</h4>
            <p className={styles.privacyPolicyMainListDescriptions}>{t.section9_desc}</p>
            <p className={styles.privacyPolicyMainListDescriptions}>
              <strong>{t.section9_name}</strong>
            </p>
            <p className={styles.privacyPolicyMainListDescriptions}>{t.section9_contact}</p>

            {/* 10 */}
            <h4 className={styles.privacyPolicyMainListTitle}>{t.section10}</h4>
            <p className={styles.privacyPolicyMainListDescriptions}>{t.section10_desc}</p>

            {/* 11 */}
            <h4 className={styles.privacyPolicyMainListTitle}>{t.section11}</h4>
            <p className={styles.privacyPolicyMainListDescriptions}>{t.section11_desc}</p>
            <p className={styles.privacyPolicyMainListDescriptions}>{t.section11_contact}</p>
          </div>
        </div>
      </div>
      <Footer isNotMenu={isNotMenu} />
    </>
  );
};
