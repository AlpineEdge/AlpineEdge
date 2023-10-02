import React from 'react'
import logo from '../../img/logo.svg'
import styles from './Header.module.css';
import NavMenu from '../NavMenu';
import mobileMenuIcon from '../../img/mobile_menu.svg'

const Header = () => {
  return (
    <div className={styles.header}>
        <img src={logo} className={styles.logo} alt='' />
        <NavMenu className={styles.mobileHide}/>
        <a href="#contact" className={`${styles.contactButton} ${styles.mobileHide}`}>Zum Kontaktformular</a>
    
        <img src={mobileMenuIcon} className={styles.mobileMenuIcon} alt='' />
    </div>
  )
}

export default Header