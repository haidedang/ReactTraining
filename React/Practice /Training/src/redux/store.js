import reducers from './reducers'
import { createStore } from "redux";

let initialState = { 
    name: 'Hai'
}

const store = createStore(reducers, initialState); 

export default store; 

