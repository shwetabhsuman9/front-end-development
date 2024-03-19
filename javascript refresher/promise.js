function intRandom(n){
    return Math.floor(Math.random()*n);
}
 function create(){
    console.log("entering promise");
    return new Promise(function exec(resolve,reject){
        // for(let i=0;i<10000000;i++){
        //     //
        // }


        //Async code
        setTimeout(function exec(){
            let x= intRandom(8);
            if(x%2==0){
             return   resolve(x);
            }
            else{
              return  reject(x)
            }
        },1000)
       
    })
 }

 let y = create();
 console.log("promise Value",y);


 //consuming a promise
 y.then(
    function fullfill(){
console.log("fullfilled",y);
 },
 function rejection(){
    console.log("rejected",y);
 })