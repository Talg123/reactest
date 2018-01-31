import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  let classe = [];
  let btnClass = '';

  if(props.ShowPersons){
    btnClass = classes.Red;
  }
  if(props.persons.length <= 2){
    classe.push(classes.red);
  }
  if(props.persons.length <= 1 ){
    classe.push(classes.bold);
  }
  if(props.persons.length >2){
    classe = [];
  }
  return(
    <div className={classes.Cockpit}>
      <h1>{ props.appTitle}</h1>
      <p className={classe.join(" ")}>This is Working!</p>
      <br />
      <button className={btnClass} onClick={props.toggle}>Toggle Persons</button>
    </div>
  )
}

export default cockpit;
