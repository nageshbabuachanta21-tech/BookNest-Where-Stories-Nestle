const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({

userId:String,

bookId:String,

title:String,

author:String,

price:Number,

image:String,

status:{
type:String,
default:"Ordered"
}

});

module.exports =
mongoose.model("Order",OrderSchema);