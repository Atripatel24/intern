// let a = document.getElementById("b1");
// console.log(a)

// let a = document.getElementsByClassName("h1");
// console.log(a)

// let a = document.getElementsByTagName("p")
// console.log(a)



// first element
// let ele = document.querySelector("p")
// console.log(ele)

// All element
// let ele = document.querySelectorAll("#b1")
// console.log(ele)


// let ele = document.querySelector("div")
// console.dir(ele.innerText)

let ele = document.createElement("button")
ele.innerText="click Me"
ele.style.backgroundColor="red"  
ele.style.color="white"

document.querySelector("body").prepend(ele);

let para = document.querySelector("p")
para.classList.add("new");