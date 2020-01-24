import React,{Component} from 'react';
import {isAuthenticated} from '../auth'
import { Redirect,Link } from 'react-router-dom';
import {  MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import '../components/header.css'
import DeleteUser from './deleteUser'
import DefaultProfile from "../images/user2.png";
import FollowProfileButton from './FollowProfileButton.js'
import {read} from './apiUser'
import ProfileTabs from './ProfileTabs.js'


// import EditProfile from './EditProfile'

class Profile extends Component{
    constructor(){
        super()
        this.state={
            user:{following:[],followers:[]},
            redirectToSignin:false,
            following:false,
            error:""
        }
    }
    checkFollow=user=>{
        const jwt=isAuthenticated()
        const match=user.followers.find(follower=>{
            return follower._id===jwt.user._id
        })
        return match

    }
    clickFollowButton = callApi => {
        const userId = isAuthenticated().user._id;
        const token = isAuthenticated().token;
    
        callApi(userId, token, this.state.user._id)
        .then(data => {
          if (data.error) {
            this.setState({ error: data.error });
          } else {
            this.setState({ user: data, following: !this.state.following });
          }
        });
      };
      init = userId => {
        const token = isAuthenticated().token;
        read(userId, token).then(data => {
          if (data.error) {
            this.setState({ redirectToSignin: true });
          } else {
            let following = this.checkFollow(data);
            this.setState({ user: data, following });
            // this.loadPosts(data._id);
          }
        });
      };
      componentDidMount() {
        const userId = this.props.match.params.userId;
        this.init(userId);
      }
    
      componentWillReceiveProps(props) {
        const userId = props.match.params.userId;
        this.init(userId);
      }
    render(){
        const {redirectToSignin,user}=this.state
        if(redirectToSignin)
        return <Redirect to='/signin' />

        const photoUrl = user._id
      ? `http://localhost:5000/user/photo/${user._id}?${new Date().getTime()}`
      : DefaultProfile;

        return(
            <div className='container'>
                <div className='row'>
                <div style={{margin:"25px"}} className='col-md-5'>
            <MDBCol className="text-center">
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" style={{width:"80%"}} src={photoUrl} onError={i=>(i.target.src=`${DefaultProfile}`)} waves />
        <MDBCardBody>
          <MDBCardTitle>{user.name}</MDBCardTitle>
          <MDBCardText>
          Contact :   {user.email}
          </MDBCardText>
          
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </div>
    <div className='col-md-5' style={{margin:"25px"}}>
        <hr />
    <p className='lead'>{user.about}</p>
    <hr />
    <ProfileTabs
              followers={user.followers}
              following={user.following}
              
            />
    </div>
    <div className='col-md-6' style={{marginTop:"20px",marginLeft:"25px"}}>
        {isAuthenticated().user && isAuthenticated().user._id===user._id ?
        (<ul className="nav navbar-nav navbar-right d-flex flex-row justify-content">
        <li><Link to={`/user/edit/${user._id}`}><button className='btn btn-raised btn-success active'>Edit Profile</button></Link></li>
        <li><DeleteUser userId={user._id} /></li>
        </ul>):<FollowProfileButton following={this.state.following} onButtonClick={this.clickFollowButton} />
        }    
    </div>
    
    </div>
    </div>
        )
    }
}
export default Profile;