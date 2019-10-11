import React from 'react'
import Aux from '../../../hoc/Auxiliarie'
import Button from '../../UI/Button/Button'


const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key = {igKey}>
                    <span style={{ textTransform: "capitalize" }}></span>
                    {igKey}: {props.ingredients[igKey]}
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
            <p><strong>Total price: {props.price.toFixed(2)} €</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchasCanceled}>CANCEL</Button>
            <Button btnType="Success"clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary