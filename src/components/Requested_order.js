import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Navbar } from "react-bootstrap";

class Requested_order extends Component {
    render() {
        const { errors } = this.state;
        return (
            <div>
            <h3 className="text-center">Requested Equipment</h3>
                            <Button
                    block
                    bssize="large"
                    className="width50 "
                    type="submit"

                >
                    Cancel
                </Button>

                <Button
                    block
                    bssize="large"
                    className="width50 "
                    type="submit"

                >

                    Back
                </Button>
            </div>
        )
    }
}

export default Requested_order;