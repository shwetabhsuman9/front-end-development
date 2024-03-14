function print(ele,idx){
    return `This element ${ele} at index ${idx}`;

}

const arr = [1,3,4,5,6];
const result = arr.map(print);
console.log('this is map result',result)

// custome - mapper

function customMapper(arr,func){
    let res=[];
for(i=0;i<arr.length;i++){
    res.push(func(arr[i],i));
}
return res;
}

const resultFromCustomMapper = customMapper(arr,print);
console.log('This is custom map result',resultFromCustomMapper)