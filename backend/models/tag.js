const mongoose = require('mongoose')

//slug means all query  ex. new arrival == new-arrrival
const tagSchema = new mongoose.Schema({

  name:{
    type:String,
    trim:true,
    required:true,
    maxlength:32,
  },
   slug:{
    type:String,
    unique:true,
    index:true,
  },

},{timestamps:true})


module.exports = mongoose.model('Tag',tagSchema);