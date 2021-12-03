import React, { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from './use-storage';
// props
{/* <>  
  <div/> children
  <p/>
</> */}
const Context = createContext();
export const TransProvider = ({ i18n, children }) => {
  if (!i18n) {
    throw new Error('No i18n provide.');
  }
  const  [lang, setLang] = useLocalStorage('lang', undefined);
  console.log(setLang, '?????');
  const [locales, setLocales] = useLocalStorage('locales', undefined);
  // console.log(locales, '//////');
  useEffect(() => {
    let currentLang = lang;
    if (!lang) {
      const { navigator } = window;
      currentLang = navigator.language;
      setLang(currentLang)
      return 
    }

    if (!locales ||
      !locales.date ||
      !locales.lang ||
      locales.lang !== currentLang ||
      Date.now() - locales.date > 86400000
      ) {
      setLocales({data: i18n[currentLang], lang: currentLang,
         date: Date.now()})
    }
    
  })

  const getMessages = () => locales.data

  const setNewLang = newLang => {
    setLang(newLang)
    setLocales({data: i18n[newLang], lang: newLang, date: Date.now()})
  }

  if (!locales) return <div>Loading...</div>
  // setLang('en');
  return (
    <Context.Provider value={{
      lang,
      getMessages,
      locales,
      setNewLang
    }}>
      {children}
    </Context.Provider>
  )
}

export const useI18n = path => {
  const { getMessages }  = useContext(Context)
  return  getMessages(path)
}

export const setLang = () => {
  const { lang, setNewLang } = useContext(Context);
  return [ lang, setNewLang ]
}