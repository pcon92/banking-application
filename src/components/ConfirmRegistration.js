import React from 'react';
import {Link} from "react-router-dom";

import styles from '../styles/confirmRegistration.module.css';

const ConfirmRegistration = () => {

    return (
        <>
            <div className={`${styles.background}`}>
                <div className={`${styles.outerContainer}`}>
                    <h1 className={`${styles.heading}`}>Thank you for registering!</h1>
                    <Link to="/login" className={`${styles.loginLink}`}>Login</Link>
                </div>
            </div>
        </>
    )
};

export default ConfirmRegistration;