var totalMoney = function(n) {
  let week = parseInt(n/7)
  let days = n-7*week
  let count =  week*28 +7*(week*(week-1)/2) + ((week+1)+week+days)*days/2
  return count
};