import React, { Component } from "react";
import "../assets/css/Signup.css";
import NavBarUser from "../navigation/UserNav"
import Footer from "../navigation/Footer"
import { Link, withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class YourTrips extends Component {

  constructor() {
    super();

    this.state = {
      flights: [{
        order:12345,
        equipment:"Heater",
        requested: '12/9/2019',
        delivered: '12/10/2019'
        },
      {
        order:12345,
        equipment:"Heater",
        requested: '12/9/2019',
        delivered: '12/10/2019'

      }, {
        order:12345,
        equipment:"Heater",
        requested: '12/9/2019',
        delivered: '12/10/2019'

      },
      {
        order:12345,
        equipment:"Heater",
        requested: '12/9/2019',
        delivered: '12/10/2019'
      }
      ]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    const newUser = {

    };

  }
  deleteTrip(item){
    var array = [...this.state.flights]; // make a separate copy of the array
    var index = array.indexOf(item)
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({flights: array});
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <NavBarUser />
        <div className="signup container yourtrips form-wrapper" style={{'marginTop': '122px'}}>
          <h2>List of activities</h2>
          <br></br>
          <div class="row mb10">
            <div class="col-md-1">
            </div>
            <div class="col-md-1">
             <b> Order number</b>
            </div>
            <div class="col-md-1">
            <b>Equipment Name</b>
            </div>
            <div class="col-md-1">
            <b> Requested date</b>
            </div>
            <div class="col-md-1">
              <b>delivered date</b>
            </div>
            <div class="col-md-1">
              
            </div>
          </div>
         
          {this.state.flights.map(item => (
            <div class="row mb10">
              <div class="col-md-1">
              Trip {this.state.flights.indexOf(item)+1}
              </div>
              <div class="col-md-1">
              {item.order}
              </div>
              <div class="col-md-1">
              {item.equipment} 
              </div>
              <div class="col-md-1">
                {item.requested}
              </div>
              <div class="col-md-1">
                {item.delivered}
              </div>
              <div class="col-md-1">
                {item.arrivalDate}
              </div>
              <div class="col-md-1">
              <Button
                    block
                    bssize="large"
                    type="submit"
                    onClick={e =>
                      window.confirm("Are you sure you wish to delete this item?") &&
                      this.deleteTrip(item)}
                  > Delete
                  </Button>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
