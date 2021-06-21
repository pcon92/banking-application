import React from 'react';

import showTotalAusDollar from '../functions/showTotalAusDollar.js';

import styles from '../styles/singleAccount.module.css';
import themedStyles from '../styles/themes.module.css';

const SingleAccount = ( { theme, fontSize, id, name, accountNum, BSB, total,
    handleDeleteContact }) => {

    // font sizes used in this component
    const fontSizeMed = {fontSize: `${fontSize[1]}`};
    const fontSizeLge = {fontSize: `${fontSize[2]}`};
    
    return (
        <>
            <div className={`${styles.accountBox} ${themedStyles[theme[1]]}`}>
                <div className={styles.accountName}>
                    <h3 style={fontSizeLge}>Account Name: </h3>
                    <p style={fontSizeLge}>{name}</p>
                </div>
                <div className={styles.bottomHalf}>
                    <div className={styles.accountDetailsAndDeleteDiv}>
                        <div className={styles.accountDetails}>
                            <p style={fontSizeMed} className={styles.BSB}> BSB: {BSB}</p>
                            <p style={fontSizeMed} className={styles.accountNum}> Acc. Number: {accountNum}</p>
                        </div>
                        {name !== "Everyday Spending" && name !== "Savings Account"
                        ?   <button 
                                onClick={() => handleDeleteContact(id)}
                                className={styles.deleteButton}>
                                <i className="fas fa-trash-alt fa-2x"></i>
                            </button>
                        : null}
                    </div>
                    <div className={styles.accountTotal}>
                        <h6 style={fontSizeLge}> Total Funds: </h6>
                        <p style={fontSizeLge}>{showTotalAusDollar(total)}</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default SingleAccount;
