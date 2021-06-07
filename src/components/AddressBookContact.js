import React from 'react';


import styles from '../styles/addressBookContact.module.css';

const AddressBookContact = ({fontSize, setTransferTo, id, name, accountNum, BSB, total}) => {

    // font sizes used in this component
    const fontSizeSml = {fontSize: `${fontSize[0]}`};
    const fontSizeMed = {fontSize: `${fontSize[1]}`};
    const fontSizeLge = {fontSize: `${fontSize[2]}`};

    const chooseTransfer = () => {
        setTransferTo(name)
    };

    return (
        <div>
            <div className={styles.contact}>
                <h4 style={fontSizeLge}>Name: {name} </h4>
                <h6 style={fontSizeSml}>Account Number: {accountNum}</h6>
                <h6 style={fontSizeSml}>BSB: {BSB} </h6>
                <h6 style={fontSizeMed}>Total: {total}</h6>
                <button className={styles.transferButton} 
                style={fontSizeMed}
                onClick={chooseTransfer}>Transfer to this person</button>
            </div>
        </div>
    )
};

export default AddressBookContact;
