import React from "react";
import $ from "jquery";

//styling part
const header1 = {
  color: "black",
  fontWeight: "bold",
  textAlign: "center",
  fontSize: "50px",
  fontFamily: "Lobster",
  marginTop: "2px"
};

const header3 = {
  color: "black",
  fontWeight: "bold",
  textAlign: "centezr",
  fontSize: "25px",
  fontFamily: "Lobster",
  marginTop: "5px",
  marginLeft: "200px"
};

const input3 = {
  padding: "10px 10px 10px 10px",
  marginRight: "-80px",
  marginLeft: "-30px",
  color: "black",
  fontSize: "15px",
  border: "2px solid black",
  borderRadius: "15px"
};

const button3 = {
  padding: "6px",
  backgroundColor: "#123456",
  color: "white",
  border: "2px solid black",
  fontSize: "20px",
  borderRadius: "15px",
  fontFamily: "Lobster"
};

const table = {
  border: "3px solid black",
  borderCollapse: "collapse",
  padding: "3px",
  textAlign: "center",
  fontSize: "25px",
  fontWeight: "bold",
  color: "black",
  backgroundColor: "white"
};

const table2 = {
  border: "3px solid black",
  borderCollapse: "collapse",
  padding: "3px",
  textAlign: "center",
  fontSize: "25px",
  //fontWeight:'bold',
  color: "white",
  backgroundColor: "gray"
};

const button1 = {
  padding: "5px",
  display: "block",
  marginRight: "auto",
  marginLeft: "auto",
  backgroundColor: "#bb280e",
  color: "white",
  border: "2px solid #bb280e",
  marginTop: "5px",
  fontSize: "20px",
  borderRadius: "10px",
  fontFamily: "Lobster"
};
//the style for the button create new patient
const button2 = {
  padding: "5px",

  display: "block",
  marginRight: "auto",
  marginLeft: "auto",
  backgroundColor: "#123456",
  color: "white",
  border: "2px solid #123456",
  marginTop: "0px",
  fontSize: "20px",
  borderRadius: "10px",
  fontFamily: "Lobster"
};

class Home extends React.Component {
  constructor() {
    super();
    //all the data save before sent in state
    this.state = {
      loggedIn: true,
      patientNumber: 3,
      //the data get from retrieve
      data: {}
    };
  }

  onWrite1(e) {
    this.setState({
      patientNumber: 1 * e.target.value
    });
  }

  logout() {
    const that = this;
    $.ajax({
      type: "GET",
      url: "/logout",
      success: function(res) {
        alert(res);
        that.setState({ loggedIn: false });
        window.location.href = window.location.origin + "/login";
      },

      //when error do this
      error: function() {
        alert("Failed logout please try again DR");
      }
    });
  }

  //for button create new patient
  newPatient() {
    window.location.href = window.location.origin + "/newpatient";
  }
  //for retrieve one patient
  retrieveOne() {
    const that = this;
    //ajax request to logout
    $.ajax({
      type: "GET",
      url: "/patient",
      data: { number: `${that.state.patientNumber}` },
      success: function(res) {
        alert("Sucess retrieve patient have number: " + res[0].number);
        that.setState({ data: res });
        that.renderData();
      },
      error: function() {
        alert("Failed retrieve one patient please try again DR");
      }
    });
  }

  renderData() {
    var data = this.state.data[0];
    $(".number").html(data.number);
    $(".firstName").html(data.firstName);
    $(".lastName").html(data.lastName);
    $(".gender").html(data.gender);
    $(".age").html(data.age);
    $(".phone").html(data.phone);
    $(".conditions").html(data.conditions);
    $(".pastDiseases").html(data.past_Diseases);
    $(".currMedications").html(data.currentlly_Medications);
    $(".geneticDisease").html(data.genetic_Diseases);
    $(".allergies").html(data.allergies);
    $(".description").html(data.description);
  }
  render() {
    return (
      <div1>
        <h2 style={header1}>Retrieve data for patient by his number</h2>
        <div2
          className="row"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <h3 className="col-xs-4 col-xs-offset-1" style={header3}>
            Get all info for this patient:
          </h3>
          <input
            className="col-xs-1 col-xs-offset-1"
            value={this.state.patientNumber}
            type="number"
            onChange={this.onWrite1.bind(this)}
            placeholder="Patient number"
            style={input3}
          />
          <button
            className="col-xs-2 col-xs-offset-1"
            onClick={this.retrieveOne.bind(this)}
            style={button3}
          >
            Show the data now
          </button>
        </div2>
        <div3>
          <table
            style={{
              width: "80%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "20px"
            }}
          >
            <tr>
              <th style={table}>Number</th>
              <th style={table}>First name</th>
              <th style={table}>Last name</th>
              <th style={table}>Gender</th>
            </tr>
            <tr>
              <td className="number" value="tttttt" style={table2} />
              <td className="firstName" style={table2} />
              <td className="lastName" style={table2} />
              <td className="gender" style={table2} />
            </tr>
            <tr>
              <th style={table}>Age</th>
              <th style={table}>Phone</th>
              <th style={table}>Conditions</th>
              <th style={table}>Past Diseases</th>
            </tr>
            <tr>
              <td className="age" style={table2} />
              <td className="phone" style={table2} />
              <td className="conditions" style={table2} />
              <td className="pastDiseases" style={table2} />
            </tr>
            <tr>
              <th style={table}>Curr. Medications</th>
              <th style={table}>Genetic Diseases</th>
              <th style={table}>Allergies</th>
              <th style={table}>Description</th>
            </tr>
            <tr>
              <td className="currMedications" style={table2} />
              <td className="geneticDisease" style={table2} />
              <td className="allergies" style={table2} />
              <td className="description" style={table2} />
            </tr>
          </table>
        </div3>
        <div4 className="row">
          <button onClick={this.newPatient.bind(this)} style={button2}>
            Create New Patient
          </button>
          <button onClick={this.logout.bind(this)} style={button1}>
            Logout
          </button>
        </div4>
      </div1>
    );
  }
}
//export this component to can use it
export default Home;
