import React, {Component} from 'react';
import Person from './Person/Persons';

class Persons extends Component {
  render () {
    return (this.props.persons.map((person, index)=>{
        return <Person
          name={person.name}
          age={person.age} key={index}
          change={(event) => this.props.changed(event, index)}
          remove={this.props.remove.bind(this, index)}
          />
      })
    )}
  }

export default Persons;
