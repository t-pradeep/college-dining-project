import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


export default class Footer extends React.Component {
    render() {
        return (

            <MDBFooter className="app-footer">
                <hr />
                <div>
                    <a href="https://coreui.io">CoreUI</a>
                    <span>&copy; 2018 creativeLabs.</span>
                </div>
            </MDBFooter>
        );
    }
}