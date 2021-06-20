import React from 'react';
import { motion } from 'framer-motion';

// import components
import Navbar from './Navbar';
import AddressBook from './AddressBook';
import TransferForm from './TransferForm';
import AddContact from './AddContact';

import styles from '../styles/transfers.module.css';
import themedStyles from '../styles/themes.module.css';

const Transfers = ({fontSize, theme, animations,
    unreadMessages, 
    transferTo, setTransferTo, 
    transferAmount, setTransferAmount,
    contacts,
    insufficientFunds,
    transferReceipt,
    handleCloseReceipt,
    handleAddContact
    }) => {

    return (
        <>
            <Navbar
                fontSize={fontSize}
                theme={theme}
                animations={animations}
                unreadMessages={unreadMessages}
                currentPage={"transfers-page"}/>
            <div className={`${styles.background} ${themedStyles[theme[0]]} ${themedStyles[theme[3]]}`}>
                <div className={`${styles.innerContainer} ${themedStyles[theme[1]]}`}>
                    <AddressBook
                        theme={theme}
                        fontSize={fontSize}
                        animations={animations}
                        setTransferTo={setTransferTo}
                        contacts={contacts}/>
                    <motion.div
                        initial={animations ? {opacity: 0} : null}
                        animate={animations ? {
                            opacity: 1,
                            transition: {delay: 0.2, duration: 1}
                        } : null}>
                        <AddContact
                            theme={theme}
                            fontSize={fontSize}
                            animations={animations}
                            handleAddContact={handleAddContact} />
                        <TransferForm 
                            theme={theme}
                            transferTo={transferTo}
                            fontSize={fontSize}
                            transferAmount={transferAmount}
                            setTransferAmount={setTransferAmount}
                            insufficientFunds={insufficientFunds}
                            transferReceipt={transferReceipt}
                            handleCloseReceipt={handleCloseReceipt}/>
                    </motion.div>
                </div>
            </div>
        </>
    )
};

export default Transfers;
