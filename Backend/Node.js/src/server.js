//postman http server

let http=require('http');
let server=http.createServer((req,res)=>{
    http.STATUS_CODES=204; 
    res.write("server created successfully..."); // write data to response body
    res.end(); // end the response
})
// http://localhost:3000
server.listen(3000,()=>{ // server listening on port 3000
    console.log('Server is running on port 3000');
});
