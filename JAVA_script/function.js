function greet(){
    console.log("Hello, World !!!");
}
greet();

function greet1(){
    return "Hello World";
}
let a=greet1();
console.log(a);

const greet2=function(){
    console.log("This is my First Function");
}
greet2();

// Arrow Function
const greet3=()=> console.log("This is Arrow Function");
greet3();

function square(n){
    return n*n;
}
square(3);
console.log(square(3));

const square1=(n)=> n*n;
square1(4);
console.log(square1(4));

//Hosting
// console.log(x);
// let x=5; error 

// console.log(y);
// const y=10;  error

console.log(z);
var z=15;

//TEMPORAL DEAD ZONE
for (let i=0; i<5; i++){  
    console.log(i);
}

function greet4(name){
    console.log(`Hello, ${name}`);
}
function processGreet(name,callback){
    callback(name);
}
processGreet("Rashmi",greet4);




