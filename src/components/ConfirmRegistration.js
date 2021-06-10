import React from 'react';
import {Link} from "react-router-dom";

import styles from '../styles/confirmRegistration.module.css';

const ConfirmRegistration = ({errorFromServer}) => {

    return (
        <>
            <div className={`${styles.background}`}>
                <div className={`${styles.outerContainer}`}>
                    {errorFromServer 
                    ? <div className={`${styles.heading}`}>There was an error. Please try again.</div>
                    : <div className={`${styles.heading}`}>Account creation successful!</div>}
                    <Link to="/login" className={`${styles.loginLink}`}>Back to Login page</Link>
                </div>
            </div>
        </>
    )
};

export default ConfirmRegistration;