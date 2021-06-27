import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import styles from '../styles/addContact.module.css';
import themedStyles from '../styles/themes.module.css';

const AddContact = ({theme, fontSize, animations,
    handleAddContact
    }) => {

    // font sizes used in this component
    const fontSizeMed = {fontSize: `${fontSize[1]}`};
    const fontSizeLge = {fontSize: `${fontSize[2]}`};

    const [panelOpen, setPanelOpen] = useState(false);
    const togglePanel = () => {
        setPanelOpen(!panelOpen)
    }


    // for form validation with formik and yup
    let validationSchemaFormik = yup.object().shape({
        contactName: yup.string()
        .required('Required')
        .min(2, 'Name must be at least 2 characters')
        .max(20, 'Name is too long (max 20 characters)'),
        BSB: yup.string()
        .required('Required')
        .length(6, 'Must be 6 characters - do not include hyphon'),
        accNum: yup.string()
        .required('Required')
        .min(6, 'Must be at least 6 characters - do not include spaces')
        .max(10, 'Must be at most 10 characters - do not include spaces')
    })

    const registerContact = (values, {resetForm}) => {

        const contactInfo = {
            id: Date.now(),
            name: values.contactName,
            BSB: values.BSB,
            accountNum: values.accNum,
            total: 5000
        };

        handleAddContact(contactInfo);

        resetForm();
    };

    const initialValuesFormik = {
            contactName: '',
            BSB: '',
            accNum: ''
    }
    
    
    return (
        <div className={panelOpen 
            ? `${styles.backgroundOpen}`
            : `${styles.backgroundClosed} ${themedStyles[theme[1]]}`}>
            <div 
                onClick={togglePanel}
                className={panelOpen 
                ? styles.topPanelOpen
                : styles.topPanelClosed}>
                <button 
                    className={styles.toggleButton}>{panelOpen 
                    ? <i className="fas fa-minus"></i>
                    : <i className="fas fa-plus"></i>}
                </button>
                <div style={fontSizeLge}>
                    Add a New Contact 
                </div>
            </div>
            {panelOpen && 
            <Formik
                initialValues={initialValuesFormik}
                onSubmit={registerContact}
                validationSchema={validationSchemaFormik}
                >
                {formik => {
                    return(
                        <Form>
                        <motion.div 
                             initial={animations ? {opacity: 0} : null}
                            animate={animations ? {opacity: 1} : null}
                            transition={animations ? { duration: 1 }: null}
                            className={`${styles.innerContainer} ${themedStyles[theme[1]]}`}>
                            <div 
                                className={styles.nameDiv}
                                style={fontSizeMed}>
                                <label htmlFor="contactName">Name</label>
                                <Field type="text" name="contactName" id="contactName" 
                                    className={styles.inputBox}/>
                                <ErrorMessage name="contactName">
                                    { (errorMsg) => 
                                    <div style={{color: "red"}}>
                                        {errorMsg}
                                    </div>}
                                </ErrorMessage>
                            </div>
                            <div 
                                className={styles.BSBDiv}
                                style={fontSizeMed}>
                                <label htmlFor="BSB">BSB</label>
                                <Field type="text" name="BSB" id="BSB" 
                                    className={styles.inputBox}/>
                                <ErrorMessage name="BSB">
                                    { (errorMsg) => 
                                    <div style={{color: "red"}}>
                                        {errorMsg}
                                    </div>}
                                </ErrorMessage>
                            </div>
                            <div 
                                className={styles.accountNumberDiv}
                                style={fontSizeMed}>
                                <label htmlFor="accNum">Account Number</label>
                                <Field type="text" name="accNum" id="accNum"
                                    className={styles.inputBox}/>
                                <ErrorMessage name="accNum">
                                    { (errorMsg) => 
                                    <div style={{color: "red"}}>
                                        {errorMsg}
                                    </div>}
                                </ErrorMessage>
                            </div>
                            <button
                                className={styles.addContactButton} 
                                type="submit"
                                disabled={!formik.isValid}>Add Contact</button>
                        </motion.div>
                        </Form>
                    )
                }}
            </Formik>
            }
        </div>
    )
};

export default AddContact;