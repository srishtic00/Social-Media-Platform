import React, { Component } from 'react';
import main from '../images/11.jpg';
import './home.css'
// import { MDBIcon } from 'mdbreact';
// import user from '../images/user3.png'
// import heart from '../images/heart.png'
// import camera from '../images/camera.png'


// import 'bootstrap/dist/css/bootstrap.css'

export default class Main extends Component {
  
  render() {
    return (
    
      <div  className="container bg">
        <div className="row">
          <div className="col">
            <a href="/"> <img className="image" src={main} margin="0px" alt="alterate text" /></a>
          </div>
          <div className="col">
              <div className="StaticLoggedOutHomePage-communicationContent">
                  <div className="StaticLoggedOutHomePage-communicationItem">
                      {/* <span role="img">&#x1F465;&nbsp;</span> */}
                      &#x1F465;&nbsp; Follow your interests.
                  </div>
                  <div className="StaticLoggedOutHomePage-communicationItem">
                  {/* <span role="img">&#x1F4F7;&nbsp;</span> */}
                  &#x1F4F7;&nbsp;Capture your moments.
                  </div>
                  <div className="StaticLoggedOutHomePage-communicationItem">
                      {/* <span role="img" >	&#x1F49A;&nbsp;</span> */}
                      &#x1F49A;&nbsp; Talk your heart out.
                   </div>
                   
                </div>
           </div>
        </div>
      </div>
      
    );
  }
} 