import React,{Component} from 'react';
import { list } from './apiUser';
import avatar from '../images/user3.png'
import {Link} from 'react-router-dom'

class Users extends Component{
    constructor(){
        super()
        this.state={
            users:[]
        }
    }
    componentDidMount(){
        list().then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                this.setState({users:data})
            }
        })
    }

    render(){
        const { users }=this.state;
        return(
            <div className="row" style={{margin:"5px"}}>
                
               {users.map((user,i)=>(
                   <div className="card col-md-5" style={{margin:"15px"}} key={i}>
                   <img className="card-img-top" src={avatar} style={{width:"100%",height:"15vw",objectFit:"cover"}} alt="Card cap" />
                   <div className="card-body">
                     <h5 className="card-title">{user.name}</h5>
                     <p className="card-text">{user.email}</p>
                     <Link to={`user/${user._id}`}  className="btn btn-raised btn-primary active">View Profile</Link>
                   </div>
                 </div>
               ))}
            </div>
        )
    }
}

export default Users;