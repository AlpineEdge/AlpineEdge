import React from 'react'
import Main from '../../components/Main'
import styles from './Service.module.css'
import Services from '../../components/Services';
import serviceData from './serviceData';
import { useTranslation } from 'react-i18next';

const ServiceSection = (props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.serviceSec} id={props.sectionId ?? ""}>
        <Main 
          className={styles.serviceMain}

            subtitle={t('serviceSection.subtitle')}
            title={t('serviceSection.title')}
            paragraph={t('serviceSection.paragraph')}

            align='center'
            isDark={true}
        />
        <Services services={serviceData} />
    </div>
  )
}

export default ServiceSection