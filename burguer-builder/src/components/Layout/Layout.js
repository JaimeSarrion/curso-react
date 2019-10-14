import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliarie'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'


class Layout extends Component {
    state = {
        showSideDraw: true
    }

    sideDrawerCloseHandler = () => {
        this.setState({ showSideDraw: false })
    }

    render() {
        return (
            <Aux>
                <Toolbar></Toolbar>
                <SideDrawer
                    open={this.state.showSideDraw}
                    closed={this.sideDrawerCloseHandler}></SideDrawer>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }

}

export default Layout
