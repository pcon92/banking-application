import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import components
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </div>
    </Router>
  );
}

export default App;
