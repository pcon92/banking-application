import React from 'react';

import showTotalAusDollar from '../functions/showTotalAusDollar.js';

import styles from '../styles/transferReceipt.module.css';

const TransferReceipt = ( { fontSize, 
    transferTo, 
    transferAmount,
    handleCloseReceipt }) => {

    // font sizes used in this component
    const fontSizeLge = {fontSize: `${fontSize[2]}`};
    const fontSizeXL = {fontSize: `${fontSize[3]}`};

    return (
        <>
            <div className={styles.background}>
                <div className={styles.outerContainer}>
                    <button
                        className={styles.closeButton} 
                        onClick={() => handleCloseReceipt()}>X</button>
                    <div className={styles.innerContainer}>
                        <div
                            style={fontSizeLge}>
                            You transferred: 
                        </div>
                        <p style={fontSizeXL}>
                            {showTotalAusDollar(transferAmount)}
                        </p>
                        <div 
                            style={fontSizeLge}>
                            to:
                        </div>
                        <div 
                            style={fontSizeXL}
                            className={styles.transferredToName}>
                                {transferTo}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default TransferReceipt;
