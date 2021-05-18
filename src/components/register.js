import React from 'react';
import {Link} from "react-router-dom";

const Register = () => {

    return (
        <div>
            <label for="email">
                Email Address
            </label>
            <input type="text" id="email" placeholder="Enter email here"/>
            <br/>
            <label for="password">
                Password
            </label>
            <input type="password" id="password" placeholder="Enter password here"/>
            <br/>
            <label for="confirm-password">
                Confirm Password
            </label>
            <input type="password" id="confirm-password" placeholder="Confirm Password here"/>
            <br/>
            <button value="Login">Register Account</button>
            <h6>Already have an account? Go to
                <Link to="/login">Login</Link>
            </h6>
        </div>
    )
};

export default Register;
