import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React, {useState} from 'react';

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

    const [theme, setTheme] = useState('yellow');

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/home-page">
                        <Home 
                            accounts={accounts}/>
                    </Route>
                    <Route path="/messages-page">
                        <Messages/>
                    </Route>
                    <Route path="/accounts-page">
                        <Accounts 
                            accounts={accounts}/>
                    </Route>
                    <Route path="/transfers-page">
                        <Transfers/>
                    </Route>
                    <Route path="/settings-page">
                        <Settings
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
