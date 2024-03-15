const arr = [1,2,3,4,5,6,7,8,9];

function even(ele){
    return (ele%2 ==0);
}
console.log("result from filter function",arr.filter(even));


function filterMapper(arr,HOF_Fun){
    let res = [];
    let funres;
    for(i=0;i<arr.length;i++){

        if(HOF_Fun(arr[i]) === true){
            res.push(arr[i]);
        }


    }
    return res;
}

console.log('this result is from custom mapper',filterMapper(arr,even));


let obj = [{name:'iphone',price:20000},{name:'iphone Case',price:200},{name:'charger',price:2000}];

// consider the above obj as a cart and calculate the total price of the cart;

function calculate(prev,curr){
    let res = {};
    res.price = prev.price + curr.price;
    return res;
}

const resultReduce = obj.reduce(calculate);
console.log("Result from reduce",resultReduce.price);