var plusOne = function(digits) {
    var n = digits.length
    for (let i = n-1; i>=0; i--){
        if(digits[i] == 9){
            digits[i] = 0;
            if (i == 0) {
              digits[0] = 1
              for(let j = 0;j<n; j++){
                digits[j+1] = 0
              }
              return digits
            }
            } else {
                digits[i] += 1;
                return digits;
            }
    }
};
console.log(plusOne([9,9]));