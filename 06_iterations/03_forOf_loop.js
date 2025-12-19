// for of loop 
// array specefic loop 
const arr = [1, 2, 3, 4, 5]

//for of loop 
for (const num of arr) {  // object means the value on which have to apply loop not the object we studied
    // console.log(num);
    
}

// string 

const greeting = "hello manav"
for (const greet of greeting) {
    // if (greet == " ")
    // continue
    // console.log(`Each char is: ${greet}`);
    
}

// Map
const map = new Map() // map is an object in himself
map.set('In', 'Inida')
map.set('US', 'Uinted States')
map.set('JP', 'Japan')
map.set('In', 'Inida') //copy not print only unique

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':', value);
    
}

// for Objects 
const games = {
    game1: "basket ball",
    game2: "foot ball",
    game3: "Cricket",
}

// for (const [key, value] of games) {
//     console.log(key, ":", value);    // not workable in objects 
// }

