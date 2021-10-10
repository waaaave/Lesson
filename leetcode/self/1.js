var plusOne = function(digits) {
    let n = 1;
    var add=function(n){
        if(digits[digits.length-n]==9){
            n+=1;
            add(n);
        }else{
            if(n==1){
                digits[digits.length-n] +=1;
            }else{
                digits[digits.length-n] +=1;
                for(n;n>1;n--){
                    digits[digits.length-n]=0;
                }
            }

        }
    }
    return digits;
};

console.log(plusOne([1,2,3]));