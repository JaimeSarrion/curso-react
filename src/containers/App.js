import React, { Component } from 'react';
import Persons from '../components/Persons/Persons'
import './App.css';
import classes from './App.module.css'
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    console.log("App.js contructor doing things")
  }

  state = {
    persons: [
      { id: '1', name: 'Max', age: 29 },
      { id: '2', name: 'Manu', age: 24 },
      { id: '3', name: 'Stephanie', age: 12 },
    ],
    ostherState: 'some other value',
    showCockpit: true,
  }

  static getDerivedStateFromProps(props, state){
    console.log("App.js getDerivedStateFromProps", props)
    return state;
  }
  // componentWillMount(){
  //   console.log("App.js componentWillMount")
  // }
  componentDidMount(){
    console.log("App.js componentDidMount")
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
    console.log("App.js rendering...")
    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <Persons
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            persons={this.state.persons}
          />
      );

    }

    return (
        <div className={classes.App}>
          <button onClick={()=> {this.setState({showCockpit: false})}}>
            Remove Cockpit
          </button>
          {this.state.showCockpit ? <Cockpit
            title = {this.props.appTitle}
            showPersons={this.state.showPersons}
            persons = {this.state.persons}
            clicked = {this.togglePersonsHandler}
          /> : null}
          {persons}
        </div>
    );

    // return React.createElement("div", {className: 'App'}, React.createElement("h1", null, "Hello World!!"));
  };
}



export default App;