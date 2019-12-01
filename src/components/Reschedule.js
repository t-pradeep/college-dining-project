import React, { Component } from "react";
import "../assets/css/Signup.css";
import NavBarLogin from "../navigation/NavLogin"
import { Link, withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import Footer from "../navigation/Footer"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { store } from 'react-notifications-component';


export default class Request_for_Sub extends Component {

  constructor() {
    super();

    this.state = {
      name: "",
      date : "",
      timing: "",
      station: ""
      
    };
    
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    
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
  onChangeDate(date) {
    this.setState({
      date: date
    })
  }
  

  handleSubmit(e) {
    e.preventDefault();
    const newRequest = {
      name: this.state.name,
      date : this.state.date,
      timing: this.state.timing,
      station: this.state.station,
      
    };
    console.log(newRequest)
    axios.post('http://localhost:5000/subrequest/add', newRequest)
    .then(res => {
          console.log(res.data)
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
    });
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <NavBarLogin />
        <div className="">
          <h2>Name</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="inputBox vertical-center width70">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                class=""
                value={this.state.name}
                onChange={this.handleValueChange}            
              />           
            </div>
            <div className="inputBox vertical-center width70">
              <label htmlFor="timing" class="mt20">Timing</label>
              <input
                type="text"
                placeholder="Timing"
                name="timing"
                value={this.state.timing}
                onChange={this.handleValueChange}
              />
            </div>
            <div className="inputBox vertical-center width70">
              <label htmlFor="date" class="mt20">Date</label>
              <DatePicker placeholderText="MM/DD/YYYY"
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
            </div>

            <div className="inputBox vertical-center width70">
              <label htmlFor="station" class="mt20">Station</label>
              <input
                type="text"
               
                placeholder="Station"
                name="station"
                value={this.state.station}
                onChange={this.handleValueChange}
              />
            </div>
            
            <div class="text-center mt20">
              <Button 
                bssize="large" type="submit">Cancel</Button>
              
            </div>
            <div class="text-center mt20">
              <Button 
                bssize="large" type="submit">Back</Button>
              
            </div>
          </form>
        </div>
        <Footer/>
      </div>
    );
  }
}

