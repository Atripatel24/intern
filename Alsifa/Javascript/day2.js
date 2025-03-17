let x = 11;

if(x  > 10){
    console.log("x is greater than 10")
}
else if( x < 10){
    console.log("x is less than 10 ")
}
else{
    console.log("x is 10")
}


// for loop 

// let a = a+1

for( let a = 1; a<10 ; a++){
    console.log(a)
}

// while loop

let p = 0;

while(p <= 10){
    console.log(p)
    p++;
}

console.log("do while")

let z = 1;

do{
    console.log(z)
    z++
}while(z > 5)

 console.log("function")

function cal(a,b){
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
}

cal(2,1)
cal(4,8)

// arrow function

let sum = (a,b) => {
    console.log("sum",a+b)
}


sum(10,2)