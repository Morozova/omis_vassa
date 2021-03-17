import { IBook } from './IBook'

const express = require('express')
const app = express()

let port = 3000

let books:IBook[] = [
    {
    isbn:'isbn1',
    title:'title 1',
    author:'author 1',
    description:'description 1',
    publish_date:'publish_date 1'
},
{
    isbn:'isbn2',
    title:'title 2',
    author:'author 2',
    description:'description 2',
    publish_date:'publish_date 2'
},
{
    isbn:'isbn3',
    title:'title 3',
    author:'author 3',
    description:'description 3',
    publish_date:'publish_date 3'
}
]

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/books', function (req, res) {
    res.send(books)
})

app.delete('/books/delete/:isbn', function (req, res) {
    console.log(req.params.isbn)

    let msg = 'Book is not found'

    books.forEach( (book, index) => {
        if (book.isbn == req.params.isbn){
            books.splice(index, 1)
            msg = 'Book successfully deleted'
        }
    })

    res.send(msg)
})

app.listen(port, () => console.log('server is working'))