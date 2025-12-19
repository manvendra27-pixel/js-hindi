// for objects 
// we use for in loop to access data in objects 
const myobj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift:'by apple'
}

for (const key in myobj) {
    // console.log(`${key}: ${myobj[key]}`);
    
    
}

// Q. can we use for in for array?

const arr = ['js', 'java', 'cpp']

for (const key in arr) {
    // console.log(`${key}: ${arr[key]}`);
    
}

// const map = new Map() 
// map.set( 'In','India')
// map.set( 'USA','United States of America')
// map.set( 'JP','Japan')

// // console.log(map);

// for (const key in map) {
//     console.log(key);
    
// }

// map can not be iteratable

