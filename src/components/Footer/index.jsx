import React from 'react'
import Main from '../Main'
import styles from '../Footer/Footer.module.css'
import logoImg from '../../img/logo.svg'
// import Column from '../Column'
import footerData from './footerData'
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();

  return (
    <div className={styles.footerSec}>
        <div className={styles.contact}> 
            <Main
                className={styles.footerMain}
                subtitle={t('footer.main.subtitle')}
                title={t('footer.main.title')}
                align='left'
                isDark={true}
            />
            <a href='#contact'>{t('footer.main.contact')}</a>
        </div>

        <div className={styles.footer}>
            <div className={styles.alpine}>
                <img src={logoImg} alt="" />
                <p>{t('footer.bottom.paragraph')}</p>
                <div className={styles.social}>
                    <a href="https://www.linkedin.com/company/alpineedgeshpk">IN</a>
                </div>
            </div>
            <Columns columns={footerData} />
            <MobileColumns columns={footerData} />
        </div>
    </div>
  )
}

const Columns = (props) => {
    const { t } = useTranslation();

    return (
    <>
        {props.columns?.map((column, index) => (
            <div className={styles.columnInfo} key={index}>
                <h2>{t(column.header)}</h2>
                {column.links.map((link, i) => (
                    <a href={link.url} key={i} >
                        {link.icon && (
                            <img src={link.icon } alt="" />
                        )}
                        {t(link.text)}
                    </a>
                ))}
            </div>
        ))}
    </>
    )
}

const MobileColumns = (props) => {
    const { t } = useTranslation();
    
    return (
        <div className={styles.mobileColumns}>
            {props.columns?.map((column, index) => (
                <h2 key={index}>{t(column.header)}</h2>
            ))}
        </div>
    )
}

export default Footer