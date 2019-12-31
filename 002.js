function fiboEvenSum(n) {
    let previous = 1 ,current = 1 ,sum = 0;
    for(let termIndex=2; termIndex<=n; termIndex++){
        [previous, current] = [current, previous + current];
        if(isEven(current)){
            sum += current;
        }
    }
    return sum;
}

/* helper */
function isEven(number){
    return number % 2 === 0
}