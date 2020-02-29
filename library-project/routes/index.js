const express = require('express');
const router  = express.Router();
const Book = require('../models/book.js'); 
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/books', (req, res, next) => {
  Book.find()
  .then(allTheBooksFromDB => {
    console.log('Retrieved books from DB:', allTheBooksFromDB);
    res.render('books', { books: allTheBooksFromDB });
  })
  .catch(error => {
    console.log('Error while getting the books from the DB: ', error);
  })
res.render('books');
});

router.get('/books/:bookId', (req, res, next) => {
  console.log('The ID from the URL is: ', bookId);
  res.render('book-details');
});

router.get('/books/:bookId', (req, res, next) => {
  Book.findById(req.params.bookId)
  .then(theBook => {
    res.render('book-details', { book: theBook });
  })
    .catch(error => {
      console.log('Error while retrieving book details: ', error);
    })
});



module.exports = router;
