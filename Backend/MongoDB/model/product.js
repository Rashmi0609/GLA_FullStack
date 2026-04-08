let mongoose=require('mongoose');
let productSchema= new mongoose.Schema({
    name: String,
    price: Number,
    rating:{
        type: Number,
        default:1
    },
    img: String,
    description: String
});

let product = mongoose.model("product", productSchema);
module.exports=product;