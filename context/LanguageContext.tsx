// context/LanguageContext.tsx
import React, { createContext, useContext } from 'react';

type Language = 'de' | 'ua';

interface LanguageContextType {
  lang: Language;
}

const LanguageContext = createContext<LanguageContextType>({ lang: 'de' });

export const LanguageProvider: React.FC<{ children: React.ReactNode; lang: Language }> = ({
  children,
  lang,
}) => {
  return <LanguageContext.Provider value={{ lang }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
