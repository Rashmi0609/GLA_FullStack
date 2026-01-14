// Importing the 'fs' module to work with the file system. 
//require is used to import modules in Node.js.
let fs=require('fs');

// __dirname gives the directory name of the current module
let path=__dirname + '/data.txt';

// fs.writeFile() is used to write data to a file. If the file does not exist, it will be created. If the file exists, it will be overwritten. 
fs.writeFile(path,"Hello Learning FileSystem",(err)=>{
    if(err){
        console.log("error");
    }
    else{
        console.log("File written successfully");
    }
})
console.log(__dirname);

// fs.write()