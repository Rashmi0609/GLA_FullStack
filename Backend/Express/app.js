let express=require('express');
const bodyParser = require('body-parser');
let path=require('path');
let app=express();
app.set('view engine','ejs');  
app.set('views', path.join(__dirname,'prod_views'));
app.use(bodyParser.urlencoded({ extended: true }));

let products=["laptop","mobile","tablet","headphones"];
app.get('/products',(req,res)=>{
    res.render('show',{products});
});

//POST METHOD
app.get('/addProduct',(req,res)=>{
    res.render("addProduct");
});

app.post('/submit',(req,res)=>{
    console.log(req.body);
    products.push(req.body.P_name);
    res.redirect("/products");
});

//GET METHOD
app.get('/add',(req,res)=>{
    res.render('add');
});

app.get('/submit',(req,res)=>{
    console.log(req.query);
    products.push(req.query.p_name);
    res.redirect("/products");
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});