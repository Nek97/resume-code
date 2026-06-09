import en_GB from "./en_GB.json";
import it_IT from "./it_IT.json";

export const rawVocabularies = {
  en_GB,
  it_IT,
} as const;

export type LanguageCode = keyof typeof rawVocabularies;
export type LanguageVocabulary = {
  language_code: string;
  language_info: string;
  [key: string]: unknown;
};
export type LanguageData = {
  language_code: LanguageCode;
  language_info: string;
};

const isLanguageVocabulary = (value: unknown): value is LanguageVocabulary => {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const maybe = value as Record<string, unknown>;

  return (
    typeof maybe.language_code === "string" &&
    typeof maybe.language_info === "string"
  );
};

const typedObjectKeys = <T extends object>(obj: T): Array<keyof T> =>
  Object.keys(obj) as Array<keyof T>;

const validateVocabularies = (
  vocabularies: Record<string, unknown>,
): Record<LanguageCode, LanguageVocabulary> => {
  const validated: Partial<Record<LanguageCode, LanguageVocabulary>> = {};

  Object.entries(vocabularies).forEach(([language_code, candidate]) => {
    if (!isLanguageVocabulary(candidate)) {
      console.warn(`Ignoring invalid vocabulary: ${language_code}`);
      return;
    }

    validated[language_code as LanguageCode] = candidate;
  });

  return validated as Record<LanguageCode, LanguageVocabulary>;
};

export const Vocabularies = validateVocabularies(rawVocabularies);
export const LanguageCodes = typedObjectKeys(Vocabularies);
export const supportedLanguages: LanguageData[] = LanguageCodes.map(
  (language_code) => {
    const vocabulary = Vocabularies[language_code];

    return {
      language_code,
      language_info: vocabulary.language_info,
    };
  },
);

export const validLanguages = LanguageCodes;
export const defaultLanguage = validLanguages.includes("en_GB")
  ? "en_GB"
  : (validLanguages[0] ?? "en_GB");

export default Vocabularies;
