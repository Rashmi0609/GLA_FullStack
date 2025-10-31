//OBJECTS
// objects are used to store multiple values in a single variable, objects are written in key:value pairs, keys are also called properties.
// creating an object...
const student={
    name:"Rashmi",
    age:21,
    marks:{  
        science:85,
        math:90
    }
};
console.log[student];
console.log(student.name);
console.log(student.marks.science);
student.name="Riya"; //updating name property
console.log(student.name);

student.getmarks=function(){
    console.log(`you got ${this.marks.science} in science`);
};
student.getmarks();

// adding new property to object
const student1={
    printMarks:function(){
        console.log(`you got ${this.marks.math} in math`);  
    }
}
student1.marks={math:95};
student1.printMarks();


// shorthand method to define function in object
let student2={
    name:"dimple",
    age:22,
    greet(){
        console.log("hello "+this.name); 
    }
};
student2.greet();

let engineeringStudent={
    name:"Anjali",
    age:23,
    branch:"computer",
};
engineeringStudent.__proto__=student2; // inheritance, engineeringStudent will inherit properties and methods of student2.
engineeringStudent.greet(); // calling inherited method.


// Object Destructuring
// destructuring is a convenient way of extracting multiple values from data stored in (possibly nested) objects and Arrays.
let user={
    name:"Kiran",
    age:24,
};
let {name,age}=user; 
console.log(name);
console.log(age);


//ARRAY DESTRUCTURING
let arr1=[1,2,3];
let[a,b,c]=arr1;
console.log(a);
console.log(b);
console.log(c);


//DATE OBJECT
let now=new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth()+1); // month is 0 indexed
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

