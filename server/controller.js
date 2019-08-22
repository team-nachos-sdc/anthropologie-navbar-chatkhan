const Product = require('../database/index.js');

const getProducts = (req, res) => {
  Product.find()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send(err))
}

module.exports = getProducts;