import React, {useState} from 'react';
import {loremIpsum} from "lorem-ipsum";

// import components
import Navbar from './Navbar';
import SingleMessage from './SingleMessage';
import colors from '../config/defaultStyles';

const Messages = () => {

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
    };


    return (
        <>
            <Navbar/> 
            <div style={stylesMessages.background}>
                <ul style={stylesMessages.messageList}>
                {messages.map(message => 
                    <li 
                        key={message.id}
                        style={stylesMessages.messageContainer}
                    >
                    <SingleMessage 
                        handleRead={handleRead} 
                        handleFavourite={handleFavourite} 
                        handleDelete={handleDelete} 
                        messages={messages}
                        id={message.id}/>
                    </li>
                    )} 
                </ul>
            </div>
        </>
    )
};

const stylesMessages = {
    background: {
        alignItems: "center",
        backgroundColor: colors.yellow,
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        width: "100vw"
    },
    messageList: {
        listStyle: "none",
        width: "100vw",
        backgroundColor: colors.lightgreyLowAlpha,
        height: "75vh",
        overflowY: "auto"
    },
    messageContainer: {
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        height: "10vh",
        backgroundColor: colors.lightYellow
    },
};

export default Messages;
