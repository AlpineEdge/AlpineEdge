import React, { useState } from 'react'
import styles from './Contact.module.css'
import Main from '../../components/Main'

const ContactUsSection = (props) => {
    const [name, setName] = useState("")
    const [purpose, setPurpose] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("name: ", name)
        console.log("purpose: ", purpose)
        console.log("email: ", email)
        console.log("message: ", message)
    }
    
  return (
    <div className={styles.contactSec} id={props.sectionId ?? ""}>
        <Main
            className={styles.contactMain}
            subtitle='Kontakt'
            title='Kontaktieren sie uns'
            align='center'
            isDark={false}
        />
        <form onSubmit={handleSubmit}>
            <div className={styles.flexbox}>
                <div className={styles.inputBox}>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id='name' 
                        placeholder='Vor- und Nachname'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className={styles.inputBox}>
                    <label htmlFor="purpose">Unternehmen</label>
                    <input 
                        type="text" 
                        id='purpose' 
                        placeholder='Name des Unternehmens'
                        onChange={(e) => setPurpose(e.target.value)}
                    />
                </div>
                <div className={styles.inputBox}>
                    <label htmlFor="email">E-mail oder Telefonnumer</label>
                    <input 
                        type="text" 
                        id='email' 
                        placeholder='E-Mail oder Telefonnumer'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>
            <div className={styles.flexbox}>
                <div className={`${styles.inputBox} ${styles.messageBox}`}>
                    <label htmlFor="message">Ihre Mitteilung</label>
                    <textarea 
                        id="message" 
                        placeholder='Wobei können wir Ihnen helfen? beschreiben sie Ihr bedürfnis kurz und jemand aus unserem Team meldet sich raschmöglichst bei Ihnen'
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>
                <input type="submit" value="Absenden" />
            </div>
        </form>
    </div>
  )
}

export default ContactUsSection