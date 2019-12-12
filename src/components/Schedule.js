import React, { Component } from "react";
import NavBarLogin from '../navigation/UserNav';
import Footer from '../navigation/Footer';

class Schedule extends Component {
    render() {
        return (
            <div>
                <div class='container'>
                    <NavBarLogin />

                    <div className="row mb10" style={{ 'marginTop': '122px' }}>
                        <div className="col-md-2 vertical-center">
                            <h5> Day</h5>
                        </div>
                        <div className="col-md-3" vertical-center>
                            <h5>Station</h5>
                        </div>
                        <div className="col-md-7" vertical-center>
                            <h5>Schedule</h5>
                        </div>

                    </div>

                    <div className="row mb10">
                        <div className="col-md-2 vertical-center">
                            <h5> Monday</h5>
                        </div>
                        <div className="col-md-3" vertical-center>
                            <h5>GRILL</h5>
                        </div>
                        <div className="col-md-7" vertical-center>
                            <div>Pradeepkumar 6AM to 10AM</div>
                            <div>Raghav 7AM to 11AM</div>
                            <div>Gopi 10AM to 12PM</div>
                            <div>Chaitra 11AM to 6PM</div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>

                        </div>

                    </div>
                    <div className="row mb10">
                        <div className="col-md-2 vertical-center">
                            <h5> Tuesday</h5>
                        </div>
                        <div className="col-md-3" vertical-center>
                            <h5>Entree</h5>
                        </div>
                        <div className="col-md-7" vertical-center>
                            <div>Pradeepkumar 6AM to 10AM</div>
                            <div>Raghav 7AM to 11AM</div>
                            <div>Gopi 10AM to 12PM</div>
                            <div>Chaitra 11AM to 6PM</div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>

                        </div>

                    </div>
                    <div className="row mb10">
                        <div className="col-md-2 vertical-center">
                            <h5> Wednesday </h5>
                        </div>
                        <div className="col-md-3 vertical-center">
                            <h5>Tex Mex</h5>
                        </div>
                        <div className="col-md-7">
                            <div>Pradeepkumar 6AM to 10AM</div>
                            <div>Raghav 7AM to 11AM</div>
                            <div>Gopi 10AM to 12PM</div>
                            <div>Chaitra 11AM to 6PM</div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>

                        </div>

                    </div>
                    <div className="row mb10">
                        <div className="col-md-2 vertical-center">
                            <h5> Thursday</h5>
                        </div>
                        <div className="col-md-3" vertical-center>
                            <h5>Produce Market</h5>
                        </div>
                        <div className="col-md-7" vertical-center>
                            <div>Pradeepkumar 6AM to 10AM</div>
                            <div>Raghav 7AM to 11AM</div>
                            <div>Gopi 10AM to 12PM</div>
                            <div>Chaitra 11AM to 6PM</div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>

                        </div>

                    </div>

                    <div className="row mb10">
                        <div className="col-md-2 vertical-center">
                            <h5> Friday </h5>
                        </div>
                        <div className="col-md-3" vertical-center>
                            <h5>True Balance</h5>
                        </div>
                        <div className="col-md-7" vertical-center>
                            <div>Pradeepkumar 6AM to 10AM</div>
                            <div>Raghav 7AM to 11AM</div>
                            <div>Gopi 10AM to 12PM</div>
                            <div>Chaitra 11AM to 6PM</div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>

                        </div>

                    </div>
                    <div className="row mb10">
                        <div className="col-md-2 vertical-center">
                            <h5> Saturday </h5>
                        </div>
                        <div className="col-md-3" vertical-center>
                            <h5>MANGOLIAN</h5>
                        </div>
                        <div className="col-md-7" vertical-center>
                            <div>Pradeepkumar 6AM to 10AM</div>
                            <div>Raghav 7AM to 11AM</div>
                            <div>Gopi 10AM to 12PM</div>
                            <div>Chaitra 11AM to 6PM</div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>

                        </div>

                    </div>


                    <div className="row mb10">
                        <div className="col-md-2 vertical-center">
                            <h5> Sunday</h5>
                        </div>
                        <div className="col-md-3" vertical-center>
                            <h5>GRILL</h5>
                        </div>
                        <div className="col-md-7" vertical-center>
                            <div>Pradeepkumar 6AM to 10AM</div>
                            <div>Raghav 7AM to 11AM</div>
                            <div>Gopi 10AM to 12PM</div>
                            <div>Chaitra 11AM to 6PM</div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>

                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Schedule;