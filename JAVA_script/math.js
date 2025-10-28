// Math functions 
let a=Math.sqrt(4);
console.log(a);
let b=Math.cbrt(27);
console.log(b);
b=Math.floor(4.7);
console.log(b);
b=Math.ceil(4.2);   
console.log(b);
b=Math.round(4.4);
console.log(b);
b=Math.max(1,5,3,9,2);  
console.log(b);
b=Math.min(1,5,3,9,2);  
console.log(b); 
b=Math.random();  
console.log(b); 
b=Math.pow(2,3);
console.log(b);
b=Math.trunc(4.9541);
console.log(b);
b=Math.abs(-7);
console.log(b);
b=Math.floor(Math.random()*10)+1; // random number between 1 and 10
console.log(b);

// task: make no. guesser game that a function takes a number between 1-10 and tells if user guessed right or wrong
function guessNumber(userGuess) {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    console.log("Random Number: " + randomNum);
    if(userGuess === randomNum) {
        console.log("Congratulations! You guessed it right.");
    }   
    else {
        console.log("Sorry, wrong guess. Try again!");
    }   
}

// Example usage:
guessNumber(5);