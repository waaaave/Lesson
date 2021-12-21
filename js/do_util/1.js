const d1 = new Date('2021-12-19')
console.log(d1.getDay());
console.log(new Date().getDay());

isWeekday = (date) => date.getDay()%6 != 0
console.log(isWeekday(d1))
console.log(isWeekday(new Date()))
