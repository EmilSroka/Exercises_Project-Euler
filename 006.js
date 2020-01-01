function sumSquareDifference(n) {
    let sum = 0;
    let sumOfSquares = 0;
    for(let i=1; i<=n; i++){
        sum += i;
        sumOfSquares += i ** 2;
    }
    return sum ** 2 - sumOfSquares;
}