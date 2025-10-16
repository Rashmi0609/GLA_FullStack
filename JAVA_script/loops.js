let a=67;
if(a==67){
    console.log(`True`);
}
else{
    console.log(`False`);
}

// largert b/w 2 numbers
let b=prompt("Enter a Number: ");
if(b<10){
    console.log(`Number is less than 10`);
}
else if(b<20){
    console.log(`Number is less than 20`);
}
else{
    console.log(`Number is greater than 20`);
}

//3 print largest among 3 numbers
let x=prompt("Enter first number: ");
let y=prompt("Enter second number: ");
let z=prompt("Enter third number: ");
if(x>=y && x>=z){
    console.log(`${x} is the largest number`);
}   
else if(y>=x && y>=z){
    console.log(`${y} is the largest number`);
}
else{
    console.log(`${z} is the largest number`);
}

let c=["apple","mango","banana","orange"]
c[0] // access element at index 0
c[3] // access element at index 3
console.log(c[0]); 
console.log(c[3]);
for(let i=0;i<3;i++){
    console.log(c[i]);
}