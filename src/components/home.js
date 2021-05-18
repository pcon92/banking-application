import React from 'react';


// import components
import Navbar from './navbar';

const Home = () => {

    const dummyUser = 'User 1'

    return (
        <div>
            <Navbar/>
            <h3>Welcome {dummyUser}</h3>
        </div>
    )
};

export default Home;
