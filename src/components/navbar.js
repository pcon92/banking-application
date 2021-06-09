import React from 'react';
import {Link} from "react-router-dom";

import styles from '../styles/navbar.module.css';
import themedStyles from '../styles/themes.module.css';

const Navbar = ({fontSize, theme, unreadMessages}) => {

    // font sizes used in this component
    const fontSizeSml = {fontSize: `${fontSize[0]}`};
    const fontSizeMed = {fontSize: `${fontSize[1]}`};
    const fontSizeLge = {fontSize: `${fontSize[2]}`};

    return (
        <div>
            <ul className={`${styles.navList} ${themedStyles[theme[2]]} ${themedStyles[theme[3]]}`}>
                <li className={`${styles.logoLink} ${themedStyles[theme[2]]}`}>
                <img alt="logo"></img>
                </li>
                <Link to="/home-page" 
                    className={`${styles.linkList}`}
                    style={fontSizeLge}>Home
                </Link>
                <Link to="/messages-page" 
                    className={`${styles.linkList}`}
                    style={fontSizeMed}>Messages
                    {unreadMessages > 0 
                    ? <div className={styles.unreadMessagesNav}
                      style={fontSizeSml}>{unreadMessages}</div>
                    : null}
                </Link>
                <Link to="/accounts-page" 
                    className={`${styles.linkList}`}
                    style={fontSizeMed}>Accounts
                </Link>
                <Link to="/transfers-page" 
                    className={`${styles.linkList}`}
                    style={fontSizeMed}>Transfers
                </Link>
                <Link to="/settings-page" 
                    className={`${styles.linkList}`}
                    style={fontSizeMed}>Settings
                </Link>
                <Link to="/" 
                    className={`${styles.linkList}`}
                    style={fontSizeMed}>Logout
                </Link>
            </ul>
        </div>
    )
};

export default Navbar;
