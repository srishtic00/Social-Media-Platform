import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './components/Home'
import Signup from './user/Signup'
import Signin from './user/Signin'
import Nav from './components/Navbar'
import Footer from './components/Footer'
const MainRouter=()=>(
    <div className='container'>
        <Nav />
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/signin' component={Signin}/>
        </Switch>
        <Footer />
    </div>
)
export default MainRouter;