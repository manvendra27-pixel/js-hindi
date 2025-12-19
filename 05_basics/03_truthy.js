// false = falsy
// 0, -0 = falsy
// BigInt 0n = falsy
// "" = falsy 
// null = falsy
// undefined  falsy
// NaN = falsy


// these all are falsy value so if these declare emptu they are falsy

// truthy values 
//true, "anything int string except empty", " ", [array], {object}, function(){empty function}

// to check array empty 
const arr = [] 
if (arr.length === 0) {
    // console.log("array is empty");
    
}

//to check object is empty
const emptyObj = {}
if(Object.keys(emptyObj).length === 0 ) {
    // console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??):on work on null and undefined 
 
let value
// value = 5 ?? 10
// value = null ?? 10
// value = undefined ?? 10
value = undefined ?? 10 ?? 30

console.log(value);

//terniary operators 

//syntax: 
// condition ? true : false

let price = 100

price >= 80 ? console.log("yes") : console.log("No");

