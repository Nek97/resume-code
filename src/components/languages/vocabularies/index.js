import en_GB from './en_GB.json'
import it_IT from './it_IT.json'

const mergeVocabularies = (base, override) => Object.assign({}, base, override)

const vocabularies = [en_GB, it_IT].map(mergeVocabularies)

const validLanguages = vocabularies.filter(v => v.language_code).map(v => v.language_code)
const supportedLanguages = vocabularies
	.filter(v => v.language_code)
	.map(v => ({
		language_code: v.language_code,
		language_info: v.language_info,
	}))

export { validLanguages, supportedLanguages }

export default vocabularies.reduce((acc, v) => {
	if (v && v.language_code) {
		acc[v.language_code] = v
	}
	return acc
}, {})