import React, { useState } from 'react'
import styles from './Contact.module.css'
import Main from '../../components/Main'
import api from '../../services';
import Alert from 'react-bootstrap/Alert';
import formMessages from './formMessages';
import { useTranslation } from 'react-i18next';

const ContactUsSection = (props) => {
    const { t } = useTranslation();

    const [name, setName] = useState("")
    const [business, setBusiness] = useState("")
    const [contact, setContact] = useState("")
    const [message, setMessage] = useState("")

    const [inputError, setInputError] = useState([])
    const [loading, setLoading] = useState(false)
    const [submitMsg, setsubmitMsg] = useState({
        showModal: false,
        variant: "",
        message: ""
    })

    const handleValidation = () => {
        let errors = [];

        if (name === "") {
            errors.push({
                input: "name",
                message: formMessages.emptyName
            });
        }
        if(business === "") {
            errors.push({
                input: "business",
                message: formMessages.emptyBusiness
            });
        }
        if(contact === "") {
            errors.push({
                input: "contact",
                message: formMessages.emptyEmail
            });
        }else if(!contact.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            errors.push({
                input: "contact",
                message: formMessages.invalidEmail
            });
        }
        if(message === "") {
            errors.push({
                input: "message",
                message: formMessages.emptyMessage
            });
        }

        setInputError(errors);
        return errors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if(!handleValidation().length) {
            setLoading(true);

            api.post('/contact-us', {name, business, contact, message})
            .then((response) => {
                console.log('Response data:', response.data);
                
                setsubmitMsg({
                    showModal: true,
                    variant: "success",
                    message: formMessages.success
                });

                setName("");
                setBusiness("");
                setContact("");
                setMessage("");
            })
            .catch((error) => {
                console.error('Error:', error);

                setsubmitMsg({
                    showModal: true,
                    variant: "danger",
                    message: formMessages.error
                });
            })
            .finally(() => {
                setLoading(false);
            });
            
            setTimeout(() => {
                handleCloseModal();
            }, 20000);
        }
    }

    const handleCloseModal = () => {
        setsubmitMsg({
            showModal: false,
            variant: "",
            message: ""
        });
    }
    
    const hasError = (inputName) => {
        return inputError.find((el) => el.input === inputName);
    }

    const ErrorMessage = ({ inputName }) => {
        const error = hasError(inputName);
        return error ? <p className={styles.errorMsg}>{t(error.message)}</p> : null;
    };

  return (
    <div className={styles.contactSec} id={props.sectionId ?? ""}>
        <Main
            className={styles.contactMain}
            subtitle={t('contactSection.subtitle')}
            title={t('contactSection.title')}
            align='center'
            isDark={false}
        />

        {submitMsg.showModal && (
            <Alert 
                variant={submitMsg.variant} 
                onClick={() => handleCloseModal()} 
                dismissible
                style={{
                    maxWidth: "1120px",
                    position: "relative",
                    left: "50%",
                    transform: "translateX(-50%)",
                }}
            >
                <div dangerouslySetInnerHTML={{ __html: t(submitMsg.message) }} />
            </Alert>
        )}

        <form onSubmit={handleSubmit}>
            <div className={styles.flexbox}>
                <div className={styles.inputBox}>
                    <label htmlFor="name">{t('contactSection.form.name.label')}</label>
                    <input 
                        type="text" 
                        id='name' 
                        placeholder={t('contactSection.form.name.placeholder')}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={hasError("name") && {borderColor: "#f1aeb5"}}
                    />
                    <ErrorMessage errors={inputError} inputName="name" />
                </div>
                <div className={styles.inputBox}>
                    <label htmlFor="business">{t('contactSection.form.business.label')}</label>
                    <input 
                        type="text" 
                        id='business' 
                        placeholder={t('contactSection.form.business.placeholder')}
                        value={business}
                        onChange={(e) => setBusiness(e.target.value)}
                        style={hasError("business") && {borderColor: "#f1aeb5"}}
                    />
                    <ErrorMessage errors={inputError} inputName="business" />
                </div>
                <div className={styles.inputBox}>
                    <label htmlFor="contact">{t('contactSection.form.email.label')}</label>
                    <input 
                        type="text" 
                        id='contact' 
                        placeholder={t('contactSection.form.email.placeholder')}
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        style={hasError("contact") && {borderColor: "#f1aeb5"}}
                    />
                    <ErrorMessage errors={inputError} inputName="contact" />
                </div>
            </div>
            <div className={styles.flexbox}>
                <div className={`${styles.inputBox} ${styles.messageBox}`}>
                    <label htmlFor="message">{t('contactSection.form.message.label')}</label>
                    <textarea 
                        id="message" 
                        placeholder={t('contactSection.form.message.placeholder')}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={hasError("message") && {borderColor: "#f1aeb5"}}
                    ></textarea>
                    <ErrorMessage errors={inputError} inputName="message" />
                </div>
                <input 
                    type="submit" 
                    value={loading ? t('contactSection.form.submit.loading') : t('contactSection.form.submit.send')} 
                    style={loading ? {
                        backgroundColor: "#cbcbcb",
                        color: "#000",
                        border: "1px solid #666"
                    } : null}
                    disabled={loading}
                />
            </div>
        </form>
    </div>
  )
}

export default ContactUsSection