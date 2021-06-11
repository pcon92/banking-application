import React from 'react';

// import components
import Navbar from './Navbar';
import SingleMessage from './SingleMessage';

import themedStyles from '../styles/themes.module.css'
import styles from '../styles/messages.module.css';

const Messages = ({fontSize, theme, 
    messages, unreadMessages, 
    handleRead, handleFavourite, handleDelete}) => {

    return (
        <>
            <Navbar
            fontSize={fontSize}
            theme={theme}
            unreadMessages={unreadMessages}/> 
            <div className={`${styles.background} ${themedStyles[theme[0]]} ${themedStyles[theme[3]]}`}>
                <ul className={`${styles.messageList} ${themedStyles[theme[1]]}`}>
                {messages.map(message => 
                    <li 
                        key={message.id}
                        className={`${styles.messageContainer}`}
                    >
                    <SingleMessage 
                        fontSize={fontSize}
                        theme={theme}
                        handleRead={handleRead} 
                        handleFavourite={handleFavourite} 
                        handleDelete={handleDelete} 
                        message={message.message}
                        id={message.id}
                        read={message.read}
                        favourite={message.favourite}/>
                    </li>
                )} 
                </ul>
            </div>
        </>
    )
};

export default Messages;
