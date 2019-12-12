import React, { Component } from "react";
import '../assets/css/Foodlist.css';
import NavBarLogin from '../navigation/UserNav';
import Footer from '../navigation/Footer';

class Foodlist extends Component{
    
  render(){
      
    return (
      <div>
      <div class='container'>
    <NavBarLogin />
    
    <div className="row mb10" style={{ 'marginTop': '122px' }}>
                <div className="col-md-3 vertical-center">
                  <h5> Grill</h5>
                </div>
                <div className="col-md-7">
                  <h5>Available list</h5>
                  <div> Grill Cheese</div>
                  <div>  Grill Chicken</div>
                  <div>  Ham Burger</div>
                </div>
                

              </div>
              <div className="row mb10">
                <div className="col-md-3 vertical-center">
                  <h5> Mediterian</h5>
                </div>
                <div className="col-md-7">
                  <h5>Available list</h5>
                  <div> Cheese pizza</div>
                  <div>  Chicken pizza</div>
                  <div>  Pepperion</div>
                </div>
                

              </div>
              <div className="row mb10">
                <div className="col-md-3 vertical-center">
                  <h5> Produce</h5>
                </div>
                <div className="col-md-7">
                  <h5>Available list</h5>
                  <div> Grill Cheese</div>
                  <div>  Grill Chicken</div>
                  <div>  Ham Burger</div>
                </div>
                

              </div>
              <div className="row mb10">
                <div className="col-md-3 vertical-center">
                  <h5> Mangolian</h5>
                </div>
                <div className="col-md-7">
                  <h5>Available list</h5>
                  <div> Grill Cheese</div>
                  <div>  Grill Chicken</div>
                  <div>  Ham Burger</div>
                </div>
                

              </div>
              <div className="row mb10">
                <div className="col-md-3 vertical-center">
                  <h5> Grill</h5>
                </div>
                <div className="col-md-7">
                  <h5>Available list</h5>
                  <div> Grill Cheese</div>
                  <div>  Grill Chicken</div>
                  <div>  Ham Burger</div>
                </div>
                

              </div>
              <div className="row mb10">
                <div className="col-md-3 vertical-center">
                  <h5> Grill</h5>
                </div>
                <div className="col-md-7">
                  <h5>Available list</h5>
                  <div> Grill Cheese</div>
                  <div>  Grill Chicken</div>
                  <div>  Ham Burger</div>
                </div>
                

              </div>

              <div className="row mb10">
                <div className="col-md-3 vertical-center">
                  <h5> Grill</h5>
                </div>
                <div className="col-md-7">
                  <h5>Available list</h5>
                  <div> Grill Cheese</div>
                  <div>  Grill Chicken</div>
                  <div>  Ham Burger</div>
                </div>
                

              </div>
        </div>
      <Footer/>
      </div>
    )
  }
}

export default Foodlist;