import React from 'react';
import {Link} from "react-router-dom";
import { motion } from 'framer-motion';

import styles from '../styles/navbar.module.css';
import themedStyles from '../styles/themes.module.css';

const Navbar = ({fontSize, theme, animations,
    unreadMessages, currentPage}) => {

    // font sizes used in this component
    const fontSizeSml = {fontSize: `${fontSize[0]}`};
    const fontSizeMed = {fontSize: `${fontSize[1]}`};
    const fontSizeLge = {fontSize: `${fontSize[2]}`};

    return (
        <div className={`${styles.navContainer} ${themedStyles[theme[2]]} ${themedStyles[theme[3]]}`}>
            <ul className={`${styles.navList}`}>
                <li className={`${styles.logoLink} ${themedStyles[theme[2]]}`}>
                     <i className={`fas fa-piggy-bank fa-2x ${styles.bankIcon}`}></i>
                </li>
                <Link to="/home-page" 
                    className={
                        currentPage === "home-page" 
                        ? `${styles.linkList} ${styles.picked}`
                        : `${styles.linkList}`}
                    style={fontSizeLge}>Home
                </Link>
                <Link to="/messages-page" 
                    className={
                        currentPage === "messages-page" 
                        ? `${styles.linkList} ${styles.picked}`
                        : `${styles.linkList}`}
                    style={fontSizeMed}>Messages
                    {unreadMessages > 0 
                    ? <motion.div 
                        initial={animations ? { scale: 1 } : null}
                        animate={animations ? {scale: 1.3 } : null}
                        transition={animations ? { duration: 0.5, repeat: Infinity, repeatType: "reverse" } : null}
                        className={styles.unreadMessagesNav}
                        style={fontSizeSml}>
                            {unreadMessages}
                      </motion.div>
                    : null}
                </Link>
                <Link to="/accounts-page" 
                    className={
                        currentPage === "accounts-page" 
                        ? `${styles.linkList} ${styles.picked}`
                        : `${styles.linkList}`}
                    style={fontSizeMed}>Accounts
                </Link>
                <Link to="/transfers-page" 
                    className={
                        currentPage === "transfers-page" 
                        ? `${styles.linkList} ${styles.picked}`
                        : `${styles.linkList}`}
                    style={fontSizeMed}>Transfers
                </Link>
                <Link to="/settings-page" 
                    className={
                        currentPage === "settings-page" 
                        ? `${styles.linkList} ${styles.picked}`
                        : `${styles.linkList}`}
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
