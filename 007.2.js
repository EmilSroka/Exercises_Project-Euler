function nthPrime(n) {
    if(n < 1) return Nan;

    let testedNumbers = possiblePrimes();
    const primes = [2];
    let index = 1;

    for(let possiblePrime of testedNumbers){
        if(index === n) return primes.pop();;

        if(isPrime(possiblePrime, primes)){
            primes.push(possiblePrime);
            index++;
        }
    } 
}
  
function *possiblePrimes(){
    yield 3;
    let naturalNumber = 1;
    while(true){
        yield 6*naturalNumber -1;
        yield 6*naturalNumber +1;
        naturalNumber++;
    }
}

function isPrime(number, previousPrimes){
    for(let prime of previousPrimes){
        if(prime * prime > number) return true;
        if(number % prime === 0){
            return false;
        }
    }
}