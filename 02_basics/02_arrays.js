const marvel_heros = ['ironman', 'thor', 'hulk']
const dc_heros = ['superman', 'batman', 'wonderwomen']

// marvel_heros.push(dc_heros)  // add dc herosarry in marvel heros  marvelheros[marvelheros, dcheros]

// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

const allHeros = marvel_heros.concat(dc_heros) //same just add in one array array [all elements of both array]
// console.log(allHeros);
 
const spreadHeros = [...marvel_heros, ...dc_heros]
// console.log(spreadHeros);   // same spead all arryain one array 

const anotherArray = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10,[11, 12, 13]]]
// console.log(anotherArray); 

const flatArray = anotherArray.flat(2)
// console.log(flatArray); // flat means all array in array in arry elements in one array 
console.log(Array.isArray('Manav')); // check wheather the passed parameter is array or not
console.log(Array.from('Manav')); //converts everything inot array
console.log(Array.from({name: 'Manav'})); //intresting case

let num = 100, num2 = 200, num3 = 300
console.log(Array.of(num, num2, num3));

