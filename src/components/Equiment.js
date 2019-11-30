import React, { Component } from "react";

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
          equimentname: ""
         
        };
      } 
  render(){
    const { errors } = this.state;
    return (
    <div class="row">
        <div class="col-md-6">
            <div className="Login" style={{'margin-bottom': '122px'}}></div>
        <h3 className="text-center">List of Equipments</h3>



        </div>
        <div class="col-md-6">
        <form onSubmit={this.handleSubmit}>
         
         
          <FormGroup  controlId="equimentname" bssize="large">
            <FormLabel>Equiment Name</FormLabel>
            <FormControl
              value={this.state.flightNumber}
              name="equimentname"
              onChange={this.handleChange}
              type="text"
            />
        
          </FormGroup>
          <div class="">
          <Button
            block
            bssize="large"
           className="width50 "
            type="submit"
            
          >
          
            Add Equiment
          </Button>
        </div>
         
        </form>

        </div>
    </div>
      
    )
  }
}

export default Login;