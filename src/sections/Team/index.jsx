import React from 'react'
import styles from './Team.module.css'
import AboutSwiper from '../../components/Swiper'
import Main from '../../components/Main'
import teamData from './teamData';
import { useTranslation } from 'react-i18next';

const TeamSection = (props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.teamSec} id={props.sectionId ?? ""}>
        <Main 
            subtitle={t('teamSection.subtitle')}
            title={t('teamSection.title')}
            paragraph={t('teamSection.paragraph')}
        
            align='center'
            isDark={false}
        />

        <AboutSwiper slides={teamData}/>
    </div>
  )
}

export default TeamSection