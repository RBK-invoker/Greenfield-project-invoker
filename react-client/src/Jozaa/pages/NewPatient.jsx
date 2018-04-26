//to work react
import React from 'react';
//to work in ajax
import $ from 'jquery';
//syle for div to arrange thing
const main={
  width: '400px',
  height: '150px',
  display: '-webkit-flex',
  display: 'flex',
  marginBottom:'-50px',
  marginLeft:'7%',
}
//the style for the main header
const header={
  color:'black',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'40px',
  fontFamily: 'Lobster',
};
//the style for number
const number={
  color:'black',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'25px',
  marginRight:'20px',
};
//the style for number2
const number2={
  color:'black',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'25px',
};
//the style for the user and password input
const input={
  padding: '10px 10px 10px 10px',
  //this three to make it center
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
  color:'black',
  fontSize:'15px',
  border: '2px solid black',
  borderRadius: '15px',
};
//the style for the button Sign Up
const button={
  padding:'5px',
  //this three to make it center
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
//the page login what inside render
class NewPatient extends React.Component {
  //constructor to undestand state
  constructor(){
    super();
    //all the data save before sent in state
    this.state={
      number: '',
      firstName:'',
      lastName: '',
      gender: '',
      age: '',
      phone: '07',
      conditions: '',
      past_Diseases: '',
      currentlly_Medications: '',
      genetic_Diseases: '',
      allergies: '',
      description: '',
      loggedIn:false,
    };
  }
   //for logout button
   logout(){
    console.log('HERE:',   this);
    //console.log('HERE:',    window.location.href);
    //change the path I inside it
    this.setState({loggedIn:false });
    window.location.href = window.location.origin+'/logout';
  };
  //for home button
  home(){
    window.location.href= window.location.origin+'/'
  };
  //when change  ... change the
  //number
  onWrite1 (e) {
    this.setState({
      number: e.target.value,
    });
  };
  //first name
  onWrite2 (e) {
    this.setState({
      firstName: e.target.value,
    });
  };
  //last name
  onWrite3 (e) {
    this.setState({
      lastName: e.target.value,
    });
  };
  //gender
  onWrite4 (e) {
    this.setState({
      gender: e.target.value,
    });
  };
  //age
  onWrite5 (e) {
    this.setState({
      age: e.target.value,
    });
  };
  //phone
  onWrite6 (e) {
    this.setState({
      phone: e.target.value,
    });
  };
  //conditions
  onWrite7 (e) {
    this.setState({
      conditions: e.target.value,
    });
  };
  //past_Diseases
  onWrite8 (e) {
    this.setState({
      past_Diseases: e.target.value,
    });
  };
  //currentlly_Medications
  onWrite9 (e) {
    this.setState({
      currentlly_Medications: e.target.value,
    });
  };
  //genetic_Diseases
  onWrite10 (e) {
    this.setState({
      genetic_Diseases: e.target.value,
    });
  };
  //allergies
  onWrite11 (e) {
    this.setState({
      allergies: e.target.value,
    });
  };
  //description
  onWrite12 (e) {
    this.setState({
      description: e.target.value,
    });
  };
  //for sign in button
  sentData() {
    ////.firstName
    const that=this;
    console.log(`you sent this data:  ${JSON.stringify(this.state)}`);
    //ajax request to sent the data to server then data base
    $.ajax({
      type: 'POST',
      url: '/patient',
      data: {
        number: `${this.state.number}`,
        firstName: `${this.state.firstName}`,
        lastName: `${this.state.lastName}`,
        gender: `${this.state.gender}`,
        age: `${this.state.age}`,
        phone: `${this.state.phone}`,
        conditions: `${this.state.conditions}`,
        past_Diseases: `${this.state.past_Diseases}`,
        currentlly_Medications: `${this.state.currentlly_Medications}`,
        genetic_Diseases: `${this.state.genetic_Diseases}`,
        allergies: `${this.state.allergies}`,
        description: `${this.state.description}`,
      },
      //when success do this
      success: function (res) {
        //.firstName
        alert(res);
        console.log(res);
      },
      //when error do this
      error: function (res){
        alert('Failed sent this data please try agian' );
        console.log('Failed sent this data please try agian')
      },
    });
  };
  //what render
  render () {
    return (
      <div style={{textAlign: 'center'}}>
        <h2 style={header}>Welcome To Medical Record <br/> Please Insert Your Information</h2>
        <div1 style={main}>
          <h3 className="column" style={number}>
          Number:
            <input type='number' value={this.state.number} onChange={this.onWrite1.bind(this)} placeholder="Number" style={input}>
            </input>
          </h3>
          <h3 style={number}>
          First name:
            <input value={this.state.firstName} onChange={this.onWrite2.bind(this)} placeholder="First name" style={input}>
            </input>
          </h3>
          <h3 style={number}>
          Last name:
            <input value={this.state.lastName} onChange={this.onWrite3.bind(this)} placeholder="Last name" style={input}>
            </input>
          </h3>
          <h3 style={number2}>
          Gender:
            <input value={this.state.gender} onChange={this.onWrite4.bind(this)} placeholder="Gender" style={input}>
            </input>
          </h3>
        </div1>
        <div2 style={main}>
          <h3 style={number}>
          Age:
            <input type="number" value={this.state.age} onChange={this.onWrite5.bind(this)} placeholder="Age" style={input}>
            </input>
          </h3>
          <h3 style={number}>
          Phone:
            <input type="number" value={this.state.phone} onChange={this.onWrite6.bind(this)} placeholder="Phone" style={input}>
            </input>
          </h3>
          <h3 style={number}>
          Conditions:
            <input value={this.state.conditions} onChange={this.onWrite7.bind(this)} placeholder="Conditions" style={input}>
            </input>
          </h3>
          <h3 style={number2}>
          Past Diseases:
            <input value={this.state.past_Diseases} onChange={this.onWrite8.bind(this)} placeholder="Past Diseases" style={input}>
            </input>
          </h3>
        </div2>
        <div3 style={main}>
          <h3 style={number}>
          Curr. Medications:
            <input value={this.state.currentlly_Medications} onChange={this.onWrite9.bind(this)} placeholder="Currentlly Medications" style={input}>
            </input>
          </h3>
          <h3 style={number}>
          Genetic Diseases:
            <input value={this.state.genetic_Diseases} onChange={this.onWrite10.bind(this)} placeholder="Genetic Diseases" style={input}>
            </input>
          </h3>
          <h3 style={number}>
          Allergies:
            <input value={this.state.allergies} onChange={this.onWrite11.bind(this)} placeholder="Allergies" style={input}>
            </input>
          </h3>
          <h3 style={number2}>
          Description:
            <input value={this.state.description} onChange={this.onWrite12.bind(this)} placeholder="Description" style={input}>
            </input>
          </h3>
        </div3>  
        <button onClick={this.sentData.bind(this)} style={button}>Submit</button>
        <button onClick={this.home.bind(this)} style={button}>Back to Home</button>
      </div>
    )
  }
}
//export this component to can use
export default NewPatient;

/*


//the style for first name
const fName={
  color:'#7a00a3',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'20px',
  marginBottom:'-10px',
};
//the style for last name
const lName={
  color:'#7a00a3',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'20px',
  marginBottom:'-10px',
};

number
firstName
lastName
gender
age
phone
conditions
past_Diseases
currentlly_Medications
genetic_Diseases
allergies
description

*/
