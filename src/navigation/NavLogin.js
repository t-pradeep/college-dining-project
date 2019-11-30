import React from 'react';

class NavLogin extends React.Component{
    render(){
        return(
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
            <a class="navbar-brand" href="/">EAT & GO</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="/">HOME <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contactus">CONTACT US</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about">ABOUT US</a>
                </li>
              </ul>
            </div>
          </nav>
        );
    }
}

export default NavLogin;