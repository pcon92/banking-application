import React from 'react';

// import components
import Navbar from './Navbar';
import AddressBook from './AddressBook';
import TransferForm from './TransferForm';

import styles from '../styles/transfers.module.css';
import themedStyles from '../styles/themes.module.css';

const Transfers = ({fontSize, theme, 
    unreadMessages, 
    transferTo, setTransferTo, 
    setTransferAmount,
    contacts}) => {

    return (
        <>
            <Navbar
                fontSize={fontSize}
                theme={theme}
                unreadMessages={unreadMessages}
                currentPage={"transfers-page"}/>
            <div className={`${styles.background} ${themedStyles[theme[0]]} ${themedStyles[theme[3]]}`}>
                <div className={`${styles.innerContainer} ${themedStyles[theme[1]]}`}>
                    <AddressBook
                        theme={theme}
                        fontSize={fontSize}
                        setTransferTo={setTransferTo}
                        contacts={contacts}/>
                    <TransferForm 
                        theme={theme}
                        transferTo={transferTo}
                        fontSize={fontSize}
                        setTransferAmount={setTransferAmount}/>
                </div>
            </div>
        </>
    )
};

export default Transfers;
