
import React from 'react';
import $ from 'jquery';
//styling part
const header = {
  color:'black',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'40px',
  fontFamily: 'Lobster',
  marginTop:'2px',
  marginBottom:'-15px',
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

const fName = {
  color:'#7a00a3',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'20px',
  marginBottom:'-10px',
};


const lName = {
  color:'#7a00a3',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'20px',
  marginBottom:'-10px',
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
  marginTop:'20px',
  fontSize:'20px',
  borderRadius: '10px',
  fontFamily: 'Lobster',
};


class SignUp extends React.Component {
  constructor(){
    super();
    //all the data save before sent in state
    this.state  = {
      firstName:'',
      lastName: '',
      userName: '',
      password: ''
    };
  }

  onWrite1 (e) {
    this.setState({
      firstName: e.target.value,
    });
  };

  onWrite2 (e) {
    this.setState({
      lastName: e.target.value,
    });
  };

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

  saveUser() {
    const that=this;
    $.ajax({
      type: 'POST',
      url: '/signup',
      data: {
        firstName: `${this.state.firstName}`,
        lastName: `${this.state.lastName}`,
        userName: `${this.state.userName}`,
        password: `${this.state.password}`
      },

      success: function (res) {

        if (res[0]==='W') {
          alert(res);
          console.log(res[0]);          
          window.location.href= window.location.origin+'/'
        } else {
          alert(res);
          window.location.href= window.location.origin+'/login' 
        }
      },
      error: function (res) {
        alert(`Failed sigup please try again DR.${that.state.userName}`);
      },
    }); 
  };
  //try router
  login() {
    window.location.href= window.location.origin+'/login'
  }
  //for home button
  home(){
    window.location.href = window.location.origin+'/'
  };

  render () {
    return (
      <div>
          <h2 style = {header}>Welcome To Medical Record</h2>
            <h3 style = {fName}>First name: 
          <input value = {this.state.firstName} onChange = {this.onWrite1.bind(this)} placeholder = "First name" style = {input}>
          </input>
        </h3>       
        <h3 style = {lName}>Last name: 
          <input value = {this.state.lastName} onChange = {this.onWrite2.bind(this)} placeholder = "Last name" style = {input}>
          </input>
        </h3>        
        <h3 style = {user}>Username:
         <input value = {this.state.userName} onChange = {this.onWrite3.bind(this)} placeholder= "Username" style = {input}>
         </input>
        </h3>
        <h3 style={password}>Password:
         <input type='password' value={this.state.password} onChange= {this.onWrite4.bind(this)} placeholder = "Password" style = {input}>
         </input>
        </h3>
        <button onClick = {this.saveUser.bind(this)} style = {button}>Sign Up</button>
        <h3 style = {header2}>Have an account ? </h3>
        <button  onClick = {this.login.bind(this)} style = {button}>Login</button>
        <button  onClick = {this.home.bind(this)} style = {button}>Back to Home</button>
      </div>
    )
  }
}


//export this component to can use
export default SignUp;
