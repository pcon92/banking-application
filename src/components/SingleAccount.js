import React from 'react';

import showTotalAusDollar from '../functions/showTotalAusDollar.js';

import styles from '../styles/singleAccount.module.css';

const SingleAccount = ( { fontSize, name, accountNum, BSB, total }) => {

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
                    <p style={fontSizeMed}>{name}</p>
                    <p style={fontSizeSml}>{accountNum}</p>
                    <p style={fontSizeSml}>{BSB}</p>
                    <p style={fontSizeMed}>{showTotalAusDollar({total})}</p>
                </div>
            </div>
        </>
    )
};

export default SingleAccount;
