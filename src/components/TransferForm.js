import React, {useState} from 'react';


const TransferForm = ({transferTo, setTransferAmount}) => {

    const [noVal, setNoVal] = useState({color: "red", visibility: "hidden"});
    const [noContact, setNoContact] = useState({color: "red", visibility: "hidden"});

    const submitTransferAmount = () => {

        const INPUT_AMOUNT = document.getElementById('amount');

        if (INPUT_AMOUNT.value === '') {
            setNoVal({color: "red", visibility: "visible"})
        } else {
            setNoVal({color: "red", visibility: "hidden"})
            setTransferAmount(INPUT_AMOUNT.value)
            INPUT_AMOUNT.value = '';
        }

        if (transferTo === '') {
            setNoContact({color: "red", visibility: "visible"})
        } else {
            setNoContact({color: "red", visibility: "hidden"})
        }

    };


    return (
        <div>
            <h3>To: {transferTo}</h3>
            <p style={noContact}>Error: No contact selected to transfer to</p>
            <label htmlFor="amount">Amount</label>
            <input type="text" id="amount"></input>
            <button value="Send Transfer"
                onClick={submitTransferAmount}>Send Transfer</button>
            <p style={noVal}>Error: no transfer value entered</p>
        </div>
    )
};

export default TransferForm;
