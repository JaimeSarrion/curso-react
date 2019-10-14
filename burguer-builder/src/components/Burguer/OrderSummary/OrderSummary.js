import React, { Component } from 'react'
import Aux from '../../../hoc/Auxiliarie'
import Button from '../../UI/Button/Button'


class OrderSummary extends Component {
    // this could be a functional component, doesn't have to be a class
    componentDidUpdate() {
        console.log('[OrderSummary.js] Will Update')
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: "capitalize" }}></span>
                        {igKey}: {this.props.ingredients[igKey]}
                    </li>
                )
            })
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with following ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: {this.props.price.toFixed(2)} €</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchasCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        )
    }

}


export default OrderSummary