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

    const [primaryAccVal, setPrimaryAccVal] = useState(1000);

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/home-page">
                        <Home primaryAccVal={primaryAccVal}/>
                    </Route>
                    <Route path="/messages-page">
                        <Messages/>
                    </Route>
                    <Route path="/accounts-page">
                        <Accounts/>
                    </Route>
                    <Route path="/transfers-page">
                        <Transfers/>
                    </Route>
                    <Route path="/settings-page">
                        <Settings/>
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
