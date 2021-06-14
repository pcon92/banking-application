import React from 'react';

// import components
import Navbar from './Navbar';
import SingleAccount from './SingleAccount';
import TransferForm from './TransferForm';

import showTotalAusDollar from '../functions/showTotalAusDollar.js';

import styles from '../styles/accounts.module.css';
import themedStyles from '../styles/themes.module.css';

const Accounts = ( {fontSize, theme, 
    accounts, unreadMessages,
    transferTo, setTransferTo, 
    setTransferAmount}) => {


    // font sizes used in this component
    const fontSizeXL = {fontSize: `${fontSize[3]}`};

    const chooseTransfer = (name) => {
        setTransferTo(name);
    };

    return (
        <>
            <Navbar
                fontSize={fontSize}
                theme={theme}
                unreadMessages={unreadMessages}
                currentPage={"accounts-page"}/>
            <div className={`${styles.background} ${themedStyles[theme[0]]} ${themedStyles[theme[3]]}`}>
                <ul className={`${styles.accountsList} ${themedStyles[theme[1]]}`}>
                    <div style={fontSizeXL}
                        className={`${styles.heading} ${themedStyles[theme[2]]}`}>Accounts</div>
                    <div>
                        {accounts.map(account => 
                            <li 
                            className={styles.listItem}
                                key={account.id}
                                onClick={() => chooseTransfer(account.name)}
                            >
                            <SingleAccount 
                                fontSize={fontSize}
                                name={account.name}
                                accountNum={account.accountNum}
                                BSB={account.BSB}
                                total={account.total}
                                theme={theme}
                            />
                            </li>
                            )} 
                    </div>
                    <div className={styles.totalFundsDiv}>
                        <div className={styles.transferFormDiv}>
                            <TransferForm 
                                theme={theme}
                                transferTo={transferTo}
                                fontSize={fontSize}
                                setTransferAmount={setTransferAmount}/>
                        </div>
                        <div className={`${styles.totalBox} ${themedStyles[theme[1]]}`}>
                            <p style={fontSizeXL}>Total Funds: </p>
                            <p style={fontSizeXL}>{showTotalAusDollar(
                                accounts.reduce((accountsTotal, currentVal) => 
                                accountsTotal.total + currentVal.total)
                                )}</p>
                        </div>
                    </div>
                </ul>
            </div>
        </>
    )
};

export default Accounts;