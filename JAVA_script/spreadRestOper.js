//Spread Operator
let student={
    name:"David",
    age:25, 
    city:"New York"
};
console.log(student);

// creating new object by copying properties of existing object using spread operator
let student3={...student, country:"USA"};
console.log(student3.name); 
console.log(student3.age); 

// iterating through properties of student3 object
for(let key in student3){
    console.log(`${key}===>${student[key]}`);
}

// merging arrays using spread operator
let arr1=[1,2,3,4,5];
let arr2=[4,5,6];
let arr3=[...arr1,...arr2];
console.log(arr3);  

//Rest Operator
const [first,second,...rest]=[1,2,3,4,5,6];
console.log(first);
console.log(second);
console.log(rest);

// function using rest operator to accept variable number of arguments
function showNames(...names){
    console.log(`${names}`);
}
showNames("Rashmi","Soni","Ridhima");

// function using rest operator with other parameters
function Introduce(name,lastname,...hobbies){
    console.log(`${name} ${lastname}`);
    console.log(`Hobbies: ${hobbies}`);
}
Introduce("Liya","Sharma","Reading","Traveling","Cooking");

// Object Reference
let person1={
    name:"Alice",
    address:{city:"Jaipur",pincode:302001},
};
let person2=person1;
person2.name="Aman"; // updating name property of person2
console.log(person1);
console.log(person2);

let person3={...person1}; // creating shallow copy of person1
person3.name="Ankit";
person3.address.city="Delhi"; // modifying nested object property
console.log(person1);
console.log(person1.address.city);


// Deep Copy using JSON methods
let person4=JSON.parse(JSON.stringify(person1)); // creating deep copy of person1
person4.name="Neha";
person4.address.city="Mumbai";
console.log(person1);
console.log(person4);
