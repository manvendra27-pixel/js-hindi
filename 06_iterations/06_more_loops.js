// const  arr = ['string1', 'string2', 'string3', 'string4', 'string5']


// const value = arr.forEach( (values) => {
//     // console.log(values); 
//     return values;  // for each never returns value
// } )

// console.log(value);

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//1. way
// const newNums = number.filter( (num) => num > 5 )

//2. way
const newNums = number.filter( (num) => {
    // when {} scope open have to return the value
   return num > 5;
} )
console.log(newNums);