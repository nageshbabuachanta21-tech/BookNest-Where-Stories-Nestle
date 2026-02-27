const router =
require("express").Router();

const Order =
require("../models/Order");


// PLACE ORDER

router.post("/add", async(req,res)=>{

const order =
new Order(req.body);

await order.save();

res.send("Order placed");

});


// GET ORDERS

router.get("/:userId",
async(req,res)=>{

const orders =
await Order.find({

userId:req.params.userId

});

res.json(orders);

});

module.exports = router;