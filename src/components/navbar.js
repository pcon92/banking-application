import React from 'react';
import {Link} from "react-router-dom";


import colors from '../config/defaultStyles';

const Navbar = () => {

    return (
        <div>
            <ul style={styles}>
                <img alt="logo"></img>
                <li>
                    <Link to="/home-page">Home</Link>
                </li>
                <li>
                    <Link to="/messages-page">Messages</Link>
                </li>
                <li>
                    <Link to="/accounts-page">View Accounts</Link>
                </li>
                <li>
                    <Link to="/transfers-page">Transfers</Link>
                </li>
                <li>
                    <Link to="/settings-page">Settings</Link>
                </li>
                <li>
                    <Link to="/">Logout</Link>
                </li>
            </ul>
        </div>
    )
};

const styles = {
    position: "absolute",
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    backgroundColor: colors.lightgreyLowAlpha
}

export default Navbar;
