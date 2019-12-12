
import React, { Component } from "react";
import "../assets/css/Signup.css";
import NavBarLogin from "../navigation/UserNav"
import { Link, withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import Footer from "../navigation/Footer"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { store } from 'react-notifications-component';


export default class AddFlight extends Component {

  constructor() {
    super();

    this.state = {
      flightNumber: "",
      departurePlace : "",
      departureDate: "",
      departureTime: "",
      noOfSeats: "",
      arrivalPlace:"",
      arrivalDate: "",
      arrivalTime:""
      
    };
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeDepartingDate = this.onChangeDepartingDate.bind(this);
    this.onChangeArrivingDate = this.onChangeArrivingDate.bind(this);
  }


  handleValueChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleChange(event) {
    console.log(event.target.name)
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  onChangeDepartingDate(departingDate) {
    this.setState({
      departureDate: departingDate
    })
  }
  onChangeArrivingDate(arrivingDate) {
    this.setState({
      arrivalDate: arrivingDate
    })
  }

  handleSubmit(e) {
      store.addNotification({
            title: "Flight added!",
            message: "Flight is added!!!",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            width: 300,
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
          this.props.history.push({pathname: '/listofflights'})
    }
  

  render() {
    const { errors } = this.state;
    return (
      <div>
        <NavBarLogin />
        <div className="card w-25">
          <h2>Add Equipment</h2>
          <form onSubmit={this.handleSubmit}>
          <div className="inputBox vertical-center ">
              <label htmlFor="noOfSeats" class="mt20">Name of Equipment*</label>
              <input
                type="text"               
                placeholder="Equipment name"
                name="arrivalPlace"
                value={this.state.arrivalPlace}
                onChange={this.handleValueChange}
              />
            </div>

            <div className="inputBox vertical-center ">
              <label htmlFor="departureDate">Required Date*</label>
              <DatePicker placeholderText="MM/DD/YYYY"
                                selected={this.state.departureDate}
                                onChange={this.onChangeDepartingDate}
                            />
            </div><br/>
            <Button block bssize="large" type="submit">Request</Button>

          </form>
          <h6>* indicates required field</h6>
        </div>
        <Footer/>
      </div>
    );
  }
}
