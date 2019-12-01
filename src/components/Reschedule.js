import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Navbar } from "react-bootstrap";

class Reschedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            day: "",
            timing: "",
            station: ""
        };
    }
    render() {
        return (
            <div className="col-md-6">
                <form onSubmit={this.handleSubmit}>

                    <div className="Login" style={{ 'margin-bottom': '122px' }}></div>
                    <FormGroup controlId="name" bssize="large">

                        <FormLabel>Name</FormLabel>
                        <FormControl
                            value={this.state.name}
                            name="name"
                            onChange={this.handleChange}
                            type="text"
                        />
                    </FormGroup>

                    <FormGroup controlId="day" bssize="large">
                        <FormLabel>Day</FormLabel>
                        <FormControl
                            value={this.state.day}
                            name="day"
                            onChange={this.handleChange}
                            type="text"
                        />
                    </FormGroup>


                    <FormGroup controlId="timing" bssize="large">
                        <FormLabel>Timing</FormLabel>
                        <FormControl value={this.state.timing}
                            name="timing"
                            onChange={this.handleChange}
                            type="text"
                        />
                    </FormGroup>


                    <FormGroup controlId="station" bssize="large">
                        <FormLabel>station</FormLabel>
                        <FormControl value={this.state.station} name="station" onChange={this.handleChange} type="text" />
                    </FormGroup>

                    <br />
                    <div className="">
                        <Button block bssize="large" className="width50 " type="submit">Cancel</Button>
                        <Button block bssize="large" className="width50 " type="submit">Back</Button>
                    </div>



                </form>

            </div>



        )
    }
}

export default Reschedule;