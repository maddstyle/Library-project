const express = require("express");
const router = express.Router();
const Book = require("../models/book.js");
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/books", (req, res, next) => {
  Book.find()
    .then(allTheBooksFromDB => {
      console.log("Retrieved books from DB:", allTheBooksFromDB);
      res.render("books", { books: allTheBooksFromDB });
    })
    .catch(error => {
      console.log("Error while getting the books from the DB: ", error);
    });
  res.render("books");
});

router.get("/books/:bookId", (req, res, next) => {
  console.log("The ID from the URL is: ", bookId);
  res.render("book-details");
});

router.get("/books/:bookId", (req, res, next) => {
  Book.findById(req.params.bookId)
    .then(theBook => {
      res.render("book-details", { book: theBook });
    })
    .catch(error => {
      console.log("Error while retrieving book details: ", error);
    });
});

router.get("/books/add", (req, res, next) => {
  res.render("book-add");
});

router.post("/books/add", (req, res, next) => {
  const { title, author, description, rating } = req.body;
  const newBook = new Book({ title, author, description, rating });
  newBook
    .save()
    .then(book => {
      res.redirect("/books");
    })
    .catch(error => {});
});

router.post("/books/edit", (req, res, next) => {
  const { title, author, description, rating } = req.body;
  Book.update(
    { _id: req.query.book_id },
    { $set: { title, author, description, rating } },
    { new: true }
  )
    .then(book => {
      res.redirect("/books");
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
