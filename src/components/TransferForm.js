import React, {useState} from 'react';


const TransferForm = ({fontSize, transferTo, setTransferAmount}) => {

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
        <div>
            <h3 style={fontSizeLge}>To: {transferTo}</h3>
            <p style={noContact}>Error: No contact selected to transfer to</p>
            <label 
            style={fontSizeMed}
            htmlFor="amount">Amount</label>
            <input type="text" id="amount"></input>
            <button value="Send Transfer"
                style={fontSizeMed}
                onClick={submitTransferAmount}>Send Transfer</button>
            <p style={noVal}>Error: no transfer value entered</p>
        </div>
    )
};

export default TransferForm;
