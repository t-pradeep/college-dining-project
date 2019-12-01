import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import ReactNotification from 'react-notifications-component';
import Home from './components/Home';
import Login from './components/Login';
import Equipment from './components/Equipment';
import Foodlist from './components/Foodlist';
import Schedule from './components/Schedule';
import Request_for_sub from './components/Request_for_sub';
import Reschedule from './components/Reschedule';
import Requested_order from './components/Requested_order';
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
      <Route path="/equipment" exact component={Equipment}/>
      <Route path="/foodList" exact component={Foodlist}/>
      <Route path="/schedule" exact component={Schedule}/>
      <Route path="/request_for_sub" exact component={Request_for_sub}/>
      <Route path="/reschedule" exact component={Reschedule}/>
      <Route path="/requested_order" exact component={Requested_order}/>
      </div>
    </Router>
  );
}

export default App;
