// console.log('external file')

// for in 

// let color = [ "white" , "black" , "red" , "green" , "blue"]

// console.log("length",color.length)

// for(let a in color){
//     console.log("color",color[a])
// }


// let y = "arpit atri" 
// console.log("length of y" , y.length)
// let x = ""

// for(let q of y){
//     console.log( q)
// }


// for(let i = 1 ; i <= 10 ; i++){
//     if(i != 7) {
//         console.log(i)
//     }
// }

// for(let a = 1 ; a <= 10 ;a++){
//     if(a == 7 ) continue ;
//     console.log(a)
// }

// let q = "hello"

// console.log(q[i])

// let y = 5

// for(let i = 1 ; i <= y ; i++){

//     let x = "*"
//     let z = " "
//     console.log( z.repeat(y-i) + x.repeat(i))
// }


// ----------------------------------------------------------------------------------------------


// let str = "hello / world / hyy";

// console.log(str)
// console.log(str.length)

// console.log(str.toLowerCase())

// console.log(str.toUpperCase())

// console.log(str)

// console.log(str.trim())

// console.log(str.at(1))
// console.log(str.at(-1))

// console.log(str.split("/"))


// let txt1 = "hello";
// let txt2 = "world"

// let txt3 = txt1 + txt2

// console.log(txt3)

// console.log("method", txt1.concat(txt2))

// let str1 = "hello world"

// console.log(str1.slice(2,8))

// console.log(str1.repeat(2))

// console.log(str1.replace("world" , "arpit"))


// let a1 = "name" ;

// let jsstr = `hello ${a1}`

// console.log(jsstr)

// let q1 = "hello \n world"

// console.log(q1)

// -------------------------------------------------------------------------------


// array method 


// let arr = ["car", "bike","train"]

// add last 
// let result = arr.push("plane")

// pop -> remove last 
// arr.pop()

// add 2 array

// let arr1 = ["black","white"]

// console.log(arr.concat(arr1))


// add first
// arr.unshift("plane")

// remove first
// arr.shift()

// let result = arr.slice(0,2)
// console.log("original array : ",arr)
// console.log("slice array : ",result)

let cars = ["bmw","suzuki","honda" ,"hyundai" , "toyota"]

//  cars.splice(3,1,"tata")

// cars.join() cars.tostrings()
// cars.indexof()
// cars.reverse()
// cars.includes()

// console.log(cars)


// sort , map , filter , reduce , foreach 

// let i = parseInt(prompt("number"))
// let y = parseInt(prompt("number"))

// console.log(i+y)


let i = parseInt("5");
let p = 8

// document.getElementById("i1").innerHTML = i+p


//  ---------------------------------------------------------------------------------



function sum(a,b){

    return a+b
    // console.log("sum function");
    
}

// console.log(sum(1,2))

// let a = sum(1,3)

// let b = sum(4,5)

// console.log(sum(100,400))


// arrow finction 

// let fun = (a,b) => {

//     print()
//  return a*b
// }

// console.log(fun(1,2))

// function print(){
//     console.log("print function")
// }

// let result = fun(2,7)
// console.log(result)

// let arr = [1,2,3,4,5]

// let mapresult = arr.map((a)=>{
//     return a*2
// })

// console.log(mapresult)

// let filterarr = arr.filter((a)=>{
//     return a < 4
// })

// console.log(filterarr)

// let reducearr = arr.reduce((total,num)=>{
//     return total+num
// })

// console.log(reducearr)

// let a1 = [ 10, 20, 50, 34 , 9]

// let sortarr = a1.sort((a,b)=>{
//     return a-b
// })

// console.log(sortarr)
// console.log(sortarr.reverse())

//  arr.forEach((value)=>{
//     // console.log(value)
// })

// console.log(result)

// --------------------------------------------------------------------------------------


// DOM (Document Object Model)

// class & Object

// let Object1 = { name : "arpit" , age : 20 , city : "delhi"}

// console.log(Object1)

// function person(name,age){
//     this.name = name
//     this.age =age
// }

// let person1 = new person("person name",10)

// let person2 = new person("person2",20)
// console.log(person1)
// console.log(person2)


//  class person{
//     constructor(fname,lastname){
//         this.fname = fname
//         this.lastname = lastname
//     }
//  }

//  let person1 = new person("peter","parker")

//  console.log(person1)

// let promise = new Promise((resolve,reject)=>{
//     let a = 10
//     if(a == 2){
//         resolve("success")
//     }else{
//         reject("failed")
//     }
// })

// promise.then((message)=>{
//     console.log("message",message)
// }).catch((message)=>{
//     console.log("message",message)
// })

// function promisefuntion(){
//     setTimeout(()=>{
//         console.log("hello")
//     },7000) // mini second 
// }

// promisefuntion()

// console.log("sucessfull")


// async & await

// async function promisefuntion(){
//     let promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject("hello")
//         },3000)
//     })
//     let promise1 = new Promise((resolve,reject)=>{
//        resolve("enter password")
//     })

//     let result = await promise
//     console.log("email correct",)
//     let result1 =  await promise1
//     console.log("enter password")
    
// }

// promisefuntion()


// spread operator & desturecturing

// let obj = {student:"arpit" , roll:30}

// let obj1 = { ...obj , city:"delhi"}

// console.log(obj1)

// let obj2 = { ...obj1 , absent:true}

// console.log(obj2)

// let obj3 = { ...obj2 , present:true}
// console.log(obj3)


// local storage

// localStorage.setItem("id",1234)
