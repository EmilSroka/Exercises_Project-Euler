function smallestMult(n) {
    let accumulator = 1;
    for(let i=2; i<=n; i++){
        accumulator = lowestCommonMultiple(accumulator, i);
    }
    return accumulator;
}
  
/* helper */
function lowestCommonMultiple(a, b){
    let ab = a*b;
    while(b !== 0){
        [a, b] = [b, a%b];
    }
    return ab/a;
}
  