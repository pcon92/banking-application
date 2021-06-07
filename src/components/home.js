import React from 'react';

// import components
import Navbar from './Navbar';

import themedStyles from '../styles/themes.module.css';
import styles from '../styles/home.module.css';

const Home = ({fontSize, theme, accounts, unreadMessages}) => {

    const dummyUserInfo = {
        name: 'User 1',
    };

    // font sizes used in this component
    const fontSizeMed = {fontSize: `${fontSize[1]}`};
    const fontSizeLge = {fontSize: `${fontSize[2]}`};
    const fontSizeXL = {fontSize: `${fontSize[3]}`};

    return (
        <>
            <Navbar
            fontSize={fontSize}
            theme={theme}
            unreadMessages={unreadMessages}/>
            <div className={`${styles.background} ${themedStyles[theme[0]]}`}>
                <div className={`${styles.contentBox} ${themedStyles[theme[0]]}`}>
                    <div className={`${styles.welcome} ${themedStyles[theme[1]]}`}
                        style={fontSizeXL}>
                        Welcome {dummyUserInfo.name}
                    </div>
                    <div className={`${styles.accountInfoBox} ${themedStyles[theme[2]]}`}>
                        <div className={`${styles.accountNameDiv}`}>
                            <div className={`${styles.accountName}`}
                            style={fontSizeLge}>Primary Account:</div> 
                            <div className={`${styles.accountNameValue}`}
                            style={fontSizeMed}>
                                {accounts[0].name}</div>
                        </div>
                        <div className={`${styles.accountTotalDiv}`}>
                            <div className={`${styles.accountTotal}`}
                            style={fontSizeLge}>Total:</div> 
                            <div className={`${styles.accountTotalValue}`}
                            style={fontSizeMed}>
                                {accounts[0].total}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;
