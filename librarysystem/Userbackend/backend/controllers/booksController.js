const asyncHandler = require('express-async-handler');
const multer = require('multer');
const path = require('path');
const Books = require('../Models/Books');


const registerbooks = asyncHandler(async(req,res) =>{
    const{filename:image} = req.file;
    const{bookname,author,publications,category,isbn,year,medium,note,keywords} = req.body;

    if(!bookname || !author || !publications || !category || isbn || !year || !medium || !note || !keywords || !image){
        res.status(400);
        throw new Error('Please enter all the fields');
    }

    const bookExists = await Books.findOne({isbn});
    if(bookExists){
        res.status(400);
        throw new Error('This book is exists');
        
    }

    
    try {
          const result = new Books({
                bookname,
                author,
                publications,
                category,
                isbn,
                year,
                medium,
                note,
                keywords,
                image,
            })
            await result.save();
            res.status(201).json(result);
        } catch (error) {
            console.log('Failed to insert data',error);
            res.status(500).json({error:'Failed to intert data'});
        }
    
})

module.exports = {registerbooks};