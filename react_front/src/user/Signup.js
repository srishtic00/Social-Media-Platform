import React,{Component } from 'react';

class Signup extends Component
{
    constructor(){
        super()
        this.state={
            name:"",
            email:"",
            password:"",
            error:""
        }
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange=(name)=>event=>{
        this.setState({[name]:event.target.value})
    }

    clickSubmit=event=>{
        event.preventDefault()
        const {name,email,password}=this.state
        const user={name,email,password}

        this.signup(user)
        .then(data=>{
            if(data.error)
            this.setState({error:data.error})
            else
            this.setState({
                error:"",
                name:"",
                email:"",
                password:""
            })
        })


    }

    signup=user=>{
        return fetch('http://localhost:5000/signup',{
            method:"POST",
            headers:{Accept:"application/json","Content-Type":"application/json"},
            body:JSON.stringify(user)
        })
        .then(response=>{
            return response.json()
        })
        .catch(err=>console.log(err))
    }


    render(){
        const {name,email,password}=this.state
        return(
            <div className='container'>
                <h2 className="mt-5 mb-5" >Signup</h2>

                <form>
                    <div className="form-group">
                        <label className="text-muted">Name</label>
                        <input onChange={this.handleChange('name')} type='text' className="form-control" value={name} />
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Email</label>
                        <input onChange={this.handleChange('email')} type='email' className="form-control" value={email}/>
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Password</label>
                        <input onChange={this.handleChange('password')} type='password' className="form-control" value={password}/>
                    </div>
                    <button onClick={this.clickSubmit} className='btn btn-raised btn-primary'>
                        Submit
                    </button>
                </form>
            </div>

        )
    }
}

export default Signup