import React, { useState } from 'react';
import { FormType } from '../../types';
import { Button } from '../Button/Button';
import { useLanguage } from '../../context/LanguageContext';
import styles from './LeadForm.module.scss';

interface LeadFormProps {
  type: FormType;
  onSuccess: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ type, onSuccess }) => {
  const { lang } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = {
    firstName: lang === 'de' ? 'Vorname' : 'Імʼя',
    lastName: lang === 'de' ? 'Nachname' : 'Прізвище',
    company: lang === 'de' ? 'Firma (Optional)' : 'Компанія (необовʼязково)',
    email: lang === 'de' ? 'E-Mail Adresse' : 'Електронна пошта',
    phone: lang === 'de' ? 'Telefonnummer' : 'Номер телефону',
    yourRequest: lang === 'de' ? 'Ihre Anfrage' : 'Ваш запит',
    submit: lang === 'de' ? 'Kostenlos anfragen' : 'Надіслати безкоштовно',
    submitting: lang === 'de' ? 'Wird gesendet...' : 'Відправляється...',
    privacy:
      lang === 'de'
        ? 'Ihre Daten werden sicher und verschlüsselt übertragen.'
        : 'Ваші дані передаються безпечно та зашифровано.',
    successMessage:
      lang === 'de'
        ? 'Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet. Wir werden uns in Kürze bei Ihnen melden.'
        : "Дякуємо! Ваш запит успішно надіслано. Ми зв'яжемося з вами найближчим часом.",

    from: lang === 'de' ? 'Abgangsort (PLZ/Ort)' : 'Місце відправлення (індекс/місто)',
    to: lang === 'de' ? 'Empfangsort (PLZ/Ort)' : 'Місце призначення (індекс/місто)',
    weight: lang === 'de' ? 'Gewicht (kg)' : 'Вага (кг)',
    length: lang === 'de' ? 'Länge (cm)' : 'Довжина (см)',
    width: lang === 'de' ? 'Breite (cm)' : 'Ширина (см)',
    height: lang === 'de' ? 'Höhe (cm)' : 'Висота (см)',
    quantity: lang === 'de' ? 'Menge' : 'Кількість',
    cargoType: lang === 'de' ? 'Art der Ware' : 'Тип вантажу',
    optionTypeOne: lang === 'de' ? 'Euro pallet' : 'Європалет',
    optionTypeTwo: lang === 'de' ? 'Pallets' : 'Палети',
    optionTypeThree: lang === 'de' ? 'Boxes' : 'Коробки',
    challenge: lang === 'de' ? 'Aktuelle Herausforderung' : 'Поточні виклики',
    challengePlaceholder:
      lang === 'de'
        ? 'Beschreiben Sie kurz Ihre logistischen Anforderungen...'
        : 'Коротко опишіть ваші логістичні потреби...',
    fromZip: lang === 'de' ? 'Von (PLZ)' : 'Звідки (індекс)',
    toZip: lang === 'de' ? 'Nach (PLZ)' : 'Куди (індекс)',
    area: lang === 'de' ? 'Wohnfläche (m²)' : 'Площа (м²)',
    areaPlaceholder: lang === 'de' ? 'z.B. 85' : 'наприклад, 85',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess();
      alert(t.successMessage);
    }, 1500);
  };

  const renderSpecificFields = () => {
    switch (type) {
      case FormType.TRANSPORT:
        return (
          <>
            <div className={styles.field}>
              <label className={styles.label}>{t.from}</label>
              <input
                required
                type='text'
                className={styles.input}
                placeholder='z.B. 10115 Berlin'
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>{t.to}</label>
              <input
                required
                type='text'
                className={styles.input}
                placeholder='z.B. 80331 München'
              />
            </div>
            <div className={styles.grid2}>
              <div>
                <label className={styles.label}>{t.cargoType}</label>
                <select className={styles.select}>
                  <option>{t.optionTypeOne}</option>
                  <option>{t.optionTypeTwo}</option>
                  <option>{t.optionTypeThree}</option>
                  <option>{lang === 'de' ? 'Weiß nicht genau' : 'Не знаю точно'}</option>
                </select>
              </div>
              <div>
                <label className={styles.label}>{t.quantity}</label>
                <input type='text' className={styles.input} placeholder='1' />
              </div>
              <div>
                <label className={styles.label}>{t.length}</label>
                <input type='text' className={styles.input} placeholder='120' />
              </div>
              <div>
                <label className={styles.label}>{t.width}</label>
                <input type='text' className={styles.input} placeholder='80' />
              </div>
              <div>
                <label className={styles.label}>{t.height}</label>
                <input type='text' className={styles.input} placeholder='100' />
              </div>
              <div>
                <label className={styles.label}>{t.weight}</label>
                <input type='text' className={styles.input} placeholder='300' />
              </div>
            </div>
          </>
        );

      case FormType.LOGISTICS:
        return (
          <div className={styles.field}>
            <label className={styles.label}>{t.challenge}</label>
            <textarea
              required
              rows={3}
              className={styles.textarea}
              placeholder={t.challengePlaceholder}
            />
          </div>
        );

      case FormType.MOVING:
        return (
          <>
            <div className={styles.grid2}>
              <div>
                <label className={styles.label}>{t.fromZip}</label>
                <input required type='text' className={styles.input} />
              </div>
              <div>
                <label className={styles.label}>{t.toZip}</label>
                <input required type='text' className={styles.input} />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>{t.area}</label>
              <input
                required
                type='number'
                className={styles.input}
                placeholder={t.areaPlaceholder}
              />
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.grid2}>
        <div>
          <label className={styles.label}>{t.firstName}</label>
          <input required type='text' className={styles.input} />
        </div>
        <div>
          <label className={styles.label}>{t.lastName}</label>
          <input required type='text' className={styles.input} />
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label}>{t.company}</label>
        <input type='text' className={styles.input} />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>{t.email}</label>
        <input required type='email' className={styles.input} />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>{t.phone}</label>
        <input required type='tel' className={styles.input} />
      </div>

      <div className={styles.requestBox}>
        <h4 className={styles.requestTitle}>{t.yourRequest}</h4>
        {renderSpecificFields()}
      </div>

      <div className={styles.footer}>
        <Button type='submit' variant='primary' fullWidth disabled={isSubmitting}>
          {isSubmitting ? t.submitting : t.submit}
        </Button>
        <p className={styles.privacyNote}>{t.privacy}</p>
      </div>
    </form>
  );
};
