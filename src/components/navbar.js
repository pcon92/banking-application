import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {

    const styles = {
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%"
    }

    return (
        <div>
            <ul style={styles}>
                <img src="ttps://picsum.photos/50/50" alt="logo"></img>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/messages">Messages</Link>
                </li>
                <li>
                    <Link to="/accounts">View Accounts</Link>
                </li>
                <li>
                    <Link to="/transfers">Transfers</Link>
                </li>
                <li>
                    <Link to="/settings">Settings</Link>
                </li>
                <li>
                    <Link to="/">Logout</Link>
                </li>
            </ul>
        </div>
    )
};

export default Navbar;
