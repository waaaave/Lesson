import React from "react";
import { useTranslation } from "react-i18next";
import { namespace } from "./i18n/i18n.constants";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from '@ant-design/icons'
import { languages } from "./i18n/i18n.constants";

export const App = () => {

  const { t, i18n } = useTranslation(namespace.pages.hello)

  const changeLanguage = (language:string) => {
    i18n.changeLanguage(language)
  }

  const menu = (
    <Menu>
      {Object.
        keys(languages)
        .map(language => <Menu.Item key={language}>{language}</Menu.Item>)
      }
    </Menu>
  )

  return(
     <>
     <h1>{t('welcome')}</h1>
     <button>{t('buttons.ok', {ns: namespace.common})}</button>
     <button onClick={changeLanguage.bind(null, 'en')}>English</button>
     <button onClick={changeLanguage.bind(null, 'cn')}>中文</button>
     <button onClick={changeLanguage.bind(null, 'es')}>Español</button>

  <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Click me <DownOutlined />
    </a>
  </Dropdown>
     
     </>
     );
};
