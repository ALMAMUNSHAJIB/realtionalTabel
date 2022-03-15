const router = require('express').Router();
const Author = require('../models/Author');


router.post('/', async (req, res) => {
    try {
       //validate req.body data before saving
       const author = new Author(req.body);
       await author.save();
       res.status(201).json({success:true, data: author });
 
    } catch (err) {
       res.status(400).json({success: false, message:err.message});
    }
 });

module.exports = router;
