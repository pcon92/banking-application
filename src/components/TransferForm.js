import React, {useState} from 'react';

import TransferReceipt from './TransferReceipt';

import styles from '../styles/transferForm.module.css';
import themedStyles from '../styles/themes.module.css';


const TransferForm = ({theme, fontSize, transferTo, 
    transferAmount, setTransferAmount,
    insufficientFunds,
    transferReceipt,
    handleCloseReceipt
    }) => {

    // font sizes used in this component
    const fontSizeMed = {fontSize: `${fontSize[1]}`};
    const fontSizeLge = {fontSize: `${fontSize[2]}`};

    const [noVal, setNoVal] = useState({color: "red", visibility: "hidden"});
    const [noContact, setNoContact] = useState({color: "red", visibility: "hidden"});

    const submitTransferAmount = () => {

        const INPUT_AMOUNT = document.getElementById('amount');

        if (INPUT_AMOUNT.value === '') {
            setNoVal({color: "red", display: "block", fontSize: `${fontSize[1]}`})
        } else {
            setNoVal({color: "red", display: "none"})
            setTransferAmount(INPUT_AMOUNT.value)
            INPUT_AMOUNT.value = '';
        }

        if (transferTo === '') {
            setNoContact({color: "red", visibility: "visible", fontSize: `${fontSize[1]}`})
        } else {
            setNoContact({color: "red", visibility: "hidden"})
        }

    };


    return (
        <div className={`${styles.background} ${themedStyles[theme[1]]}`}>
            <div className={styles.transferToDiv}>
                <p style={fontSizeLge}>Transferring to: </p>
                <h3 className = {styles.transferTo}
                style={fontSizeLge}> {transferTo} </h3>
            </div>
                <p style={noContact}>Error: No contact selected to transfer to</p>
            <div className={styles.bottomHalf}>
                <div className={styles.amountDiv}>
                    <label style={fontSizeMed} htmlFor="amount">Amount: </label>
                    <div className={styles.dollarDiv}>
                        $<input className={styles.inputBox} type="text" id="amount"/>
                    </div>
                </div>
                <div className={styles.buttonDiv}>
                    <button value="Send Transfer"
                        className={styles.transferFundsButton}
                        style={fontSizeMed}
                        onClick={submitTransferAmount}>Transfer Funds</button>
                </div>
            </div>
            <p style={noVal}>Error: no transfer value entered</p>
            {insufficientFunds 
            ? <p style={{color: "red", fontSize: `${fontSize[1]}`}}>Error: Insufficient Funds for transfer</p>
            : <p style={{display: "none"}}>Error: Insufficient Funds for transfer</p>}
            {transferReceipt && <TransferReceipt
                fontSize={fontSize}
                transferTo={transferTo}
                transferAmount={transferAmount || 0}
                handleCloseReceipt={handleCloseReceipt}/>
            }
        </div>
    )
};

export default TransferForm;
