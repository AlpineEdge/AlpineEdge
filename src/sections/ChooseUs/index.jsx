import React from 'react'
import styles from './Choose.module.css'
import Main from '../../components/Main'
import TickList from '../../components/TickList'
import ticks from './tickListData'
import bg from '../../img/choose.svg'

const ChooseUsSection = (props) => {
  const {children} = props;
  
  return (
    <div className={styles.chooseSec} id={props.sectionId ?? ""}>
        <div className={styles.container}>
            <Main 
                className={styles.chooseMain}
                subtitle='Warum sie mit uns arbeiten sollten'
                title='<span>AlpineEdge</span> Ihr Partner für IT-Lösungen'
                paragraph='Verlassen Sie sich auf AlpineEdge, um all Ihre IT-Bedürfnisse zu erfüllen. Mit unserem fachlichen Know-how und unserem Engagement für erstklassigen Service sind wir der ideale Partner für Ihr Unternehmen.'
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
