import React from 'react';
import Person from './Person/Persons';

const persons = (props) => (
  props.persons.map((person, index)=>{
    return <Person
      name={person.name}
      age={person.age} key={index}
      change={(event) => props.changed(event, index)}
      remove={props.remove.bind(this, index)}
      />
  })
);

export default persons;
