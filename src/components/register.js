import React, {useState} from 'react';
import {Link} from "react-router-dom";

import styles from '../styles/register.module.css';

const Register = ({setErrorFromServer}) => {

    const [validInfo, setValidInfo] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);
    const [invalidConfirmedPassword, setInvalidConfirmedPassword] = useState(false);

    const EMAIL = document.getElementById('email');
    const PASSWORD = document.getElementById('password');
    const CONFIRM_PASSWORD = document.getElementById('confirm-password');

    const checkInfo = () => {
        if (EMAIL.value === '') {
            setInvalidEmail(true)
            setValidInfo(false)
        } else if (PASSWORD.value.length < 3 | PASSWORD.value.length > 8) {
            setInvalidEmail(false)
            setInvalidPassword(true)
            setValidInfo(false)
        } else if (PASSWORD.value !== CONFIRM_PASSWORD.value) {
            setInvalidEmail(false)
            setInvalidPassword(false)
            setInvalidConfirmedPassword(true)
            setValidInfo(false)
        } else {
            setInvalidEmail(false)
            setInvalidPassword(false)
            setInvalidConfirmedPassword(false)
            setValidInfo(true)
        }
    };

    const registerUser = async () => {

        const userDetails = {
                email: EMAIL.value, 
                password: PASSWORD.value,
                repeat_password: CONFIRM_PASSWORD.value,
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

        json.status === "error"
        ? setErrorFromServer(true)
        : setErrorFromServer(false);
    };


    return (
        <>
            <div className={`${styles.background}`}>
                <div className={`${styles.outerContainer}`}>
                    <h1 className={`${styles.heading}`}>Create an Account</h1>
                    <div className={`${styles.innerContainer}`}>
                        <div className={`${styles.emailAndPasswordDiv}`}
                        onChange={checkInfo}>
                            <label
                                className={styles.labels} 
                                htmlFor="email">Email Address: </label>
                            <input className={styles.inputBox}
                                type="text" id="email" autoFocus/>
                        </div>
                        {invalidEmail
                        ? <div>Please enter correct email address</div>
                        : null}
                        <div className={`${styles.emailAndPasswordDiv}`}
                        onChange={checkInfo}>
                            <label className={styles.labels} 
                                htmlFor="password">Password: </label>
                            <input className={styles.inputBox}
                                type="password" id="password"/>
                        </div>
                        {invalidPassword
                        ? <div>Password must be between 3 and 8 characters</div>
                        : null}
                        <div className={`${styles.emailAndPasswordDiv}`}
                        onChange={checkInfo}>
                            <label className={styles.labels} 
                                htmlFor="confirm-password">Confirm Password: </label>
                            <input className={styles.inputBox} 
                                type="password" id="confirm-password"/>
                        </div>
                        {invalidConfirmedPassword
                        ? <div>Passwords do not match</div>
                        : null}
                        {validInfo 
                        ? <Link to="/confirm-registration-page" 
                        className={`${styles.registerButton}`}
                        onClick={registerUser}>Register Account</Link>
                        : <div className={`${styles.registerButtonBlocked}`}>
                            Register Account
                        </div>
                        }
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



/* 



import React, {useState} from 'react';
import {Link} from "react-router-dom";

import styles from '../styles/register.module.css';

const Register = ({setErrorFromServer}) => {

    const [validInfo, setValidInfo] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);
    const [invalidConfirmedPassword, setInvalidConfirmedPassword] = useState(false);

    const EMAIL = document.getElementById('email');
    const PASSWORD = document.getElementById('password');
    const CONFIRM_PASSWORD = document.getElementById('confirm-password');

    const checkInfo = () => {
        if (EMAIL.value === '') {
            setInvalidEmail(true)
            setValidInfo(false)
        } else if (PASSWORD.value.length < 3 | PASSWORD.value.length > 8) {
            setInvalidEmail(false)
            setInvalidPassword(true)
            setValidInfo(false)
        } else if (PASSWORD.value !== CONFIRM_PASSWORD.value) {
            setInvalidEmail(false)
            setInvalidPassword(false)
            setInvalidConfirmedPassword(true)
            setValidInfo(false)
        } else {
            setInvalidEmail(false)
            setInvalidPassword(false)
            setInvalidConfirmedPassword(false)
            setValidInfo(true)
        }
    };

    const registerUser = async () => {

        const userDetails = {
                email: EMAIL.value, 
                password: PASSWORD.value,
                repeat_password: CONFIRM_PASSWORD.value,
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

        json.status === "error"
        ? setErrorFromServer(true)
        : setErrorFromServer(false);
    };


    return (
        <>
            <div className={`${styles.background}`}>
                <div className={`${styles.outerContainer}`}>
                    <h1 className={`${styles.heading}`}>Create an Account</h1>
                    <div className={`${styles.innerContainer}`}>
                        <div className={`${styles.emailAndPasswordDiv}`}
                        onChange={checkInfo}>
                            <label
                                className={styles.labels} 
                                htmlFor="email">Email Address: </label>
                            <input className={styles.inputBox}
                                type="text" id="email" autoFocus/>
                        </div>
                        {invalidEmail
                        ? <div>Please enter correct email address</div>
                        : null}
                        <div className={`${styles.emailAndPasswordDiv}`}
                        onChange={checkInfo}>
                            <label className={styles.labels} 
                                htmlFor="password">Password: </label>
                            <input className={styles.inputBox}
                                type="password" id="password"/>
                        </div>
                        {invalidPassword
                        ? <div>Password must be between 3 and 8 characters</div>
                        : null}
                        <div className={`${styles.emailAndPasswordDiv}`}
                        onChange={checkInfo}>
                            <label className={styles.labels} 
                                htmlFor="confirm-password">Confirm Password: </label>
                            <input className={styles.inputBox} 
                                type="password" id="confirm-password"/>
                        </div>
                        {invalidConfirmedPassword
                        ? <div>Passwords do not match</div>
                        : null}
                        {validInfo 
                        ? <Link to="/confirm-registration-page" 
                        className={`${styles.registerButton}`}
                        onClick={registerUser}>Register Account</Link>
                        : <div className={`${styles.registerButtonBlocked}`}>
                            Register Account
                        </div>
                        }
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



*/