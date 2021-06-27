import React from 'react';
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import styles from '../styles/register.module.css';

const Register = ({setErrorFromServer}) => {

    const registerUser = async (values) => {

        const userDetails = {
            email: values.email, 
            password: values.password,
            repeat_password: values.confirmPassword,
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


    const initialValuesFormik = {
        email: '',
        password: '',
        confirmPassword: '',
    }

    const validationSchemaFormik = yup.object().shape({
        email: yup.string()
            .required('Required')
            .email('Please enter a valid email address'),
        password: yup.string()
            .required('Required')
            .min(3, 'Minimum length is 3 characters')
            .max(8, 'Maximum length is 8 characters'),
        confirmPassword: yup.string()
            .required('Required')
            .oneOf([yup.ref('password')], 'Passwords must match')
    })

    return (
        <>
            <div className={`${styles.background}`}>
                <div className={`${styles.outerContainer}`}>
                    <h1 className={`${styles.heading}`}>Create an Account</h1>
                    <div className={`${styles.innerContainer}`}>
                        <Formik
                            initialValues={initialValuesFormik}
                            validationSchema={validationSchemaFormik}
                            validateOnMount>
                            {formik => {
                                return(
                                    <Form className={styles.form}>
                                        <div className={`${styles.emailAndPasswordDiv}`}>
                                            <label
                                                className={styles.labels} 
                                                htmlFor="email">Email Address: </label>
                                            <Field className={styles.inputBox}
                                                type="text" id="email" name="email" autoFocus/>
                                        </div>
                                        <ErrorMessage name="email">
                                            { (errorMsg) => 
                                            <div 
                                                className={styles.errorMessage}>
                                                {errorMsg}
                                            </div>}
                                        </ErrorMessage>
                                        <div className={`${styles.emailAndPasswordDiv}`}>
                                            <label className={styles.labels} 
                                                htmlFor="password">Password: </label>
                                            <Field className={styles.inputBox}
                                                type="password" id="password" name="password"/>
                                        </div>
                                        <ErrorMessage name="password">
                                            { (errorMsg) => 
                                            <div 
                                                className={styles.errorMessage}>
                                                {errorMsg}
                                            </div>}
                                        </ErrorMessage>
                                        <div className={`${styles.emailAndPasswordDiv}`}>
                                            <label className={styles.labels} 
                                                htmlFor="confirmPassword">Confirm Password: </label>
                                            <Field className={styles.inputBox} 
                                                type="password" id="confirmPassword" name="confirmPassword"/>
                                        </div>
                                        <ErrorMessage name="confirmPassword">
                                            { (errorMsg) => 
                                            <div 
                                                className={styles.errorMessage}>
                                                {errorMsg}
                                            </div>}
                                        </ErrorMessage>
                                        {formik.isValid
                                        ? <Link to="/confirm-registration-page" 
                                        className={`${styles.registerButton}`}
                                        onClick={() => registerUser(formik.values)}>Register Account</Link>
                                        : <div className={`${styles.registerButtonBlocked}`}>
                                            Register Account
                                        </div>
                                        }
                                    </Form>
                                )
                            }}
                        </Formik>         
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