//Accumulate values using forEach
//reduce- method is preferred for accumulation
const number=[2,3,4,5,6,7];
const result=number.reduce((acc,curr)=>acc+curr,0); // Using reduce to accumulate values means we sum them up ...
console.log(result);

const numbers1=[1,2,3,4,5];
const result2=numbers.reduce((acc,curr)=> acc*curr,1); // Multiply all numbers together
console.log(result2);

//find maximim in an array
const nums1=[10,5,20,8,15];
const max=nums1.reduce((acc,curr)=> (curr>acc ? curr : acc),nums1[0]); 
console.log(max); 

//calculate price of procuts
const items=[{name:"Book",price:200},{name:"Pen",price:50},{name:"Bag",price:500}];
const totalPrice=items.reduce((acc,item)=> acc+item.price,0); // Sum up the prices of all items
console.log(totalPrice);

//calculate total students in all courses
const students=[{course:"Btech",sections:4,studentNumber:120},
{course:"Mtech",sections:2,studentNumber:80},
{course:"MBA",sections:3,studentNumber:60}];
function calStudent(acc,curr){
    return acc + curr.sections*curr.studentNumber; // Total students in each course = sections * studentNumber
}
let total=students.reduce(calStudent,0);
console.log(total);