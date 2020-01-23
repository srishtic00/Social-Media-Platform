import React,{Component} from 'react';
import {isAuthenticated} from '../auth'
import { Redirect,Link } from 'react-router-dom';
import {  MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import '../components/header.css'
import DeleteUser from './deleteUser'
// import EditProfile from './EditProfile'

class Profile extends Component{
    constructor(){
        super()
        this.state={
            user:"",
            redirectToSignin:false
        }
    }
    componentDidMount(){
        const userId=this.props.match.params.userId
        fetch(`http://localhost:5000/user/${userId}`,{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
                Authorization:`Bearer ${isAuthenticated().token}`
            }
        })
        .then(response=>{
            return response.json()
        })
        .then(data=>{
            if(data.error)
            this.setState({redirectToSignin:true})
            else
            this.setState({user:data})
        })
    }
    componentWillReceiveProps(props){
        const userId=props.match.params.userId
        fetch(`http://localhost:5000/user/${userId}`,{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
                Authorization:`Bearer ${isAuthenticated().token}`
            }
        })
        .then(response=>{
            return response.json()
        })
        .then(data=>{
            if(data.error)
            this.setState({redirectToSignin:true})
            else
            this.setState({user:data})
        })  
    }
    render(){
        const {redirectToSignin,user}=this.state
        if(redirectToSignin)
        return <Redirect to='/signin' />
        return(
            // <div className="container">
            // <h2>My Profile {isAuthenticated().user.email}</h2>
            // </div>
            <div className='container'>
                <div >
                <div style={{margin:"25px"}} className='col-md-6'>
            <MDBCol className="text-center">
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>{user.name}</MDBCardTitle>
          <MDBCardText>
          Contact :   {user.email}
          </MDBCardText>
          
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </div>
    <div className='col-md-6' style={{marginTop:"20px",marginLeft:"25px"}}>
        {isAuthenticated().user && isAuthenticated().user._id===user._id && 
        (<ul className="nav navbar-nav navbar-right d-flex flex-row justify-content">
        <li><Link to={`/user/edit/${user._id}`}><button className='btn btn-raised btn-success active'>Edit Profile</button></Link></li>
        <li><DeleteUser userId={user._id} /></li>
        </ul>)
        }    
    </div>
    </div>
    </div>
        )
    }
}
export default Profile;