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
