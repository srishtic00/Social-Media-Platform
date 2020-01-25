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
import SinglePost from './post/SinglePost'
import Posts from './post/Posts'
import EditPost from './post/EditPost'


const MainRouter=()=>(
    <div className='container'>
        <Nav />
        <Switch>
            <Route exact path='/' component={Home}/>
            <PrivateRoute exact path='/post/create' component={NewPost}/>
            <Route exact path='/post/:postId' component={SinglePost}/>
            <Route exact path='/posts' component={Posts}/>
            <PrivateRoute exact path='/post/edit/:postId' component={EditPost}/>
            <Route exact path='/users' component={Users}/>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/signin' component={Signin}/>
            <PrivateRoute exact path='/user/edit/:userId' component={EditProfile}/>
            <PrivateRoute exact path='/findpeople' component={FindPeople}/>
            <PrivateRoute exact path='/following' component={FollowingList}/>
            <PrivateRoute exact path='/followers' component={FollowerList}/>
            <PrivateRoute exact path='/user/:userId' component={Profile}/>


        </Switch>
        <Footer />
    </div>
)
export default MainRouter;