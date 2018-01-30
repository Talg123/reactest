import React, { Component } from 'react';
import Persons from '../components/Persons/Person';
import classes from './App.css';

class App extends Component {
   state = {
    persons: [
      {name: "Tal", age: 28},
      {name: "Gal", age: 28},
      {name: "Daniel", age: 27}
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
    let btnClass = '';
    if(this.state.showPersons){
      persons = (
        <div>
          <Persons
          persons={this.state.persons}
          remove={this.removePersonHandler}
          changed={this.changeNameHandler} />
        </div>
    )
    btnClass = classes.Red;
    }
    let classe = [];

    if(this.state.persons.length <= 2){
      classe.push(classes.red);
    }
    if(this.state.persons.length <= 1 ){
      classe.push(classes.bold);
    }
    if(this.state.persons.length >2){
      classe = [];
    }
    return (
        <div className={classes.App}>
          <h1>Hi, my app!</h1>
          <p className={classe.join(" ")}>This is Working!</p>
          <br />
          <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>

          {persons}
        </div>
    );
  }
}

export default App;
