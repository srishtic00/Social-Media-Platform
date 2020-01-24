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
import FindPeople from './user/FindPeople'
import PrivateRoute from './auth/PrivateRoute'
import FollowingList from './user/FollowingList'
import FollowerList from './user/FollowerList'
import NewPost from './post/NewPost'


const MainRouter=()=>(
    <div className='container'>
        <Nav />
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/users' component={Users}/>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/signin' component={Signin}/>
            <PrivateRoute exact path='/user/edit/:userId' component={EditProfile}/>
            <PrivateRoute exact path='/findpeople' component={FindPeople}/>
            <PrivateRoute exact path='/following' component={FollowingList}/>
            <PrivateRoute exact path='/followers' component={FollowerList}/>
            <PrivateRoute exact path='/user/:userId' component={Profile}/>
            <PrivateRoute exact path='/create/post' component={NewPost}/>


        </Switch>
        <Footer />
    </div>
)
export default MainRouter;