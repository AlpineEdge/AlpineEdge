import React from 'react'
import Main from '../../components/Main'
import styles from './Intro.module.css'
import introImg from '../../img/intro.svg'

const IntoductionSection = (props) => {
  return (
    <div className={styles.introSec} id={props.sectionId ?? ""}>
        <Main 
            className={styles.introMain}
            subtitle='Wilkommen'
            title='IT power für <span>ihr Unternehmen</span>'
            paragraph=''

            align='left'
            isDark={true}
        />
        <a href="#">Kontaktiere uns jetzt</a>
        <img src={introImg} alt="" />
    </div>
  )
}

export default IntoductionSection