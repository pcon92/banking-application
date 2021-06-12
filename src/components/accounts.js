import React from 'react';

// import components
import Navbar from './Navbar';
import SingleAccount from './SingleAccount';

import showTotalAusDollar from '../functions/showTotalAusDollar.js';

import styles from '../styles/accounts.module.css';
import themedStyles from '../styles/themes.module.css';

const Accounts = ( {fontSize, theme, accounts, unreadMessages}) => {


    // font sizes used in this component
    const fontSizeMed = {fontSize: `${fontSize[1]}`};
    const fontSizeLge = {fontSize: `${fontSize[2]}`};
    const fontSizeXL = {fontSize: `${fontSize[3]}`};


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
                    {accounts.map(account => 
                        <li 
                        className={styles.listItem}
                            key={account.id}
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
                    <div className={styles.totalFundsDiv}>
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