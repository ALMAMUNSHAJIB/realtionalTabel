const mongoose= require('mongoose');
const {Schema} = require('mongoose');

const bookSchema = new Schema({
   name: String,
   publishYear: Number,
   author: {
      type: Schema.Types.ObjectId,
      ref: 'Author',
     
   }
},
{timestamps: true});

module.exports = mongoose.model('Book', bookSchema);