// CALLBACK FUNCTION
// SET TIMEOUT : will call the callback function after the specified time in milliseconds, here 2000 milliseconds = 2 seconds, after 2 seconds it will print the message.
setTimeout(callback,2000);
function callback(){
    console.log("This is callback function");
}

// Using Arrow Function as callback
setTimeout(()=>{
    console.log("This is arrow function as callback");
},4000); // after 4 seconds it will print the message

// SET INTERVAL : will call the callback function repeatedly after the specified time in milliseconds, here 3000 milliseconds = 3 seconds, every 3 seconds it will print the message.
setInterval(()=>{
    console.log("This message is printed every 2 seconds");
},2000);

setTimeout(()=>{
    console.log("This message is printed after 1 second"); 
    setTimeout(()=>{
        console.log("This message is printed after 2 seconds");
    },2000);
},1000);


// NESTED CALLBACKS
setTimeout(()=>{
    console.log("Step1");
    setTimeout(()=>{
        console.log("Step2");
        setTimeout(()=>{
            console.log("Step3");
        },1000);
    },1000);
},1000);