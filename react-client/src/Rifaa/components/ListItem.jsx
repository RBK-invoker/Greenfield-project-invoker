import React from 'react';

const ListItem = (props) => (
  <div>
    { props.patient.number }
    { props.patient.Firstname }
    { props.patient.Lastname }
    { props.patient.Gender }
    { props.patient.Age }
    { props.patient.Phone }
    { props.patient.Conditions }
    { props.patient.Past_diseases }
    { props.patient.Currentlly_medications }
    { props.patient.Genetic_diseases }
    { props.patient.Allergies }
    { props.patient.description }
  </div>
)

export default ListItem;

