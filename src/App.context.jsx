import React, { createContext, useMemo, useState } from "react"
import { Vocabulary, GetLanguages } from "./components/languages/Vocabulary"

export const AppCtxStore = createContext({})

export default function AppContext({ children }) {
  const [languageCode, setLanguageCode] = useState(() => {
    const stored = localStorage.getItem("language")
    return stored && stored !== "" ? stored : "en_GB"
  })

  const languages = useMemo(() => GetLanguages(), [])
  const vocabulary = useMemo(() => Vocabulary(languageCode), [languageCode])

  const setLanguage = (code) => {
    localStorage.setItem("language", code)
    setLanguageCode(code)
  }

  const value = useMemo(
    () => ({
      languageCode,
      vocabulary,
      languages,
      setLanguage,
      getLanguageCode: () => languageCode,
      getVocabulary: () => vocabulary,
      getLanguages: () => languages,
    }),
    [languageCode, vocabulary, languages]
  )

  return <AppCtxStore.Provider value={value}>{children}</AppCtxStore.Provider>
}
