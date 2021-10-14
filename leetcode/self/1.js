var plusOne = function (digits) {
    let n = 1;
    var add = function (digits) {
        if (digits[digits.length - n] == 9) {
            n++
            add(digits);
        } else {
            if (n == 1) {
                digits[digits.length - n] += 1;
            } else {
                digits[digits.length - n] += 1;
                for (let i = (n - 1); i > 0; i--) {
                    digits[digits.length - i] = 0;
                }
            }

        }
    }
    add(digits);
    return digits;


};
console.log(plusOne([9]));