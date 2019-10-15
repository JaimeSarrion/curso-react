import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliarie/Auxiliarie'
import Burguer from '../../components/Burguer/Burguer';
import BuildControls from '../../components/Burguer/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burguer/OrderSummary/OrderSummary'
import Axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}
class BurguerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: null,
    }

    componentDidMount() {
        Axios.get('https://burguer-builder-d0e8d.firebaseio.com/Ingredients.json')
            .then(response => {
                console.log(response)
                this.setState({ ingredients: response.data })
            })
            .catch(error => { this.setState({error: true})})
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map((igKey) => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ purchasable: sum > 0 })
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
        this.updatePurchaseState(updatedIngredients);
    }
    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    }
    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }
    purchaseContinuedHandler = () => {
        // alert('You Continue!!')
        this.setState({ loading: true })
        const data = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Jaime',
                addres: {
                    street: 'TestStreet 2',
                    zipCode: '06006',
                    country: 'Spain'
                },
                email: 'jaime@test.com'
            },
            deliveryMethod: 'fastest'
        }
        Axios.post('/orders.json', data)
            .then(response => {
                this.setState({ loading: false, purchasing: false })
            }).catch(error => {
                console.log(error)
                this.setState({ loading: false, purchasing: false })
            })
    }

    render() {
        const disableInfo = {
            ...this.state.ingredients
        }
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }
        // {salad: true, meat: false ...}
        let orderSummary = null
        let burguer = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />

        if (this.state.ingredients) {
            burguer = (
                <Aux>
                    <Burguer
                        ingredients={this.state.ingredients}
                    ></Burguer>
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disableInfo}
                        price={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        order={this.purchaseHandler}
                    ></BuildControls>
                </Aux>
            )

            orderSummary = <OrderSummary
                ingredients={this.state.ingredients}
                purchasCanceled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinuedHandler}
                price={this.state.totalPrice}
            ></OrderSummary>
        }

        if (this.state.loading) {
            orderSummary = <Spinner></Spinner>
        }

        return (
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}
                >
                    {orderSummary}
                </Modal>
                {burguer}
            </Aux>
        );
    }
}

export default withErrorHandler(BurguerBuilder, Axios) 