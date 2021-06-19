import React from 'react';
import { motion } from "framer-motion";

// import components
import Navbar from './Navbar';
import SingleMessage from './SingleMessage';

import themedStyles from '../styles/themes.module.css'
import styles from '../styles/messages.module.css';

const Messages = ({fontSize, theme, animations, 
    messages, unreadMessages, 
    handleRead, handleFavourite, handleDelete}) => {

    // font sizes used in this component
    const fontSizeXL = {fontSize: `${fontSize[3]}`};


    // for message fade in animations
    const container = {
        show: {
            transition: {
                staggerChildren: 0.1
            }
        }
    }
    const messageItem = {
        hidden: {opacity: 0},
        show: {opacity: 1}
    }

    return (
        <>
            <Navbar
            fontSize={fontSize}
            theme={theme}
            animations={animations}
            unreadMessages={unreadMessages}
            currentPage={"messages-page"}/> 
            <div className={`${styles.background} ${themedStyles[theme[0]]} ${themedStyles[theme[3]]}`}>
                <ul className={`${styles.messageList} ${themedStyles[theme[1]]}`}>
                <div style={fontSizeXL}
                            className={`${styles.heading} ${themedStyles[theme[2]]}`}>Messages</div>
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={animations ? container : null}>
                    {messages.map(message => 
                        <motion.li 
                            variants={animations ? messageItem : null}
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
                        </motion.li>
                    )} 
                </motion.div>
                </ul>
            </div>
        </>
    )
};

export default Messages;
