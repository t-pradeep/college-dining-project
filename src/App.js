import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ManageUser from './components/ManangeUser';
import 'react-notifications-component/dist/theme.css';
import AdminLogin from './components/AdminLogin';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import  NoPageFound  from './NoPageFound';
import Homepage from './components/Homepage';


function App() {
  return (
    
    <Router>
      <ReactNotification />
      <div >
        <Route exact path="/"  component={Home} />
        <Route exact path="/login"  component={Login} />
        <Route exact path="/signup"  component={Signup} />
        <Route exact path="/admin"  component={AdminLogin} />
        <Route exact path="/manageuser"  component={ManageUser} />
        <Route exact path="/aboutus"  component={Aboutus} />
        <Route exact path="/contactus"  component={Contactus} />
        <Route exact path ="/home" component={Homepage}/>

      </div>
    </Router>
  );
}

export default App;
