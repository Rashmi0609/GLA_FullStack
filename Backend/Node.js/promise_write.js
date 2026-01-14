let fs=require('fs/promises');
let path=__dirname + '/data.txt';
fs.writeFile(path,"Hello Learning FileSystem with Promises")
.then(()=>{
    console.log("File written successfully...");
})
.catch((err)=>{
    console.log("Error:", err);
}); 