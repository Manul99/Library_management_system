
const express = require('express');
const multer = require('multer');
const path = require('path');
const { registerbooks } = require('../controllers/booksController');
const router = express.Router();

const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,'public/Images')
    },
    filename:(req,file,cb) =>{
        cb(null,file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({
    storage: storage
})

router.post('/',upload.single('file'),registerbooks);

module.exports = router;