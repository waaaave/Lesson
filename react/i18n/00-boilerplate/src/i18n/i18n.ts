import i18next, { i18n as i18nInstance } from 'i18next'
import { initReactI18next } from 'react-i18next'
import { languages, namespace } from './i18n.constants'
import { es, en, cn } from './i18n.translations'
// 语言包可能来自后端
import HttpApi from 'i18next-http-backend'

const createI18n = (language) => {
  const i18n = i18next.createInstance().use(initReactI18next)

  i18n
    .use(HttpApi)
    .init({
      lng: language,
      fallbackLng: language,
      ns: namespace.common,
      backend: {
        loadPath:'./locales/{{lng}}/{{ns}}.json'
      }
    })
}

export const i18n = createI18n(languages.es)