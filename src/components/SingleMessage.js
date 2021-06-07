import React from 'react';

import styles from '../styles/singleMessage.module.css';
import themedStyles from '../styles/themes.module.css';


const SingleMessage = ({fontSize, theme, id, handleRead, handleFavourite, handleDelete, read, favourite, message }) => {

    // font sizes used in this component
    const fontSizeMed = {fontSize: `${fontSize[1]}`};

    if (read && favourite) {
        return (
            <>
            <div className={`${styles.outerContainerReadFavourited} ${themedStyles[theme[1]]}`}>
                <div className={styles.messageContainerReadFavourited}
                style={fontSizeMed}>
                    {message}
                </div>
                <div className={styles.buttonsContainer}>
                    <i className="fab fa-readme fa-2x" style={{opacity: 0.5}} onClick={() => handleRead(id)}></i>
                    <i className="fas fa-star fa-2x" style={{opacity: 0.5}} onClick={() => handleFavourite(id)}></i>
                    <i className="fas fa-trash-alt fa-2x" onClick={() => handleDelete(id)}></i>
                </div>
            </div>
        </>
        )
    }

    if (read) {
        return (
            <>
            <div className={`${styles.outerContainerRead} ${themedStyles[theme[1]]}`}>
                <div className={styles.messageContainerRead}
                style={fontSizeMed}>
                    {message}
                </div>
                <div className={styles.buttonsContainer}>
                    <i className="fab fa-readme fa-2x" style={{opacity: 0.5}} onClick={() => handleRead(id)}></i>
                    <i className="fas fa-star fa-2x" onClick={() => handleFavourite(id)}></i>
                    <i className="fas fa-trash-alt fa-2x" onClick={() => handleDelete(id)}></i>
                </div>
            </div>
        </>
        )
    }

    if (favourite) {
        return (
            <>
            <div className={`${styles.outerContainerFavourited} ${themedStyles[theme[1]]}`}>
                <div className={styles.messageContainerFavourited}
                style={fontSizeMed}>
                    {message}
                </div>
                <div className={styles.buttonsContainer}>
                    <i className="fab fa-readme fa-2x" onClick={() => handleRead(id)}></i>
                    <i className="fas fa-star fa-2x" style={{opacity: 0.5}} onClick={() => handleFavourite(id)}></i>
                    <i className="fas fa-trash-alt fa-2x" onClick={() => handleDelete(id)}></i>
                </div>
            </div>
        </>
        )
    }

    return (
        <>
            <div className={`${styles.outerContainer} ${themedStyles[theme[1]]}`}>
                <div className={styles.messageContainer}
                style={fontSizeMed}>
                    {message}
                </div>
                <div className={styles.buttonsContainer}>
                    <i className="fab fa-readme fa-2x" onClick={() => handleRead(id)}></i>
                    <i className="fas fa-star fa-2x" onClick={() => handleFavourite(id)}></i>
                    <i className="fas fa-trash-alt fa-2x" onClick={() => handleDelete(id)}></i>
                </div>
            </div>
        </>
    )
};

export default SingleMessage;