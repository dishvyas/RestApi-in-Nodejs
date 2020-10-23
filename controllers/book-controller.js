var mongoose = require('mongoose');
const author = require('../models/author');
var Book = require('../models/book');

//Check if author with name exists, if no create one
const start = async function (a,b) {
    const author = await Author.findOne({name: book.author});
    if(!author)
        Author.create(book.author);
}

//Create new Book
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "Book content can not be empty"
        });
    }

    // Create a Book
    const book = new Book({
        title: req.body.title || "No book title", 
        subtitle: req.body.subtitle,
        author: req.body.author
    }); 
 
    start(); 
    
    // Save book in the database
    book.save()
    .then(data => {
        res.send(data);
        
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the book."
        });
    });
};

// Retrieve all books from the database.
exports.findAll = (req, res) => {
    Book.find()
    .then(books => {
        res.send(books);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving books."
        });
    });
};

// Find a single book with a bookId
exports.findOne = (req, res) => {
    Book.findById(req.params.bookId)
    .then(book => {
        if(!book) {
            return res.status(404).send({
                message: "Book not found with id " + req.params.bookId
            });            
        }
        res.send(book);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Book not found with id " + req.params.bookId
            });                
        }
        return res.status(500).send({
            message: "Something wrong retrieving book with id " + req.params.bookId
        });
    });
};

// Update a book
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Book content can not be empty"
        });
    }

    // Find and update book with the request body
    Book.findByIdAndUpdate(req.params.bookId, {
        title: req.body.title || "No book title", 
        subtitle: req.body.subtitle,
        author: req.body.author
    }, {new: true})
    .then(book => {
        if(!book) {
            return res.status(404).send({
                message: "Book not found with id " + req.params.bookId
            });
        }
        res.send(book);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Book not found with id " + req.params.bookId
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating book with id " + req.params.bookId
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Book.findByIdAndRemove(req.params.bookId)
    .then(book => {
        if(!book) {
            return res.status(404).send({
                message: "Book not found with id " + req.params.bookId
            });
        }
        res.send({message: "Book deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Book not found with id " + req.params.bookId
            });                
        }
        return res.status(500).send({
            message: "Could not delete book with id " + req.params.bookId
        });
    });
};

exports.like = (req, res) => {
    Book.findByIdAndUpdate(req.params.bookId)
    .then(book => {
        if(!book) {
            return res.status(404).send({
                message: "Book not found with id " + req.params.bookId
            });
        }
        console.log(book);
        res.send(book);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Book not found with id " + req.params.bookId
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.bookId
        });
    });  
};