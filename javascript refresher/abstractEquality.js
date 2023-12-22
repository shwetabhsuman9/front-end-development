console.log(5=={toString(){return 5}});

console.log("0"==false);
let obj={x:10,valueOf(){return 10}}
console.log(10==obj)

let obj1 ={a:3};
let obj2 ={a:3};
let obj3 ={a:3};

console.log(obj1===obj2);
console.log(obj1===obj3);
console.log(obj1===obj1);

let x ={a:1};
console.log(`my name is ${x}`) ;