const mongoose = require("mongoose");


const connection = () => {
    try {
        mongoose.connect("mongodb+srv://krishna43835:jKqkxDMTJ9NLgkM2@cluster0.jbnco.mongodb.net/server008?retryWrites=true&w=majority&appName=Cluster0")
        console.log("MongoDB Connected..");
    } catch (err) {
        console.log(`connection error: ${err.message}`);
    }
};

module.exports = connection;
