import React from 'react'
import styles from './NavMenu.module.css';

const NavMenu = (props) => {
  return (
    <div className={`${styles.navmenu} ${props?.className}`}>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#choose">Choose Us</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
    </div>
  )
}

export default NavMenu