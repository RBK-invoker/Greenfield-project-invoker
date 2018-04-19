import React from 'react';
import ListItem from './ListItem.jsx';
//react
const List = (props) => (
  <div>
  <h1> this is my tag </h1> 
    <h4> List Component </h4>
    There are { props.items.length } items.
    { props.items.map(item => <ListItem item={item}/>)}
  </div>
)

export default List;