const router = require("express").Router();

const Book = require("../models/Book");


// ADD BOOK

router.post("/add", async (req, res) => {

const book = new Book(req.body);

await book.save();

res.send("Book Added");

});


// GET BOOKS

router.get("/", async (req, res) => {

const books = await Book.find();

res.json(books);

});

module.exports = router;