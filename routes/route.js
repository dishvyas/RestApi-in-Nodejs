const books = require('../models/book')
const express = require('express');
const book = require('../controllers/book-controller')
const router = express.Router();
const authors = require('../models/author')
const author = require('../controllers/author-controller')
router.use(express.static(__dirname + '/static'));

router.get('/', (req, res) => {
  res.send('Welcome to REST router!')
})
router.post('/book', book.create)

router.get('/books', book.findAll)

router.get('/books/:bookId', book.findOne)  

router.put('/books/:bookId', book.update)

router.delete('/books/:bookId', book.delete)

router.post('/author', author.create)

router.get('/authors', author.findAll)

router.get('/authors/:authorId', author.findOne)  

router.put('/authors/:authorId', author.update)

module.exports = router;
