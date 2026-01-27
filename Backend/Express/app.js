let express=require('express');
let app=express();

app.get('/',(req,res)=>{
    res.send('This is / route');
});

app.get("/login",(req,res)=>{
    res.send("This is login route");
});

app.get("/register",(req,res)=>{
    res.send("This is register route");
});

app.use((req, res) => {
    res.status(404).send('Page not found');
});


app.listen(8000,()=>{
    console.log('app is running at port 8000');
});
 