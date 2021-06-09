import React from 'react';
import {Link} from "react-router-dom";

import styles from '../styles/register.module.css';

const Register = () => {

    return (
        <>
            <div className={`${styles.background}`}>
                <div className={`${styles.outerContainer}`}>
                    <h1 className={`${styles.heading}`}>Create an Account</h1>
                    <div className={`${styles.innerContainer}`}>
                        <div className={`${styles.emailAndPasswordDiv}`}>
                            <label for="email">Email Address: </label>
                            <input type="text" id="email"/>
                        </div>
                        <div className={`${styles.emailAndPasswordDiv}`}>
                            <label for="password">Password: </label>
                            <input type="password" id="password"/>
                        </div>
                        <div className={`${styles.emailAndPasswordDiv}`}>
                            <label for="confirm-password">Confirm Password: </label>
                            <input type="password" id="confirm-password"/>
                        </div>
                        <Link to="/confirm-registration-page" className={`${styles.registerButton}`}>Register Account</Link>
                    </div>
                    <p className={`${styles.loginText}`}>Already have an account?
                        <Link to="/login" className={`${styles.loginLink}`} >Login</Link>
                    </p>
                </div>
            </div>
        </>
    )
};

export default Register;
