 const user1 = {}   //literals objects

const user = new Object({    // singlleton object
    name: 'manav',
    age: 27,
    email: '1223@mail.com'
})
// console.log(user["name"]);

const User = {}
    User.id = '123weas'
    User.name = 'Manav'
    User.active = true

    // console.log(User);

const regularPerson = {
    id: '123sefs',
    name: {
        userfullname: {
            firstName: 'Manav',
            lastName: 'Singh'
        }
    },
    email: 'singh@gmail.com',
    active: {
        onmonday: true,
        onsunday: false
    }
}

console.log(regularPerson);
console.log(regularPerson.name.userfullname);
console.log(regularPerson['name']['userfullname']);

const obj1 = {1: 'a', 2:'b'}
const obj2 = {3: 'a', 4:'b'}
const obj3 = {5: 'a', 6:'b'}

// const obj4 = {obj1, obj2}

const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);

const obj5 = {...obj1, ...obj2, ...obj3} 
// console.log(obj5);

//how values comes from database

const users = [
    {
        id: 1,
        email: 'h@gmail.com'
    },
    {
        id: 2,
        email: 'd@gmail.com'
    },
    {
        id: 3,
        email: 'c@gmail.com'
    },
]

// console.log(users[0].id);

const obj = {
    id: '123xawd',
    name: 'manav',
    age: 29
}

// console.log(obj);

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// console.log(obj.hasOwnProperty('name'));



const userssss = { 
    id: 123,
    name: "manav"
}
console.log(name);