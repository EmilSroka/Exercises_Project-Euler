function specialPythagoreanTriplet(sumOfabc) {
    for(let [a, b, c] of possibleNumbers(sumOfabc)){
        if(a ** 2 + b ** 2 === c ** 2){
            return a*b*c;
        }
    }
    return NaN;
   }
   
   function *possibleNumbers(sum){
       for(let a=1;a<sum;a++){
           for(let b=a;b<sum;b++){
               let c = sum - a -b;
               yield [a, b, c];
           }
       }
   }