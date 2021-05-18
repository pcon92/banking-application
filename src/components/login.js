import React from 'react';
import {Link} from "react-router-dom";

const Login = () => {

    return (
        <div>
            <ul>
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
                    <button value="Login">Login</button>
                    <Link to="/home-page">Login</Link>
                </div>
                <li>
                    <h6>Don't have an account?
                        <Link to="/register-page">Register</Link>
                        here</h6>

                </li>
            </ul>
        </div>
    )
};

export default Login;
