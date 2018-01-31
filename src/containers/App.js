import React, { Component } from 'react';
import Persons from '../components/Persons/Person';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
   state = {
    persons: [
      {name: "Tal", age: 28},
      {name: "Gal", age: 28},
      {name: "Daniel", age: 27},
      {name: 'Hey', age: 89}
    ],
    showPersons: false
  }
  //Handlers
  togglePersonsHandler = () =>{
    this.setState({showPersons: !this.state.showPersons});
  }
  changeNameHandler = (e, index) =>{
    const persons = [...this.state.persons];
    persons[index].name = e.target.value;
    this.setState({persons});
  }
  removePersonHandler = (index) =>{
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons});
  }
  render() {
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          <Persons
          persons={this.state.persons}
          remove={this.removePersonHandler}
          changed={this.changeNameHandler} />
        </div>
    )}
    return (
        <div className={classes.App}>
          <Cockpit appTitle={this.props.title}
                   toggle={this.togglePersonsHandler}
                   showPersons={this.state.showPersons}
                   persons={this.state.persons}/>
          {persons}
        </div>
    );
  }
}

export default App;
