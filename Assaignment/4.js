var x=[1,2,33,4,5]// This is the initialization of array 
max=findmax(x)//This call the function findmax
console.log(max)//THis displays the output
function findmax(x){//This is the function declaration
   var c=Math.max(...x)//passing the array arguments with ...
   return c
}