let express = require('express');
let app = express();
let path = require('path');
let bcrypt = require('bcrypt');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
let employe = require('./model/employe');
const { default: mongoose } = require('mongoose');
let p=require('./seed'); // Importing the seed data
let product = require('./model/product'); // Importing the product model


app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', (req, res) => {
    let {Uname,Upass} = req.body;
    bcrypt.hash(Uname, 10, async(err, hash) => {
        let e=new employe({
            empName: Uname,
            empPass: hash
        });
        await e.save();
        console.log('Employee registered successfully !!!');
    });
    res.send('registered successfully !!!');
});

mongoose.connect("mongodb://127.0.0.1:27017/3rd_yr")
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// Seeding the database with initial data
async function seeddb(){
    await product.insertMany(p);
    console.log('Data seeded successfully');
}
seeddb();

async function update(){
    await employe.updateMany({empName:'rashmi'},{$set:{empName:'Rashmi'}});
}
update();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


// C:\Users\rashm>mongosh
// Current Mongosh Log ID: 69d5e433caf44fd71f3682d0
// Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.8.2
// Using MongoDB:          8.0.12
// Using Mongosh:          2.8.2

// For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

// ------
//    The server generated these startup warnings when booting
//    2026-04-04T22:27:57.897+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
// ------

// test> show dbs
// 3rd_yr           168.00 KiB
// admin             40.00 KiB
// auth-dashboard    20.00 KiB
// auth_dashboard   132.00 KiB
// config            60.00 KiB
// homebites        444.00 KiB
// local            104.00 KiB
// smartshift        80.00 KiB
// women_safety_db  236.00 KiB
// test> use 3rd_yr
// switched to db 3rd_yr
// 3rd_yr> show collections
// employes
// products
// users
// 3rd_yr> db.products.find
// [Function: find] AsyncFunction {
//   returnsPromise: true,
//   apiVersions: [ 1, Infinity ],
//   returnType: 'Cursor',
//   serverVersions: [ '0.0.0', '999.999.999' ],
//   topologies: [ 'ReplSet', 'Standalone', 'Sharded', 'LoadBalanced' ],
//   deprecated: false,
//   platforms: [ 'Compass', 'Browser', 'CLI' ],
//   isDirectShellCommand: false,
//   acceptsRawInput: false,
//   shellCommandCompleter: undefined,
//   newShellCommandCompleter: undefined,
//   help: [Function (anonymous)] Help
// }
// 3rd_yr> db.products.find({});
// [
//   {
//     _id: ObjectId('69d5e3ff1407b1c343b134f5'),
//     name: 'Iphone 14 Pro Max',
//     price: 120000,
//     rating: 4.5,
//     img: 'https://m.media-amazon.com/images/I/61i8+qjv9sL._SX679_.jpg',
//     description: 'give the best experience to the users',
//     __v: 0
//   },
//   {
//     _id: ObjectId('69d5e3ff1407b1c343b134f6'),
//     name: 'One Plus 11R',
//     price: 45000,
//     rating: 4.2,
//     img: 'https://m.media-amazon.com/images/I/61i8+qjv9sL._SX679_.jpg',
//     description: 'it is the best phone in the market with a good price',
//     __v: 0
//   }
// ]
// 3rd_yr>