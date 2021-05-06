import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <ul>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </div>
    )}; 

export default Home;