{} // this is scope whenever we us this with function, loop, condition except obj declaration
//global scope means
let a = 27 //gloabal
if (true) {
    let a = 12   // block scope variables only work b/w {}
    const b =32
    var c = 43
    // console.log('Inner', a);
}



// console.log(a);
// console.log(b);
// console.log(a);

//nested scopes
function one() {
    // const username = 'manav'

    //another function
    function two() {
        const age = 27
        // console.log(username);
        
    }
    // console.log(age);

    two()
    
}
one()

// if else scope

if (true) {
    const username = 'manav'
    if (username ==="manav") {
        const website = ' youtube'
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

//***********interesting thing about function */

//basci function
function addOne(num) {
    return num + 1
}

console.log(addOne(4))


// expression when function holde in a variable 
const addTwo = function(num) {
    return num + 1 
}
console.log(addTwo(5))

