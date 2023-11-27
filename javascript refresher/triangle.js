// Check if triangle can be formed or not
let a = 10;
let b = 12;
let c = 5;

if (a + b > c && b + c > a && a + c > b) {
  console.log("yes triangle can be formed");
} else {
  console.log("no triangle cannot be formed");
}

//check if a triangle is equilateral,Isoceles or Scalene

let x = 2;
let y=22;
let z=21;

if(x==y && y==z){
    console.log("Equilateral Triangle")
}
else if(x==y || y==z || z==x){
    console.log("Isoceles triangle");
}
else{
    console.log("Scalene triangle");
}