import React from 'react';


const SingleAccount = ( { name, accountNumber, BSB, total }) => {

    return (
        <>
            <div style={styles.accountBox}>
                <div style={styles.accountInfo}>
                    <h3> Account Name: </h3>
                    <h6> Account Number: </h6>
                    <h6> BSB: </h6>
                    <p> Total Funds: </p>
                </div>
                <div style={styles.accountValues}>
                    <h3>{name}</h3>
                    <h6>{accountNumber}</h6>
                    <h6>{BSB}</h6>
                    <p>{total}</p>
                </div>
            </div>
        </>
    )
};

const styles = {
    accountBox: {
        display: "flex",
        justifyContent: "space-evenly",
        height: "10vh",
        justifyContent: "flex-start",
    },
    accountInfo: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "40%"
    },
    accountValues: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
};

export default SingleAccount;
