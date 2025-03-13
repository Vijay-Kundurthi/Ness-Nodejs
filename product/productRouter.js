const express = require('express');
const router = express.Router();

const {
    getAllProducts, 
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
} = require('./productController')

// middleware to add the MongoDB collection to the request
router.use((req, res, next) =>{
    req.collection = req.app.locals.collection;
    next();
});

// Routes for CRUD operations
router.post('/', createProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = (collection) => {
    return router;
  };