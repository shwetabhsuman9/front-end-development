function createPromise(){
    return new Promise(function exec(resolve,reject){
        console.log("resolving promise");
        resolve("done");
    });
}

let y = createPromise();
setTimeout(function time(){
    console.log("timer ends")
},0);
y.then(function fullFillHandler1(value){
    console.log("we fullfilled1 with the value",value);
})

y.then(function fullFillHandler2(value){
    console.log("we fullfilled2 with the value",value);
})

y.then(function fullFillHandler3(value){
    console.log("we fullfilled3 with the value",value);
})

for(let i=0;i<1000000000;i++){
    // some operations
  
}
console.log("endng...")