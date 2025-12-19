// for loop basic iterations
// for( initialization; condition; increment) {}
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("loop before 5 number");
        
    }
    // console.log(element);
    
}
    // console.log(element); not accessable outside the loop scope topic 

    for (let i = 1; i <= 10; i++) {
        // console.log(`Outer Loop value: ${i}`);
        
        for (let j = 1; j <= 10; j++) {
            // console.log(`Inner Loop Values: ${j} and inner loop: ${i}`);
            // console.log(i + '*' + j + '=' + i*j);
            
            
        }
        
    }

let myArraay = ["flash", "batman", "superman"]
// console.log(myArraay.length);


for (let index = 0; index < myArraay.length; index++) {
    const element = myArraay[index];
    // console.log(element);
    
}


// some keywords break(to stop) and continue  (to continue for limit)

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`5 Detected`);
//         break;
//     }
//     console.log(`Value of i is: ${index}`);
    
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`5 Detected`);
        continue
    }
    console.log(`Value of i is: ${index}`);
    
    
}