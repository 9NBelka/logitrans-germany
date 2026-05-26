import React from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import styles from './PrivacyPolicy.module.scss';

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
      'Звертаєтесь до нас через контактні форми;',
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
      'Сторінки, які ви відвідуєте',
      'Дата і час візиту',
      'Джерело переходу',
    ],
    section1_2_desc2: 'Ця інформація збирається за допомогою файлів cookie та подібних технологій.',

    section2: '2. Файли cookie та технології відстеження',
    section2_desc: 'Ми використовуємо cookie для:',
    section2_list: [
      'Забезпечення коректної роботи сайту',
      'Аналізу відвідуваності',
      'Покращення користувацького досвіду',
      "Запам'ятовування ваших налаштувань",
    ],
    section2_desc2:
      'Ви можете вимкнути cookie у налаштуваннях браузера, але це може вплинути на роботу сайту.',

    section3: '3. Як ми використовуємо вашу інформацію',
    section3_desc: 'Ми використовуємо зібрані дані для:',
    section3_list: [
      'Обробки ваших заявок на перевезення',
      'Зв’язку з вами щодо послуг',
      'Покращення якості наших послуг',
      'Виконання договірних зобов’язань',
      'Виконання вимог законодавства',
    ],

    section4: '4. Передача інформації',
    section4_desc: 'Ми можемо передавати ваші дані:',
    section4_list: [
      'Надійним партнерам-перевізникам (тільки для виконання перевезення)',
      'Стороннім сервісам (хостинг, аналітика, email-розсилки)',
      'Правоохоронним органам — лише у випадках, передбачених законом',
    ],
    section4_desc2: 'Ми не продаємо ваші персональні дані третім особам для маркетингу.',

    section5: '5. Безпека даних',
    section5_desc:
      'Ми застосовуємо сучасні технічні та організаційні заходи для захисту ваших даних від несанкціонованого доступу.',

    section6: '6. Посилання на сторонні ресурси',
    section6_desc:
      'Наш сайт може містити посилання на сторонні сайти. Ми не несемо відповідальності за їхню політику конфіденційності.',

    section7: '7. Конфіденційність дітей',
    section7_desc:
      'Наш сайт не призначений для дітей молодше 16 років. Ми не збираємо свідомо дані неповнолітніх.',

    section8: '8. Ваші права',
    section8_desc: 'Ви маєте право:',
    section8_list: [
      'Доступу до своїх персональних даних',
      'Виправлення або видалення даних',
      'Обмеження обробки',
      'Відкликання згоди',
      'Подання скарги до наглядового органу',
    ],
    section8_desc2: "Для реалізації цих прав зв'яжіться з нами.",

    section9: '9. Зміни до політики',
    section9_desc:
      'Ми можемо періодично оновлювати цю Політику. Зміни набирають чинності з моменту публікації на сайті.',

    section10: "10. Зв'язок з нами",
    section10_desc: 'Якщо у вас є питання щодо цієї Політики конфіденційності, пишіть нам:',
    section10_contact: 'Email: hinundher.de@gmail.com',
  },

  de: {
    title: 'Datenschutzerklärung für',
    titleHighlight: 'Kantsedal Artem',
    description1:
      'Vielen Dank, dass Sie sich für Kantsedal Artem entschieden haben! Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst. Diese Datenschutzerklärung erklärt, welche Informationen wir sammeln, wie wir sie verwenden und welche Rechte Sie haben, wenn Sie unsere Website https://hinunder2023.de besuchen oder nutzen.',
    description2:
      'Durch die Nutzung unserer Website stimmen Sie den Bedingungen dieser Datenschutzerklärung zu. Bitte nutzen Sie die Website nicht, wenn Sie nicht einverstanden sind.',

    section1: '1. Welche Daten wir sammeln',
    section1_1: '1.1 Von Ihnen bereitgestellte Daten',
    section1_1_desc: 'Wir sammeln Daten, die Sie uns freiwillig mitteilen, wenn Sie:',
    section1_1_list1: [
      'Ein Angebot für Transporte oder Logistik anfragen;',
      'Kontaktformulare ausfüllen;',
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
    section2_desc: 'Wir verwenden Cookies, um:',
    section2_list: [
      'Die Funktionalität der Website zu gewährleisten',
      'Die Nutzung der Website zu analysieren',
      'Ihr Nutzererlebnis zu verbessern',
      'Einstellungen zu speichern',
    ],
    section2_desc2:
      'Sie können Cookies in Ihrem Browser deaktivieren. Beachten Sie jedoch, dass dies die Funktionalität der Website beeinträchtigen kann.',

    section3: '3. Wie wir Ihre Daten verwenden',
    section3_desc: 'Wir nutzen Ihre Daten für folgende Zwecke:',
    section3_list: [
      'Bearbeitung Ihrer Transportanfragen',
      'Kommunikation mit Ihnen',
      'Verbesserung unserer Dienstleistungen',
      'Erfüllung vertraglicher Verpflichtungen',
      'Einhaltung gesetzlicher Vorgaben',
    ],

    section4: '4. Weitergabe von Daten',
    section4_desc: 'Wir geben Ihre Daten weiter an:',
    section4_list: [
      'Vertrauenswürdige Transportpartner (nur zur Durchführung des Transports)',
      'Dienstleister (Hosting, Analysetools, E-Mail-Dienste)',
      'Behörden — nur wenn gesetzlich vorgeschrieben',
    ],
    section4_desc2:
      'Wir verkaufen oder vermieten Ihre personenbezogenen Daten nicht zu Marketingzwecken.',

    section5: '5. Datensicherheit',
    section5_desc:
      'Wir treffen angemessene technische und organisatorische Maßnahmen zum Schutz Ihrer Daten.',

    section6: '6. Links zu Drittanbietern',
    section6_desc:
      'Unsere Website kann Links zu externen Seiten enthalten. Wir sind nicht verantwortlich für deren Datenschutzpraktiken.',

    section7: '7. Datenschutz für Kinder',
    section7_desc:
      'Unsere Website richtet sich nicht an Kinder unter 16 Jahren. Wir erheben wissentlich keine Daten von Minderjährigen.',

    section8: '8. Ihre Rechte',
    section8_desc: 'Sie haben das Recht:',
    section8_list: [
      'Auskunft über Ihre gespeicherten Daten zu erhalten',
      'Ihre Daten zu berichtigen oder löschen zu lassen',
      'Die Verarbeitung einzuschränken',
      'Ihre Einwilligung jederzeit zu widerrufen',
      'Beschwerde bei einer Aufsichtsbehörde einzureichen',
    ],
    section8_desc2: 'Zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte.',

    section9: '9. Änderungen dieser Datenschutzerklärung',
    section9_desc:
      'Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu aktualisieren. Die aktuelle Version finden Sie immer auf unserer Website.',

    section10: '10. Kontakt',
    section10_desc: 'Bei Fragen zu dieser Datenschutzerklärung kontaktieren Sie uns gerne:',
    section10_contact: 'E-Mail: hinundher.de@gmail.com',
  },
};

export const PrivacyPolicy: React.FC = () => {
  const location = useLocation();
  const isUa = location.pathname.startsWith('/ua');
  const lang = isUa ? 'ua' : 'de';
  const t = translations[lang];

  return (
    <div className={styles.privacyPolicyMainBlock}>
      <div className={styles.privacyPolicyBlock}>
        <h1 className={styles.privacyPolicyTitle}>
          {t.title} <span>{t.titleHighlight}</span>
        </h1>

        <p className={styles.privacyPolicyDescriptions}>{t.description1}</p>
        <p className={styles.privacyPolicyDescriptions}>{t.description2}</p>

        <div className={styles.privacyPolicyMainList}>
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

          <h4 className={styles.privacyPolicyMainListTitle}>{t.section2}</h4>
          <p className={styles.privacyPolicyMainListDescriptions}>{t.section2_desc}</p>
          <ul className={styles.privacyPolicyList}>
            {t.section2_list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className={styles.privacyPolicyMainListDescriptions}>{t.section2_desc2}</p>

          <h4 className={styles.privacyPolicyMainListTitle}>{t.section3}</h4>
          <p className={styles.privacyPolicyMainListDescriptions}>{t.section3_desc}</p>
          <ul className={styles.privacyPolicyList}>
            {t.section3_list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h4 className={styles.privacyPolicyMainListTitle}>{t.section4}</h4>
          <p className={styles.privacyPolicyMainListDescriptions}>{t.section4_desc}</p>
          <ul className={styles.privacyPolicyList}>
            {t.section4_list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className={styles.privacyPolicyMainListDescriptions}>{t.section4_desc2}</p>

          <h4 className={styles.privacyPolicyMainListTitle}>{t.section5}</h4>
          <p className={styles.privacyPolicyMainListDescriptions}>{t.section5_desc}</p>

          <h4 className={styles.privacyPolicyMainListTitle}>{t.section6}</h4>
          <p className={styles.privacyPolicyMainListDescriptions}>{t.section6_desc}</p>

          <h4 className={styles.privacyPolicyMainListTitle}>{t.section7}</h4>
          <p className={styles.privacyPolicyMainListDescriptions}>{t.section7_desc}</p>

          <h4 className={styles.privacyPolicyMainListTitle}>{t.section8}</h4>
          <p className={styles.privacyPolicyMainListDescriptions}>{t.section8_desc}</p>
          <ul className={styles.privacyPolicyList}>
            {t.section8_list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className={styles.privacyPolicyMainListDescriptions}>{t.section8_desc2}</p>

          <h4 className={styles.privacyPolicyMainListTitle}>{t.section9}</h4>
          <p className={styles.privacyPolicyMainListDescriptions}>{t.section9_desc}</p>

          <h4 className={styles.privacyPolicyMainListTitle}>{t.section10}</h4>
          <p className={styles.privacyPolicyMainListDescriptions}>{t.section10_desc}</p>
          <p className={styles.privacyPolicyMainListDescriptions}>{t.section10_contact}</p>
        </div>
      </div>
    </div>
  );
};
