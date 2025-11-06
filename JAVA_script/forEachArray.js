let sum=0
const numbers=[10,20,30,40,50];
numbers.forEach(myFunction);

function myFunction(item){
    sum+=item;
}
console.log(sum);


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

