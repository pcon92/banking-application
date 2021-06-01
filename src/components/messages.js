import React, {useState} from 'react';

// import components
import Navbar from './Navbar';
import SingleMessage from './SingleMessage';
import colors from '../config/defaultStyles';

const Messages = () => {

    const [messages, setMessages] = useState([
        {
            id: 0,
            read: false,
            favourite: false
        }, {
            id: 1,
            read: false,
            favourite: false
        }, {
            id: 2,
            read: false,
            favourite: false
        }, {
            id: 3,
            read: false,
            favourite: false
        }, {
            id: 4,
            read: false,
            favourite: false
        }
    ]);


    const handleRead = (pickedId) => {

    };

    const handleFavourite = (pickedId) => {
        const isSelected = messages.findIndex(messages => messages.id === pickedId)
        console.log(isSelected);
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
