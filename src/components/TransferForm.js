import React from 'react';

const TransferForm = ({transferTo}) => {

    return (
        <div>
            <form>
                <h3>To: {transferTo}</h3>
                <label htmlFor="amount">Amount</label>
                <input type="text" id="amount"></input>
                <button value="Send Transfer">Send Transfer</button>
            </form>
        </div>
    )
};

export default TransferForm;
