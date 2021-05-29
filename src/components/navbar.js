import React from 'react';
import {Link} from "react-router-dom";


import colors from '../config/defaultStyles';

const Navbar = () => {

    return (
        <div>
            <ul style={styles.navList}>
                <li style={styles.logoList}>
                <img alt="logo"></img>
                </li>
                <li style={styles.linkList}>
                    <Link to="/home-page" style={styles.transferLink}>Home</Link>
                </li>
                <li style={styles.linkList}>
                    <Link to="/messages-page" style={styles.transferLink}>Messages</Link>
                </li>
                <li style={styles.linkList}>
                    <Link to="/accounts-page" style={styles.transferLink}>View Accounts</Link>
                </li>
                <li style={styles.linkList}>
                    <Link to="/transfers-page" style={styles.transferLink}>Transfers</Link>
                </li>
                <li style={styles.linkList}>
                    <Link to="/settings-page" style={styles.transferLink}>Settings</Link>
                </li>
                <li style={styles.linkList}>
                    <Link to="/" style={styles.transferLink}>Logout</Link>
                </li>
            </ul>
        </div>
    )
};

const styles = {
    navList: {
        position: "absolute",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "5%",
        width: "100%",
        backgroundColor: colors.lightgreyLowAlpha,
        listStyle: "none"
    },
    logoList: {

    },
    linkList: {
        fontSize: 16,    
        textDecoration: "none",
        color: colors.black,
        borderLeft: "1px solid black",
        paddingLeft: 10,
        height: "100%",
        width: "10%",
        display: "flex",
        alignItems: "center"
    },
}

export default Navbar;
