import React from 'react';


const AddressBookContact = ({setTransferTo, id, name, accountNum, BSB, total}) => {

    const chooseTransfer = () => {
        setTransferTo(id)
    };

    return (
        <div>
            <div style={styleAddressBookContact.contact}>
                <h4>Name: {name} </h4>
                <h6>Account Number: {accountNum}</h6>
                <h6>BSB: {BSB} </h6>
                <h6>Total: {total}</h6>
                <button style={styleAddressBookContact.transferButton} onClick={chooseTransfer}>Transfer to this person</button>
            </div>
        </div>
    )
};

const styleAddressBookContact = {
    contact: {
        border: "1px solid black",
        padding: 5,
        height: "10vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        marginBottom: "1vh"
    },
    transferButton: {
        width: "15vw"
    }
};

export default AddressBookContact;
