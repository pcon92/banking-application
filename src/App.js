import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// Import components
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import Messages from './components/messages';
import Accounts from './components/accounts';
import Transfers from './components/transfers';
import Settings from './components/settings';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route path="/messages">
                        <Messages/>
                    </Route>
                    <Route path="/accounts">
                        <Accounts/>
                    </Route>
                    <Route path="/transfers">
                        <Transfers/>
                    </Route>
                    <Route path="/settings">
                        <Settings/>
                    </Route>
                    <Route path="/register">
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
