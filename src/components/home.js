import React from 'react';

// import components
import Navbar from './Navbar';

import showTotalAusDollar from '../functions/showTotalAusDollar.js';

import themedStyles from '../styles/themes.module.css';
import styles from '../styles/home.module.css';

const Home = ({fontSize, theme, unreadMessages, total, name}) => {

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
            unreadMessages={unreadMessages}
            currentPage={"home-page"}/>
            <div className={`${styles.background} ${themedStyles[theme[0]]} ${themedStyles[theme[3]]}`}>
                <div className={`${styles.contentBox} ${themedStyles[theme[0]]}`}>
                    <div className={`${styles.welcome}`}
                        style={fontSizeXL}>
                        Welcome {dummyUserInfo.name}
                    </div>
                    <div className={`${styles.accountInfoBox} ${themedStyles[theme[1]]}`}>
                        <div className={`${styles.accountNameDiv}`}>
                            <div className={`${styles.accountName}`}
                            style={fontSizeLge}>Account Name:</div> 
                            <div className={`${styles.accountNameValue}`}
                            style={fontSizeMed}>
                                {name}</div>
                        </div>
                        <div className={`${styles.accountTotalDiv}`}>
                            <div className={`${styles.accountTotal}`}
                            style={fontSizeLge}>Total:</div> 
                            <div className={`${styles.accountTotalValue}`}
                            style={fontSizeMed}>
                                {showTotalAusDollar(total)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;
