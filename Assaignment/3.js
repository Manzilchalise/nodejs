var x=50;
var x=30 ;
const z=15;//Both the declarations are okay for the compiler and no error occurs but the latest value of 30 is set
console.log(x)
if(x>10){
    let y=33
    console.log(y)
    // let y=30 error occurs if this is written as let is block scoped
    console.log(z)
//const z=12 Similarly error occurs if this is written as const is block scope
}

    