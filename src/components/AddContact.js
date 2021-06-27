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
    const fontSizeSml = {fontSize: `${fontSize[0]}`};
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
        .max(20, 'Name is too long (max 20 characters)')
        .matches(/^[A-Za-z\s]+$/, 'Must only contain letters A-Z'),
        BSB: yup.string()
        .required('Required')
        .length(6, 'Must be 6 characters from 0-9 only')
        .matches(/^[0-9]+$/, 'Must only include numbers 0-9'),
        accNum: yup.string()
        .required('Required')
        .min(6, 'Min 6 characters from 0-9 only')
        .max(10, 'Max 10 characters from 0-9 only')
        .matches(/^[0-9]+$/, 'Must only include numbers 0-9')
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
                                <ErrorMessage name="contactName">
                                    { (errorMsg) => 
                                    <div 
                                        className={styles.errorMessage}
                                        style={fontSizeSml}>
                                        {errorMsg}
                                    </div>}
                                </ErrorMessage>
                                <label htmlFor="contactName">Name: </label>
                                <Field type="text" name="contactName" id="contactName" 
                                    className={styles.inputBox}/>
                            </div>
                            <div 
                                className={styles.BSBDiv}
                                style={fontSizeMed}>
                                <ErrorMessage name="BSB">
                                    { (errorMsg) => 
                                    <div 
                                        className={styles.errorMessage}
                                        style={fontSizeSml}>
                                        {errorMsg}
                                    </div>}
                                </ErrorMessage>
                                <label htmlFor="BSB">BSB: </label>
                                <Field type="text" name="BSB" id="BSB" 
                                    className={styles.inputBox}/>
                            </div>
                            <div 
                                className={styles.accountNumberDiv}
                                style={fontSizeMed}>
                                <ErrorMessage name="accNum">
                                    { (errorMsg) => 
                                    <div 
                                        className={styles.errorMessage}
                                        style={fontSizeSml}>
                                        {errorMsg}
                                    </div>}
                                </ErrorMessage>
                                <label htmlFor="accNum">Account Number: </label>
                                <Field type="text" name="accNum" id="accNum"
                                    className={styles.inputBox}/>
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