// components/LeadForm.tsx
import React, { useState } from 'react';
import { FormType } from '../types';
import { Button } from './Button';
import { useLanguage } from '../context/LanguageContext';

const N8N_WEBHOOK_URL = 'https://workflow.crmmech.com/webhook-test/76e67ce4-1807-46ef-868c-dcfc1c279782';

interface LeadFormProps {
  type: FormType;
  onSuccess: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ type, onSuccess }) => {
  const { lang } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUrgent, setIsUrgent] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
    successMessage:
      lang === 'de'
        ? 'Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet. Wir werden uns in Kürze bei Ihnen melden.'
        : "Дякуємо! Ваш запит успішно надіслано. Ми зв'яжемося з вами найближчим часом.",

    // TRANSPORT
    from: lang === 'de' ? 'Abgangsort (PLZ/Ort)' : 'Місце відправлення (індекс/місто)',
    to: lang === 'de' ? 'Empfangsort (PLZ/Ort)' : 'Місце призначення (індекс/місто)',
    weight: lang === 'de' ? 'Gewicht (kg)' : 'Вага (кг)',
    weightPlaceholder: lang === 'de' ? '300' : '300',
    length: lang === 'de' ? 'Länge (cm)' : 'Довжина (см)',
    lengthPlaceholder: lang === 'de' ? '120' : '120',
    width: lang === 'de' ? 'Breite (cm)' : 'Ширина (см)',
    widthPlaceholder: lang === 'de' ? '80' : '80',
    height: lang === 'de' ? 'Höhe (cm)' : 'Висота (см)',
    heightPlaceholder: lang === 'de' ? '100' : '100',
    quantity: lang === 'de' ? 'Menge' : 'Кількість',
    quantityPlaceholder: lang === 'de' ? '1' : '1',
    cargoType: lang === 'de' ? 'Art der Ware' : 'Тип вантажу',

    optionTypeOne: lang === 'de' ? 'Euro pallet' : 'Європалет',
    optionTypeTwo: lang === 'de' ? 'Pallets' : 'Палети',
    optionTypeThree: lang === 'de' ? 'Boxes' : 'Коробки',

    // Vehicle type
    vehicleType: lang === 'de' ? 'Fahrzeugtyp' : 'Тип транспорту',
    vehicleUp35: lang === 'de' ? 'Fahrzeug bis 3,5 t' : 'Авто до 3,5 т',
    vehicleTent: lang === 'de' ? 'Plane (Tautliner)' : 'Тент',
    vehicleRefer: lang === 'de' ? 'Kühlfahrzeug (Reefer)' : 'Рефрижератор',
    vehiclePlatform: lang === 'de' ? 'Pritsche (Flatbed)' : 'Платформа',
    vehicleOther: lang === 'de' ? 'Andere' : 'Інший варіант',

    // Loading date/time
    loadingDate: lang === 'de' ? 'Ladedatum (optional)' : 'Дата завантаження (необовʼязково)',
    loadingTime: lang === 'de' ? 'Ladezeit (optional)' : 'Час завантаження (необовʼязково)',
    loadingTimePlaceholder: lang === 'de' ? 'Bitte wählen' : 'Оберіть діапазон',
    timeSlot1: '6:00–9:00',
    timeSlot2: '9:00–12:00',
    timeSlot3: '12:00–16:00',
    timeSlot4: '16:00–20:00',
    timeSlot5: '20:00–23:00',
    timeSlotFlexible: lang === 'de' ? 'Flexible Zeit' : 'Гнучкий час',

    // Urgent
    urgentDelivery: lang === 'de' ? 'Eilsendung (Priorität)' : 'Термінова доставка (пріоритет)',

    // Comments
    comments: lang === 'de' ? 'Kommentare (optional)' : 'Коментарі (необовʼязково)',
    commentsPlaceholder:
      lang === 'de'
        ? 'Zusätzliche Informationen zur Sendung oder zur Ware (z.B. Liefertermin, Be-/Entladeart, Besonderheiten des Lagers usw.)'
        : 'Додаткова інформація про перевезення або вантаж (наприклад: бажані терміни доставки, тип завантаження, особливості складу тощо)',

    // LOGISTICS
    challenge: lang === 'de' ? 'Aktuelle Herausforderung' : 'Поточні виклики',
    challengePlaceholder:
      lang === 'de'
        ? 'Beschreiben Sie kurz Ihre logistischen Anforderungen...'
        : 'Коротко опишіть ваші логістичні потреби...',

    // MOVING
    fromZip: lang === 'de' ? 'Von (PLZ)' : 'Звідки (індекс)',
    toZip: lang === 'de' ? 'Nach (PLZ)' : 'Куди (індекс)',
    area: lang === 'de' ? 'Wohnfläche (m²)' : 'Площа (м²)',
    areaPlaceholder: lang === 'de' ? 'z.B. 85' : 'наприклад, 85',
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

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
    } else if (type === FormType.LOGISTICS) {
      payload.challenge = fd.get('challenge');
    } else if (type === FormType.MOVING) {
      Object.assign(payload, {
        fromZip: fd.get('fromZip'),
        toZip: fd.get('toZip'),
        area: fd.get('area'),
      });
    }

    try {
      const res = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      onSuccess();
      alert(t.successMessage);
    } catch {
      setError(
        lang === 'de'
          ? 'Fehler beim Senden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.'
          : 'Помилка при відправці. Спробуйте ще раз або зверніться до нас напряму.',
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
            <div className='mb-4'>
              <label className='block text-sm font-bold text-gray-700 mb-1'>{t.from}</label>
              <input
                required
                name='from'
                type='text'
                className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900'
                placeholder='z.B. 10115 Berlin'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-bold text-gray-700 mb-1'>{t.to}</label>
              <input
                required
                name='to'
                type='text'
                className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900'
                placeholder='z.B. 80331 München'
              />
            </div>

            {/* Vehicle type */}
            <div className='mb-4'>
              <label className='block text-sm font-bold text-gray-700 mb-1'>{t.vehicleType}</label>
              <select
                required
                name='vehicleType'
                className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900'
              >
                <option value=''>{lang === 'de' ? 'Bitte wählen' : 'Оберіть тип'}</option>
                <option value='up35'>{t.vehicleUp35}</option>
                <option value='tent'>{t.vehicleTent}</option>
                <option value='refer'>{t.vehicleRefer}</option>
                <option value='platform'>{t.vehiclePlatform}</option>
                <option value='other'>{t.vehicleOther}</option>
              </select>
            </div>

            <div className='grid grid-cols-2 gap-4 mb-4'>
              <div>
                <label className='block text-sm font-bold text-gray-700 mb-1'>{t.cargoType}</label>
                <select name='cargoType' className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900'>
                  <option value='euro-pallet'>{t.optionTypeOne}</option>
                  <option value='pallets'>{t.optionTypeTwo}</option>
                  <option value='boxes'>{t.optionTypeThree}</option>
                  <option value='unknown'>{lang === 'de' ? 'Weiß nicht genau' : 'Не знаю точно'}</option>
                </select>
              </div>
              <div>
                <label className='block text-sm font-bold text-gray-700 mb-1'>{t.quantity}</label>
                <input
                  name='quantity'
                  type='text'
                  className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900'
                  placeholder={t.quantityPlaceholder}
                />
              </div>

              <div>
                <label className='block text-sm font-bold text-gray-700 mb-1'>{t.length}</label>
                <input
                  name='length'
                  type='text'
                  className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900'
                  placeholder={t.lengthPlaceholder}
                />
              </div>
              <div>
                <label className='block text-sm font-bold text-gray-700 mb-1'>{t.width}</label>
                <input
                  name='width'
                  type='text'
                  className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900'
                  placeholder={t.widthPlaceholder}
                />
              </div>
              <div>
                <label className='block text-sm font-bold text-gray-700 mb-1'>{t.height}</label>
                <input
                  name='height'
                  type='text'
                  className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900'
                  placeholder={t.heightPlaceholder}
                />
              </div>
              <div>
                <label className='block text-sm font-bold text-gray-700 mb-1'>{t.weight}</label>
                <input
                  name='weight'
                  type='text'
                  className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900'
                  placeholder={t.weightPlaceholder}
                />
              </div>
            </div>

            {/* Loading date & time */}
            <div className='grid grid-cols-2 gap-4 mb-4'>
              <div>
                <label className='block text-sm font-bold text-gray-700 mb-1'>{t.loadingDate}</label>
                <input
                  name='loadingDate'
                  type='date'
                  className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900'
                />
              </div>
              <div>
                <label className='block text-sm font-bold text-gray-700 mb-1'>{t.loadingTime}</label>
                <select name='loadingTime' className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900'>
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

            {/* Urgent delivery checkbox */}
            <div className='mb-4'>
              <label className='flex items-center gap-2 cursor-pointer select-none'>
                <input
                  type='checkbox'
                  checked={isUrgent}
                  onChange={(e) => setIsUrgent(e.target.checked)}
                  className='w-4 h-4 accent-navy-900'
                />
                <span className='text-sm font-bold text-gray-700'>{t.urgentDelivery}</span>
              </label>
            </div>

            {/* Comments */}
            <div className='mb-2'>
              <label className='block text-sm font-bold text-gray-700 mb-1'>{t.comments}</label>
              <textarea
                name='comments'
                rows={3}
                className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900 resize-none'
                placeholder={t.commentsPlaceholder}
              />
            </div>
          </>
        );

      case FormType.LOGISTICS:
        return (
          <div className='mb-4'>
            <label className='block text-sm font-bold text-gray-700 mb-1'>{t.challenge}</label>
            <textarea
              required
              name='challenge'
              rows={3}
              className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900'
              placeholder={t.challengePlaceholder}
            />
          </div>
        );

      case FormType.MOVING:
        return (
          <>
            <div className='grid grid-cols-2 gap-4 mb-4'>
              <div>
                <label className='block text-sm font-bold text-gray-700 mb-1'>{t.fromZip}</label>
                <input
                  required
                  name='fromZip'
                  type='text'
                  className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900'
                />
              </div>
              <div>
                <label className='block text-sm font-bold text-gray-700 mb-1'>{t.toZip}</label>
                <input
                  required
                  name='toZip'
                  type='text'
                  className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900'
                />
              </div>
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-bold text-gray-700 mb-1'>{t.area}</label>
              <input
                required
                name='area'
                type='number'
                className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900'
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
      {/* firstName only — lastName removed per client request */}
      <div className='mb-4'>
        <label className='block text-sm font-bold text-gray-700 mb-1'>{t.firstName}</label>
        <input
          required
          name='firstName'
          type='text'
          className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900'
        />
      </div>

      <div className='mb-4'>
        <label className='block text-sm font-bold text-gray-700 mb-1'>{t.company}</label>
        <input
          name='company'
          type='text'
          className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900'
        />
      </div>

      <div className='mb-4'>
        <label className='block text-sm font-bold text-gray-700 mb-1'>{t.email}</label>
        <input
          required
          name='email'
          type='email'
          className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900'
        />
      </div>

      <div className='mb-4'>
        <label className='block text-sm font-bold text-gray-700 mb-1'>{t.phone}</label>
        <input
          required
          name='phone'
          type='tel'
          className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900'
        />
      </div>

      <div className='p-4 bg-gray-50 rounded-lg border border-gray-200 mb-6'>
        <h4 className='font-bold text-sm text-navy-900 mb-2 uppercase tracking-wide'>
          {t.yourRequest}
        </h4>

        {renderSpecificFields()}
      </div>

      <div className='mt-6'>
        {error && (
          <div className='mb-3 px-4 py-3 rounded bg-red-50 border border-red-200 text-red-700 text-sm'>
            {error}
          </div>
        )}
        <Button type='submit' variant='primary' fullWidth disabled={isSubmitting}>
          {isSubmitting ? t.submitting : t.submit}
        </Button>
        <p className='text-xs text-gray-500 mt-2 text-center'>{t.privacy}</p>
      </div>
    </form>
  );
};