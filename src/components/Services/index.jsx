import React from 'react'
import styles from './Services.module.css'
import { useTranslation } from 'react-i18next';

const Services = (props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.services}>
        {props.services.map((service, index) => (
            <div className={styles.serviceBox} key={index}>
                <div className={styles.imgBox}>
                    <img src={service.icon} alt="" />
                </div>
                <h4>{t(service.title)}</h4>
                <p>{t(service.description)}</p>
            </div>
        ))}
    </div>
  )
}

export default Services