import React from 'react';
import {Link} from "react-router-dom";

import styles from '../styles/navbar.module.css';
import themedStyles from '../styles/themes.module.css';

const Navbar = ({fontSize, theme}) => {

    // font sizes used in this component
    const fontSizeMed = {fontSize: `${fontSize[1]}`};
    const fontSizeLge = {fontSize: `${fontSize[2]}`};

    return (
        <div>
            <ul className={`${styles.navList} ${themedStyles[theme[2]]}`}>
                <li className={`${styles.linkList} ${themedStyles[theme[2]]}`}>
                <img alt="logo"></img>
                </li>
                <li className={styles.linkList}>
                    <Link to="/home-page" 
                    className={`${styles.transferLink}`}
                    style={fontSizeLge}>Home</Link>
                </li>
                <li className={`${styles.linkList}`}>
                    <Link to="/messages-page" 
                    className={`${styles.transferLink}`}
                    style={fontSizeMed}>Messages</Link>
                </li>
                <li className={`${styles.linkList}`}>
                    <Link to="/accounts-page" 
                    className={`${styles.transferLink}`}
                    style={fontSizeMed}>Accounts</Link>
                </li>
                <li className={`${styles.linkList}`}>
                    <Link to="/transfers-page" 
                    className={`${styles.transferLink}`}
                    style={fontSizeMed}>Transfers</Link>
                </li>
                <li className={`${styles.linkList}`}>
                    <Link to="/settings-page" 
                    className={`${styles.transferLink}`}
                    style={fontSizeMed}>Settings</Link>
                </li>
                <li className={`${styles.linkList}`}>
                    <Link to="/" 
                    className={`${styles.transferLink}`}
                    style={fontSizeMed}>Logout</Link>
                </li>
            </ul>
        </div>
    )
};

export default Navbar;
