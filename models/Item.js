var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: String,
  likes: Number,
  check: Boolean
});

module.exports = mongoose.model('Item', ItemSchema);