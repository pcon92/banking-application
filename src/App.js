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

    // ACCOUNTS AND TRANSFERS
    const [transferTo, setTransferTo] = useState('');
    const [transferAmount, setTransferAmount] = useState(0);

    const checkIfAccountsStored = () => {
        return localStorage.getItem('accounts')
            ? JSON.parse(localStorage.getItem('accounts'))
            : [{
                id: 0,
                name: "Everyday Spending",
                accountNum: 1235235456,
                BSB: 123456,
                total: 1000
                }, {
                id: 1,
                name: "Savings Account",
                accountNum: 2345612447,
                BSB: 234567,
                total: 53912
                }
            ]
    };
    const [accounts, setAccounts] = useState(checkIfAccountsStored());

    const checkIfContactsStored = () => {
        return localStorage.getItem('contacts')
            ? JSON.parse(localStorage.getItem('contacts'))
            : [
            accounts[0],
            {
                id: 2,
                name: 'Bob Smith',
                accountNum: '2222-3333',
                BSB: '222-333',
                total: 1000
            }, {
                id: 3,
                name: 'Jane Doe',
                accountNum: '5555-6666',
                BSB: '555-666',
                total: 2000
                }
            ]       
    };
    const [contacts, setContacts] = useState(checkIfContactsStored());

    useEffect(() => {
        localStorage.setItem('accounts', JSON.stringify(accounts))
    }, [accounts])

    // need to fix modifying state directly here
    const checkName = () => {
        if (transferTo === contacts[1].name) {
            contacts[1].total += parseInt(transferAmount)
            accounts[0].total -= parseInt(transferAmount)
            contacts[0].total -= parseInt(transferAmount)
            setAccounts([...accounts])
            setContacts([...contacts])
        } else if (transferTo === contacts[2].name) {
            contacts[2].total += parseInt(transferAmount)
            accounts[0].total -= parseInt(transferAmount)
            contacts[0].total -= parseInt(transferAmount)
            setAccounts([...accounts])
            setContacts([...contacts])
        }
    }

    useEffect(() => {
        checkName()
    }, [transferAmount]);

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts))
        setTransferTo('');
        setTransferAmount(0);
    }, [contacts]);



    // MESSAGES
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
            message: "The persistent data is stored in the local storage of your browser.  If data is reset upon browser restart check if your browser is clearing stored files on close."
        }
    ]);
        // tally unread messages
    const findUnreadMessages = () => {
        return messages.filter(message => message.read === false).length
    }
    const [unreadMessages,setUnreadMessages] = useState(findUnreadMessages());
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
    };

    useEffect(() => {
        setUnreadMessages(findUnreadMessages())
        localStorage.setItem('messages', JSON.stringify(messages))
    }, [messages]);

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



    // SETTINGS
    const checkIfThemeStored = () => {
        return localStorage.getItem('theme')
            ? localStorage.getItem('theme').split(',')
            : ['yellow0', 'yellow1', 'yellow2', 'yellow3']
    };

    const checkIfFontSizeStored = () => {
        return localStorage.getItem('fontSize')
            ? localStorage.getItem('fontSize').split(',')
            : ['0.8rem', '1rem', '1.2rem', '1.8rem']
    };
        // checks local storage to see if user on same browser has set font/theme already  
    const [fontSize, setFontSize] = useState(checkIfFontSizeStored());
    const [theme, setTheme] = useState(checkIfThemeStored());

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
                            total={accounts[0].total}
                            name={accounts[0].name}
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
                            unreadMessages={unreadMessages}
                            transferTo={transferTo}
                            setTransferTo={setTransferTo}
                            setTransferAmount={setTransferAmount}
                            contacts={contacts}
                            />
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
