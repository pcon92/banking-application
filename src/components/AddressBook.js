import React from 'react';
import { motion } from "framer-motion";

// import components
import AddressBookContact from './AddressBookContact';

import styles from '../styles/addressBook.module.css';
import themedStyles from '../styles/themes.module.css';

const AddressBook = ({theme, fontSize, animations,
    contacts,
    handleDeleteContact,
    handleSelectContact}) => {

    // font sizes used in this component
    const fontSizeXL = {fontSize: `${fontSize[3]}`};



    return (
        <>
            <div>
                <div style={fontSizeXL}
                className={`${styles.heading} ${themedStyles[theme[2]]}`}>Address Book</div>
                    <motion.div
                        initial={animations ? {opacity: 0} : null}
                        animate={animations ? {
                            opacity: 1,
                            transition: {duration: 0.5}
                        } : null}>
                        {contacts.map(contact => 
                            <div className={contact.name === "Everyday Spending"
                                ? styles.ownAccountDiv
                                : styles.contactDiv} 
                                key={Date.now()*Math.random(1)}>
                                <AddressBookContact 
                                    theme={theme}
                                    fontSize={fontSize}
                                    id={contact.id}
                                    name={contact.name}
                                    accountNum={contact.accountNum}
                                    BSB={contact.BSB}
                                    total={contact.total}
                                    handleDeleteContact={handleDeleteContact}
                                    handleSelectContact={handleSelectContact}
                                    />
                            </div>)
                        }
                    </motion.div>
            </div>
        </>
    )
};


export default AddressBook;
