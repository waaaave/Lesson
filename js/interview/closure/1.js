function makeSakary(base,performance){
  return base + performance
}

const S5 = 10000;
const S6 = 20000;

let A,B,C;
A = makeSakary(S5, 3000);
B = makeSakary(S6, 4000);
C = makeSakary(S5, 2000)
console.log(A,B,C);