import React from 'react';

import styles from '../styles/singleAccount.module.css';

const SingleAccount = ( { fontSize, name, accountNumber, BSB, total }) => {

    // font sizes used in this component
    const fontSizeSml = {fontSize: `${fontSize[0]}`};
    const fontSizeMed = {fontSize: `${fontSize[1]}`};
    const fontSizeLge = {fontSize: `${fontSize[2]}`};

    return (
        <>
            <div className={styles.accountBox}>
                <div className={styles.accountInfo}>
                    <h3 style={fontSizeLge}> Account Name: </h3>
                    <h6 style={fontSizeMed}> Account Number: </h6>
                    <h6 style={fontSizeMed}> BSB: </h6>
                    <h6 style={fontSizeMed}> Total Funds: </h6>
                </div>
                <div className={styles.accountValues}>
                    <h3 style={fontSizeMed}>{name}</h3>
                    <h6 style={fontSizeSml}>{accountNumber}</h6>
                    <h6 style={fontSizeSml}>{BSB}</h6>
                    <h6 style={fontSizeMed}>{total}</h6>
                </div>
            </div>
        </>
    )
};

export default SingleAccount;
