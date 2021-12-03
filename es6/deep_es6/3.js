var firstInstance = { id: 1 }
var secondInstance = { id: 2 }

var sqlServer = {}

sqlServer[firstInstance] = "SQLSERVER1"
sqlServer[secondInstance] = "SQLSERVER2"
console.log(sqlServer[firstInstance]);
console.log(Object.keys(sqlServer));