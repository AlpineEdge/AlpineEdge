import React from 'react'
import styles from './NavMenu.module.css';
import { AiOutlineClose } from "react-icons/ai";
import { useTranslation } from 'react-i18next';

const NavMenu = (props) => {
  const { t } = useTranslation();
  const { links } = props;

  return (
    <div className={`${styles.navmenu} ${props?.className}`}>
      {links && links.map((link, index) => (
        <a key={index} href={link.url}>{t(link.text)}</a>
      ))}
    </div>
  )
}

export const NavMenuMobile = (props) => {
  const { t } = useTranslation();
  const { links, children } = props;

  return (
    <div className={`${styles.mobile} ${props?.isActive && styles.activeMenu}`}>
      <AiOutlineClose 
        className={styles.closeIcon} 
        onClick={() => props?.setIsActive(false)}
      />

      {links && links.map((link, index) => (
        <a key={index} href={link.url} onClick={() => props?.setIsActive(false)}>{t(link.text)}</a>
      ))}

      {children ?? null}
    </div>
  )
}

export default NavMenu