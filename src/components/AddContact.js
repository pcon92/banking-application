import React, { useState } from 'react';
import { motion } from 'framer-motion';

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

    const registerContact = () => {
        const NAME = document.getElementById("name");
        const BSB = document.getElementById("BSB");
        const ACCOUNT_NUMBER = document.getElementById("account-number");
        const contactInfo = {
            id: Date.now(),
            name: NAME.value ? NAME.value : '',
            accountNum: ACCOUNT_NUMBER.value ? ACCOUNT_NUMBER.value : '',
            BSB: BSB.value ? BSB.value : '',
            total: 5000
        };
        handleAddContact(contactInfo);
        NAME.value = '';
        BSB.value = '';
        ACCOUNT_NUMBER.value = '';
    };



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
            {panelOpen && <motion.div 
                initial={animations ? {opacity: 0} : null}
                animate={animations ? {opacity: 1} : null}
                transition={animations ? { duration: 1 }: null}
                className={`${styles.innerContainer} ${themedStyles[theme[1]]}`}>
                <div 
                    className={styles.nameDiv}
                    style={fontSizeMed}>
                    <label>Name: </label>
                    <input type="text" id="name" className={styles.inputBox}/>
                </div>
                <div 
                    className={styles.BSBDiv}
                    style={fontSizeMed}>
                    <label>BSB: </label>
                    <input type="text" id="BSB" className={styles.inputBox}/>
                </div>
                <div 
                    className={styles.accountNumberDiv}
                    style={fontSizeMed}>
                    <label>Account Number: </label>
                    <input type="text" id="account-number" className={styles.inputBox}/>
                </div>
                <button
                    className={styles.addContactButton} 
                    onClick={registerContact}>Add Contact</button>
            </motion.div>
            }
        </div>
    )
};

export default AddContact;