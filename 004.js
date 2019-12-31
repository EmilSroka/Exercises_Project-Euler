function largestPalindromeProduct(n) {
    let maxNumber = 10 ** n - 1;
    let minNumber = 10 ** (n - 1);
    let palindromes = [];
    for(let i=maxNumber; i>= minNumber; i--){
        for(let j=maxNumber; j>= minNumber; j--){
            if(isPalindrome(i*j)){
                palindromes.push(i*j);
            }
        }
    }
    return Math.max(...palindromes);
}
  
/* helper */
function isPalindrome(number){
    let asString = String(number);
    let reversed = [...asString].reverse().join('');
    return asString === reversed;
}