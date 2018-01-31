import React, {Component} from 'react';
import classes from './Persons.css'

class Person extends Component {
    render(){
      return (
        <div className={ classes.Person }>
          <button onClick={this.props.remove}>Remove Person</button>
          <input type="text" onChange={this.props.change} value={this.props.name} />
          <h3>{this.props.name}</h3>
          <p>{this.props.age}</p>
        </div>
      )
    }
  }

export default Person;
