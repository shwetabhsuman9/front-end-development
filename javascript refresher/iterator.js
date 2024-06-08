function nextElement(arr){
    let i=0;
    function next(){
        if(i==arr.length){
            return undefined;
        }
      let nextEle = arr[i];
      i++;
      return nextEle;
    }
    return {next};
}
let a = nextElement(['1','2','3']);
console.log("first element is",a.next());
console.log("second element is",a.next());
console.log("third element is",a.next());
console.log("fourth element is",a.next());