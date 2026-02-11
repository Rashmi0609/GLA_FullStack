let http=require('http');
let server=http.createServer((req,res)=>{
    res.statusCode=201; //201 means created
    res.write("learning http Server...");
    res.end();
})
server.listen(4000,()=>{
    console.log("server is running on port 4000");
})

//205: reset content
//204: no content,header only response
//404: not found
//500: internal server error
//201: created
//200: ok

//100-199: informational response
//200-299: successful response
//300-399: redirection response
//400-499: client error response
//500-599: server error response