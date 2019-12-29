function largestPrimeFactor(number) {
    let prime = 2;
    let max = NaN;
    while(prime <= number){
        if(number % prime === 0){
            max = prime;
            number /= prime;
        } else {
            prime++;
        }
    }
    return max;
}