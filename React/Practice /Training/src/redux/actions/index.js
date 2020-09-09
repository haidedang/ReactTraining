
let withdraw = (amount) => {
    return {
        type: 'WITHDRAW',
        payload: amount
    }
}