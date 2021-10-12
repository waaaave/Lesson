// class 
class Coder{
    name(val){
        console.log(val);
        return val;
    }
    skill(val){
        console.log(this.name('wave') + ':' + 'Skill-' + val);
    }
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    add(){
        return this.a + this.b;
    }
}
let wave1 = new Coder(1,2);
console.log(wave1.add());
let wave = new Coder;
wave.name('wave');
wave.skill('tt');

class htmler extends Coder{

}

let wave2 = new htmler;

wave2.name('威武');