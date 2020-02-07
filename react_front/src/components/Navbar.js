import React from 'react'
import {Link,withRouter} from 'react-router-dom'
import Photonova from '../images/photonova.png'
import './header.css'


export const signout=(next)=>{
  if(typeof window !=='undefined')
  localStorage.removeItem('jwt')
  next()
  return fetch('http://localhost:5000/signout',{
    method:"POST"
  })
  .then((response)=>{
    console.log('signout',response)
    return response.json()
  })
  .catch(err=>console.log(err))
}

export const isAuthenticated=()=>{
  if(typeof window == "undefined"){
    return false
  }
  if(localStorage.getItem('jwt')){
    return JSON.parse(localStorage.getItem('jwt'))
  }
  else{
    return false
  }
}

const Header=({history})=>  (

      <nav className="navbar navbar-inverse bg-dark">
        <div className="navbar-header">
            <Link className="navbar-brand" to="/"><img src={Photonova}  height="80" width="80%" margin="5" alt="alterate text" /></Link>
        
        {/* <ul className="nav navbar-nav navbar-right d-flex flex-row justify-content-around"> */}
          {!isAuthenticated() && (
            <ul className="nav navbar-nav navbar-right d-flex flex-row justify-content-around">
            <li><Link to="/signup"><button className='btn btn-raised btn-primary active'>Sign Up</button></Link></li>
            <li><Link to="/signin"><button className='btn btn-raised btn-primary active'>Sign In</button></Link></li>
            </ul>
          )}

          {isAuthenticated() && (
            <ul className="nav navbar-nav navbar-right d-flex flex-row justify-content-end">
              <li><Link to='/posts'><button style={{color:"white"}} className='btn btn-default btn-inverse'>All Post</button></Link></li>
              <li><Link to='/post/create'><button style={{color:"white"}} className='btn btn-default btn-inverse'>Create Post</button></Link></li>
            <li><Link to='/users'><button style={{color:"white"}} className='btn btn-default btn-inverse'>All Users</button></Link></li>
            <li><Link to='/findpeople'><button style={{color:"white"}} className='btn btn-default btn-inverse'>Find People</button></Link></li>
            <li><Link to={`/user/${isAuthenticated().user._id}`}><button style={{color:"white"}} className='btn btn-default btn-inverse'>{isAuthenticated().user.name}</button></Link></li>
            <li><a href='/' onClick={()=>signout(()=>history.push('/'))}><button className='btn btn-raised btn-primary active'>Sign Out</button></a></li>
            </ul>
          )}
        {/* </ul> */}
        </div>
      </nav>
  
)
export default withRouter(Header)

  