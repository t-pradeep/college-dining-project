import React from "react";
import UserNav from '../navigation/UserNav';
import Footer from '../navigation/Footer';

class Contactus extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid" style={{marginTop: 120}}>
                    <UserNav />
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3> In order to contact us<br />
                                Mail at: eat&go@gmail.com<br />
                                For emergency please contact us at<br />
                                660-000-1234</h3>
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Contactus;