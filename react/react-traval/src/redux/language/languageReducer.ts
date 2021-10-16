import {CHANGE_LANGUAGE,LanguageActionTypes,ADD_LANGUAGE} from './languageActions'
import i18n from 'i18next'

interface languageState{
    language:'en'|'zh';
    languageList:{name:string,code:string}[]
}
const defaultState = {
    language:'zh',
    languageList:[
        {name:'中文',code:'zh'},
        {name:'英文',code:'en'}
    ]
}

export default (state = defaultState,action:LanguageActionTypes)=>{
    switch (action.type) {
        case CHANGE_LANGUAGE:
          i18n.changeLanguage(action.payload)
          return { ...state, language: action.payload };
        case ADD_LANGUAGE:
          return { ...state, languageList: [...state.languageList, action.payload] };
        default: 
          return state
      }
}