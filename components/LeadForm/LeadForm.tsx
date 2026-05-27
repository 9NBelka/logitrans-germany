import React, { useState, useEffect, useRef } from 'react';
import { FormType } from '../../types';
import { Button } from '../Button/Button';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Leadform.module.scss';

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

let googleMapsPromise: Promise<void> | null = null;

function loadGoogleMapsScript(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.google?.maps?.places) return Promise.resolve();
  if (googleMapsPromise) return googleMapsPromise;

  googleMapsPromise = new Promise((resolve, reject) => {
    const existing = document.getElementById('google-maps-script') as HTMLScriptElement | null;

    if (existing) {
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => reject());
      return;
    }

    const script = document.createElement('script');
    script.id = 'google-maps-script';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;

    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Google Maps failed to load'));

    document.head.appendChild(script);
  });

  return googleMapsPromise;
}

interface LeadFormProps {
  type: FormType;
  onSuccess: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ type, onSuccess }) => {
  const { lang } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL;

  // Refs для автокомплита
  const fromRef = useRef<HTMLInputElement>(null);
  const toRef = useRef<HTMLInputElement>(null);

  // Google Autocomplete
  useEffect(() => {
    if (type !== FormType.TRANSPORT) return;

    let fromListener: google.maps.MapsEventListener | null = null;
    let toListener: google.maps.MapsEventListener | null = null;

    let acFrom: google.maps.places.Autocomplete | null = null;
    let acTo: google.maps.places.Autocomplete | null = null;

    loadGoogleMapsScript()
      .then(() => {
        const options: google.maps.places.AutocompleteOptions = {
          types: ['(regions)'],
          fields: ['formatted_address', 'name'],
        };

        if (fromRef.current) {
          acFrom = new google.maps.places.Autocomplete(fromRef.current, options);
          fromListener = acFrom.addListener('place_changed', () => {
            const place = acFrom?.getPlace();
            if (fromRef.current && place) {
              fromRef.current.value = place.formatted_address || place.name || '';
            }
          });
        }

        if (toRef.current) {
          acTo = new google.maps.places.Autocomplete(toRef.current, options);
          toListener = acTo.addListener('place_changed', () => {
            const place = acTo?.getPlace();
            if (toRef.current && place) {
              toRef.current.value = place.formatted_address || place.name || '';
            }
          });
        }
      })
      .catch((err) => {
        console.error('Google Maps failed to initialize:', err);
      });

    return () => {
      fromListener?.remove();
      toListener?.remove();
      if (acFrom) google.maps.event.clearInstanceListeners(acFrom);
      if (acTo) google.maps.event.clearInstanceListeners(acTo);
    };
  }, [type]);

  const t = {
    firstName: lang === 'de' ? 'Vorname' : 'Імʼя',
    lastName: lang === 'de' ? 'Nachname' : 'Прізвище',
    company: lang === 'de' ? 'Firma (Optional)' : 'Компанія (необовʼязково)',
    email: lang === 'de' ? 'E-Mail Adresse' : 'Електронна пошта',
    phone: lang === 'de' ? 'Telefonnummer' : 'Номер телефону',
    yourRequest: lang === 'de' ? 'Ihre Anfrage' : 'Ваш запит',
    submit: lang === 'de' ? 'Kostenlos anfragen' : 'Надіслати безкоштовно',
    submitting: lang === 'de' ? 'Wird gesendet...' : 'Відправляється...',
    privacyNote:
      lang === 'de'
        ? 'Ihre Daten werden sicher und verschlüsselt übertragen.'
        : 'Ваші дані передаються безпечно та зашифровано.',

    privacyConsent:
      lang === 'de'
        ? 'Ich habe es gelesen und werde damit zurechtkommen.'
        : 'Я прочитав(-ла) та погоджуюсь з ',

    privacyLinkText: lang === 'de' ? 'Datenschutzerklärung' : 'Політикою конфіденційності',

    errorPrivacy:
      lang === 'de'
        ? 'Bitte stimmen Sie der Datenschutzerklärung zu.'
        : 'Будь ласка, погодьтесь з Політикою конфіденційності.',

    successMessage:
      lang === 'de'
        ? 'Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet.'
        : 'Дякуємо! Ваш запит успішно надіслано.',

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!privacyAccepted) {
      setError(t.errorPrivacy);
      return;
    }

    if (isSubmitting) return;

    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget as HTMLFormElement;
    const fd = new FormData(form);

    const payload: Record<string, unknown> = {
      formType: type,
      lang,
      firstName: fd.get('firstName'),
      lastName: fd.get('lastName'),
      company: fd.get('company'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      privacyAccepted: privacyAccepted,
    };

    if (type === FormType.TRANSPORT) {
      Object.assign(payload, {
        from: fd.get('from'),
        to: fd.get('to'),
        cargoType: fd.get('cargoType'),
        quantity: fd.get('quantity'),
        length: fd.get('length'),
        width: fd.get('width'),
        height: fd.get('height'),
        weight: fd.get('weight'),
      });
    }

    if (type === FormType.LOGISTICS) {
      payload.challenge = fd.get('challenge');
    }

    if (type === FormType.MOVING) {
      Object.assign(payload, {
        fromZip: fd.get('fromZip'),
        toZip: fd.get('toZip'),
        area: fd.get('area'),
      });
    }

    try {
      if (!N8N_WEBHOOK_URL) throw new Error('Webhook URL not configured');

      const res = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        mode: 'cors',
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      form.reset();
      setPrivacyAccepted(false);
      onSuccess();
      alert(t.successMessage);
    } catch (err) {
      console.error('Ошибка отправки:', err);
      setError(lang === 'de' ? 'Fehler beim Senden...' : 'Помилка при відправці...');
    } finally {
      setIsSubmitting(false);
    }
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
                ref={fromRef}
                name='from'
                type='text'
                className={styles.input}
                placeholder='z.B. 10115 Berlin'
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>{t.to}</label>
              <input
                required
                ref={toRef}
                name='to'
                type='text'
                className={styles.input}
                placeholder='z.B. 80331 München'
              />
            </div>
            <div className={styles.grid2}>
              <div>
                <label className={styles.label}>{t.cargoType}</label>
                <select name='cargoType' className={styles.select}>
                  <option>{t.optionTypeOne}</option>
                  <option>{t.optionTypeTwo}</option>
                  <option>{t.optionTypeThree}</option>
                  <option>{lang === 'de' ? 'Weiß nicht genau' : 'Не знаю точно'}</option>
                </select>
              </div>
              <div>
                <label className={styles.label}>{t.quantity}</label>
                <input name='quantity' type='text' className={styles.input} placeholder='1' />
              </div>
              <div>
                <label className={styles.label}>{t.length}</label>
                <input name='length' type='text' className={styles.input} placeholder='120' />
              </div>
              <div>
                <label className={styles.label}>{t.width}</label>
                <input name='width' type='text' className={styles.input} placeholder='80' />
              </div>
              <div>
                <label className={styles.label}>{t.height}</label>
                <input name='height' type='text' className={styles.input} placeholder='100' />
              </div>
              <div>
                <label className={styles.label}>{t.weight}</label>
                <input name='weight' type='text' className={styles.input} placeholder='300' />
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
              name='challenge'
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
                <input required name='fromZip' type='text' className={styles.input} />
              </div>
              <div>
                <label className={styles.label}>{t.toZip}</label>
                <input required name='toZip' type='text' className={styles.input} />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>{t.area}</label>
              <input
                required
                name='area'
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
          <input required name='firstName' type='text' className={styles.input} />
        </div>
        <div>
          <label className={styles.label}>{t.lastName}</label>
          <input required name='lastName' type='text' className={styles.input} />
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label}>{t.company}</label>
        <input name='company' type='text' className={styles.input} />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>{t.email}</label>
        <input required name='email' type='email' className={styles.input} />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>{t.phone}</label>
        <input required name='phone' type='tel' className={styles.input} />
      </div>

      <div className={styles.requestBox}>
        <h4 className={styles.requestTitle}>{t.yourRequest}</h4>
        {renderSpecificFields()}
      </div>

      <div className={styles.privacyConsent}>
        <label className={styles.checkboxContainer}>
          <input
            type='checkbox'
            checked={privacyAccepted}
            onChange={(e) => setPrivacyAccepted(e.target.checked)}
            required
          />
          <span>
            {t.privacyConsent}{' '}
            <a
              href={lang === 'de' ? '/privacy-policy' : '/ua/privacy-policy'}
              target='_blank'
              rel='noopener noreferrer'>
              {t.privacyLinkText}.
            </a>
          </span>
        </label>
      </div>

      <div className={styles.footer}>
        {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

        <Button type='submit' variant='primary' fullWidth disabled={isSubmitting}>
          {isSubmitting ? t.submitting : t.submit}
        </Button>
        <p className={styles.privacyNote}>{t.privacy}</p>
      </div>
    </form>
  );
};
