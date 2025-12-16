const greeting = "Hello"
const name = " Manav"

// console.log(greeting + name); (its very old way to conaticnate strings)

// console.log(`${greeting} ${name} how are you doing today`);
// console.log(`${greeting} ${name.toUpperCase()} how are you doing today`);
// console.log(`${greeting} ${name.toLowerCase()} how are you doing today`);
// console.log(`${greeting} ${name.trim()} how are you doing today`);
// console.log(`${greeting} ${name.slice(1,4)} how are you doing today`);

//Another way to declare string is:
const nam = "Manvendra"
console.log(nam);

const Name = new String('Manav')

// console.log(Name[2]);
// console.log(Name.length);
// console.log(Name.toUpperCase());
// console.log(Name);

console.log(Name.charAt(3));
console.log(Name.indexOf('a'));

const newString = Name.substring(0, 4)
console.log(newString);

const anotherString = Name.slice(-5, 4)
console.log(anotherString);

const address = "123,street,London"
console.log(address);
console.log(address.replace(',', '-'));

console.log(address.includes('123'));

console.log(address.split(','))








