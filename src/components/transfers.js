import React, {useState, useEffect} from 'react';

// import components
import Navbar from './Navbar';
import AddressBook from './AddressBook';
import TransferForm from './TransferForm';

import styles from '../styles/transfers.module.css';
import themedStyles from '../styles/themes.module.css';
import Messages from './Messages';

const Transfers = ({fontSize, theme, accounts, messages, setMessages, unreadMessages}) => {

    const [transferTo, setTransferTo] = useState('');
    const [transferAmount, setTransferAmount] = useState(0);

    useEffect(()=> {
        transferAmount !== 0 
        ? setMessages([...messages, 
            {   
                id: Date.now(), // to give unique ID
                read: false,
                favourite: false,
                message: `You transferred $${transferAmount} to ${transferTo}`
            }])
        : setMessages([...messages])
    }, [transferAmount]);


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
