// this keyword creates current context  

const user = {
     name: 'manav',
     age: 27,
     welcomeMessage: function () {
        // console.log(`${this.name} welcome to our page `);
        // console.log(this);  
     }
}
// user.welcomeMessage()
// user.name = 'singh'
// user.welcomeMessage()

// console.log(this);


//********Arrow function */

// function chai() {
//     let username = 'manav'
//     console.log(this.username);
   
// }

// chai()

// const chai = function() {
//     let username = 'manav'
//     console.log(this.username);
// }

const chai = () =>{
    let username = 'manav'
    console.log(this);
}

// chai()

//**************Now we talk on actual arrow function */
() => {} // syntax for arrrow functions

// const addTwo = (num1, num2) => {
//         return num1 + num2
//  }

// const addTwo = (num1, num2) =>  num1 + num2 

// const addTwo = (num1, num2) =>  (num1 + num2) 

const addTwo = (num1, num2) => ({username: 'manav'} )
 

 console.log(addTwo(2, 10));
 