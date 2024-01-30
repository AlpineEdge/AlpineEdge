import React, { useState } from 'react'
import logo from '../../img/logo.svg'
import styles from './Header.module.css';
import NavMenu, { NavMenuMobile } from '../NavMenu';
import mobileMenuIcon from '../../img/mobile_menu.svg'
import headerLinks from './headerLinks'
import { useTranslation } from 'react-i18next';
import LanguagePicker from './languagePicker';

const Header = () => {
  const { t } = useTranslation();
  const [activeMenu, setActiveMenu] = useState(false);

  const acceptLanguage = navigator.language || navigator.userLanguage;

  return (
    <div className={styles.header}>
        <img src={logo} className={styles.logo} alt='' />
        <NavMenu className={styles.mobileHide} links={headerLinks}/>
        <a href="#contact" className={`${styles.contactButton} ${styles.mobileHide}`}>{t('header.contactForm')}</a>
        <LanguagePicker acceptLanguage={acceptLanguage}/>
    
        <img 
          src={mobileMenuIcon} 
          className={styles.mobileMenuIcon} 
          alt='' 
          onClick={() => setActiveMenu(true)} 
        />
        <NavMenuMobile 
          links={headerLinks}
          isActive={activeMenu} 
          setIsActive={setActiveMenu}
        >
          <a href="#contact" className={styles.contactButton} onClick={() => setActiveMenu(false)}>Zum Kontaktformular</a>
          <LanguagePicker acceptLanguage={acceptLanguage} mobile={true}/>
        </NavMenuMobile>
    </div>
  )
}

export default Header