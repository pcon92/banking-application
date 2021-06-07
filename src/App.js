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

    const [accounts, setAccounts] = useState([ 
        {
            id: 0,
            name: "Primary Account",
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

    // checks local storage to see if user on same browser has set font/theme already
   const [fontSize, setFontSize] = useState(
       localStorage.getItem('fontSize')
       ? localStorage.getItem('fontSize').split(',')
       : ['0.8rem', '1rem', '1.2rem', '1.8rem']);
    const [theme, setTheme] = useState(
        localStorage.getItem('theme')
        ? localStorage.getItem('theme').split(',')
        : ['yellow0', 'yellow1', 'yellow2']);
        
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
                            accounts={accounts}/>
                    </Route>
                    <Route path="/messages-page">
                        <Messages
                            fontSize={fontSize}
                            theme={theme}/>
                    </Route>
                    <Route path="/accounts-page">
                        <Accounts 
                            fontSize={fontSize}
                            theme={theme}
                            accounts={accounts}/>
                    </Route>
                    <Route path="/transfers-page">
                        <Transfers
                            fontSize={fontSize}
                            theme={theme}/>
                    </Route>
                    <Route path="/settings-page">
                        <Settings
                        fontSize={fontSize}
                        setFontSize={setFontSize}
                        theme={theme}
                        setTheme={setTheme}/>
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
