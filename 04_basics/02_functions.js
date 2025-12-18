// example in e cart shopping app
function calculateCartPrice(val1, val2, ...num1) {  // (...) this dot is a rest operator
    return val1, val2, num1
}

// console.log(calculateCartPrice(100, 200, 300, 400 ));

 const user = {   //onject cresation 
    username: 'Manav',
    price: 999 // type safety checks her and give error if i use prices
 }

 function handleObjects(anyobject) {    //create obj an call in function and anyobject take as paramiter so that it can take anyobject 
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);  //calling object in the function
    
 }
//  handleObjects(user)
// handleObjects({
//     username: 'adil',
//     price: 234
// })
const mynewarray = [200, 300, 400, 500]  //declaring array

function countArray(mynewarray) {   //array function that passes mynewarray as paramiter (can take any name)
    return mynewarray[1]    // this returns the 1st indec value from the srray and stores in it 
}

console.log(countArray(mynewarray)); //this simmpply prints the return value of the array that we ask to return prev
