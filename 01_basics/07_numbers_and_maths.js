const score = 500
// console.log(score);

const balance = new Number(1000)
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(3));

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));

//*********** Maths *****************/
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(5.50));
// console.log(Math.ceil(5.20));
// console.log(Math.floor(5.90));

// console.log(Math.min(1,2,3,4))
// console.log(Math.max(1,2,3,4))

console.log(Math.random()); // if i want values between 0 and 1
console.log(Math.random() * 10 ); //if i want values greater then 0
console.log((Math.random() * 10) + 1); // now value never 0 means value comes is <= 1
console.log(Math.floor((Math.random() * 10)) + 1); // now value never 0 means value comes is <= 1

// and if values want at some min values to max 
const min = 10
const max = 20

console.log((Math.random() *(max - min + 1)) );
console.log(Math.floor((Math.random() *(max - min + 1))) + min );
 









