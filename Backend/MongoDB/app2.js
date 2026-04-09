let express = require('express');
let app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

let path = require('path');
let bcrypt = require('bcrypt');

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

    // ✅ FIX: hash password (not username)
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
app.get('/products', async (req, res) => {
    let data = await product.find({});
    console.log(data);

    res.render('index', { p: data }); // keeping p for EJS
});


// ================= SEED =================
async function seeddb() {
    await product.insertMany(p);
    console.log('Data seeded successfully');
}
seeddb(); // kept same


// ================= FORM =================
app.get('/product/form', (req, res) => {
    res.render('form');
});

app.post('/product/form', async (req, res) => {

    console.log("BODY:", req.body); 

    let { Pname, Pprice, Pimg, Pdesc } = req.body;

    let p = new product({
        name: Pname,
        price: Pprice,
        img: Pimg,
        description: Pdesc
    });

    await p.save();
    res.redirect('/products');
});


// ================= UPDATE =================
async function update() {
    await employe.updateMany(
        { empName: 'rashmi' },
        { $set: { empName: 'Rashmi' } }
    );
}
update(); // kept same


// ================= SERVER =================
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});