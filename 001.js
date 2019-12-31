function multiplesOf3and5(number) {
    let sum = 0;
    sum += sumMultiplesOfN(3, number);
    sum += sumMultiplesOfN(5, number);
    sum -= sumMultiplesOfN(15, number);
    return sum;    
}

/* helper */
function sumMultiplesOfN(n, limit) {
    let sum = 0;
    for(let i=n; i<limit; i+=n){
        sum += i;
    }
    return sum;
}