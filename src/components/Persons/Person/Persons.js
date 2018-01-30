import React from 'react';
import classes from './Persons.css'

const Person = (props) =>{
  return (
    <div className={ classes.Person }>
      <button onClick={props.remove}>Remove Person</button>
      <input type="text" onChange={props.change} value={props.name} />
      <h3>{props.name}</h3>
      <p>{props.age}</p>
    </div>
  )
}

export default Person;
