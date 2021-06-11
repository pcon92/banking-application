import React from 'react';

// import components
import Navbar from './Navbar';
import SingleAccount from './SingleAccount';

import styles from '../styles/accounts.module.css';
import themedStyles from '../styles/themes.module.css';

const Accounts = ( {fontSize, theme, accounts, unreadMessages}) => {

    return (
        <>
            <Navbar
                fontSize={fontSize}
                theme={theme}
                unreadMessages={unreadMessages}/>
            <div className={`${styles.background} ${themedStyles[theme[0]]} ${themedStyles[theme[3]]}`}>
                <ul className={`${styles.accountsList} ${themedStyles[theme[1]]}`}>
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
                </ul>
            </div>
        </>
    )
};

export default Accounts;