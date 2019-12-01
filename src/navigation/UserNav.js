import React from 'react';

class UserNav extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary justify-content-between">
            <a className="navbar-brand" href="/">EAT & GO</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">HOME <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/schedule">SCHEDULE</a>
                </li><li className="nav-item">
                  <a className="nav-link" href="/foodlist">FOOD LIST</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/equipment">EQUIPMENT</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/contactus">CONTACT US</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/aboutus">ABOUT US</a>
                </li>
                </ul>
                <ul class="nav navbar-nav float-md-right">
                <li className="nav-item">
                        <a className="nav-link" href="/logout">LOGOUT</a>
                        </li>
                
              </ul>
            </div>
          </nav>
        );
    }
}

export default UserNav;