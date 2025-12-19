//normal way to declare and call function
function chai() {
    // console.log('hello manav');
    
}
// chai()

// function declaration using iife 
//  ()() (:this is the function block function defnination)(costructor block execution)
(function chai(name) {
    console.log(`hello ${name}`);
    
})('naman');

( (name) => {
    console.log(`hello ${name}`);
    
})('manav')

//( () => {})()
// why use iife: this function calls imidiately not only this global scope k pollution ki waja se jo global variable hote hai unse kabhi kuch problem hoti hai toh us ko remove or us se bachne k liye use karte hai 