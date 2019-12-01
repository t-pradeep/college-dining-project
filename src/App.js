import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import Home from './components/Home';
import Login from './components/Login';
<<<<<<< HEAD
import Equipment from './components/Equipment';
import Foodlist from './components/Foodlist';
import Schedule from './components/Schedule';
import Request_for_sub from './components/Request_for_sub';
import Reschedule from './components/Reschedule';
import Requested_order from './components/Requested_order';
=======
import Signup from './components/Signup';
import ManageUser from './components/ManangeUser';
>>>>>>> 3a2b5fc373607deddaa1256844230588c0c84d16
import 'react-notifications-component/dist/theme.css';
import AdminLogin from './components/AdminLogin';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import  NoPageFound  from './NoPageFound';
import Homepage from './components/Homepage';


function App() {
  return (
    
    <Router>
<<<<<<< HEAD
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
=======
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

>>>>>>> 3a2b5fc373607deddaa1256844230588c0c84d16
      </div>
    </Router>
  );
}

export default App;
