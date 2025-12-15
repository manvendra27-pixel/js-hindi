const account_Id = 341342; //Const: once it declared now futher it can not be changed (ek bar declare ho gayi toh ho gayi abb nahi badli ja sakti).(lock the variable)
let accoount_Email = "mana@gmail.com" // let
var account_Password = "123456";
account_City = "Noida"; //possible but not suggested

let account_state;

// account_Id = 123; not allowed

console.log(account_Id);


accoount_Email = "manav@123gmail.com";

account_Password = "765432";

account_City = "Meerut";

console.table ([account_Id, accoount_Email, account_Password, account_City, account_state]);

/* 
    Prefer not to use var as variable declare
    because in the issue of block scope and functional scope.
*/




