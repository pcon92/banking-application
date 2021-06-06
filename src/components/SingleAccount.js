import React from 'react';

import styles from '../styles/singleAccount.module.css';

const SingleAccount = ( { name, accountNumber, BSB, total }) => {

    return (
        <>
            <div className={styles.accountBox}>
                <div className={styles.accountInfo}>
                    <h3> Account Name: </h3>
                    <h6> Account Number: </h6>
                    <h6> BSB: </h6>
                    <p> Total Funds: </p>
                </div>
                <div className={styles.accountValues}>
                    <h3>{name}</h3>
                    <h6>{accountNumber}</h6>
                    <h6>{BSB}</h6>
                    <p>{total}</p>
                </div>
            </div>
        </>
    )
};

export default SingleAccount;
