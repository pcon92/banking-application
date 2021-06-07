import React from 'react';

// import components
import Navbar from './Navbar';
import AddressBook from './AddressBook';
import TransferForm from './TransferForm';

import styles from '../styles/transfers.module.css';
import themedStyles from '../styles/themes.module.css';

const Transfers = ({fontSize, theme, 
    accounts, unreadMessages, 
    transferTo, setTransferTo, 
    transferAmount, setTransferAmount}) => {

    return (
        <>
            <Navbar
                fontSize={fontSize}
                theme={theme}
                unreadMessages={unreadMessages}/>
            <div className={`${styles.background} ${themedStyles[theme[0]]}`}>
                <div className={`${styles.innerContainer} ${themedStyles[theme[2]]}`}>
                    <AddressBook
                        fontSize={fontSize}
                        setTransferTo={setTransferTo}
                        transferTo={transferTo}
                        transferAmount={transferAmount}
                        setTransferAmount={setTransferAmount}
                        accounts={accounts}/>
                    <TransferForm 
                        transferTo={transferTo}
                        fontSize={fontSize}
                        setTransferAmount={setTransferAmount}/>
                </div>
            </div>
        </>
    )
};

export default Transfers;
