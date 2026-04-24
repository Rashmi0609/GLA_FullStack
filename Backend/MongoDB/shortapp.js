let express=require('express');
let app=express();
let path=require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views')); 

mongoose.connect("mongodb://127.0.0.1:27017/shorturl")
.then(()=>{
    console.log('connected to mongodb');
})
.catch((err)=>{
    console.error('error connecting to mongodb',err);
})

app.get('/shortid',(req,res)=>{
    let s=await short.find({}); 
    res.render('index',{s});
})

app.listen(3000,()=>{
    console.log('server is running on port 3000');
})