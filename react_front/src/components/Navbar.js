import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Photonova from '../images/photonova.png'
import './header.css'
export default class Header extends Component {

    render() {
      
      return (
      <nav className="navbar navbar-inverse bg-dark">
        <div className="navbar-header">
            <Link className="navbar-brand" to="/"><img src={Photonova}  height="80" margin="10" alt="alterate text" /></Link>
        </div>
        <ul className="nav navbar-nav navbar-right d-flex flex-row-reverse justify-content-around">
          <li><Link to="/signup"><button className='btn btn-raised btn-primary active'>Sign Up</button></Link></li>
          <li><Link to="/signin"><button className='btn btn-raised btn-primary active'>Sign In</button></Link></li>
        </ul>
  
      </nav>
      
  
  
      );
    }
  } 