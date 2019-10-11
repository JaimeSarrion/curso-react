import React, {Component} from 'react'
import Aux from '../../hoc/Auxiliarie'
import Burguer from '../../components/Burguer/Burguer';

class BurguerBuilder extends Component{
   
    state={
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render(){
        return(
            <Aux>
                <Burguer 
                    ingredients = {this.state.ingredients}
                ></Burguer>
                <div>Build Controls</div>
            </Aux>       
        );
    }
}

export default BurguerBuilder