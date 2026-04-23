let express=require('express');
let app=express();
let jwt=require('jsonwebtoken');
require('dotenv').config();
app.use(express.json());
let path=require('path');
app.use(express.static(path.join(__dirname,'static')));  

let token='';

app.get('/register',(req,res)=>{
    let {username,password}=req.query;
    token=jwt.sign({"name":username, "Pass":password},process.env.SECRET);
    let payLoad=token.split('.')[1];
    console.log(payLoad);
    console.log('token generated');
    res.send(token);
})

let authenticate=(req,res,next)=>{
    jwt.verify(token,process.env.SECRET,(err,user)=>{
        if(err){
            res.send('invalid token');
        }else{
            console.log(user);
            next();
        }
    })
}

app.get('/order',authenticate,(req,res)=>{
    res.json({
        "message":"invalid user"
    })
})  

//http://localhost:3000/register?username=admin&password=admin123

app.listen(process.env.port,()=>{
    console.log('server is running on port 3000')
})