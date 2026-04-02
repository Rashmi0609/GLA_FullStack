const mongoose = require('mongoose');

const employeSchema = new mongoose.Schema({
    empName: String,
    empPass: String
}, {
    collection: 'employes'  
});

module.exports = mongoose.model('employe', employeSchema);