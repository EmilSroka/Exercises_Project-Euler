function nthPrime(n) {
    const primes = [2];
    let index = 1;
    let possiblePrime = 3;
  
    while(index != n){
        if(isPrime(possiblePrime, primes)){
            primes.push(possiblePrime);
            index++;
        }
        possiblePrime += 2;
    }
  
    return primes.pop();
  }
  
/* Clearly not the best solution, but very interesting */
function isPrime(number, previousPrimes){
    return previousPrimes.reduce(
        (isPrime, prime) => isPrime && number % prime 
    , true);
}
  