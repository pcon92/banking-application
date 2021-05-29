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
        <>
            <Navbar/>
            <div style={stylesHome.background}>
                <div style={stylesHome.contentBox}>
                    <div style={stylesHome.welcome}>
                        Welcome {dummyUserInfo.name}
                    </div>
                    <div style={stylesHome.accountInfoBox}>
                        <div style={stylesHome.accountNameDiv}>
                            <div style={stylesHome.accountName}>Account Name:</div> 
                            <div style={stylesHome.accountNameValue}>{dummyUserInfo.primaryAccName}</div>
                        </div>
                        <div style={stylesHome.accountTotalDiv}>
                            <div style={stylesHome.accountTotal}>Total:</div> 
                            <div style={stylesHome.accountTotalValue}>{dummyUserInfo.accountTotal}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

const stylesHome = {
    background: {
        backgroundColor: colors.yellow,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%"
    },
    contentBox: {
        height: "50%",
        width: "50%"
    },
    welcome: {
        fontSize: 24,
        fontWeight: "bold",
        backgroundColor: colors.lightYellow,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        height: "30%",
        width: "50%",
        position: "relative",
        zIndex: 1,
        boxShadow: `5px 5px 10px 2px ${colors.shadow}`
    },
    accountInfoBox: {
        backgroundColor: colors.lightgreyLowAlpha,
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "flex-end",
        flexDirection: "column",
        borderRadius: 50,
        position: "relative",
        top: "-10%",
        left: "20%",
        height: "70%",
        width: "80%",
        paddingRight: "10%",
        boxShadow: `5px 5px 7px 1px ${colors.shadow}`
    },
    accountNameDiv: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
    },
    accountName: {
        fontSize: "1.2rem",
        fontWeight: "bold"
    }, 
    accountNameValue: {
        fontSize: "0.8rem"
    },
    accountTotalDiv: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
    },
    accountTotal: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "1.2rem",
        fontWeight: "bold"
    },
    accountTotalValue: {
        fontSize: "0.8rem"
    }
}


export default Home;
