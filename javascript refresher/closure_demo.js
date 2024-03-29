function exec(){
    let i=0;
    function demo() {
        i+=1;
        console.log(i);
    }
    return demo;
}

let res = exec();
console.log("result of exec main () call",res);

res();
res();

//run in browser to get the clear picture

//let obj = res;
//obj.prototype