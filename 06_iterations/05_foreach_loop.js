const  arr = ['string1', 'string2', 'string3', 'string4', 'string5']

// there are 3 way to use forr each loop

// 1.
arr.forEach( function (value, index, arrayItself) {
    // console.log(value, index, arrayItself);
    
} )

//2.
function array(value, index, arrayItself) {
// console.log(value, index, arrayItself);
}
arr.forEach(array)

//3.
arr.forEach( (item) => {
    // console.log(item);
    
} )

    //3.1
    const name = (value) => {
        console.log(value);
        
    }
    arr.forEach(name)

// 4. [{}, {}, {}] obj in array how to acceess using for each

const myCoding = [
    {
        langName: 'javascript',
        langFile: 'js'
    },

    {
        langName: 'java',
        langFile: 'javac'
    },

    {
        langName: 'python',
        langFile: 'py'
    },
]

myCoding.forEach( (value) => {
    // console.log(value.langName);
    
} )


