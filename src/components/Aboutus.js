import React from 'react';
import UserNav from '../navigation/UserNav';
import Footer from '../navigation/Footer';

class Aboutus extends React.Component {
    render() {
        return (
            <div className="container">
                <UserNav />

                <br />
                <br />
                <div className="row">
                    <div className="col col-md-12 text-center">
                        <br />
                        <br />
                        <h3>Eat and Go Online Management System deals with creating food list for the current day, updating the list and
                          deleting any item fro the list. Our website also deals with viewing schedule of an employee for the current week
                    and also the user can request for new equipment</h3>
                        <h3>Created by Pradeepkumar
                          Gopi
                          Chaitra
                          Raghavendar
                  </h3>
                        <br />
                        <br />
                    </div>
                </div>
                <Footer />

            </div>
        );

    }
}

export default Aboutus;