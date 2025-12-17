// App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomeDe } from './pages/HomeDe';
import { HomeUa } from './pages/HomeUa';
import { LanguageProvider } from './context/LanguageContext';

function AppContent() {
  const location = useLocation();
  const lang = location.pathname.startsWith('/ua') ? 'ua' : 'de';

  return (
    <LanguageProvider lang={lang}>
      <div className='min-h-screen bg-gray-50 font-sans text-slate-800'>
        <Navigation />
        <Routes>
          <Route path='/' element={<HomeDe />} />
          <Route path='/ua' element={<HomeUa />} />
          <Route path='*' element={<HomeDe />} />
        </Routes>
      </div>
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
