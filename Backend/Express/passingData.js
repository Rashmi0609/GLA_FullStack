let express=require('express');
let bodyParser=require('body-parser');
let app=express();
app.set('view engine','ejs');
let path=require('path');
app.set('views',path.join(__dirname,'views'));
app.use(bodyParser.urlencoded({ extended: true }));

let obj={
    id:1212
}

let todo=[
    "coding",
    "reading",
    "walking",
    "go to market"
]
app.get('/register',(req,res)=>{
    res.render("registerGet");
})

app.get('/registerpost',(req,res)=>{
    res.render("registerPost");
})


app.post('/register',(req,res)=>{
    console.log(req.body);
    res.send("User registered successfully...");
})

//http://localhost:3000/submit?Uname=abc&Uage=21
app.get('/submit',(req,res)=>{
    console.log(req.query);
    res.send("User data received successfully...");  
})

app.get('/todo',(req,res)=>{
    res.render('todo',{todo});
});

app.get('/',(req,res)=>{
    res.render('passingData',{obj,todo});
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
