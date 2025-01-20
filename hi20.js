/*const sum=(x,y) =>{
    return x+y;
}
//clOSURE
const firstfunction=()=>{
    console.log('first function')
    const secondfunction=()=>{
        console.log('second function')
    }
    return secondfunction;
}
const closure=firstfunction()
closure()
const incrementDecrement=()=>{
    let count=0
    return{
        increment:()=>{
            count++;
            return count
        },
        decrement:()=>{
            count--;
            return count
        },
        getcount:()=>{
            return count
        }
    }
}
const counter=incrementDecrement()
counter.increment()
counter.increment()
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.getcount())
//Callback
const sum=(x,y)=>{
    return x+y
}
let summ=sum(5,10)
console.log("sum of the no is",summ)

const sum=(x,y,callback)=>{
    callback(x+y)
}
sum(5,10,(result)=>{
    console.log("sum of the no is",result)
})

const fetchData=(callback)=>{
  let data="Data from server"
  if(data){
    callback(null,data)
    }
    else{
      callback("Data not found",null)
    }
}
fetchData((error,result)=>{
  if(error){
    console.log(error)
  }
  else{
    console.log(result)
  }
})*/
//Promise
//pending
//resolved
//rejected
const newp=new Promise((resolve,reject)=>{
    let data=true
    if(data){
        resolve(data)
    }
    else{
        reject("Data not found")
    }
})
newp.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("finally block")
})
