import React from 'react'
import styles from './About.module.css'
import Main from '../../components/Main'
import aboutImg from '../../img/about.svg'
import TickList from '../../components/TickList'
import ticks from './tickListData'

const AboutSection = (props) => {
  return (
    <div className={styles.aboutSec} id={props.sectionId ?? ""}>
        <img src={aboutImg} alt="" className={styles.mobileShow} />

        <Main 
            className={styles.aboutMain}

            subtitle='Über uns'
            title='Umfassende <span>IT-Lösungen</span>, maßgeschneidert auf Ihre Bedürfnisse '
            paragraph=''
            
            align='center'
            isDark={false}
        />

        <div className={styles.aboutContent}>
            <img src={aboutImg} alt="" />
            <TickList ticks={ticks} className={styles.aboutTickList}/>
        </div>
    </div>
  )
}
  

export default AboutSection;
