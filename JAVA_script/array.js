let c=["apple","mango","banana","orange"]
c[0] // access element at index 0
c[3] // access element at index 3
console.log(c[0]); 
console.log(c[3]);
for(let i=0;i<3;i++){
    console.log(c[i]);
}

let num1=[12,45,67,89,23];
let num2=num1; // both num1 and num2 point to the same array in the memory
num1[2]=0;
console.log(num1);
console.log(num2);

let d=4;
let e=d;
d=8;
console.log(d);
console.log(e); 

let arr1=[12,34,56];
arr1.push(87); // adds element at the end of the array
console.log(arr1);

arr1.unshift(321); // adds element at the beginning of the array
console.log(arr1);

arr1.pop(); // removes last element of the array
console.log(arr1);

arr1.shift();  // removes first element of the array
console.log(arr1); 

let students=["Rashmi","Soni","Ridhima","Anjali"];
students.splice(1,2); // removes 2 elements from index 1
console.log(students);
students.unshift("kanak"); // adds element at the beginning of the array
console.log(students);

students.splice(2,0,"Sakshi","Ankita"); // adds elements at index 2
console.log(students);

/* TASK:
let team=["kamal","aman","priya"]
1- add neha an vivek at the end
2- in start add sonia
3- replace an element at second position and add karan
4- reamove last member
5- print final team
*/
console.log("-----TASK-----");
let team=["kamal","aman","priya"]
team.push("neha","vivek");
console.log(team);
team.unshift("sonia");  
console.log(team);
team.splice(1,1,"karan");
console.log(team);
team.pop();
console.log(team);
console.log("Final Team: ",team);


