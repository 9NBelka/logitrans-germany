import React, { useState } from 'react';
import { FormType } from '../types';
import { Button } from './Button';

interface LeadFormProps {
  type: FormType;
  onSuccess: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ type, onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess();
      alert("Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet. Wir werden uns in Kürze bei Ihnen melden.");
    }, 1500);
  };

  const renderSpecificFields = () => {
    switch (type) {
      case FormType.TRANSPORT:
        return (
          <>
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 mb-1">Abgangsort (PLZ/Ort)</label>
              <input required type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900" placeholder="z.B. 10115 Berlin" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 mb-1">Empfangsort (PLZ/Ort)</label>
              <input required type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900" placeholder="z.B. 80331 München" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Gewicht (ca.)</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900">
                  <option>3,5t - 7,5t</option>
                  <option>7,5t - 12t</option>
                  <option>12t - 20t</option>
                  <option>Weiß nicht genau</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Art der Ware</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900" placeholder="Paletten, Maschinen..." />
              </div>
            </div>
          </>
        );
      case FormType.LOGISTICS:
        return (
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700 mb-1">Aktuelle Herausforderung</label>
            <textarea required rows={3} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900" placeholder="Beschreiben Sie kurz Ihre logistischen Anforderungen..."></textarea>
          </div>
        );
      case FormType.MOVING:
        return (
          <>
             <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Von (PLZ)</label>
                <input required type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Nach (PLZ)</label>
                <input required type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 mb-1">Wohnfläche (m²)</label>
              <input required type="number" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900" placeholder="z.B. 85" />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Vorname</label>
          <input required type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900" />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Nachname</label>
          <input required type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900" />
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700 mb-1">Firma (Optional)</label>
        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900" />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700 mb-1">E-Mail Adresse</label>
        <input required type="email" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900" />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700 mb-1">Telefonnummer</label>
        <input required type="tel" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900" />
      </div>

      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-6">
        <h4 className="font-bold text-sm text-navy-900 mb-2 uppercase tracking-wide">Ihre Anfrage</h4>
        {renderSpecificFields()}
      </div>

      <div className="mt-6">
        <Button 
          type="submit" 
          variant="primary" 
          fullWidth 
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Wird gesendet...' : 'Kostenlos anfragen'}
        </Button>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Ihre Daten werden sicher und verschlüsselt übertragen.
        </p>
      </div>
    </form>
  );
};