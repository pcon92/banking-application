import React from 'react';


const AddressBookContact = ({fontSize, setTransferTo, id, name, accountNum, BSB, total}) => {

    // font sizes used in this component
    const fontSizeSml = {fontSize: `${fontSize[0]}`};
    const fontSizeMed = {fontSize: `${fontSize[1]}`};
    const fontSizeLge = {fontSize: `${fontSize[2]}`};

    const chooseTransfer = () => {
        setTransferTo(id)
    };

    return (
        <div>
            <div style={styleAddressBookContact.contact}>
                <h4 style={fontSizeLge}>Name: {name} </h4>
                <h6 style={fontSizeSml}>Account Number: {accountNum}</h6>
                <h6 style={fontSizeSml}>BSB: {BSB} </h6>
                <h6 style={fontSizeMed}>Total: {total}</h6>
                <button style={styleAddressBookContact.transferButton} 
                style={fontSizeMed}
                onClick={chooseTransfer}>Transfer to this person</button>
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
