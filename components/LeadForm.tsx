// components/LeadForm.tsx

import React, { useState, useEffect, useRef } from 'react';
import { FormType } from '../types';
import { Button } from './Button/Button';
import { useLanguage } from '../context/LanguageContext';

const N8N_WEBHOOK_URL = import.meta.env.N8N_WEBHOOK_URL;

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

let googleMapsPromise: Promise<void> | null = null;

// Load Google Maps SDK once
function loadGoogleMapsScript(): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.resolve();
  }

  if (window.google?.maps?.places) {
    return Promise.resolve();
  }

  if (googleMapsPromise) {
    return googleMapsPromise;
  }

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
  const [isUrgent, setIsUrgent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const fromRef = useRef<HTMLInputElement>(null);
  const toRef = useRef<HTMLInputElement>(null);

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

            if (fromRef.current) {
              fromRef.current.value = place?.formatted_address || place?.name || '';
            }
          });
        }

        if (toRef.current) {
          acTo = new google.maps.places.Autocomplete(toRef.current, options);

          toListener = acTo.addListener('place_changed', () => {
            const place = acTo?.getPlace();

            if (toRef.current) {
              toRef.current.value = place?.formatted_address || place?.name || '';
            }
          });
        }
      })
      .catch(() => {
        console.error('Google Maps failed to initialize');
      });

    return () => {
      fromListener?.remove();
      toListener?.remove();

      if (acFrom) {
        google.maps.event.clearInstanceListeners(acFrom);
      }

      if (acTo) {
        google.maps.event.clearInstanceListeners(acTo);
      }
    };
  }, [type]);

  const t = {
    firstName: lang === 'de' ? 'Vorname' : 'Імʼя',
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

    from: lang === 'de' ? 'Abgangsort (PLZ/Ort)' : 'Місце відправлення (індекс/місто)',

    to: lang === 'de' ? 'Empfangsort (PLZ/Ort)' : 'Місце призначення (індекс/місто)',

    weight: lang === 'de' ? 'Gewicht (kg)' : 'Вага (кг)',
    weightPlaceholder: '300',

    length: lang === 'de' ? 'Länge (cm)' : 'Довжина (см)',
    lengthPlaceholder: '120',

    width: lang === 'de' ? 'Breite (cm)' : 'Ширина (см)',
    widthPlaceholder: '80',

    height: lang === 'de' ? 'Höhe (cm)' : 'Висота (см)',
    heightPlaceholder: '100',

    quantity: lang === 'de' ? 'Menge' : 'Кількість',
    quantityPlaceholder: '1',

    cargoType: lang === 'de' ? 'Art der Ware' : 'Тип вантажу',

    optionTypeOne: lang === 'de' ? 'Euro pallet' : 'Європалет',
    optionTypeTwo: lang === 'de' ? 'Pallets' : 'Палети',
    optionTypeThree: lang === 'de' ? 'Boxes' : 'Коробки',

    vehicleType: lang === 'de' ? 'Fahrzeugtyp' : 'Тип транспорту',
    vehicleUp35: lang === 'de' ? 'Fahrzeug bis 3,5 t' : 'Авто до 3,5 т',
    vehicleTent: lang === 'de' ? 'Plane (Tautliner)' : 'Тент',
    vehicleRefer: lang === 'de' ? 'Kühlfahrzeug (Reefer)' : 'Рефрижератор',
    vehiclePlatform: lang === 'de' ? 'Pritsche (Flatbed)' : 'Платформа',
    vehicleOther: lang === 'de' ? 'Andere' : 'Інший варіант',

    loadingDate: lang === 'de' ? 'Ladedatum (optional)' : 'Дата завантаження (необовʼязково)',

    loadingTime: lang === 'de' ? 'Ladezeit (optional)' : 'Час завантаження (необовʼязково)',

    loadingTimePlaceholder: lang === 'de' ? 'Bitte wählen' : 'Оберіть діапазон',

    timeSlot1: '6:00–9:00',
    timeSlot2: '9:00–12:00',
    timeSlot3: '12:00–16:00',
    timeSlot4: '16:00–20:00',
    timeSlot5: '20:00–23:00',

    timeSlotFlexible: lang === 'de' ? 'Flexible Zeit' : 'Гнучкий час',

    urgentDelivery: lang === 'de' ? 'Eilsendung (Priorität)' : 'Термінова доставка (пріоритет)',

    comments: lang === 'de' ? 'Kommentare (optional)' : 'Коментарі (необовʼязково)',

    commentsPlaceholder:
      lang === 'de'
        ? 'Zusätzliche Informationen zur Sendung oder zur Ware'
        : 'Додаткова інформація про перевезення або вантаж',

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

  const inputClass =
    'w-full px-4 py-3 border border-gray-300 rounded-xl bg-white transition-all duration-200 outline-none focus:border-black focus:ring-4 focus:ring-black/5';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    const fd = new FormData(e.currentTarget);

    const payload: Record<string, unknown> = {
      formType: type,
      lang,
      firstName: fd.get('firstName'),
      company: fd.get('company'),
      email: fd.get('email'),
      phone: fd.get('phone'),
    };

    if (type === FormType.TRANSPORT) {
      Object.assign(payload, {
        from: fd.get('from'),
        to: fd.get('to'),
        vehicleType: fd.get('vehicleType'),
        cargoType: fd.get('cargoType'),
        quantity: fd.get('quantity'),
        length: fd.get('length'),
        width: fd.get('width'),
        height: fd.get('height'),
        weight: fd.get('weight'),
        loadingDate: fd.get('loadingDate'),
        loadingTime: fd.get('loadingTime'),
        urgentDelivery: isUrgent,
        comments: fd.get('comments'),
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
      const res = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      setSuccess(true);

      e.currentTarget.reset();

      setIsUrgent(false);

      onSuccess();
    } catch {
      setError(
        lang === 'de'
          ? 'Fehler beim Senden. Bitte versuchen Sie es erneut.'
          : 'Помилка при відправці. Спробуйте ще раз.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderSpecificFields = () => {
    switch (type) {
      case FormType.TRANSPORT:
        return (
          <>
            <div className='mb-5'>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>{t.from}</label>

              <input
                required
                ref={fromRef}
                name='from'
                type='text'
                className={inputClass}
                placeholder='z.B. 10115 Berlin'
              />
            </div>

            <div className='mb-5'>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>{t.to}</label>

              <input
                required
                ref={toRef}
                name='to'
                type='text'
                className={inputClass}
                placeholder='z.B. 80331 München'
              />
            </div>

            <div className='mb-5'>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>
                {t.vehicleType}
              </label>

              <select required name='vehicleType' className={inputClass}>
                <option value=''>{lang === 'de' ? 'Bitte wählen' : 'Оберіть тип'}</option>

                <option value='up35'>{t.vehicleUp35}</option>
                <option value='tent'>{t.vehicleTent}</option>
                <option value='refer'>{t.vehicleRefer}</option>
                <option value='platform'>{t.vehiclePlatform}</option>
                <option value='other'>{t.vehicleOther}</option>
              </select>
            </div>

            <div className='grid grid-cols-2 gap-4 mb-5'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  {t.cargoType}
                </label>

                <select name='cargoType' className={inputClass}>
                  <option value='euro-pallet'>{t.optionTypeOne}</option>

                  <option value='pallets'>{t.optionTypeTwo}</option>

                  <option value='boxes'>{t.optionTypeThree}</option>
                </select>
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  {t.quantity}
                </label>

                <input
                  name='quantity'
                  type='number'
                  inputMode='numeric'
                  className={inputClass}
                  placeholder={t.quantityPlaceholder}
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>{t.length}</label>

                <input
                  name='length'
                  type='number'
                  inputMode='numeric'
                  className={inputClass}
                  placeholder={t.lengthPlaceholder}
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>{t.width}</label>

                <input
                  name='width'
                  type='number'
                  inputMode='numeric'
                  className={inputClass}
                  placeholder={t.widthPlaceholder}
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>{t.height}</label>

                <input
                  name='height'
                  type='number'
                  inputMode='numeric'
                  className={inputClass}
                  placeholder={t.heightPlaceholder}
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>{t.weight}</label>

                <input
                  name='weight'
                  type='number'
                  inputMode='numeric'
                  className={inputClass}
                  placeholder={t.weightPlaceholder}
                />
              </div>
            </div>

            <div className='grid grid-cols-2 gap-4 mb-5'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  {t.loadingDate}
                </label>

                <input name='loadingDate' type='date' className={inputClass} />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  {t.loadingTime}
                </label>

                <select name='loadingTime' className={inputClass}>
                  <option value=''>{t.loadingTimePlaceholder}</option>

                  <option value='6-9'>{t.timeSlot1}</option>
                  <option value='9-12'>{t.timeSlot2}</option>
                  <option value='12-16'>{t.timeSlot3}</option>
                  <option value='16-20'>{t.timeSlot4}</option>
                  <option value='20-23'>{t.timeSlot5}</option>

                  <option value='flexible'>{t.timeSlotFlexible}</option>
                </select>
              </div>
            </div>

            <div className='mb-5'>
              <label className='flex items-center gap-3 cursor-pointer select-none'>
                <input
                  name='urgentDelivery'
                  type='checkbox'
                  checked={isUrgent}
                  onChange={(e) => setIsUrgent(e.target.checked)}
                  className='w-5 h-5 accent-black'
                />

                <span className='text-sm font-semibold text-gray-700'>{t.urgentDelivery}</span>
              </label>
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>{t.comments}</label>

              <textarea
                name='comments'
                rows={4}
                className={`${inputClass} resize-none`}
                placeholder={t.commentsPlaceholder}
              />
            </div>
          </>
        );

      case FormType.LOGISTICS:
        return (
          <div className='mb-4'>
            <label className='block text-sm font-semibold text-gray-700 mb-2'>{t.challenge}</label>

            <textarea
              required
              name='challenge'
              rows={4}
              className={`${inputClass} resize-none`}
              placeholder={t.challengePlaceholder}
            />
          </div>
        );

      case FormType.MOVING:
        return (
          <>
            <div className='grid grid-cols-2 gap-4 mb-5'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  {t.fromZip}
                </label>

                <input
                  required
                  name='fromZip'
                  type='text'
                  inputMode='numeric'
                  className={inputClass}
                />
              </div>

              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>{t.toZip}</label>

                <input
                  required
                  name='toZip'
                  type='text'
                  inputMode='numeric'
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-semibold text-gray-700 mb-2'>{t.area}</label>

              <input
                required
                name='area'
                type='number'
                className={inputClass}
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
    <form onSubmit={handleSubmit} className='w-full'>
      <div className='mb-5'>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>{t.firstName}</label>

        <input required name='firstName' type='text' className={inputClass} />
      </div>

      <div className='mb-5'>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>{t.company}</label>

        <input name='company' type='text' className={inputClass} />
      </div>

      <div className='mb-5'>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>{t.email}</label>

        <input required name='email' type='email' className={inputClass} />
      </div>

      <div className='mb-6'>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>{t.phone}</label>

        <input required name='phone' type='tel' className={inputClass} />
      </div>

      <div className='p-5 bg-gray-50 rounded-2xl border border-gray-200 mb-7'>
        <h4 className='font-bold text-sm text-black mb-5 uppercase tracking-wide'>
          {t.yourRequest}
        </h4>

        {renderSpecificFields()}
      </div>

      <div>
        {success && (
          <div className='mb-4 px-4 py-3 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm'>
            {lang === 'de'
              ? 'Ihre Anfrage wurde erfolgreich gesendet.'
              : 'Вашу заявку успішно надіслано.'}
          </div>
        )}

        {error && (
          <div className='mb-4 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm'>
            {error}
          </div>
        )}

        <Button type='submit' variant='primary' fullWidth disabled={isSubmitting}>
          {isSubmitting ? t.submitting : t.submit}
        </Button>

        <p className='text-xs text-gray-500 mt-3 text-center leading-relaxed'>{t.privacy}</p>
      </div>
    </form>
  );
};
