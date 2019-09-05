const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/anthro', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('DB connected')
});

const productSchema = new mongoose.Schema({
  category: String,
  color: String,
  title: String,
  image1: String,
  image2: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
