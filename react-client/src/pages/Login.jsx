
import React from 'react';
import $ from 'jquery';

//styling part
const header = {
  color:'black',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'40px',
  fontFamily: 'Lobster',
};

const header2 = {
  color:'#ea3212',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'25px',
  fontFamily: 'Lobster',
  marginBottom:'-10px',
  marginTop:'5px',
};

const user = {
  color:'#1B5494',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'20px',
  marginBottom:'-10px',
};

const password = {
  color:'#bb280e',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'20px',
  marginBottom:'-10px',
};

const input = {
  padding: '10px 10px 10px 10px',
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
  color:'black',
  fontSize:'15px',
  border: '2px solid black',
  borderRadius: '15px',
};

const button = {
  padding:'5px',
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
  backgroundColor: '#123456',
  color: 'white',
  border: '2px solid #123456',
  borderRadius: '10px',
  marginTop:'20px',
  fontSize:'20px',
  fontFamily: 'Lobster',
};

class Login extends React.Component {

  constructor() {
    super();
    //all the data save before sent in state
    this.state = {
      userName: '',
      password: '',
      loggedIn:false,
    };
  }

  loginHandle ()  {
    this.setState({
      loggedIn:true,
    });
  }

  onWrite3 (e) {
    this.setState({
      userName: e.target.value,
    });
  };

  onWrite4 (e) {
    this.setState({
      password: e.target.value,
    });
  };

  login() {
    const that=this;
    $.ajax({
      type: 'POST',
      url: '/login',
      data: {
        userName: `${this.state.userName}`,
        password: `${this.state.password}`
      },

      success: function (res) {
        if (res[res.length-1]==='e') {
          alert(res);        
          window.location.href= window.location.origin+'/signup'

        }
        else if (res[0]==='W') {
          alert(res);
         that.setState({loggedIn:true });
          window.location.href= window.location.origin+'/'

        } else {
          alert(res);
          window.location.href= window.location.origin+'/login' 
        }
      },
      error: function () {
        alert(`Failed login please try again DR.${that.state.userName}`);
      },
    }); 
  };


  home() {
    window.location.href= window.location.origin+'/'
  };


  signup() {
    window.location.href = window.location.origin+'/signup';
  };

  render () { 
    return (
      <div>
        <h2 style = {header}>Welcome To Medical Record</h2>
        <h3 style = {user}>Usename:
          <input value = {this.state.userName} onChange = {this.onWrite3.bind(this)} placeholder = "Username" style = {input}>
          </input>
        </h3>
        <h3 style = {password}>Password:
          <input type ='password' value={this.state.password} onChange = {this.onWrite4.bind(this)}  placeholder= "Password" style= {input}>
          </input>
        </h3>
        <button onClick = {this.login.bind(this)} style = {button}>Login</button>
        <h3 style = {header2}>Dont have an account ? </h3>
        <button onClick = {this.signup.bind(this)} style = {button}>Sign Up</button>
        <button onClick = {this.home.bind(this)} style = {button}>Back to Home</button>
      </div>
    )
  }
}

//export this component to can use
export default Login;


