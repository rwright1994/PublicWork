const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    catagory: String,
    isStocked: Boolean,
    image: String,
    description: String,
    price: String
});

module.exports = mongoose.model("Product", productSchema)