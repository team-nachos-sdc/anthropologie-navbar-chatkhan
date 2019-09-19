const router = require('express').Router()
const {getProducts,
  getAProduct, 
  postProduct, 
  updateProduct, 
  deleteProduct,
  getSqlProduct,
  postSqlProduct,
  updateSqlProduct,
  deleteSqlProduct } = require('./controller.js');


router
  .route('/search')
  .get(getProducts)
  .post(postProduct)
  .put(updateProduct)
  .delete(deleteProduct)

router
  .route('/find')
  .get(getAProduct)

router
  .route('/posty')
  .get(getSqlProduct)
  .post(postSqlProduct)
  .put(updateSqlProduct)
  .delete(deleteSqlProduct)

module.exports = router;