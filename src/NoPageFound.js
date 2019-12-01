import React from "react";
import UserNav from './navigation/UserNav';
import Footer from './navigation/Footer';

class Contactus extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid" style={{marginTop: 120}}>
                    <UserNav />
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3> Sorry No page found<br/>check the url</h3>
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