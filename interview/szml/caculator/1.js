function myCalculator(init) {
    const that = this //实例
    that.num = init || 0
    myCalculator.prototype.plus = function(num){
        that.num += +num
        return myCalculator.prototype
    }

    myCalculator.prototype.minus = function(num){
        that.num -= +num
        return myCalculator.prototype
    }

    myCalculator.prototype.times = function(num){
        that.num *= +num
        return myCalculator.prototype
    }

    myCalculator.prototype.dividedBy = function(num){
        that.num /= +num
        return myCalculator.prototype
    }

    myCalculator.prototype.equals = function(){
        return that.num
    }

    return myCalculator.prototype
}

console.log(myCalculator(121).plus(1).minus(2).times(3).dividedBy(4).equals() );