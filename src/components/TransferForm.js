import React from 'react';

const TransferForm = ({transferTo, setTransferAmount, setTransferTo}) => {

    const INPUTAMOUNT = document.getElementById('amount');

    const submitTransferAmount = (e) => {
        setTransferAmount(INPUTAMOUNT.value)
        INPUTAMOUNT.value = '';
    };

    return (
        <div>

            <h3>To: {transferTo}</h3>
            <label htmlFor="amount">Amount</label>
            <input type="text" id="amount"></input>
            <button value="Send Transfer"
                onClick={submitTransferAmount}>Send Transfer</button>

        </div>
    )
};

export default TransferForm;
