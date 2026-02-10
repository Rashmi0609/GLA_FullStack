let fs=require("fs/promises");
let path=__dirname+'/b.txt';
fs.writeFile(path,"fs/promises module")
.then(()=>{
    console.log("DONE")
})
.catch((err)=>{
    console.log(err);
})