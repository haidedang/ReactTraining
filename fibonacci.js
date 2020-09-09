function fibonacci (nums) {
    if( nums == 0 ){
        return 0; 
    }

    if( nums == 1) {
        return 1 ;
    }

    if (nums == 2) {
        return 1 ; 
    }
    let sum = 0; 
    for(i=3 ; i<= nums; i++) { 
        sum += (i-2)*(fibonacci(2)+fibonacci(1)) ; 
    }
    return sum; 
}

console.log(fibonacci(4));