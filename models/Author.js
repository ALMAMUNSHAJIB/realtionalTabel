const {Schema, model} = require('mongoose');

const authorSchema = new Schema({
   name: String,
   location: String,
   authorBook: [{
      type: Schema.Types.ObjectId,
      ref: 'Book'
   }]
},
{timestamps: true});

module.exports = model('Author', authorSchema);