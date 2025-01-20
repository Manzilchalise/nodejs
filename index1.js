// var
//functional scope
//var x=100
/*if(true){
    console.log(x)
    x=500
}
console.log(x)

var x=100
if(true){
let x=500
console.log(x)
}
console.log(x)
const x=100
console.log(x)
x=500
console.log(x)
var x=[1,2,3,4,5,6,7,8,9]
console.log(typeof x)
let y={name:"John",age:25}
console.log("name:",y.name)
console.log("age:",y.age)
let students=[
    {name:"John",age:25},
    {name:"Jane",age:24},
    {name:"Jim",age:23}
]
console.log("student:",students[0].name)
console.log(true||false)
if(1==='1'){
    console.log("true")
}
let a=100;
switch(a){
    case 100:
        console.log("greater")
        break
    case 200:
        console.log("lesser")
        break
    default:
        console.log("equal")
}
let x=[1,2,3,4,5,6,7,8,9]
let y=x.map((xp)=>{
    return xp*2
    })
    console.log(y)
    let x=[1,2,3,4,5,6,7,8,9]
    x.forEach((x,index,arr)=>{
        console.log(x,index,arr)

    })
   function sum(a,b){
       return a-b
   }
   console.log(sum('1','2'))
   let x="apple"
   let y="banana"
   console.log(x+y)
   function sum(a,b){
       return a+b
   }
   const sum1=(a,b)=>{
    return a+b;
   }
   console.log(sum1(1,2))
   let x=10
   let y=20
   let z="+"
   switch(z){
    case '-':
        console.log(x-y)
        break
    case '+':
        console.log(x+y)
        break
    case '/':
        console.log(x/y)
        break
    case '*':
        console.log(x*y)
        break
    case '%':
        console.log(x%y)
        break
    default:
        console.log("Invalid")
   }
//for in and for out
let students={
    name:"John",
    age:25,
    city:"New York"
}
for(let key in students){
    console.log(key,students[key])
}
const lop=[10,20,30,40,50]
for (let x of lop){
    console.log(x)
}*/
const lop=[1,2,3,4,5]
for (let x in lop){
    console.log(x)
}