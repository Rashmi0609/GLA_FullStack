let http= require('http');
let server=http.createServer((req,res)=>{
    res.write("learning http module in nodejs");
    res.end();
})

server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});