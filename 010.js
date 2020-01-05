function primeSummation(n) {
    return primesBelow(n).reduce((acc, el) => acc + el, 0);
}
  
/* helper */
function primesBelow(limit){
    let sieve = [false, false];
    for(let number=2; number<limit; number++){
        if(sieve[number] === undefined){
            sieve[number] = number;
            for(let notPrime = 2 * number; notPrime < limit; notPrime += number) {
                sieve[notPrime] = false;
            }
        }
    }
    let primes = sieve.filter( value => typeof value === 'number' );
    return primes;
}
  
  