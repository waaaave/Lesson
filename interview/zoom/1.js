var tmp = new Date()

function f(condition){
    
    console.log(tmp);
    if (condition) {
        var tmp = 'itcleanCoder'
        return tmp
    }else{
        console.log(tmp);
        return null
    }
}

f(false)