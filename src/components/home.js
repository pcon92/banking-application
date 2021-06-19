import React from 'react';
import { motion } from "framer-motion";

// import components
import Navbar from './Navbar';

import showTotalAusDollar from '../functions/showTotalAusDollar.js';

import themedStyles from '../styles/themes.module.css';
import styles from '../styles/home.module.css';

const Home = ({fontSize, theme, animations, unreadMessages, total, name}) => {

    const dummyUserInfo = {
        name: 'User 1',
    };

    // font sizes used in this component
    const fontSizeLge = {fontSize: `${fontSize[2]}`};
    const fontSizeXL = {fontSize: `${fontSize[3]}`};

    return (
        <>
            <Navbar
            fontSize={fontSize}
            theme={theme}
            animations={animations}
            unreadMessages={unreadMessages}
            currentPage={"home-page"}/>
            <div className={`${styles.background} ${themedStyles[theme[0]]} ${themedStyles[theme[3]]}`}>
                <div className={`${styles.contentBox} ${themedStyles[theme[0]]}`}>
                    <motion.div 
                        initial={animations ? { scale: 0.6 } : null}
                        animate={animations ? { scale: 1 }: null}
                        transition={{ duration: 0.35 }}
                        className={`${styles.welcome}`}
                        style={fontSizeXL}>
                        Welcome {dummyUserInfo.name}
                    </motion.div>
                    <motion.div
                        initial={animations ? { scale: 0.6 } : null}
                        animate={animations ? { scale: 1 } : null}
                        transition={{ duration: 0.35, delay: 0.05 }}
                        className={`${styles.accountInfoBox} ${themedStyles[theme[1]]}`}>
                        <div className={`${styles.accountNameDiv}`}>
                            <div className={`${styles.accountName}`}
                            style={fontSizeLge}>Account Name:</div> 
                            <div className={`${styles.accountNameValue}`}
                            style={fontSizeLge}>
                                {name}</div>
                        </div>
                        <div className={`${styles.accountTotalDiv}`}>
                            <div className={`${styles.accountTotal}`}
                            style={fontSizeLge}>Total:</div> 
                            <div className={`${styles.accountTotalValue}`}
                            style={fontSizeLge}>
                                {showTotalAusDollar(total)}</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
};

export default Home;
