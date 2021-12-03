// import { useI18n } from 'use-i18n'
import { useI18n, setLang } from './lang'
import './App.css'
console.log(useI18n, '?????????????????????????????????')
function App() {
  console.log(useI18n);
  const  [lang, setNewLang] = setLang()
  const t = useI18n();
  console.log(t, '///////////');
  const change = () =>{
    setNewLang('en')
  }
  return (
    <div className="App">
      {t.welcome}
      <div>{lang}</div>
      <div onClick={change}>change</div>
    </div>
  )
}

export default App
