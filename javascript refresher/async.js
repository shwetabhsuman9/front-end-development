// console.log("hello world");
// setTimeout(function f(){
//     console.log("timer")
// },0);
// console.log("end");


console.log("hello world");
function loops()
{
    console.log("loop starts")
    for(let i=0;i<3;i++){
        setTimeout(function f(){
            console.log("timer")
        },3);
    }
}
loops();
for(let i=0;i<10;i++){
    // console.log("loop ka kaam")
}

console.log("end");

//JS wouldn't block its synchronous flow for runtime