import React from 'react';

// import components
import Navbar from './Navbar';
import SingleAccount from './SingleAccount';

import styles from '../styles/accounts.module.css';
import themedStyles from '../styles/themes.module.css';

const Accounts = ( {fontSize, theme, accounts}) => {

    return (
        <>
            <Navbar
                fontSize={fontSize}
                theme={theme}/>
            <div className={`${styles.background} ${themedStyles[theme[0]]}`}>
                <ul className={`${styles.accountsList} ${themedStyles[theme[2]]}`}>
                {accounts.map(account => 
                    <li 
                    className={styles.listItem}
                        key={account.id}
                    >
                    <SingleAccount 
                        fontSize={fontSize}
                        name={account.name}
                        accountNumber={account.accountNumber}
                        BSB={account.BSB}
                        total={account.total}
                    />
                    </li>
                    )} 
                </ul>
            </div>
        </>
    )
};

export default Accounts;