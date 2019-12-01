import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Navbar } from "react-bootstrap";


class Equipment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equipmentname: "",
      date: ""
    };
  }
  render() {
    const { errors } = this.state;
    return (
      <div class="row">
        <div class="col-md-6">
          <div className="Login" style={{ 'margin-bottom': '122px' }}></div>
          <h3 className="text-center">List of Equipments</h3>



        </div>
        <div class="col-md-6">
          <form onSubmit={this.handleSubmit}>

            <div className="Login" style={{ 'margin-bottom': '122px' }}></div>
            <FormGroup controlId="equipmentname" bssize="large">
              <FormLabel>Equipment Name</FormLabel>
              <FormControl
                value={this.state.flightNumber}
                name="equipmentname"
                onChange={this.handleChange}
                type="text"
              />
              <FormGroup controlId="equipmentname" bssize="large">
                <FormLabel>Date</FormLabel>
                <FormControl
                  value={this.state.date}
                  name="date"
                  onChange={this.handleChange}
                  type="text"
                />
              </FormGroup>
            </FormGroup>
            <div class="">
              <Button
                block
                bssize="large"
                className="width50 "
                type="submit"

              >

                Add Equipment
          </Button>
            </div>

          </form>

        </div>
      </div>

    )
  }
}

export default Equipment;