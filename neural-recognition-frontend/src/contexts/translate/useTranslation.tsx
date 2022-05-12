import { createContext, PropsWithChildren, useContext, useState } from "react";
import { english, Language } from "./languages";

type Context = {
  language: Language,
  setLanguage?: (newLanguage: Language) => void,
}

const TranslationContext = createContext<Context>({
  language: english,
});

export const TranslationContextProvider = ({ children } : PropsWithChildren<unknown>) => {
  const [ language, setLanguage ] = useState(english);

  return (
    <TranslationContext.Provider
      value={{ language, setLanguage }}
    >
      { children }
    </TranslationContext.Provider>
  );
}

export const useTranslationApi = () => {
  const translationContext = useContext(TranslationContext);

  if (translationContext === undefined) {
    throw new Error('Application misses TranslationContextProvider to work with tranlation');
  }

  return translationContext;
}