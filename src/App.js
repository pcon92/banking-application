import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React, {useState, useEffect} from 'react';

// Import components
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Messages from './components/Messages';
import Accounts from './components/Accounts';
import Transfers from './components/Transfers';
import Settings from './components/Settings';

function App() {

    const [transferTo, setTransferTo] = useState('');
    const [transferAmount, setTransferAmount] = useState(0);
    const [accounts, setAccounts] = useState([ 
        {
            id: 0,
            name: "Everyday Spending",
            accountNumber: 123456,
            BSB: 123456,
            total: 1000
        }, {
            id: 1,
            name: "Savings Account",
            accountNumber: 234567,
            BSB: 234567,
            total: 10000
        }
    ]);

    const [messages, setMessages] = useState(
        localStorage.getItem('messages')
        ? JSON.parse(localStorage.getItem('messages'))
        : [{
            id: 0,
            read: false,
            favourite: false,
            message: "Welcome to the banking application! "
        }, {
            id: 1,
            read: false,
            favourite: false,
            message: "You can transfer to other accounts on the 'Transfer' page."
        }, {
            id: 2,
            read: false,
            favourite: false,
            message: "You can change the color theme and font size on the 'Settings' page."
        }, {
            id: 3,
            read: false,
            favourite: false,
            message: "The persistent data is stored in the local storage of your browser."
        }
    ]);
    
    // tally unread messages
    const findUnreadMessages = () => {
        return messages.filter(message => message.read === false).length
    }
    const [unreadMessages,setUnreadMessages] = useState(
        findUnreadMessages()
        );
    
    const checkIfThemeStored = () => {
        return localStorage.getItem('theme')
            ? localStorage.getItem('theme').split(',')
            : ['yellow0', 'yellow1', 'yellow2']
    };

    const checkIfFontSizeStored = () => {
        return localStorage.getItem('fontSize')
            ? localStorage.getItem('fontSize').split(',')
            : ['0.8rem', '1rem', '1.2rem', '1.8rem']
    };

    // checks local storage to see if user on same browser has set font/theme already  
    const [fontSize, setFontSize] = useState(checkIfFontSizeStored());
    const [theme, setTheme] = useState(checkIfThemeStored());
   
   // update messages
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
    
    useEffect(()=> {
        transferAmount !== 0 
        ? setMessages([...messages, 
            {   
                id: Date.now(), // to give unique ID
                read: false,
                favourite: false,
                message: `You transferred $${transferAmount} to ${transferTo}`
            }])
            : setMessages([...messages])
        }, [transferAmount]);
        
    useEffect(() => {
        setUnreadMessages(findUnreadMessages())
        localStorage.setItem('messages', JSON.stringify(messages))
    }, [messages]);

    useEffect(() => {
        localStorage.setItem('fontSize', fontSize)
        }, [fontSize]);
                
    useEffect(() => {
        localStorage.setItem('theme', theme)
        }, [theme]);
    
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/home-page">
                        <Home 
                            fontSize={fontSize}
                            theme={theme}
                            accounts={accounts}
                            unreadMessages={unreadMessages}/>
                    </Route>
                    <Route path="/messages-page">
                        <Messages
                            fontSize={fontSize}
                            theme={theme}
                            messages={messages}
                            setMessages={setMessages}
                            unreadMessages={unreadMessages}
                            handleRead={handleRead}
                            handleFavourite={handleFavourite}
                            handleDelete={handleDelete}/>
                    </Route>
                    <Route path="/accounts-page">
                        <Accounts 
                            fontSize={fontSize}
                            theme={theme}
                            accounts={accounts}
                            unreadMessages={unreadMessages}/>
                    </Route>
                    <Route path="/transfers-page">
                        <Transfers
                            fontSize={fontSize}
                            theme={theme}
                            accounts={accounts}
                            unreadMessages={unreadMessages}
                            transferTo={transferTo}
                            setTransferTo={setTransferTo}
                            transferAmount={transferAmount}
                            setTransferAmount={setTransferAmount}/>
                    </Route>
                    <Route path="/settings-page">
                        <Settings
                        fontSize={fontSize}
                        setFontSize={setFontSize}
                        theme={theme}
                        setTheme={setTheme}
                        unreadMessages={unreadMessages}/>
                    </Route>
                    <Route path="/register-page">
                        <Register/>
                    </Route>
                    <Route path="/">
                        <Login/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
