import React from 'react';

const Login = () => {
    return (
        <div>
            <label for="email"> Email Address </label>
            <input type="text" id="email" placeholder="Enter email here" />
            <br />
            <label for="password"> Password </label>
            <input type="password" id="password" placeholder="Enter password here" />
            <br />
            <button value="Login">Login</button>
        </div>
    )}; 

export default Login;