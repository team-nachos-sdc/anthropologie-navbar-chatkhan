const Product = require('../database/index.js');

const getProducts = (req, res) => {
  Product.find()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send(err))
}

const postProduct = (req, res) => {
  let { color, category, title, image1, image2 } = req.body;
  Product.create({color, category, title, image1, image2})
  .then((data) => res.status(201).send('POST'))
  .catch(err => res.status(401).send(err))
}

const updateProduct = (req, res) => {
    console.log(req.body);
    let { color, id } = req.body;
    Product.findByIdAndUpdate(id, { color })
    .then((data) => res.status(202).send('Successfully updated!'))
    .catch((err) => res.status(402).send(err))
}

const deleteProduct = (req, res) => {
    let { color } = req.body;
    Product.deleteOne({ color })
    .then((data) => res.status(203).send('Successfully deleted!'))
    .catch((err) => res.status(403).send(err))
}

module.exports = {getProducts,
 postProduct,
 updateProduct,
 deleteProduct}