import React from 'react';
import {Link} from "react-router-dom";

import styles from '../styles/login.module.css';

const Login = () => {

    return (
        <>
            <div className={`${styles.background}`}>
                <div className={`${styles.outerContainer}`}>
                    <h1 className={`${styles.heading}`}>Banking Application</h1>
                    <div className={`${styles.innerContainer}`}>
                        <div className={`${styles.emailAndPasswordDiv}`}>
                            <label htmlFor="email">Email Address: </label>
                            <input type="text" id="email" autoFocus/>
                        </div>
                        <div className={`${styles.emailAndPasswordDiv}`}>
                            <label htmlFor="password">Password: </label>
                            <input type="password" id="password"/>
                        </div>
                        <Link to="/home-page" className={`${styles.loginButton}`}>Login</Link>
                    </div>
                    <p className={`${styles.signUpText}`}>Don't have an account?
                    <Link to="/register-page" className={`${styles.signUpLink}`}>Sign up</Link></p>
                </div>
            </div>
        </>
    )
};

export default Login;
