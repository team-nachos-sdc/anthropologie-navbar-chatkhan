const Product = require('../database/index.js');
const ProductPost = require('../database/postModel.js');

const getProducts = (req, res) => {
  Product.find()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send(err))
}

const getAProduct = (req, res) => {
  let { query } = req
  Product.findOne(query)
  .then(data => res.status(200).send(data))
  .catch((err) => res.status(400).send(err))
}

const postProduct = (req, res) => {
  let { id, color, category, title, image1, image2 } = req.body;
  Product.create({id, color, category, title, image1, image2})
  .then((data) => res.status(201).send('POST'))
  .catch(err => res.status(401).send(err))
}

const updateProduct = (req, res) => {
    console.log(req.body);
    let { color, id } = req.body;
    Product.findOneAndUpdate({id}, { color })
    .then((data) => res.status(202).send('Successfully updated!'))
    .catch((err) => res.status(402).send(err))
}

const deleteProduct = (req, res) => {
    let { color } = req.body;
    Product.deleteOne({ color })
    .then((data) => res.status(203).send('Successfully deleted!'))
    .catch((err) => res.status(403).send(err))
}

const getSqlProduct = (req, res) => {
    console.log(req.query);
    let { query } = req
    ProductPost.findAll({ where: query })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send('Unable to get record from PostgreSQL', err))
}

const postSqlProduct = (req, res) => {
    let { body } = req;
    ProductPost.create(body)
    .then(() => res.status(201).send('Posted to PostgreSQL'))
    .catch(() => res.status(401).send('Unable to post to PostgreSQL'))
}

const updateSqlProduct = (req, res) => {
    console.log(req.params);
    console.log(req.body);
    console.log(req.query);
    let { body } = req;
    let { query } = req;
    ProductPost.update(body, { where: query })
    .then((response) => res.status(202).send(response))
    .catch((err) => res.status(402).send(err))
}

const deleteSqlProduct = (req, res) => {
    let { query } = req;
    console.log(req.query);
    ProductPost.destroy({ where: query })
    .then(() => res.status(203).send('Delete from PostgreSQL successful'))
    .catch((err) => res.status(403).send(err))
}

module.exports = {getProducts,
 getAProduct,
 postProduct,
 updateProduct,
 deleteProduct,
 getSqlProduct,
 postSqlProduct,
 updateSqlProduct,
 deleteSqlProduct}