import React, {Component} from 'react'
import Person from './Person/Person'

class Persons extends Component {
    // static getDerivedStateFromProps(props, state){
    //     console.log("Persons.js getDErivedStateFromProps");
    //     return state;
    // }
    // componentWillReceiveProps(props){
    //     console.log("Persons.js componentWillReceiveProps", props)
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Persons.js shouldComponentUpdate")
        return true;
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Persons.js getSnapshotBeforeUpdate")
    }
    componentDidUpdate(){
     console.log("Persons.js componentDidUpdate")   
    }
    componentWillUnmount(){
        console.log("Persons.js Component wil unmount")
    }
    render (){
        console.log("Persons.js rendering...")
        return this.props.persons.map((person, index) => {
    
        return <Person
            click={() => this.props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.props.changed(event, person.id)}
        />
    })
    }
}

export default Persons;