import React, {useEffect} from 'react'
import classes from './Cockpit.module.css'

const Cockpit = (props) => {
    useEffect(()=>{
        console.log("Cockpit.js useEffect")
        // http request...
        setTimeout(()=>{
            alert("Saved data to the cloud")
        }, 1000)
        return ()=>{
            console.log("Cockpit.js cleanup work")
        }
    },[]);
    
    useEffect(()=>{
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect')
        }
    })

    let assignedClasses = []
    let btnClass = ''

    if (props.showPersons) {
        btnClass = classes.Red
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button
                className={btnClass}
                onClick={props.clicked}
            >Toggle persons</button>
        </div>

    );
}

export default React.memo(Cockpit);