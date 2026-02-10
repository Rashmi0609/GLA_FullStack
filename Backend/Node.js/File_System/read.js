// let fs=require('fs/promises');
// let path=__dirname+'/a.txt';
// fs.readFile(path)

// .then((data)=>{
//     console.log(data.toString());
// })
// .catch((err)=>{
//     console.log(err);
// })

//with callback
let fs=require('fs');
let path=__dirname+'/a.txt';
fs.readFile(path,(err,data)=>{
    if(err)
        console.log(err);
    else
        console.log(data.toString());
})