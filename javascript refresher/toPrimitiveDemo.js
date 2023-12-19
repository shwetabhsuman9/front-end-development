let obj={a:3};
console.log(2-obj);  //o/p:Nan

let obj1 = { x:1 ,toString(){return 99}};
console.log(102-obj1); //o/p :3  //Any key values pair doesn't matter what matters is valueOf and toString

let obj2 = {x:58,valueOf(){
    return 100
}}
console.log(101-obj2);  //o/p :1

let obj4 = {x:7 , toString(){return{}}};
console.log(100-obj4);  //Type error