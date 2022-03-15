const express = require("express");
const mongoose = require('mongoose');

const app = express();


app.use(express.json());

const mongo = 'mongodb://localhost/datarel';

//database connection
mongoose.connect(mongo, {useNewUrlParser: true})
    .then(() => {
        console.log('Database connected!!!');
    }).catch((err) => console.log(err));

   
const authorRouter = require('./routes/author');
const bookRouter = require('./routes/book');
app.use('/addPublisher', authorRouter);
app.use('/addBook', bookRouter)



app.listen(3400, () => {
    console.log(`Server is runing`);''
});