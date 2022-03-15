const router = require('express').Router();
const Book = require('../models/Book');
const Author = require('../models/Author');


router.post('/', async (req, res) => {
    try {
       
  
        const book = new Book(req.body);
        await book.save();
        const author = await Author.findOne()
        author.authorBook.push(book);
        await author.save();
        res.status(200).json({success:true, data: book })
  
     } catch (err) {
         console.log(err);
        res.status(400).json({success: false, message:err.message})
     }
 });

module.exports = router;
