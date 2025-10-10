function greett(name) {
    console.log(`Hello ${name}`);
}
greett("rashmi");

function greet(name="Guest") {
    console.log(`Hello ${name}!!!`);
}

greet();

//Square of a number
function square(num) {
    return num * num;
}   
console.log(square(5));

//sum of two numbers
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 7));

//even or odd
function evenOdd(num) {
    if(num % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }           
}
console.log(evenOdd(4));
console.log(evenOdd(7));

//intro function to greet with name and tell your age in arguments.
function intro(name, age) {
    console.log(`Hello, My name is ${name} and I am ${age} years old.`);
}
intro("Rashmi", 21);