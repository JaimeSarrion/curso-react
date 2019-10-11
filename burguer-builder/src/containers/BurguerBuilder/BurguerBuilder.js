import React, {Component} from 'react'
import Aux from '../../hoc/Auxiliarie'
import Burguer from '../../components/Burguer/Burguer';
import BuildControls from '../../components/Burguer/BuildControls/BuildControls'

const INGREDIENT_PRICES ={
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}
class BurguerBuilder extends Component{
   
    state={
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
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
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    }

    removeIngredientHandler = (type) =>{

    }

    render(){
        return(
            <Aux>
                <Burguer 
                    ingredients = {this.state.ingredients}
                ></Burguer>
                <BuildControls
                    ingredientAdded= {this.addIngredientHandler}
                ></BuildControls>
            </Aux>       
        );
    }
}

export default BurguerBuilder