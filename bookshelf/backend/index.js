"use strict";
exports.__esModule = true;
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
var port = 3000;
var books = [
    {
        isbn: 'isbn1',
        title: 'title 1',
        author: 'author 1',
        description: 'description 1',
        publish_date: 'publish_date 1'
    },
    {
        isbn: 'isbn2',
        title: 'title 2',
        author: 'author 2',
        description: 'description 2',
        publish_date: 'publish_date 2'
    },
    {
        isbn: 'isbn3',
        title: 'title 3',
        author: 'author 3',
        description: 'description 3',
        publish_date: 'publish_date 3'
    }
];
app.get('/', function (req, res) {
    res.send('Hello World');
});
app.get('/books', function (req, res) {
    res.send(books);
});
app["delete"]('/books/delete/:isbn', function (req, res) {
    console.log(req.params.isbn);
    var msg = 'Book is not found';
    books.forEach(function (book, index) {
        if (book.isbn == req.params.isbn) {
            books.splice(index, 1);
            msg = 'Book successfully deleted';
        }
    });
    res.send(msg);
});
app.post('/book/add', function (req, res) {
    console.log(req.body);
    var status = 200;
    var msg = 'Book is successfully added!';
    var book = {
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        publish_date: req.body.publish_date
    };
    books.push(book);
    res.status(status).send(msg);
});
app.get('/books/:isbn', function (req, res) {
    console.log(req.params.isbn);
    var msg = 'Book is not found';
    var bookItem = undefined;
    books.forEach(function (book) {
        if (book.isbn == req.params.isbn) {
            bookItem = book;
        }
    });
    res.send(bookItem);
});
app.post('/book/edit', function (req, res) {
    console.log(req.body);
    var status = 200;
    var msg = 'Book is successfully added!';
    books.forEach(function (book, index) {
        if (book.isbn == req.body.isbn) {
            book.isbn = req.body.isbn,
                book.title = req.body.title,
                book.author = req.body.author,
                book.description = req.body.description,
                book.publish_date = req.body.publish_date;
        }
    });
    res.status(status).send(msg);
});
app.listen(port, function () { return console.log('server is working'); });
