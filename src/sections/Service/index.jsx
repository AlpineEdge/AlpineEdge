import React from 'react'
import Main from '../../components/Main'
import styles from './Service.module.css'
import Services from '../../components/Services';
import serviceData from './serviceData';

const ServiceSection = (props) => {
  return (
    <div className={styles.serviceSec} id={props.sectionId ?? ""}>
        <Main 
          className={styles.serviceMain}

            subtitle='Dienstleistungen'
            title='Unser <span>Angebot</span>'
            paragraph='Umgehend verfügbare, kostengünstige IT-Dienstleistungen und Fachkräfte, maßgeschneidert für Ihre Unternehmensbedürfnisse. Ob Sie Unterstützung bei der Einhaltung von EU-Verordnungen/ISO-Normen benötigen, Hilfe bei der Cloud-Migration oder beim Cloud-Computing, Unterstützung bei der Virtualisierung, allgemeine IT-Unterstützung, individuell angepasste Software oder Projektmanagement und -durchführung - unsere Experten stehen Ihnen zur Verfügung, um sicherzustellen, dass alle Ihre IT-Anforderungen erfüllt werden'

            align='center'
            isDark={true}
        />
        <Services services={serviceData} />
    </div>
  )
}

export default ServiceSection