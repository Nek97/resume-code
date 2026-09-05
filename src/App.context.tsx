import React, {
  createContext,
  PropsWithChildren,
  useMemo,
  useState,
} from "react";
import {
  Vocabulary,
  GetLanguages,
  LanguageData,
} from "./components/languages/Vocabulary";

type AppContextValue = {
  languageCode: string;
  vocabulary: Record<string, any>;
  languages: LanguageData[];
  setLanguage: (code: string) => void;
  getLanguageCode: () => string;
  getVocabulary: () => Record<string, any>;
  getLanguages: () => LanguageData[];
};

export const AppCtxStore = createContext<AppContextValue | null>(null);

export default function AppContext({ children }: PropsWithChildren<{}>) {
  const languages = useMemo(() => GetLanguages(), []);
  const defaultLanguage = languages[0]?.language_code || "en_GB";

  const [languageCode, setLanguageCode] = useState<string>(() => {
    const stored = localStorage.getItem("language");
    return stored && stored !== "" ? stored : defaultLanguage;
  });

  const vocabulary = useMemo(() => Vocabulary(languageCode), [languageCode]);

  const setLanguage = (code: string): void => {
    localStorage.setItem("language", code);
    setLanguageCode(code);
  };

  const value = useMemo<AppContextValue>(
    () => ({
      languageCode,
      vocabulary,
      languages,
      setLanguage,
      getLanguageCode: () => languageCode,
      getVocabulary: () => vocabulary,
      getLanguages: () => languages,
    }),
    [languageCode, vocabulary, languages],
  );

  return <AppCtxStore.Provider value={value}>{children}</AppCtxStore.Provider>;
}
