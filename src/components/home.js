import React from 'react';

// import components
import Navbar from './Navbar';
import colors from '../config/defaultStyles';

const Home = ({primaryAccVal}) => {

    const dummyUserInfo = {
        name: 'User 1',
        primaryAccName: 'Savings Account',
        accountNo: '1234-5678',
        BSB: '123-456',
        accountTotal: primaryAccVal
    };

    return (
        <div style={backgroundStyles}>
            <Navbar/>
            <h3>Welcome {
                dummyUserInfo.name
            }</h3>
            <h5>Account Name: {
                dummyUserInfo.primaryAccName
            } </h5>
            <h6>Total: {
                dummyUserInfo.accountTotal
            }</h6>
        </div>
    )
};

const backgroundStyles = {
    backgroundColor: colors.yellow,
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100%",
}


export default Home;
