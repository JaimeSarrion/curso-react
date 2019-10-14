import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliarie'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDraw: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({ showSideDraw: false })
    }

    sideDrawerToggleHandler=()=>{
        this.setState((prevState) => {
            return {
                showSideDraw: !prevState.showSideDraw
            }
        })
    }
    render() {
        return (
            <Aux>
                <Toolbar
                    drawerToggleClicked = {this.sideDrawerToggleHandler}
                ></Toolbar>
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
