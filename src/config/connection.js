const mongoose = require("mongoose");


const connection = () => {
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB Connected..");
    } catch (err) {
        console.log(`connection error: ${err.message}`);
    }
};

module.exports = connection;
