function sayMyName() {
    console.log('M');
    console.log('A');
    console.log('N');
    console.log('A');
    console.log('V');
 
}

// sayMyName()  //here when i use saMyName its a refrence and when i use sayMyName() no its an excute

// function addTwoNumbers(number1, number2){  
//      console.log(number1 + number2);
     
// }

// const result = addTwoNumbers(3, 4)
// console.log(result);

function addTwoNumbers(number1, number2){ 
    // let result = number1 + number2
    // return result

    return number1 + number2  
}

const result = addTwoNumbers(3, 4)
// console.log("Result: ", result);

function loginUserMessage(username = 'sam') {
    if (!username) {
        console.log('Please enter a name first');
        return
    }

    return `${username} just logged in`
}
// console.log(loginUserMessage('manava'));

function student(name= 'default name', course= 'default course', id= 0) {
            // name = name
            // course = course
            // id = id 

            if(name === 'undefined' && course === 'undefined' && id === NaN) {
                console.log('Please Enter the name first');
                return
            }
            return `${name} is enroll in ${course} with id ${id} `
}

console.log(student('manav', 'MCA', 21));
