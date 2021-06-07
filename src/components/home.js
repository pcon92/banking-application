import React from 'react';

// import components
import Navbar from './Navbar';

import themedStyles from '../styles/themes.module.css';
import styles from '../styles/home.module.css';

const Home = ({fontSize, theme, accounts}) => {

    const dummyUserInfo = {
        name: 'User 1',
    };

    // font sizes used in this component
    const fontSizeMed = {fontSize: `${fontSize[1]}`};
    const fontSizeLge = {fontSize: `${fontSize[2]}`};

    return (
        <>
            <Navbar
            fontSize={fontSize}
            theme={theme}/>
            <div className={`${styles.background} ${themedStyles[theme[0]]}`}>
                <div className={`${styles.contentBox} ${themedStyles[theme[0]]}`}>
                    <div className={`${styles.welcome} ${themedStyles[theme[1]]}`}
                        style={fontSizeLge}>
                        Welcome {dummyUserInfo.name}
                    </div>
                    <div className={`${styles.accountInfoBox} ${themedStyles[theme[2]]}`}>
                        <div className={`${styles.accountNameDiv}`}>
                            <div className={`${styles.accountName}`}
                            style={fontSizeMed}>Account Name:</div> 
                            <div className={`${styles.accountNameValue}`}>{accounts[0].name}</div>
                        </div>
                        <div className={`${styles.accountTotalDiv}`}>
                            <div className={`${styles.accountTotal}`}
                            style={fontSizeMed}>Total:</div> 
                            <div className={`${styles.accountTotalValue}`}>{accounts[0].total}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;
