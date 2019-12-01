import React, { Component } from "react";
import logo from '../assets/images/logo.jpg';
import NavLogin from '../navigation/NavLogin';

class Homepage extends Component {
  render() {
    return (
      <div>
        <NavLogin />
        <div class="container">
          <div className="row">

            <div className="col-md-3">
              <br /><br />  <br /><br />
              <img src={logo} className="App-logo" alt="Team logo" />
            </div>

            <div className="col-md-9">
              <div className="card w-100">
                <div className="card-body">
                  <h5 className="card-title">Campus dining</h5>
                  <p className="card-text">Come eat our food and complete your hunger</p>
                  <br /><br />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    )
  }
}

export default Homepage;
