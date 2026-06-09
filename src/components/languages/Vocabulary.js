import Vocabularies, { validLanguages, supportedLanguages } from './vocabularies'

/**
 * Pass a lang code and return a formatted vocabulary
 * 
 * @param {string} string Lang code like en_GB.
 *
 * @return {object} Return a object with all formatted string in the code language.
 */
export function Vocabulary(code) {
    if (validLanguages.includes(code) && Vocabularies[code]) {
        return Vocabularies[code]
    }
    else return Vocabularies?.en_GB || {}
}

/**
 * Get code and info or all languages
 *
 * @return {object} Return a object with language_code && language_info data.
 */
export function GetLanguages() {

    return supportedLanguages
}

/**
 * Pass a string with markers and return the complete string
 * 
 * @prototype StringFormat('Set {0} as realm, set {1} as launcher!', 'Blackfrost', 'AS')
 * 
 * @param {string} string The string with all markers.
 * @param {string} string A string for every marker.
 */
export function StringCompletion(format) {
    var args = Array.prototype.slice.call(arguments, 1)
    return format.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined'
            ? args[number]
            : ''
    })
}