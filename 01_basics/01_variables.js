const accountId = 144335
let accountEmail = "Eshan11@gmail.com"
var accountPassword = "12345"
acountCity = "Jaipur"
let accountState;

// accountId = 2 //not allowed
/*
prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "hc@hcgmail.com"
accountPassword = "67890"
acountCity = "Goa"

console.log(accountId);
console.table([accountEmail,accountId,accountPassword,acountCity,accountState])
