const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/bookstore")

.then(()=>console.log("MongoDB Connected"))

.catch(err=>console.log(err));


// ROUTES

app.use("/api/users", userRoutes);

app.use("/api/books", bookRoutes);

app.use("/api/wishlist", wishlistRoutes);

app.use("/api/orders", orderRoutes);


app.listen(5000, ()=>{

console.log("Server running on port 5000");

});
