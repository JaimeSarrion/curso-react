import React from 'react'
import Aux from '../../hoc/Auxiliarie'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => {
    return (
        <Aux>
            <Toolbar></Toolbar>

            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default layout
