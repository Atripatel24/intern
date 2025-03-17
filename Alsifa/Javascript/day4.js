let str = "hello"

console.log(str.toUpperCase())
console.log(str.toLowerCase())

console.log("   trim")
console.log("   trim".trim())
console.log(str.replaceAll("l","i"))

console.log(str[0])
console.log(str.indexOf("o"))

console.log(str.slice(0,3))
console.log("*".repeat(5))

console.log(str.length)

// array
let arr = [1,2,3,4,5]

console.log(arr.length)
console.log(arr[0])
console.log(arr)
arr.push(6)
console.log(arr)
arr.pop()
arr.pop()
console.log(arr)

arr.unshift(0)
console.log(arr)

arr.shift()
console.log(arr)

console.log(arr.splice(1,1))
console.log(arr)

console.log( "slice",arr.slice(1,2))

let arr1 = ["hello"]
let arr2 = ["world"]

console.log(arr1.concat(arr2))

console.log(arr.reverse())

let strarr = arr.join(",")

console.log( strarr)
console.log( typeof(strarr))

console.log(strarr.split(","))


let funarr = [ 12 , 22 , 4 , 9, 26]

funarr.sort((x,y)=> x-y )

console.log(funarr)

let maparr = funarr.map((i)=>  i + 5)

console.log(maparr)

let filterarr = funarr.filter((index)=> index % 2 !== 0 )
console.log(filterarr)

let reducearr = funarr.reduce((preval , nextval)=> preval + nextval )
console.log(reducearr)

// preval nextval
// 0       4
// 4      9
// 13      12
// 25     22
// 47     26
// 73

// object 

let obj = { name: "rohan" , id : 1}
