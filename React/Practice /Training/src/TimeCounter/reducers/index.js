let reducers = (state, action) => {
    switch (action.type) {
        case 'SET_ACTIVESESSION':
            return {
                ...state,
                activeSession: action.payload
            }
        case 'INCREASE_COUNTER':
            return {
                ...state,
                [action.payload]: state[action.payload] + 1
            }
        case 'DECREASE_COUNTER':
            return {
                ...state,
                [action.payload]: state[action.payload] - 1
            }
        default:
            return state;
    }
}

export default reducers