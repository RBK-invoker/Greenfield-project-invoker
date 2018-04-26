//import main dependencies react + react-dom + jquery
//to work react
import React from 'react';
//to work react dom
import ReactDOM from 'react-dom';
//to work in ajax
import $ from 'jquery';
//and the router
import {BrowserRouter as Router, Route, Link, NavLink, Redirect, Prompt, IndexRoute, hashHistory } from "react-router-dom";
//import createHistory from 'history/createBrowserHistory'
//import { createHashHistory } from 'history'
//import each components (pages)
import Home from './Jozaa/pages/Home.jsx';
import Login from './Jozaa/pages/Login.jsx';
import SignUp from './Jozaa/pages/SignUp.jsx';
import NewPatient from './Jozaa/pages/NewPatient.jsx';
import List from './Rifaa/components/List.jsx';
import Patient2 from './Rifaa/components/patient.jsx';
import User from './Rifaa/pages/user.jsx';
//export const history = createHashHistory()
//style for div top
const div2={
  backgroundColor:'#123456',
  align:'center',
  height:'52px',
  border: 'solid #d22d10 4px',
};
//the style for the all top bar
const header1={
  color:'#d22d10',
  fontSize:'25px',
  marginLeft:'10px',
  marginTop:'2px',
  fontFamily: 'Lobster',
};
//the style for the main header
const header2={
  color:'#d22d10',
  fontWeight:'bold',
  fontSize:'25px',
  marginLeft:'10px',
  marginTop:'20px',
  cursor: 'default'
};
//style for not active link
const notActive1={
  color: 'white',
  marginLeft:'10%',
  fontSize:'20px',
  textDecoration:'none'
};
const notActive2={
  color: 'white',
  marginLeft:'10%',
  marginRight:'10%',
  fontSize:'20px',
  textDecoration:'none'
};
const notActive3={
  color: 'white',
  marginRight:'10%',
  fontSize:'20px',
  textDecoration:'none'
};
//style for active link
const Active={
  fontWeight:'bold',
  fontSize:'20px',
  color: '#d22d10',
};
//make the main page in div id app1 name App2
class App2 extends React.Component {
  //what render -----------------need change for the router
  render () {
    return (
      <Router /*history={hashHistory}*/>
        <div>
          <div style={div2}>
            <div style={header1}>
              <NavLink to='/login' exact strict style={{textDecoration:'none',header2}} > 
                <img  src="https://pacificmedicalacls.com/images/pluslogo.png" alt="logo" height="40" width="40"/>
                <h style={header2}>Medical Record</h>
              </NavLink>
              <NavLink to='/login' exact strict style={notActive2} activeStyle={Active}>Login</NavLink>
              <NavLink to='/signup' exact strict style={notActive3} activeStyle={Active}>Sign Up</NavLink>
            </div>
          </div>
          <Route path="/" exact strict component={Home}/>     
          <Route path="/login" exact strict component={Login}/>     
          <Route path="/signup" component={SignUp}/>
          <Route path="/logout" exact strict component={NewPatient}/>     
          <Route path="/newpatient" exact strict component={NewPatient}/>
          <Route path="/list" exact strict component={List}/>
          <Route path="/patient2" exact strict component={Patient2}/>
          <Route path="/user" exact strict component={User}/>       
        </div>
      </Router> 
    )
  }
}
ReactDOM.render(<App2 />, document.getElementById('app1'));
/*
1- for user/554
User({match})=> {match.params.username}

2-<Redirect to''></Redirect>
 
3- history={hashHistory}   ???????
  //this.props.history.push(path);
 import {withRouter} from 'react-router-dom';
withRouter
4-neeed home page  

<NavLink to='/login' exact strict style={notActive1} activeStyle={Active}>Home</NavLink>
<NavLink to='/newpatient' exact strict style={notActive3} activeStyle={Active}>New Patient</NavLink>

*/
/*
  render() {
    return (
      <Router>
          <Prompt
            when={!this.state.loggedIn}
            message={(location)=>{
               return location.pathname.startsWith('/user') ? 'Are you sure?' : true
             }}
          />
logout
        <input type="button" value={this.state.loggedIn ? 'log out': 'log in'} onClick={this.loginHandle.bind(this)}/>
    
        <Route path="/user/:username" exact strict render={({match})=>(
          this.state.loggedIn ? ( <User username={match.params.username}/>) : (<Redirect to='/' />)
        )}/>
        </div>
      </Router>
    );
  }
}
        <button onClick={() => hashHistory.push('/login')} style={button}>redirect Sign Up</button>

*/

/*
    // console.log('HERE:',this);
    // console.log('HERE:',this.props.match.path,this.props.match.url);
    //console.log('HERE:',this.props.location.pathname);
    this.props.location.pathname='/login';
    this.props.match.path='/login';
    this.props.match.path='/login';
    this.props.match.url='/login';
*/