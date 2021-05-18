import React from 'react';
import {loremIpsum} from "lorem-ipsum";

// import components
import Navbar from './navbar';

const Messages = () => {

    const dummyMessages = [
        loremIpsum(),
        loremIpsum(),
        loremIpsum(),
        loremIpsum(),
        loremIpsum()
    ];

    return (
        <div>
            <Navbar/> {
            dummyMessages.map(message => <li key={message}>
                {message}</li>)
        } </div>
    )
};

export default Messages;
