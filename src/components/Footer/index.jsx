import React from 'react'
import Main from '../Main'
import styles from '../Footer/Footer.module.css'
import logoImg from '../../img/logo.svg'
// import Column from '../Column'
import footerData from './footerData'

export const Footer = () => {
  return (
    <div className={styles.footerSec}>
        <div className={styles.contact}> 
            <Main
                className={styles.footerMain}
                subtitle='Kontaktieren sie uns'
                title='Arbeiten Sie mit <span>AlpineEdge</span> für Ihre IT-Bedürfnisse zusammen '
                align='left'
                isDark={true}
            />
            <a href='#contact'>Kontakt</a>
        </div>

        <div className={styles.footer}>
            <div className={styles.alpine}>
                <img src={logoImg} alt="" />
                <p> Wir sind für sie da </p>
                <div className={styles.social}>
                    <a href="#linkedin">IN</a>
                </div>
            </div>
            <Columns columns={footerData} />
            <MobileColumns columns={footerData} />
        </div>
    </div>
  )
}

const Columns = (props) => {
    return (
    <>
        {props.columns?.map((column, index) => (
            <div className={styles.columnInfo} key={index}>
                <h2>{column.header}</h2>
                {column.links.map((link, i) => (
                    <a href={link.url} key={i} >
                        {link.icon && (
                            <img src={link.icon } alt="" />
                        )}
                        {link.text}
                    </a>
                ))}
            </div>
        ))}
    </>
    )
}

const MobileColumns = (props) => {
    return (
        <div className={styles.mobileColumns}>
            {props.columns?.map((column, index) => (
                <h2 key={index}>{column.header}</h2>
            ))}
        </div>
    )
}

export default Footer