import React, {useState} from 'react';

// import components
import Navbar from './Navbar';
import SingleMessage from './SingleMessage';

const Messages = () => {

    const [messages, setMessages] = useState([
        {
            id: 1
        }, {
            id: 2
        }, {
            id: 3
        },
    ]);

    return (
        <div>
            <Navbar/> {
            messages.map(message => <li key={
                message.id
            }>
                <SingleMessage id={message.id}/></li>)
        } </div>
    )
};

export default Messages;
