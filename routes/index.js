// aqui importo el controlador y exporto el router
const express = require('express');
const router = express.Router();

// Import controller functions
const containerFunctions = require('../controllers/products.controller');

// Import Multer middleware
const multerMiddleware = require('../middlewares/multer');


/**
 * This list all the products
 */
router.get('/productos', containerFunctions.getAll);

/**
 * This return a random product
 */
router.get('/productoRandom', containerFunctions.getRandom);

/**
 * This return a product by id
 */
router.get('/productos/:id', containerFunctions.getById);

/**
 * This save a new product 
 */
router.post('/productos', multerMiddleware.single('productPicture') ,containerFunctions.save);

/**
 * This update an existent product 
 */
router.put('/productos/:id', containerFunctions.update);

/**
 * This delete an existent product by its id 
 */
router.delete('/productos/:id', containerFunctions.deleteById);


module.exports = router;