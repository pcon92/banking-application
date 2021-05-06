import React from 'react';

const Register = () => {
    return (
        <div>
            <label for="email"> Email Address </label>
            <input type="text" id="email" placeholder="Enter email here" />
            <br />
            <label for="password"> Password </label>
            <input type="password" id="password" placeholder="Enter password here" />
            <br />
            <label for="confirm-password"> Confirm Password </label>
            <input type="password" id="confirm-password" placeholder="Confirm Password here" />
            <br />
            <button value="Login">Register Account</button>
        </div>
    )}; 

export default Register;