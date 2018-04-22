import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      patients: []
    }
  }
//add url
  componentDidMount() {
    $.ajax({
      url: '/patient', 
      success: (data) => {
        this.setState({
          patients: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>patient List</h1>
      <List patients={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));