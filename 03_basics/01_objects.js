// singleton  
// Object.create

// object literals
const mySym = Symbol('key1')

const newObj = {
    name: 'manav',
    'full name': 'Manav Singh',
    age: 20,
    [mySym]: 'mykey1',
    addres: 'noida',
    email: 'manav@gmail.com',
    isLoggedIn: false,
    lastLoggedInDays: ['Monday', 'Tuesday', 'Friday']
}

// console.log(newObj.email);
// console.log(newObj['email']);
// console.log(newObj['full name']);
// console.log(newObj[mySym]);

// Object.freeze(newObj)
newObj.email = 'user@gmail.com'

// console.log(newObj);

newObj.greeting = function() {
    console.log('hello');
    
}
newObj.greetingTwo = function() {
    console.log(`Hello User Your details are ${this.name}`);
    
}
console.log(newObj.greeting());
console.log(newObj.greetingTwo());



//  here the objects are declared in literals form simple 


