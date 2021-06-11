import React, {useState} from 'react';

import styles from '../styles/transferForm.module.css';
import themedStyles from '../styles/themes.module.css';


const TransferForm = ({theme, fontSize, transferTo, setTransferAmount}) => {

    // font sizes used in this component
    const fontSizeMed = {fontSize: `${fontSize[1]}`};
    const fontSizeLge = {fontSize: `${fontSize[2]}`};

    const [noVal, setNoVal] = useState({color: "red", visibility: "hidden"});
    const [noContact, setNoContact] = useState({color: "red", visibility: "hidden"});

    const submitTransferAmount = () => {

        const INPUT_AMOUNT = document.getElementById('amount');

        if (INPUT_AMOUNT.value === '') {
            setNoVal({color: "red", visibility: "visible", fontSize: `${fontSize[1]}`})
        } else {
            setNoVal({color: "red", visibility: "hidden"})
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
            <div>
                <h3 style={fontSizeLge}>Transferring to: {transferTo}</h3>
                <p style={noContact}>Error: No contact selected to transfer to</p>
            </div>
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
        </div>
    )
};

export default TransferForm;
