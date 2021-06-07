import React, {useState} from 'react';
import {loremIpsum} from "lorem-ipsum";

// import components
import Navbar from './Navbar';
import SingleMessage from './SingleMessage';

import themedStyles from '../styles/themes.module.css'
import styles from '../styles/messages.module.css';

const Messages = ({fontSize, theme}) => {

    const [messages, setMessages] = useState([
        {
            id: 0,
            read: false,
            favourite: false,
            message: loremIpsum()
        }, {
            id: 1,
            read: false,
            favourite: false,
            message: loremIpsum()
        }, {
            id: 2,
            read: false,
            favourite: false,
            message: loremIpsum()
        }, {
            id: 3,
            read: false,
            favourite: false,
            message: loremIpsum()
        }, {
            id: 4,
            read: false,
            favourite: false,
            message: loremIpsum()
        }
    ]);


    const handleRead = (pickedId) => {
        const isSelected = messages.findIndex(messages => messages.id === pickedId);
        const messagesCopy = [...messages];
        messagesCopy[isSelected].read = !messagesCopy[isSelected].read;
        setMessages(messagesCopy);
    };

    const handleFavourite = (pickedId) => {
        const isSelected = messages.findIndex(messages => messages.id === pickedId);
        const messagesCopy = [...messages];
        messagesCopy[isSelected].favourite = !messagesCopy[isSelected].favourite;
        setMessages(messagesCopy);
    };

    const handleDelete = (pickedId) => {
        setMessages(messages.filter(messages => messages.id !== pickedId));
        console.log(messages)
    };


    return (
        <>
            <Navbar
            fontSize={fontSize}
            theme={theme}/> 
            <div className={`${styles.background} ${themedStyles[theme[0]]}`}>
                <ul className={`${styles.messageList} ${themedStyles[theme[1]]}`}>
                {messages.map(message => 
                    <li 
                        key={message.id}
                        className={`${styles.messageContainer} ${themedStyles[theme[2]]}`}
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
