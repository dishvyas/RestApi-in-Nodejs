// const { Author } = require('../models/author');
// const AuthorsController = {
//   async index(req, res){
//     const authors = await Author
//        .find()
//        .populate('books');
//     res.send(authors);
//   },
//   async show(req, res){
//     const author = await Author
//        .findById(req.params.id)
//        .populate('books');
//     res.send(author);
//   }
// };
// module.exports = AuthorsController;




var mongoose = require('mongoose');
const author = require('../models/author');
var Author = require('../models/author');

//Create new Author
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "Field can not be empty"
        });
    }
    // Create a Author
    const author = new Author({
        // author_name: req.body.aname,
        bio: req.body.bio
    });

    // Save author in the database
    author.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the author."
        });
    });
};

// Retrieve all authors from the database.
exports.findAll = (req, res) => {
    Author.find()
    .then(authors => {
        res.send(authors);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving authors."
        });
    });
};

// Find a single author with a authorId
exports.findOne = (req, res) => {
    Author.findById(req.params.authorId)
    .then(author => {
        if(!author) {
            return res.status(404).send({
                message: "Author not found with id " + req.params.authorId
            });            
        }
        res.send(author);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Author not found with id " + req.params.authorId
            });                
        }
        return res.status(500).send({
            message: "Something wrong retrieving author with id " + req.params.authorId
        });
    });
};

// Update an author
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Author details can not be empty"
        });
    }

    // Find and update author with the request body
    Author.findByIdAndUpdate(req.params.authorId, {
        author_name: req.body.aname,
        bio: req.body.bio
    }, {new: true})
    .then(author => {
        if(!author) {
            return res.status(404).send({
                message: "Author not found with id " + req.params.AuthorId
            });
        }
        res.send(author);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Author not found with id " + req.params.authorId
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.authorId
        });
    });
};


