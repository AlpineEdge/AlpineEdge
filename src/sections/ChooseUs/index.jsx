import React from 'react'
import styles from './Choose.module.css'
import Main from '../../components/Main'
import TickList from '../../components/TickList'
import ticks from './tickListData'
import bg from '../../img/choose.svg'
import { useTranslation } from 'react-i18next'

const ChooseUsSection = (props) => {
  const {children} = props;
  const {t} = useTranslation();
  
  return (
    <div className={styles.chooseSec} id={props.sectionId ?? ""}>
        <div className={styles.container}>
            <Main 
                className={styles.chooseMain}
                subtitle={t('chooseSection.subtitle')}
                title={t('chooseSection.title')}
                paragraph={t('chooseSection.paragraph')}
                isDark={true}
            />
            <TickList 
                ticks={ticks} 
                isDark={true}
            />
        </div>
        <img src={bg} alt="" />
        {children ?? null}
    </div>
  )
}

export default ChooseUsSection
