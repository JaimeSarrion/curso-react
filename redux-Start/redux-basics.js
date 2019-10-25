const redux = require('redux')
const createStore = redux.createStore;// crea un store

//State
const initialState = {
    counter: 0
}

//Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1 
        }
    }
    if (action.type === 'ADD_COUNTER') {
        return{
            ...state,
            counter: state.counter + action.valor
        } 
    }
    return state;
}

//Store
const store = createStore(rootReducer)
console.log(store.getState())

//Subscription
store.subscribe(()=>{
    console.log("[Subscription]", store.getState());
})

//Dispatching Action
store.dispatch({type:'INC_COUNTER' })
store.dispatch({type:'ADD_COUNTER', valor: 10})
console.log(store.getState());

