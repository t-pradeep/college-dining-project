import React, { Component } from "react";
import logo from '../assets/images/logo.jpg';
import NavLogin from '../navigation/NavLogin';

class Login extends Component{
  render(){
    return (
        <div>
        <NavLogin/>
        <br/><br/>
        <div className="row">
    
          <div className="col-md-1" />
    
          <div className="col-md-3">
            <br /><br />
            <img src={logo} className="App-logo" alt="Team logo" />
          </div>
    
          <div className="col-md-8">
            <br /><br />
            <div className="card w-75">
              <div className="card-body">
                <h5 className="card-title">Campus dining</h5>
                <p className="card-text">Come eat our food and complete your hunger</p>
                <br /><br />
                <a
                  className="btn btn-primary"
                  href={Login}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  User Login
            </a>
                <a href="admin" className="btn btn-primary">Admin login</a>
              </div>
            </div>
          </div>
        </div>
    </div>
    
    
    )
  }
}

export default Login;
