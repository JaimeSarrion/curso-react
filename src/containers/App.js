import React, { Component } from 'react';
import Persons from '../components/Persons/Persons'
import './App.css';
import classes from './App.module.css'

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 29 },
      { id: '2', name: 'Manu', age: 24 },
      { id: '3', name: 'Stephanie', age: 12 },
    ],
    ostherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log("Pressed!!");
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: 'Manu', age: 24 },
        { name: 'Stephanie', age: 20 },
      ],
      otherState: 'some other awesome state',
      showPersons: false
    })
  }

  togglePersonsHandler = () => {
    const doesShow = !this.state.showPersons
    this.setState({ showPersons: doesShow })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: person })
  }

  deletePersonHandler = (index) => {
    const person = [...this.state.persons];
    person.splice(index, 1);
    this.setState({ persons: person })
  }

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div >
          <Persons
            clicked={this.nameChangedHandler}
            changed={this.deletePersonHandler}
            persons={this.state.persons}
          />
        </div>

      );
      btnClass= classes.Red 
    }

    let assignedClasses = []

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    console.log(assignedClasses)

    return (
        <div className={classes.App}>
          <h1>Hello World</h1>
          <p className={assignedClasses.join(' ')}>This is really working</p>
          <button
            className={btnClass}
            onClick={this.togglePersonsHandler}
          >Toggle persons</button>
          {persons}
        </div>


    );

    // return React.createElement("div", {className: 'App'}, React.createElement("h1", null, "Hello World!!"));
  };
}



export default App;