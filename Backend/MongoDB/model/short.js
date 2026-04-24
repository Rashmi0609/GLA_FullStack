let mongoose=require('mongoose');
const shortid=require('shortid');

let shortSchema=new mongoose.Schema({
    url:{
        type:String,
        required:true
    },
    short:{
        type:String,
        require:true,
        default:shortid.generate
    }
});