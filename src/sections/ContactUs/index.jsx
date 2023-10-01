import React, { useState } from 'react'
import styles from './Contact.module.css'
import Main from '../../components/Main'

const ContactUsSection = (props) => {
    const [name, setName] = useState("")
    const [purpose, setPurpose] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

  return (
    <div className={styles.contactSec} id={props.sectionId ?? ""}>
        <Main
            className={styles.contactMain}
            subtitle='Kontakt'
            title='Kontaktieren sie uns'
            align='center'
            isDark={false}
        />
        <form>
            <div className={styles.flexbox}>
                <div className={styles.inputBox}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' placeholder='Vor- und Nachname'/>
                </div>
                <div className={styles.inputBox}>
                    <label htmlFor="purpose">Unternehmen</label>
                    <input type="text" id='purpose' placeholder='Name des Unternehmens'/>
                </div>
                <div className={styles.inputBox}>
                    <label htmlFor="email">E-mail oder Telefonnumer</label>
                    <input type="text" id='email' placeholder='E-Mail oder Telefonnumer'/>
                </div>
            </div>
            <div className={styles.flexbox}>
                <div className={`${styles.inputBox} ${styles.messageBox}`}>
                    <label htmlFor="message">Ihre Mitteilung</label>
                    <textarea id="message" placeholder='Wobei können wir Ihnen helfen? beschreiben sie Ihr bedürfnis kurz und jemand aus unserem Team meldet sich raschmöglichst bei Ihnen'></textarea>
                </div>
                <input type="submit" value="Absenden" />
            </div>
        </form>
    </div>
  )
}

export default ContactUsSection