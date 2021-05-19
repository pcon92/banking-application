import React from 'react';


const AddressBookContact = ({
    setTransferTo,
    id,
    name,
    accountNum,
    BSB,
    total
}) => {

    const chooseTransfer = () => {
        setTransferTo(id)
    };

    return (
        <div>
            <div>
                <h4>Name: {name} </h4>
                <h6>Account Number: {accountNum}</h6>
                <h6>BSB: {BSB} </h6>
                <h6>Total: {total}</h6>
                <button onClick={chooseTransfer}>Transfer to this person</button>
            </div>
        </div>
    )
};

export default AddressBookContact;
