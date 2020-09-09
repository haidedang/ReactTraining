import { createStore } from 'redux'
import reducers from './reducers'

let initialState = {
    days: 11,
    hours: 31,
    minutes: 27,
    seconds: 11,
    activeSession: "DAYS"
};

const store = createStore(reducers, initialState);

export default store; 