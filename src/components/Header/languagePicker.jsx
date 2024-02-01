import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { languages } from '../../i18n';
import Dropdown from 'react-bootstrap/Dropdown';
import styles from './Header.module.css';

const ImgFlag = ({lang}) => {
    const flag = (lang.toLowerCase() === "en") ? "gb" : lang.toLowerCase();

    return <img
        loading="lazy"
        width="20"
        src={`https://flagcdn.com/w20/${flag}.png`}
        srcSet={`https://flagcdn.com/w40/${flag}.png 2x`}
        alt=""
    />
}

const LanguagePicker = ({mobile}) => {
  const { i18n } = useTranslation();

  const [webLanguage, setWebLanguage] = useState("en")
  
  useEffect(() => {
    i18n.changeLanguage(webLanguage);
  }, [webLanguage, i18n])

  return (
    <Dropdown 
        variant="dark" 
        onSelect={(eventKey) => setWebLanguage(eventKey)} 
        className={!!mobile ? styles.mobileLanguagePicker : styles.languagePicker}
    >
        <Dropdown.Toggle>
            <ImgFlag lang={webLanguage} />
            {webLanguage.toLocaleUpperCase()}
        </Dropdown.Toggle>

        <Dropdown.Menu>
            {languages.map((lang, index) => (
                <Dropdown.Item key={index} eventKey={lang}>
                    <ImgFlag lang={lang}/>
                    {lang.toLocaleUpperCase()}
                </Dropdown.Item>    
            ))}
        </Dropdown.Menu>
    </Dropdown>
  );
}



export default LanguagePicker;
