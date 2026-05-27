// App.tsx
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { HomeDe } from './pages/HomeDe';
import { HomeUa } from './pages/HomeUa';
import { PrivacyPolicy } from './pages/PrivacyPolicy/PrivacyPolicy';
import { LanguageProvider } from './context/LanguageContext';
import './src/styles/globals.scss';
import { ImpressumPolicy } from './pages/Impressum/Impressum';
import CookieConsent from './components/CookieConsent/CookieConsent';

function AppContent() {
  const location = useLocation();
  const lang = location.pathname.startsWith('/ua') ? 'ua' : 'de';

  const isPrivacyPage = location.pathname.includes('/privacy-policy');
  const isImpressumPolicy = location.pathname.includes('/impressum-policy');

  const hideNavigation = isPrivacyPage || isImpressumPolicy;

  const [hasCookieBot, setHasCookieBot] = useState(undefined);

  return (
    <>
      <LanguageProvider lang={lang}>
        {/* Навігація показується тільки якщо це НЕ сторінка політики */}
        {!hideNavigation && <Navigation />}

        <Routes>
          <Route path='/' element={<HomeDe />} />
          <Route path='/ua' element={<HomeUa />} />

          {/* Політика конфіденційності */}
          <Route path='/impressum-policy' element={<ImpressumPolicy />} />
          <Route path='/ua/impressum-policy' element={<ImpressumPolicy />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/ua/privacy-policy' element={<PrivacyPolicy />} />

          <Route path='*' element={<HomeDe />} />
        </Routes>
      </LanguageProvider>{' '}
      <CookieConsent />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
