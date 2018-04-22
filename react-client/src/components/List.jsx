import React from 'react';
import ListItem from './ListItem.jsx';
//react
const List = (props) => (
  <div>
  <h1> this is my disease </h1> 
    <h4> List patient </h4>
    There are { props.patients.length } patients.
    { props.patients.map(patient => <ListItem patient={patient}/>)}
  </div>
)

export default List;