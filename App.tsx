// App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { HomeDe } from './pages/HomeDe';
import { HomeUa } from './pages/HomeUa';
import { LanguageProvider } from './context/LanguageContext';
import './src/styles/globals.scss';

function AppContent() {
  const location = useLocation();
  const lang = location.pathname.startsWith('/ua') ? 'ua' : 'de';

  return (
    <LanguageProvider lang={lang}>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomeDe />} />
        <Route path='/ua' element={<HomeUa />} />
        <Route path='*' element={<HomeDe />} />
      </Routes>
    </LanguageProvider>
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
