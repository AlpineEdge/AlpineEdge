import React from 'react'
import Main from '../../components/Main'
import styles from './Intro.module.css'
import introImg from '../../img/intro.svg'
import { useTranslation } from 'react-i18next';

const IntoductionSection = (props) => {
  const { t } = useTranslation();
  return (
    <div className={styles.introSec} id={props.sectionId ?? ""}>
        <Main 
            className={styles.introMain}
            subtitle={t('firstSection.subtitle')}
            title={t('firstSection.title')}
            paragraph=''

            align='left'
            isDark={true}
        />
        <a href="#contact">{t('firstSection.contact')}</a>
        <img src={introImg} alt="" />
    </div>
  )
}

export default IntoductionSection