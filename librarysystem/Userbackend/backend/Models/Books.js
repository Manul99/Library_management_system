const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
    bookname:{type:String,required:true},
    author:{type:String, required:true},
    publications:{type:String, required:true},
    category:{type:String, required:true},
    isbn:{type:String, required:true,unique:true},
    year:{type:String,required:true},
    medium:{type:String,required:true},
    note:{type:String, required:true},
    keywords:{type:String,required:true},
    image:{type:String,required:true},
});

const Books = mongoose.model('books',booksSchema);

module.exports = Books;