//Dates

const date = new Date()
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());

// console.log(typeof date);

//another way

let myCreateedData = new Date(2025, 11, 16)
// console.log(myCreateedData.toDateString());

// let myCreateedDataa = new Date(2025, 11, 16, 11, 5)
// console.log(myCreateedDataa.toLocaleString());

let createdDate = new Date("05-27-2004")
console.log(createdDate.toLocaleString());

let myTimeStamps = Date.now()

console.log(myTimeStamps);
console.log(myCreateedData.getTime());
// to seconds
console.log(Math.round(Date.now()/1000))

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default', { weekday: "long"})
console.log(newDate);


 
 

