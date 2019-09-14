const router = require('express').Router()
const {getProducts, 
  postProduct, 
  updateProduct, 
  deleteProduct } = require('./controller.js');


router
  .route('/search')
  .get(getProducts)
  .post(postProduct)
  .put(updateProduct)
  .delete(deleteProduct)

module.exports = router;