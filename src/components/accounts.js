import React, { useState } from 'react';

// import components
import Navbar from './Navbar';
import SingleAccount from './SingleAccount';
import colors from '../config/defaultStyles';

const Accounts = ( {accounts}) => {

    return (
        <>
            <Navbar/>
            <div style={stylesAccounts.background}>
                <ul style={stylesAccounts.accountsList}>
                {accounts.map(account => 
                    <li 
                        style={stylesAccounts.listItem}
                        key={account.id}
                    >
                    <SingleAccount 
                        name={account.name}
                        accountNumber={account.accountNumber}
                        BSB={account.BSB}
                        total={account.total}
                    />
                    </li>
                    )} 
                </ul>
            </div>
        </>
    )
};

const stylesAccounts = {
    background: {
        backgroundColor: colors.yellow,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw"
    }, 
    accountsList: {
        backgroundColor: colors.lightgreyLowAlpha,
        height: "50vh",
        width: "50vw",
        padding: 30,
        overflowY: "auto"
    }, 
    listItem: {
        listStyle: "none",
        marginBottom: "10vh"
    },
}

export default Accounts;