const mongoose = require("mongoose");
const { v4 } = require("uuid");


const productSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: v4
    },
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    stock: {
        type: Number
    },
    description: {
        type: String
    },
    userId: {
        type: String
    },
    originalname: {
        type: String
    },
    destination: {
        type: String
    },
    filename: {
        type: String
    }
},
    {
        timestamps: true
    });


const product = mongoose.model("product", productSchema);


module.exports = product;