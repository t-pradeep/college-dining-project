import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBarLogin from "../navigation/NavLogin";
import Footer from "../navigation/Footer";
import '../assets/css/Login.css'
import axios from 'axios';
import { store } from 'react-notifications-component';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    axios.post('http://localhost:5000/users/login', userData)
      .then(res => {
        console.log(res.data)
        if (res.data.code == 200) {
          store.addNotification({
            title: "Successful login",
            message: "Your login is successful !!!",
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
          this.props.history.push({ pathname: '/home' })
        }
        else {
          store.addNotification({
            title: "Invalid",
            message: "Email id or password is incorrect",
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
        }
      });
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <NavBarLogin />
        <div className="card w-25">
          <form onSubmit={this.handleSubmit}>
            <h5 className="text-center"><strong>Signin</strong><br/>
           to continue to Eat & Go</h5>

            <FormGroup controlId="email" bsssize="large">
              <FormLabel>Email</FormLabel>
              <FormControl autoFocus type="email" value={this.state.email} onChange={this.handleChange} />
            </FormGroup>

            <FormGroup controlId="password" bssize="large">
              <FormLabel>Password</FormLabel>
              <FormControl value={this.state.password} onChange={this.handleChange} type="password" />
            </FormGroup>

            <Button block bssize="large" text={!this.validateForm()} type="submit">Login</Button>
            <Link to="/forgotPassword" variant="body2">Forgot password?</Link>
            <p className="text-center">or</p>
            <Button block bssize="large" href="signup">Create an account</Button>


          </form>
        </div>
        <Footer />

      </div>
    );
  }
}