let express = require('express');
let mongoose = require('mongoose');
let app = express();

let User = require('./database/user');

mongoose.connect('mongodb://127.0.0.1:27017/3rd_yr')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

async function insert(data) {
    try {
        let u1 = new User(data);
        await u1.save();
        console.log('Data inserted successfully');
    } catch (err) {
        console.error(err);
    }
}

insert({
    username:'rashmi',
    password:'secret'
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});