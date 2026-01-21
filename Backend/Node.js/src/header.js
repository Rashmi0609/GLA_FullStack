let http=require('http');

let server=http.createServer((req,res)=>{
    let header=req.headers.authorization;
    let secret="thisisasecretkey";
    if(!header){
        res.statusCode=400;
        res.write("kindly enter the secret key first");
        res.end();
    }
    if(header==secret){
        res.statusCode=201;
        res.write("welcome user...");
        res.end();
        return;
    }
    else{
        res.statusCode=401;
        res.write("unauthorized user");
        res.end();
        return;
    }

    console.log(req.headers);
    console.log(res.headers);
    res.write("http server");
    res.end();
});

server.listen(3001,()=>{
    console.log('server is running at port 3001');
});