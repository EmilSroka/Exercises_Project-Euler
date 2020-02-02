function divisibleTriangleNumber(divisorsNumber) {
    for(let trianagleNumber of trianagleNumbers() ){
        if(numberOfDivisors(trianagleNumber) > divisorsNumber){
            return trianagleNumber;
        }
    }
}
  
function * trianagleNumbers(){
    let naturalNumber = 1;
    let trianagleNumber = 0;
    while(true){
        trianagleNumber += naturalNumber;
        naturalNumber += 1;
        yield trianagleNumber;
    }
}
  
function numberOfDivisors(number){
    let divisors = 0;
    for(let potential = 1; potential * potential <= number; potential++ ) {
        if(number % potential == 0){
            divisors++;
            if(potential * potential != number){
                divisors++;
            }
        }
    }
    return divisors;
}