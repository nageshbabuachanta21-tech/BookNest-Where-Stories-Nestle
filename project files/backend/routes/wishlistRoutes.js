const router =
require("express").Router();

const Wishlist =
require("../models/Wishlist");


// ADD TO WISHLIST

router.post("/add", async(req,res)=>{

const item =
new Wishlist(req.body);

await item.save();

res.send("Added to Wishlist");

});


// GET WISHLIST

router.get("/:userId",
async(req,res)=>{

const items =
await Wishlist.find({

userId:req.params.userId

});

res.json(items);

});

module.exports = router;