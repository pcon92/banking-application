import React, {useState} from 'react';
import {Link} from "react-router-dom";

import styles from '../styles/login.module.css';

const Login = () => {

    const [authorized, setAuthorized] = useState(false);
    const [noUserFound, setNoUserFound] = useState(false);



    const checkUser = async () => {

        const EMAIL = document.getElementById('email');
        const PASSWORD = document.getElementById('password');

        const userDetails = {
            email: EMAIL.value, 
            password: PASSWORD.value
        };

        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        }

        const response = await fetch('/find-user', fetchOptions);
        const json = await response.json();

        if (json.length > 0) {
            setNoUserFound(false);
            setAuthorized(true);
        } else {
            setNoUserFound(true);
        }

        // strange way to redirect to home page if authenticated
        // works for now, try other method in future
        const LOGIN_BUTTON = document.getElementById('login-button');
        LOGIN_BUTTON.click();
    };
    

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
                        {noUserFound 
                        ? <div className={`${styles.noUserFoundText}`}>
                          No user Found.  Please check your email and password or Sign Up.
                          </div> : null}
                        <button 
                        className={`${styles.loginButton}`} 
                        onClick={checkUser}>Login</button>
                        <Link style={{display: "none"}}
                        to={authorized ? "/home-page" : "/login"}
                        id="login-button" />
                    </div>
                    <p className={`${styles.signUpText}`}>Don't have an account?
                    <Link to="/register-page" className={`${styles.signUpLink}`}>Sign up</Link></p>
                </div>
            </div>
        </>
    )
};

export default Login;
