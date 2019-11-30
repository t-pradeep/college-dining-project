import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import ReactNotification from 'react-notifications-component';
import Home from './components/Home';
import Login from './components/Login';
import 'react-notifications-component/dist/theme.css';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <Router>
        <ReactNotification />
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      </div>
    </Router>
  );
}

export default App;
