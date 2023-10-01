import React from 'react'
import styles from './NavMenu.module.css';

const NavMenu = (props) => {
  return (
    <div className={`${styles.navmenu} ${props?.className}`}>
        <a href="#home">Home</a>
        <a href="#services">Angebot</a>
        <a href="#about">Über uns</a>
        <a href="#choose">Choose Us</a>
        <a href="#team">Team</a>
        <a href="#contact">Kontakt</a>
    </div>
  )
}

export default NavMenu