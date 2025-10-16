// String Methods
let b="My name is Rashmi";
console.log(b.replace("Rashmi","hello world!"));
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);
console.log(b.charAt(4));
console.log(b.indexOf("Rashmi"));
console.log(b.split(" "));  
console.log(b.includes("Rashmi")); //
console.log(b.startsWith("My"));
console.log(b.endsWith("Rashmi"));
console.log(b.substring(3,7)); // from index 3 to 6
console.log(b.slice(3,7)); // from index 3 to 6
console.log(b.slice(-6)); // last 6 characters
console.log(b.trim()); // removes whitespace from both ends
console.log(b.concat(" and I am 21 years old.")); 
console.log(b.repeat(2)); // repeats the string 2 times
console.log(b.search("is Rashmi")); // returns the index of the first match