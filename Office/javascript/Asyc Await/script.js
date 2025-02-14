// promise syntax

// let a = new Promise((resolve,reject)=>{
//     console.log("promise print");
//     // resolve("abcd");
//     // reject(error);
// });


// promise in function

// function getdata(id,nextdata) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{                // delay function 
//             console.log("data",id);
//             resolve();
//             if(nextdata){
//                 nextdata();
//             }
//         },5000);
//     });
// }


// async await 

let api =(data)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("getting data",data);
            resolve("success");
        },5000);
    });
} 

async function getdata() {
    await api (1) ;
    await api (2) ;
    await api (3) ;
    await api (4) ;
    await api (5) ;
}

