const express = require('express');
const router  = express.Router();


router.get('/books/add', (req, res, next) => {
  res.render("book-add");
});

router.post('/books/add', (req, res, next) => {
  
});

module.exports = router;