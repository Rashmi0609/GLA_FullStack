let mongoose = require('mongoose');
let userSchema = mongoose.Schema({
    name: String,
    password: String 
});
let user = mongoose.model('user', userSchema);
module.exports = user;