let express = require('express');
let app = express();
let path = require('path');
let bcrypt = require('bcrypt');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
let employe = require('./model/employe');
const { default: mongoose } = require('mongoose');

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

async function update(){
    await employe.updateMany({empName:'rashmi'},{$set:{empName:'Rashmi'}});
}
update();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
