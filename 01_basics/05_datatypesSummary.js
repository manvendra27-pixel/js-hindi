// To master javascript master objects and rowser eventss or web events 

// primitive datatypes (they are call by value )
    // 7 types :- String, Number, Bollean, null, undefined, symbol(to make vakue unique), BigInt(scientify values). 

const score = 100 //number

const scoreValue = 100.3 //Number

const outsideTemp = null // typeof is obj




//symbols
const id = Symbol('123')
const anotherID = Symbol('123')

console.log(scoreValue === anotherID);

// const bigNumber = 123456789012345678901234567890912345678901234567890n

//  refrence type or non primitive datatypes 
    // Arrays, Objects(very imp), functions

const heros = ["ironman", "thor", "hulk", "bucky"] //array typeof is obj

let myID = {        //objects
    name: "manav",
    age: 20 
}

//functions
const myfunction = function() {
    console.log("Hello world ");
    
}

// To check wheather the variable is of what type us typeof function

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myfunction);
console.log(typeof heros);

//**************** Stcak and Heap Memory ****************

//in js just like datatypes are of two types (primitive) and (non primitive)---memory is of two types (Stcak) and (Heap)
// stack :- that use to stores all primitive types 
// heap :- that use to stores all non-primitive types 

// Whenever stack memory is used, it means you get a copy of whatever variable you declared.
//And whenever a memory is defined within the heap, whether an object or anything else, you get a reference to it from there, meaning the changes are to the original values.
// Example: 
 let myName = "Manvendra singh"

 let anotherName = "myName"

 console.log(myName);
 console.log(anotherName);

 let user_1 = {
    email: "abc@gmail.com",
    upiID: "user@sbi"
 }

 let user_2 = user_1

 user_2.email = "pqr@gmail.com"

 console.log(user_1.email);
 console.log(user_2.email);
 
 
