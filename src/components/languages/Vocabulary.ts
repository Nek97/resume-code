import {
  defaultLanguage,
  validLanguages,
  Vocabularies,
  supportedLanguages,
  LanguageCode,
  LanguageData,
  LanguageVocabulary,
} from "./vocabularies";

export type { LanguageCode, LanguageData, LanguageVocabulary };

const validLanguageCodes = new Set<string>(validLanguages);
const isLanguageCode = (value: unknown): value is LanguageCode =>
  typeof value === "string" && validLanguageCodes.has(value);

const fallbackVocabulary: LanguageVocabulary = {
  language_code: "en_GB",
  language_info: "English",
};

/**
 * Pass a lang code and return a formatted vocabulary
 *
 * @param {string} string Lang code like en_GB.
 *
 * @return {object} Return an object with all formatted strings in the code language.
 */
export function Vocabulary(code: string): LanguageVocabulary {
  const selected = isLanguageCode(code) ? Vocabularies[code] : undefined;

  return selected || Vocabularies[defaultLanguage] || fallbackVocabulary;
}

/**
 * Get code and info for all languages
 *
 * @return {LanguageData[]} Return an array with language_code and language_info.
 */
export function GetLanguages(): LanguageData[] {
  return supportedLanguages;
}

/**
 * Pass a string with markers and return the complete string
 *
 * @prototype StringFormat('Set {0} as realm, set {1} as launcher!', 'Blackfrost', 'AS')
 *
 * @param {string} string The string with all markers.
 * @param {string} string A string for every marker.
 */
export function StringCompletion(format: string, ...args: string[]): string {
  return format.replace(/{(\d+)}/g, function (match, number) {
    return typeof args[number] !== "undefined" ? args[number] : "";
  });
}
