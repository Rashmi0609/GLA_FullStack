let express = require('express');
let app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

let path = require('path');
let bcrypt = require('bcrypt');

const methodOverride = require('method-override'); 
app.use(methodOverride('_method')); 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

let employe = require('./model/employe');
const { default: mongoose } = require('mongoose');

let p = require('./seed'); // seed data
let product = require('./model/product');


// ================= REGISTER =================
app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', (req, res) => {
    let { Uname, Upass } = req.body;

    bcrypt.hash(Upass, 10, async (err, hash) => {
        let e = new employe({
            empName: Uname,
            empPass: hash
        });

        await e.save();
        console.log('Employee registered successfully !!!');
    });

    res.send('registered successfully !!!');
});


// ================= DB =================
mongoose.connect("mongodb://127.0.0.1:27017/3rd_yr")
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});


// ================= PRODUCTS =================

//  Show ALL products 
app.get('/products', async (req, res) => {
    let data = await product.find();
    res.render('products', { data }); // create products.ejs
});

//  Show ONE product
app.get('/products/:id', async (req, res) => {
    let id = req.params.id;

    let data = await product.findById(id);

    console.log(data);
    res.render('index', { p: data });
});


// ================= SEED =================
async function seeddb() {
    await product.insertMany(p);
    console.log('Data seeded successfully');
}
seeddb();


// ================= FORM =================
app.get('/product/form', (req, res) => {
    res.render('form');
});

app.post('/product/form', async (req, res) => {

    console.log("BODY:", req.body); 

    let { Pname, Pprice, Pimg, Pdesc } = req.body;

    let newProduct = new product({
        name: Pname,
        price: Pprice,
        img: Pimg,
        description: Pdesc
    });

    await newProduct.save();
    res.redirect('/products');
});


// ================= EDIT =================
app.get('/product/:id/edit', async (req, res) => {
    let id = req.params.id;

    let e = await product.findById(id);

    console.log(e);
    res.render('edit', { e });
});


// ================= UPDATE =================
app.put('/product/:id', async (req, res) => {
    let { id } = req.params;
    let { name, Eprice, Eimg, Erating } = req.body;

    await product.findByIdAndUpdate(id, {
        name: name,
        price: Eprice,
        img: Eimg,
        rating: Erating
    });
    console.log('Product updated successfully !!!');
    res.redirect('/products');
});


// ================= DELETE (BONUS) =================
app.delete('/product/:id', async (req, res) => {
    let { id } = req.params;
    await product.findByIdAndDelete(id);
    res.redirect('/products');
});


// ================= UPDATE (EMPLOYEE) =================
async function update() {
    await employe.updateMany(
        { empName: 'rashmi' },
        { $set: { empName: 'Rashmi' } }
    );
}
update();


// ================= SERVER =================
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});