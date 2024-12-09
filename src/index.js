const express = require("express");
const connect = require("./config/connection");
const registerRoute = require("./routes/register.route");
const authRoute = require("./routes/auth.route");
const productRoute = require("./routes/product.route");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors({
    origin: "http://localhost:3000",
    methods: ['POST', 'GET', 'PUT', 'DELETE', 'OPTIONS']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connect();
app.use("/v1", registerRoute);
app.use("/auth", authRoute);
app.use("/product", productRoute);
app.use("/fileurl", express.static("src/uploads"));

app.use("/", (req, res) => {
    res.send("I'm Alive")
})

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});


