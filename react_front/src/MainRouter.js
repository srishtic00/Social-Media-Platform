import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './components/Home'
import Signup from './user/Signup'
import Signin from './user/Signin'
import Nav from './components/Navbar'
import Footer from './components/Footer'
import Profile from './user/Profile'
import Users from './user/Users'
import EditProfile from './user/EditProfile'
import PrivateRoute from './auth/PrivateRoute'

const MainRouter=()=>(
    <div className='container'>
        <Nav />
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/users' component={Users}/>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/signin' component={Signin}/>
            <PrivateRoute exact path='/user/edit/:userId' component={EditProfile}/>
            <PrivateRoute exact path='/user/:userId' component={Profile}/>

        </Switch>
        <Footer />
    </div>
)
export default MainRouter;