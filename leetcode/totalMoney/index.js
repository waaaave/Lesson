var totalMoney = function(n) {
  return (parseInt(n/7))*28 +7*((parseInt(n/7))*((parseInt(n/7))-1)/2) + (((parseInt(n/7))+1)+(parseInt(n/7))+(n-7*(parseInt(n/7))))*(n-7*(parseInt(n/7)))/2
};