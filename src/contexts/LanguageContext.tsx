import React, { useContext, useState } from "react";
import { ILanguageContext, ILanguageContextProps } from "../ts/intefaces";
import fi from "../translations/fi.json";
import en from "../translations/en.json";

export const languageOptions: { [key: string]: string } = {
  fi: "suomi",
  en: "English",
};

const translations: { [key: string]: any } = {
  fi: fi,
  en: en,
};

export const LanguageContext = React.createContext<ILanguageContext>(
  {} as ILanguageContext
);

export function useLanguage() {
  return useContext(LanguageContext);
}

const DEFAULT_LANGUAGE: string = "en";
const initLang: string =
  window.localStorage.getItem("lang") ?? DEFAULT_LANGUAGE;

export function LanguageProvider(props: ILanguageContextProps) {
  const [userLanguage, setUserLanguage] = useState(initLang);

  const changeLanguage = (languageKey: string) => {
    const newLanguage = languageOptions.hasOwnProperty(languageKey)
      ? languageKey
      : DEFAULT_LANGUAGE;
    window.localStorage.setItem("lang", newLanguage);
    setUserLanguage(newLanguage);
  };

  const contextValues: ILanguageContext = {
    currentLanguage: userLanguage,
    translations: translations[userLanguage],
    changeLanguage: changeLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValues}>
      {React.Children.only(props.children)}
    </LanguageContext.Provider>
  );
}
