//if statement 
if (2 != 2 ) {
    // console.log("executed");
        
}

//>, <, >=, <=, ==, ===, !=, !== 

let temp = 41
if (temp === 41) {
    // console.log("less than 50");
    
} else {
    // console.log("greater than 50");
    
}

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`user power ${power}`);
    
// }
// console.log(`user power ${power}`);

const balance = 1000;

// if (balance > 500) console.log("test");  this can be done but not do this for better practice 

//nested if else 

    // if (balance < 500 ) {
    //     console.log(" less than 500");
        
    // } else if (balance < 750) {
    //     console.log(" less than 750");

    // } else if (balance < 900) {
    //     console.log(" less than 900");
        
    // }else {
    //     console.log(" less than 1200");

    // }

    // let a= 120, b=20, c=123

    // if (a > b) {
    //     if (a > c) {
    //         console.log("a is greater");
            
    //     } else {
    //         console.log(" c is greater");
            
    //     }
        
    // } else {
    //     console.log("b is greater ");
        
    // }

    const userLoggedIn = true 
    const debitCard = true
    const loogedInFromGoogle = true
    const loogedInFromEmail = false


    if (userLoggedIn && debitCard && 3 ==2) {
        console.log("User can by anything ");
        
    }

    if (loogedInFromGoogle || loogedInFromEmail) {
        console.log("user can loggin");
        
    }