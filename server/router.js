const router = require('express').Router()
const {getProducts,
  getAProduct, 
  postProduct, 
  updateProduct, 
  deleteProduct } = require('./controller.js');


router
  .route('/search')
  .get(getProducts)
  .post(postProduct)
  .put(updateProduct)
  .delete(deleteProduct)

router
  .route('/find')
  .get(getAProduct)

module.exports = router;