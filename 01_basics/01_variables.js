//let,const and var
const accountId=10101;

let accountName="XYZ";

var accountEmail="xyz@email.com";

accountPassword="1234";//cwe can declare a variable like this works but is not a good practice

// accountDetails;//this shows not defined,that means variables are not declared

let accountDetails;//can declare like this but shows undefined that means value is not assigned

// accountId=20000;//this is not allowed,as it is of const type

accountName="ABC"
accountEmail="abc@email.com";
accountPassword="456";

/*NOTE:prefer not  using var due to issues in block scope and functional scope
*/

console.log(accountId);
console.log(accountName);

//instead of console.log each individually we can view all the variables in a table
console.table({accountName,accountEmail,accountPassword,accountDetails})