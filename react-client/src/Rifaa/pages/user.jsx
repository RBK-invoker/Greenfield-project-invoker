import React from 'react';
//the style for the two main header
const header={
  color:'black',
  fontWeight:'bold',
  textAlign:'center'
};
//the style for the first and last name 
const name={
  color:'#9900cc',
  fontWeight:'bold',
  textAlign:'center',
};
//the style for the user 
const user={
  color:'blue',
  fontWeight:'bold',
  textAlign:'center',
};
//the style for the user and password input 
const input={
  padding:'3px',
  //this three to make it center
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
};
//the style for the password 
const password={
  color:'red',
  fontWeight:'bold',
  textAlign:'center'
};
//the style for the submit button 
const button={
  padding:'5px',
  //this three to make it center
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
  backgroundColor: 'green',
  color: 'white',
  border: '2px solid',
  marginTop:'10px'
};
//the style for the button 
const button2={
  padding:'5px',
  //this three to make it center
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
  backgroundColor: 'black',
  color: 'white',
  border: '2px solid',
  marginTop:'10px'
};
//the page login what inside render
class SignUp extends React.Component {
  //constructor to undestand state
  constructor(){
    super();
    this.state={phone: '07'}
  }
    onWrite (e) {
      console.log(e.target.value)
     this.setState({phone:e.target.value});

    };


  //what render -----------------need change
  render () { 
      return (
      <div>
        <h2 style={header}>Enter your information</h2>
        <h3 style={name}>number:</h3>
        <input  value={this.state.number} type="number"  placeholder="Insert your number" style={input} ></input>
        
        
         <h3 style={user}>First name:</h3>
        <input placeholder="Insert your first name" style={input} ></input>
        
        <h3 style={name}>Last name:</h3>
        <input placeholder="Insert your last name" style={input} ></input>
        
        <h3 style={user}>Gender:</h3>
        <input placeholder="Insert your Gender" style={input} ></input>
       
        <h3 style={name}>age:</h3>
        <input  value={this.state.age} type="number"  placeholder="Insert your age" style={input} ></input>

        <h3 style={user}>phone:</h3>
        <input  value={this.state.phone} type="number"  onChange={this.onWrite.bind(this)}  placeholder="Insert your phone" style={input} ></input>

        <h3 style={name}>Conditions:</h3>
        <input placeholder="Insert your Conditions" style={input} ></input>

        <h3 style={user}>Past diseases:</h3>
        <input placeholder="Insert your Past diseases" style={input} ></input>

        <h3 style={name}>Currentlly medications:</h3>
        <input placeholder="Insert your Currentlly medications" style={input} ></input>

        <h3 style={user}>Genetic diseases:</h3>
        <input placeholder="Insert your Genetic diseases" style={input} ></input>

        <h3 style={name}>Allergies:</h3>
        <input placeholder="Insert your Allergies" style={input} ></input>

        <h3 style={user}>description:</h3>
        <input placeholder="Insert your description" style={input} ></input>

        <button style={button}>Submit</button>
        
      </div>
    )
  }
}
//export this component to can use
export default SignUp;