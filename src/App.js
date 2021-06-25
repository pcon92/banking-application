import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React, {useState, useEffect} from 'react';

// Import components
import Login from './components/Login';
import Register from './components/Register';
import ConfirmRegistration from './components/ConfirmRegistration';
import Home from './components/Home';
import Messages from './components/Messages';
import Accounts from './components/Accounts';
import Transfers from './components/Transfers';
import Settings from './components/Settings';

import showCurrentTime from './functions/showCurrentTime';

function App() {

    // MISC
    const [errorFromServer, setErrorFromServer] = useState(false);
    const [deviceWidth, setDeviceWidth] = useState();

    // ACCOUNTS AND TRANSFERS
    const [transferTo, setTransferTo] = useState('');
    const [transferAmount, setTransferAmount] = useState(0);
    const [insufficientFunds, setInsufficientFunds] = useState(false);
    const [transferReceipt, setTransferReceipt] = useState(false);

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
        for (let i=1; i < contacts.length; i++) {
            if (transferTo === contacts[i].name) {
                if (accounts[0].total - parseFloat(transferAmount) >= 0) {
                    setInsufficientFunds(false)
                    contacts[i].total += parseFloat(transferAmount)
                    accounts[0].total -= parseFloat(transferAmount)
                    contacts[0].total -= parseFloat(transferAmount)
                    setAccounts([...accounts])
                    setContacts([...contacts])
                    setTransferReceipt(true);
                } else {
                    setInsufficientFunds(true);
                }
            }
        }
        
        if (transferTo === accounts[1].name) {
            if (accounts[0].total - parseFloat(transferAmount) >= 0) {
                setInsufficientFunds(false)
                accounts[1].total += parseFloat(transferAmount)
                accounts[0].total -= parseFloat(transferAmount)
                contacts[0].total -= parseFloat(transferAmount)
                setAccounts([...accounts])
                setContacts([...contacts])
                setTransferReceipt(true);
            } else {
                setInsufficientFunds(true)
            }
        } else if (transferTo === accounts[0].name) {
            if (accounts[1].total - parseFloat(transferAmount) >= 0) {
                setInsufficientFunds(false)
                accounts[0].total += parseFloat(transferAmount)
                accounts[1].total -= parseFloat(transferAmount)
                contacts[0].total += parseFloat(transferAmount)
                setAccounts([...accounts])
                setContacts([...contacts])
                setTransferReceipt(true);
            } else {
                setInsufficientFunds(true)
            }
        }
    }

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts]);

    const handleAddContact = (contactInfo) => {
        setContacts([...contacts, {
            id: contactInfo.id, 
            name: contactInfo.name,
            accountNum: contactInfo.accountNum,
            BSB: contactInfo.BSB,
            total: contactInfo.total}
        ]);
        setMessages([...messages, 
            {   
                id: Date.now(), // to give unique ID
                read: false,
                favourite: false,
                message: `You added ${contactInfo.name} to your address book`,
                timestamp: showCurrentTime()
            }])
    };

    const handleCloseReceipt = () => {
        setTransferReceipt(false);
        setTransferTo('');
        setTransferAmount(0);
    };

    const handleSelectContact = (name) => {
        setTransferTo(name);
    };

    const handleDeleteContact = (id, event) => {
        const doubleCheckDeleteContact = window.confirm("Are you sure you want to delete this contact from your address book?")
        if (doubleCheckDeleteContact) {
            setContacts(contacts.filter(contact => contact.id !== id)) 
        }
        event.stopPropagation(); // stop from choosing clicked account as transfer name
        setTransferTo(''); // clear transfer state
    };




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
            message: `You can change the color theme, font size,
                    and toggle animations on the 'Settings' page.`
        }, {
            id: 3,
            read: false,
            favourite: false,
            message: `Some data is stored in browser local storage.  
                    If values are reset upon browser restart disable browser
                    clearing stored files on close.`
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
        setInsufficientFunds('');
        checkName();
    }, [transferAmount]);

    useEffect(() => {
        (transferAmount !== 0 && transferTo !== '' && insufficientFunds === false)
        ? setMessages([...messages, 
            {   
                id: Date.now(), // to give unique ID
                read: false,
                favourite: false,
                message: `You transferred $${transferAmount} to ${transferTo}`,
                timestamp: showCurrentTime()
            }])
        : setMessages([...messages])
    }, [insufficientFunds])

    // set font size based on device width
    useEffect(() => {
        setDeviceWidth(document.documentElement.clientWidth)
        setFontSize(
            deviceWidth < 320
            ? ['-0.3rem', '0.5rem', '0.7rem', '0.8rem']
            : deviceWidth >=320 && deviceWidth < 640
            ? ['0.49999999999999994rem', '0.7rem', '1.0rem', '1.3rem']
            : ['0.8rem', '1rem', '1.2rem', '1.8rem']
        )
    }, deviceWidth);

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

    const checkIfAnimationsStored = () => {
        return localStorage.getItem('animations')
            ? JSON.parse(localStorage.getItem('animations'))
            : true
    };

        // checks local storage to see if user on same browser has set font/theme already  
    const [fontSize, setFontSize] = useState(checkIfFontSizeStored());
    const [theme, setTheme] = useState(checkIfThemeStored());
    const [animations, setAnimations] = useState(checkIfAnimationsStored());

    useEffect(() => {
        localStorage.setItem('fontSize', fontSize)
        }, [fontSize]);
    useEffect(() => {
        localStorage.setItem('theme', theme)
        }, [theme]);
    useEffect(() => {
        localStorage.setItem('animations', animations)
        }, [animations]);
    

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/home-page">
                        <Home 
                            fontSize={fontSize}
                            theme={theme}
                            animations={animations}
                            total={accounts[0].total}
                            name={accounts[0].name}
                            unreadMessages={unreadMessages}/>
                    </Route>
                    <Route path="/messages-page">
                        <Messages
                            fontSize={fontSize}
                            theme={theme}
                            animations={animations}
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
                            animations={animations}
                            accounts={accounts}
                            unreadMessages={unreadMessages}
                            transferTo={transferTo}
                            setTransferTo={setTransferTo}
                            transferAmount={transferAmount}
                            setTransferAmount={setTransferAmount}
                            insufficientFunds={insufficientFunds}
                            transferReceipt={transferReceipt}
                            handleCloseReceipt={handleCloseReceipt}/>
                    </Route>
                    <Route path="/transfers-page">
                        <Transfers
                            fontSize={fontSize}
                            theme={theme}
                            animations={animations}
                            unreadMessages={unreadMessages}
                            transferTo={transferTo}
                            setTransferTo={setTransferTo}
                            setTransferAmount={setTransferAmount}
                            contacts={contacts}
                            insufficientFunds={insufficientFunds}
                            transferAmount={transferAmount}
                            transferReceipt={transferReceipt}
                            setTransferReceipt={transferReceipt}
                            handleCloseReceipt={handleCloseReceipt}
                            handleAddContact={handleAddContact}
                            handleDeleteContact={handleDeleteContact}
                            handleSelectContact={handleSelectContact}
                            />
                    </Route>
                    <Route path="/settings-page">
                        <Settings
                        fontSize={fontSize}
                        setFontSize={setFontSize}
                        theme={theme}
                        setTheme={setTheme}
                        animations={animations}
                        setAnimations={setAnimations}
                        unreadMessages={unreadMessages}/>
                    </Route>
                    <Route path="/confirm-registration-page">
                        <ConfirmRegistration
                            errorFromServer={errorFromServer}
                            setErrorFromServer={setErrorFromServer}/>
                    </Route>
                    <Route path="/register-page">
                        <Register
                        setErrorFromServer={setErrorFromServer}/>
                    </Route>
                    <Route path="/">
                        <Login />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
