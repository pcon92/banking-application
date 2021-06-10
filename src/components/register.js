import React from 'react';
import {Link} from "react-router-dom";

import styles from '../styles/register.module.css';

const Register = () => {

   const registerUser = async () => {

       const EMAIL = document.getElementById('email');
       const PASSWORD = document.getElementById('password');
       const CONFIRM_PASSWORD = document.getElementById('confirm-password');
    
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

        const response = await fetch('/register-user', fetchOptions);
        const json = await response.json();
        console.log(json);

    };

    return (
        <>
            <div className={`${styles.background}`}>
                <div className={`${styles.outerContainer}`}>
                    <h1 className={`${styles.heading}`}>Create an Account</h1>
                    <div className={`${styles.innerContainer}`}>
                        <div className={`${styles.emailAndPasswordDiv}`}>
                            <label htmlFor="email">Email Address: </label>
                            <input type="text" id="email"/>
                        </div>
                        <div className={`${styles.emailAndPasswordDiv}`}>
                            <label htmlFor="password">Password: </label>
                            <input type="password" id="password"/>
                        </div>
                        <div className={`${styles.emailAndPasswordDiv}`}>
                            <label htmlFor="confirm-password">Confirm Password: </label>
                            <input type="password" id="confirm-password"/>
                        </div>
                        <Link to="/confirm-registration-page" 
                        className={`${styles.registerButton}`}
                        onClick={registerUser}>Register Account</Link>
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
