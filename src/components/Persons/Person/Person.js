import React from 'react';
import classes from './Person.module.css';


const person = (props) => {

    return (
        <div className= {classes.Person}>
            <p onClick = {props.click}>I'm {props.name} a person and I am {props.age}</p>
            <p>
                {props.children}
            </p>
            <input type="text" onChange={props.change} value={props.name}></input>
        </div>
    )
};

export default person;  