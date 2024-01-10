type Language = 'en' | 'es'

const lang: Language = 'en'

export const switchLang = () => {
  lang === 'en' ? 'es' : 'en'
  return lang
}
export { lang, type Language }
