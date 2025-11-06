let sum=0
const numbers=[10,20,30,40,50];
numbers.forEach(myFunction);

function myFunction(item){
    sum+=item;
}
console.log(sum);

//Example 2
const fruits=["Banana","Orange","Apple","Mango"];
fruits.forEach(function(fruit){
    console.log(fruit);
});
fruits.forEach(fruit=>console.log(fruit.toLowerCase()));
fruits.forEach((fruit,index)=>console.log(`${index+1}: ${fruit}`));


function fruit1(fruit){
    console.log(`I like ${fruit}`);
}
fruits.forEach(fruit1);


const names=["Riya","Siya","Sita","Gita"];
names.forEach(function(name){
    console.log(`Hello ${name}`);
});
names.forEach(name=>console.log(name.toUpperCase()));
console.log(names);
names.forEach((name,index)=>console.log(`${index}: ${name}`));


const people=["Ram","Shyam","Mohan","Sohan"];
people.forEach(function(person){
    console.log(`Welcome !!! ${person}`);
});

//square of numbers
const nums=[1,2,3,4,5];
nums.forEach(function(num){
    console.log(num*num);
});

//with arrow function
const square1=function(num){
    let result=num*num;
    console.log(result);
}


const products=[{name:"Laptop",price:50000},
{name:"Phone",price:20000},
{name:"Tablet",price:15000}];
products.forEach(function(product){
    console.log(`${product.name} costs Rs.${product.price}`);
});
// products.forEach(product=>console.log(`${product.name} - Rs.${product.price}`)); 


//print using for loop: name ,age and city
const persons=[{name:"Rashmi",age:21,city:"Kanpur"},{name:"Anjali",age:22,city:"Delhi"}];
persons.forEach(function(person){
    console.log(`${person.name}, ${person.age} years old, from ${person.city}`);
});


