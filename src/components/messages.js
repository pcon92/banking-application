import React from 'react';

// import components
import Navbar from './Navbar';
import SingleMessage from './SingleMessage';

import themedStyles from '../styles/themes.module.css'
import styles from '../styles/messages.module.css';

const Messages = ({fontSize, theme, 
    messages, unreadMessages, 
    handleRead, handleFavourite, handleDelete}) => {

    // font sizes used in this component
    const fontSizeXL = {fontSize: `${fontSize[3]}`};

    return (
        <>
            <Navbar
            fontSize={fontSize}
            theme={theme}
            unreadMessages={unreadMessages}
            currentPage={"messages-page"}/> 
            <div className={`${styles.background} ${themedStyles[theme[0]]} ${themedStyles[theme[3]]}`}>
                <ul className={`${styles.messageList} ${themedStyles[theme[1]]}`}>
                <div style={fontSizeXL}
                            className={`${styles.heading} ${themedStyles[theme[2]]}`}>Messages</div>
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
