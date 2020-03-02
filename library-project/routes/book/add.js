const express = require("express");
const router = express.Router();

router.get("/books/add", (req, res, next) => {
  res.render("book-add");
});

router.post("/books/add", (req, res, next) => {
  const { title, author, description, rating } = req.body;
  const newBook = new Book({ title, author, description, rating });
  newBook
    .save()
    .then(book => {
      res.redirect('/books');
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/authors/add", (req, res, next) => {
  res.render("author-add");
});

router.post("/authors/add", (req, res, next) => {
  const { name, lastName, nationality, birthday, pictureUrl } = req.body;
  const newAuthor = new Author({
    name,
    lastName,
    nationality,
    birthday,
    pictureUrl
  });
  newAuthor
    .save()
    .then(book => {
      res.redirect("/books");
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
