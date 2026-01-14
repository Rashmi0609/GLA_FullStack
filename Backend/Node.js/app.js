let math=require('./math');

console.log(math.sum1(2,3));
console.log(math.sum2(4,5));
console.log(math.product(6,7));

//Destructuring: allowing us to extract multiple properties from an object and assign them to variables

let {sum1, sum2, product}=require('./math');

console.log(sum1(10,20));
console.log(sum2(30,40));
console.log(product(5,6));



let person={
    name: 'Rashmi',
}
let {name,}=person;
console.log(name);